import missionNodes from "./data.js";

// Ensure cytoscape-dagre layout extension and cytoscape-svg are registered
if (window.cytoscape) {
    if (window.cytoscapeDagre) {
        try { window.cytoscape.use(window.cytoscapeDagre); } catch (e) {}
    }
    if (window.cytoscapeSvg) {
        try { window.cytoscape.use(window.cytoscapeSvg); } catch (e) {}
    }
}

// ---------------------------------------------------------------------------
// Data Lookups
// ---------------------------------------------------------------------------
const nodeMap = new Map();
const reverseDepsMap = new Map();

missionNodes.forEach(node => {
    const id = node.id || node.name;
    nodeMap.set(id, node);
    if (node.name && node.name !== id) nodeMap.set(node.name, node);
    reverseDepsMap.set(id, []);
});

missionNodes.forEach(node => {
    const nodeId = node.id || node.name;
    (node.requirements || []).forEach(req => {
        if (reverseDepsMap.has(req.source)) {
            reverseDepsMap.get(req.source).push({
                dependentId: nodeId,
                dependentName: nodeId,
                inverted: req.inverted
            });
        }
    });
});

const referencedAsSource = new Set();
const cyContainer = document.getElementById('cy');
const treeViewport = document.getElementById('treeViewport');

function typeBadgeFor(node) {
    if (node.kind === 'gate') {
        return node.gateType === 'Or' ? 'badge-gate-or' : 'badge-gate-and';
    }
    if (node.type === 'MissionItemList') return 'badge-list';
    if (node.type === 'MissionItemFertileGround') return 'badge-fertile';
    if (node.type === 'DLCMissionAddon') return 'badge-dlc';
    return 'badge-sequencer';
}

function typeLabelFor(node) {
    if (node.kind === 'gate') return node.gateType === 'Or' ? 'OR Gate' : 'AND Gate';
    return (node.type || '').replace('MissionItem', '');
}

// ---------------------------------------------------------------------------
// Critical Path Graph & Unlock Logic Graph Edges
// ---------------------------------------------------------------------------
function criticalPathChildren(node) {
    const out = [];
    if (node.kind === 'item') {
        (node.requirements || []).forEach(r => {
            if (r.inverted) return; // stay-active / inverted condition, NOT a prerequisite
            const target = nodeMap.get(r.source);
            if (target) out.push({ target, tag: 'required', label: 'Prerequisite' });
        });
        const c = node.completion;
        if (c && c.rule === 'internal-signal') {
            const multi = c.triggers.length > 1;
            c.triggers.forEach(name => {
                const target = nodeMap.get(name);
                if (target) out.push({
                    target,
                    tag: 'completes',
                    label: multi ? `Completes this (1 of ${c.triggers.length})` : 'Completes this'
                });
            });
        }
    } else if (node.kind === 'gate') {
        const multi = node.requirements.length > 1;
        const isOr = node.gateType === 'Or';
        node.requirements.forEach(r => {
            if (r.inverted) return; // ignore inverted condition
            const target = nodeMap.get(r.source);
            if (target) out.push({
                target,
                tag: (isOr && multi) ? 'alternative' : 'required',
                label: (isOr && multi) ? `Or input (1 of ${node.requirements.length})` : 'And input'
            });
        });
    }
    return out;
}

// Nodes that participate in at least one CRITICAL-mode edge (as either end).
// Needed because "connected" scope otherwise checks raw `requirements`
// (inverted included), while critical mode drops inverted edges entirely --
// a node whose only requirement is inverted (e.g. AcrobaticTutorials, which
// requires ACT2 NOT completed) passes the generic connectivity check but
// renders with zero edges in critical mode, looking like a stray island.
const criticalConnectedIds = new Set();
missionNodes.forEach(node => {
    const children = criticalPathChildren(node);
    if (children.length > 0) {
        criticalConnectedIds.add(node.id || node.name);
        children.forEach(c => criticalConnectedIds.add(c.target.id || c.target.name));
    }
});

function unconfirmedBadge(node) {
    if (node.kind !== 'item' || !node.completion) return '';
    const rule = node.completion.rule;
    if (rule === 'default-unknown') {
        return '<span class="req-condition-tag cond-unconfirmed" title="No internal completion signal wired -- presumably all children">unconfirmed</span>';
    }
    if (rule === 'not-decoded') {
        return '<span class="req-condition-tag cond-unconfirmed">not decoded</span>';
    }
    return '';
}

// ---------------------------------------------------------------------------
// Graph View (Cytoscape + Dagre - Zero Repetition, Multi In & Out)
// ---------------------------------------------------------------------------
let cy = null;
let currentMode = 'critical'; // 'critical' | 'unlock'
let currentScope = 'main';    // 'main' (POP0_ROOT upstream) by default
function getUpstreamNodeIds(startId, mode) {
    const visited = new Set();
    const queue = [startId];
    if (nodeMap.has(startId)) visited.add(startId);

    while (queue.length > 0) {
        const currId = queue.shift();
        const node = nodeMap.get(currId);
        if (!node) continue;

        if (mode === 'critical') {
            if (node.kind === 'item') {
                (node.requirements || []).forEach(r => {
                    if (!r.inverted && nodeMap.has(r.source) && !visited.has(r.source)) {
                        visited.add(r.source);
                        queue.push(r.source);
                    }
                });
                if (node.completion && node.completion.rule === 'internal-signal') {
                    node.completion.triggers.forEach(t => {
                        if (nodeMap.has(t) && !visited.has(t)) {
                            visited.add(t);
                            queue.push(t);
                        }
                    });
                }
            } else if (node.kind === 'gate') {
                (node.requirements || []).forEach(r => {
                    if (!r.inverted && nodeMap.has(r.source) && !visited.has(r.source)) {
                        visited.add(r.source);
                        queue.push(r.source);
                    }
                });
            }
        } else {
            // Unlock Logic mode: all requirements
            (node.requirements || []).forEach(r => {
                if (nodeMap.has(r.source) && !visited.has(r.source)) {
                    visited.add(r.source);
                    queue.push(r.source);
                }
            });
        }
    }
    return visited;
}

function filterNodesByScope(scope, mode) {
    if (scope === 'all') return missionNodes;

    let targetRoot = 'POP0_ROOT';
    if (scope === 'act1') targetRoot = 'ACT1';
    else if (scope === 'act2') targetRoot = 'ACT2';
    else if (scope === 'act3') targetRoot = 'ACT3';
    else if (scope === 'dlc') targetRoot = 'DLC_Root';
    else if (scope === 'main' || scope === 'connected') targetRoot = 'POP0_ROOT';
    else if (nodeMap.has(scope)) targetRoot = scope; // Fertile Ground level or specific node

    const allowedIds = getUpstreamNodeIds(targetRoot, mode);
    return missionNodes.filter(node => allowedIds.has(node.id || node.name));
}

function getGraphElements(mode, scope) {
    const nodes = filterNodesByScope(scope, mode);
    const visibleIds = new Set(nodes.map(n => n.id || n.name));
    const elements = [];

    // Add unique nodes (each node exists EXACTLY once)
    nodes.forEach(node => {
        const id = node.id || node.name;
        elements.push({
            group: 'nodes',
            data: {
                id: id,
                label: node.displayName || id,
                subLabel: id,
                kind: node.kind,
                type: node.type,
                gateType: node.gateType,
                owner: node.owner
            }
        });
    });

    // Add connecting edges based on mode
    if (mode === 'critical') {
        nodes.forEach(node => {
            const targetId = node.id || node.name;

            if (node.kind === 'item') {
                // Direct prerequisites only (inverted conditions are excluded)
                (node.requirements || []).forEach((r, idx) => {
                    if (r.inverted) return; // stay-active condition, not a prerequisite
                    if (!visibleIds.has(r.source)) return;
                    elements.push({
                        group: 'edges',
                        data: {
                            id: `cp_req_${r.source}_${targetId}_${idx}`,
                            source: r.source,
                            target: targetId,
                            edgeType: 'required'
                        },
                        classes: 'edge-required'
                    });
                });

                // Completed by internal signals (e.g. ACT3 to POP0_ROOT) -> connected by a purple line
                const c = node.completion;
                if (c && c.rule === 'internal-signal') {
                    c.triggers.forEach((triggerId, idx) => {
                        if (!visibleIds.has(triggerId)) return;
                        elements.push({
                            group: 'edges',
                            data: {
                                id: `cp_comp_${triggerId}_${targetId}_${idx}`,
                                source: triggerId,
                                target: targetId,
                                edgeType: 'completes'
                            },
                            classes: 'edge-completes'
                        });
                    });
                }
            } else if (node.kind === 'gate') {
                const isOr = node.gateType === 'Or';
                const multi = node.requirements.length > 1;
                node.requirements.forEach((r, idx) => {
                    if (r.inverted) return; // stay-active condition, not a prerequisite
                    if (!visibleIds.has(r.source)) return;
                    elements.push({
                        group: 'edges',
                        data: {
                            id: `cp_gate_${r.source}_${targetId}_${idx}`,
                            source: r.source,
                            target: targetId,
                            edgeType: (isOr && multi) ? 'alternative' : 'required'
                        },
                        classes: (isOr && multi) ? 'edge-alternative' : 'edge-required'
                    });
                });
            }
        });
    } else {
        // Unlock Logic mode: all requirements
        nodes.forEach(node => {
            const targetId = node.id || node.name;
            (node.requirements || []).forEach((r, idx) => {
                if (!visibleIds.has(r.source)) return;
                elements.push({
                    group: 'edges',
                    data: {
                        id: `ul_${r.source}_${targetId}_${idx}`,
                        source: r.source,
                        target: targetId,
                        edgeType: r.inverted ? 'inverted' : 'direct'
                    },
                    classes: r.inverted ? 'edge-inverted' : 'edge-direct'
                });
            });
        });
    }

    return elements;
}

const cyStyle = [
    {
        selector: 'node',
        style: {
            'shape': 'round-rectangle',
            'width': 'label',
            'height': '44px',
            'padding': '14px',
            'background-color': '#182234',
            'border-width': 2,
            'border-color': '#475569',
            'label': 'data(label)',
            'color': '#f8fafc',
            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            'font-size': '13px',
            'font-weight': 600,
            'text-valign': 'center',
            'text-halign': 'center',
            'text-max-width': '260px',
            'text-wrap': 'ellipsis',
            'z-index': 20,
            'transition-property': 'background-color, border-color, opacity, border-width',
            'transition-duration': '0.15s'
        }
    },
    {
        selector: 'node[type = "MissionItemList"]',
        style: {
            'border-color': '#c084fc',
            'border-width': 2.5,
            'background-color': '#281745'
        }
    },
    {
        selector: 'node[type = "MissionItemSceneSequencer"]',
        style: {
            'border-color': '#38bdf8',
            'border-width': 2.5,
            'background-color': '#0d2847'
        }
    },
    {
        selector: 'node[type = "MissionItemFertileGround"]',
        style: {
            'border-color': '#34d399',
            'border-width': 2.5,
            'background-color': '#092e20'
        }
    },
    {
        selector: 'node[type = "DLCMissionAddon"]',
        style: {
            'border-color': '#fb7185',
            'border-width': 2.5,
            'background-color': '#3b121e'
        }
    },
    {
        selector: 'node[kind = "gate"]',
        style: {
            'border-style': 'dashed',
            'border-color': '#94a3b8',
            'border-width': 2,
            'background-color': '#1e293b',
            'shape': 'round-diamond',
            'height': '38px',
            'padding': '12px'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 2.5,
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 1.1,
            'line-color': '#475569',
            'target-arrow-color': '#475569',
            'opacity': 0.7,
            'z-index': 1,
            'transition-property': 'line-color, target-arrow-color, width, opacity',
            'transition-duration': '0.15s'
        }
    },
    {
        selector: 'edge.edge-required, edge.edge-direct',
        style: {
            'line-color': '#34d399',
            'target-arrow-color': '#34d399'
        }
    },
    {
        selector: 'edge.edge-alternative',
        style: {
            'line-color': '#fbbf24',
            'target-arrow-color': '#fbbf24',
            'line-style': 'dashed'
        }
    },
    {
        selector: 'edge.edge-completes',
        style: {
            'line-color': '#c084fc',
            'target-arrow-color': '#c084fc',
            'width': 2.5
        }
    },
    {
        selector: 'edge.edge-inverted',
        style: {
            'line-color': '#ef4444',
            'target-arrow-color': '#ef4444',
            'line-style': 'dashed',
            'width': 2.5
        }
    },
    {
        selector: 'edge.edge-hidden',
        style: {
            'display': 'none'
        }
    },

    // ------------------------------------------------------------------
    // Selection highlighting
    //
    // Colors below are intentionally literal hex, matching styles.css's
    // --accent-cyan/--accent-orange/--accent-white/--accent-rose one for
    // one -- Cytoscape's style engine renders to canvas, not through the
    // page's CSS cascade, so var(--...) isn't resolvable here. Keep these
    // two in sync by hand if either changes.
    //
    // Node TYPE color (above) and EDGE TYPE color (above) are a separate
    // visual channel from SELECTION STATE -- so selection state uses its
    // own palette that doesn't reuse any type/edge hue, or the two
    // meanings collide on screen (a highlighted FertileGround node and a
    // highlighted "incoming" node looked identical when both used green,
    // same for List/"outgoing" both using purple, and Sequencer/"focus"
    // both using blue). Selection state here is always white/cyan/orange,
    // which appear nowhere else in this stylesheet:
    //   focus (the selected node itself)         -> white
    //   incoming (upstream of selection)          -> cyan
    //   outgoing (downstream of selection)        -> orange
    // Edges keep their OWN type color when highlighted (just thicker),
    // since an edge's type (required/alternative/completes/inverted) is
    // what the person is actually trying to trace -- it should never
    // switch color just because of which side of the selection it's on.
    // ------------------------------------------------------------------
    {
        selector: 'node.highlight-focus',
        style: {
            'border-color': '#f8fafc',
            'border-width': 4,
            'shadow-blur': 18,
            'shadow-color': '#f8fafc',
            'shadow-opacity': 0.9,
            'z-index': 100
        }
    },
    {
        selector: 'node.highlight-incoming',
        style: {
            'border-color': '#22d3ee',
            'border-width': 3,
            'shadow-blur': 12,
            'shadow-color': '#22d3ee',
            'shadow-opacity': 0.75,
            'z-index': 90
        }
    },
    {
        selector: 'node.highlight-outgoing',
        style: {
            'border-color': '#fb923c',
            'border-width': 3,
            'shadow-blur': 12,
            'shadow-color': '#fb923c',
            'shadow-opacity': 0.75,
            'z-index': 90
        }
    },
    // Every edge class gets its own highlight-combo rule so it keeps its
    // own type color (just thicker + raised z-index) instead of falling
    // through to a generic color that would misrepresent its type.
    {
        selector: 'edge.edge-required.highlight-incoming, edge.edge-required.highlight-outgoing, edge.edge-direct.highlight-incoming, edge.edge-direct.highlight-outgoing',
        style: { 'width': 4, 'z-index': 999, 'opacity': 1 }
    },
    {
        selector: 'edge.edge-alternative.highlight-incoming, edge.edge-alternative.highlight-outgoing',
        style: { 'width': 3.5, 'z-index': 999, 'opacity': 1 }
    },
    {
        selector: 'edge.edge-completes.highlight-incoming, edge.edge-completes.highlight-outgoing',
        style: { 'width': 4, 'z-index': 999, 'opacity': 1 }
    },
    {
        selector: 'edge.edge-inverted.highlight-incoming, edge.edge-inverted.highlight-outgoing',
        style: { 'width': 4, 'z-index': 999, 'opacity': 1 }
    },
    // Defensive fallback only -- every edge class actually in use above has
    // its own rule now, so this should never be the one that fires. Kept
    // neutral (not a type/edge hue) in case a future edge class is added
    // without its own combo rule.
    {
        selector: 'edge.highlight-incoming, edge.highlight-outgoing',
        style: {
            'width': 4,
            'line-color': '#f8fafc',
            'target-arrow-color': '#f8fafc',
            'z-index': 999,
            'opacity': 1
        }
    },
    {
        selector: 'node.dimmed',
        style: {
            'opacity': 0.35,
            'z-index': 5
        }
    },
    {
        selector: 'edge.dimmed',
        style: {
            'opacity': 0.12,
            'z-index': 0
        }
    }
];

// Only the currently-selected node should be draggable -- everything else
// is ungrabified by default (see renderGraph) and stays that way until it
// becomes the selection. We track the one grabbable node so we can revert
// it when selection moves elsewhere.
let grabbableNode = null;

// ---------------------------------------------------------------------------
// Offscreen indicators
//
// A selected node's highlighted neighborhood can run well outside the
// current viewport -- some nodes have up to ~27 connections in Unlock
// Logic mode -- so hunting for them by dragging doesn't scale. Every
// highlighted node currently outside the visible canvas gets a small arrow
// pinned to the nearest edge, pointing toward it and colored to match its
// relationship (see the selection-state legend). Clicking one fits the
// view to show the selected node and that target together.
// ---------------------------------------------------------------------------
let offscreenOverlay = null;
let highlightedForIndicators = []; // [{ node: cyNode, relation: 'focus'|'incoming'|'outgoing' }]

const OFFSCREEN_EDGE_INSET = 12;  // px from the container edge
const OFFSCREEN_MAX_SHOWN = 9;    // individual arrows before collapsing into "+N more"

// Indicators sharing an edge get pushed apart along it if they'd overlap.
// If no indicators overlap, they remain exactly at their calculated connector line intersections.
function declutterIndicators(list, w, h) {
    const VERT_GAP = 32;
    const HORIZ_GAP = 120;
    const padY = 24;
    const padX = 85;

    ['left', 'right'].forEach(edge => {
        const col = list.filter(i => i.edge === edge).sort((a, b) => a.screenY - b.screenY);
        if (col.length <= 1) return;
        let overlap = false;
        for (let i = 1; i < col.length; i++) {
            if (col[i].screenY - col[i - 1].screenY < VERT_GAP) {
                overlap = true;
                break;
            }
        }
        if (!overlap) return;

        for (let i = 1; i < col.length; i++) {
            if (col[i].screenY - col[i - 1].screenY < VERT_GAP) {
                col[i].screenY = col[i - 1].screenY + VERT_GAP;
            }
        }
        const overflowBottom = col[col.length - 1].screenY - (h - padY);
        if (overflowBottom > 0) {
            for (let i = col.length - 1; i >= 0; i--) {
                col[i].screenY -= overflowBottom;
            }
            for (let i = 0; i < col.length; i++) {
                if (col[i].screenY < padY + i * VERT_GAP) {
                    col[i].screenY = padY + i * VERT_GAP;
                }
            }
        }
    });

    ['top', 'bottom'].forEach(edge => {
        const row = list.filter(i => i.edge === edge).sort((a, b) => a.screenX - b.screenX);
        if (row.length <= 1) return;
        let overlap = false;
        for (let i = 1; i < row.length; i++) {
            if (row[i].screenX - row[i - 1].screenX < HORIZ_GAP) {
                overlap = true;
                break;
            }
        }
        if (!overlap) return;

        for (let i = 1; i < row.length; i++) {
            if (row[i].screenX - row[i - 1].screenX < HORIZ_GAP) {
                row[i].screenX = row[i - 1].screenX + HORIZ_GAP;
            }
        }
        const overflowRight = row[row.length - 1].screenX - (w - padX);
        if (overflowRight > 0) {
            for (let i = row.length - 1; i >= 0; i--) {
                row[i].screenX -= overflowRight;
            }
            for (let i = 0; i < row.length; i++) {
                if (row[i].screenX < padX + i * HORIZ_GAP) {
                    row[i].screenX = padX + i * HORIZ_GAP;
                }
            }
        }
    });
}

function updateOffscreenIndicators() {
    if (!cy || !offscreenOverlay) return;
    offscreenOverlay.innerHTML = '';
    if (!highlightedForIndicators.length) return;

    const w = cy.width();
    const h = cy.height();
    if (w <= 0 || h <= 0) return;

    const minX = OFFSCREEN_EDGE_INSET;
    const maxX = w - OFFSCREEN_EDGE_INSET;
    const minY = OFFSCREEN_EDGE_INSET;
    const maxY = h - OFFSCREEN_EDGE_INSET;
    const cxp = w / 2;
    const cyp = h / 2;

    const focusEntry = highlightedForIndicators.find(h => h.relation === 'focus');
    const focusNode = focusEntry ? focusEntry.node : null;
    let focusPos = null;
    let isFocusOnScreen = false;
    if (focusNode) {
        focusPos = focusNode.renderedPosition();
        isFocusOnScreen = focusPos.x >= 0 && focusPos.x <= w && focusPos.y >= 0 && focusPos.y <= h;
    }

    const offscreen = [];
    highlightedForIndicators.forEach(({ node, relation }) => {
        const pos = node.renderedPosition();
        // Node is already visible inside canvas viewport
        if (pos.x >= 0 && pos.x <= w && pos.y >= 0 && pos.y <= h) return;

        // Cast ray from focus node along connector line if focus node is on screen,
        // otherwise cast ray from viewport center towards offscreen target.
        let originX, originY;
        if (relation !== 'focus' && isFocusOnScreen && focusPos) {
            originX = Math.max(minX, Math.min(maxX, focusPos.x));
            originY = Math.max(minY, Math.min(maxY, focusPos.y));
        } else {
            originX = cxp;
            originY = cyp;
        }

        const dx = pos.x - originX;
        const dy = pos.y - originY;
        if (dx === 0 && dy === 0) return;

        let tX = Infinity;
        if (dx > 0) tX = (maxX - originX) / dx;
        else if (dx < 0) tX = (minX - originX) / dx;

        let tY = Infinity;
        if (dy > 0) tY = (maxY - originY) / dy;
        else if (dy < 0) tY = (minY - originY) / dy;

        const t = Math.min(tX, tY);
        let screenX, screenY, edge;
        if (t === tX) {
            edge = dx > 0 ? 'right' : 'left';
            screenX = dx > 0 ? maxX : minX;
            screenY = Math.max(minY, Math.min(maxY, originY + t * dy));
        } else {
            edge = dy > 0 ? 'bottom' : 'top';
            screenX = Math.max(minX, Math.min(maxX, originX + t * dx));
            screenY = dy > 0 ? maxY : minY;
        }

        // Clamp coordinates away from extreme container corners to prevent badge clipping
        if (edge === 'left' || edge === 'right') {
            screenY = Math.max(20, Math.min(h - 20, screenY));
        } else {
            screenX = Math.max(90, Math.min(w - 90, screenX));
        }

        offscreen.push({
            node,
            relation,
            dist: Math.hypot(pos.x - (focusPos ? focusPos.x : cxp), pos.y - (focusPos ? focusPos.y : cyp)),
            screenX,
            screenY,
            edge,
            angle: Math.atan2(dy, dx) * 180 / Math.PI
        });
    });
    if (!offscreen.length) return;

    // Closest-first: the nodes nearest the viewport are shown first
    offscreen.sort((a, b) => a.dist - b.dist);
    const shown = offscreen.slice(0, OFFSCREEN_MAX_SHOWN);
    const overflow = offscreen.slice(OFFSCREEN_MAX_SHOWN);
    declutterIndicators(shown, w, h);

    shown.forEach(ind => {
        const el = document.createElement('div');
        el.className = `offscreen-indicator offscreen-${ind.relation} offscreen-edge-${ind.edge}`;
        el.style.left = `${ind.screenX}px`;
        el.style.top = `${ind.screenY}px`;
        el.title = ind.node.data('label') || ind.node.id();
        el.innerHTML = `<span class="offscreen-arrow" style="--arrow-angle:${ind.angle}deg;"></span><span class="offscreen-label">${ind.node.data('label') || ind.node.id()}</span>`;
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            selectNode(ind.node.id(), true, true, false);
        });
        offscreenOverlay.appendChild(el);
    });

    if (overflow.length > 0) {
        const el = document.createElement('div');
        el.className = 'offscreen-indicator offscreen-more';
        el.style.left = `${w - OFFSCREEN_EDGE_INSET}px`;
        el.style.top = `${h - OFFSCREEN_EDGE_INSET}px`;
        el.title = `${overflow.length} more offscreen -- click to fit all`;
        el.innerText = `+${overflow.length}`;
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const all = highlightedForIndicators.reduce((col, h) => col.union(h.node), cy.collection());
            cy.stop();
            cy.animate({ fit: { eles: all, padding: 60 } }, { duration: 300 });
        });
        offscreenOverlay.appendChild(el);
    }
}

function highlightNodeNeighborhood(cyNode) {
    if (!cy) return;
    // Declared outside the batch() callback -- used again afterward to
    // build the offscreen-indicator list, so they can't be block-scoped
    // to just that callback.
    const inEdges = cyNode.incomers('edge');
    const inNodes = cyNode.incomers('node');
    const outEdges = cyNode.outgoers('edge');
    const outNodes = cyNode.outgoers('node');

    cy.batch(() => {
        cy.elements().removeClass('highlight-focus highlight-incoming highlight-outgoing dimmed');

        const connected = cyNode.union(inEdges).union(inNodes).union(outEdges).union(outNodes);
        const other = cy.elements().difference(connected);

        other.addClass('dimmed');
        cyNode.addClass('highlight-focus');
        inEdges.addClass('highlight-incoming');
        inNodes.addClass('highlight-incoming');
        outEdges.addClass('highlight-outgoing');
        outNodes.addClass('highlight-outgoing');

        if (grabbableNode && grabbableNode.id() !== cyNode.id()) grabbableNode.ungrabify();
        cyNode.grabify();
        grabbableNode = cyNode;
    });

    highlightedForIndicators = [{ node: cyNode, relation: 'focus' }];
    inNodes.forEach(n => highlightedForIndicators.push({ node: n, relation: 'incoming' }));
    outNodes.forEach(n => highlightedForIndicators.push({ node: n, relation: 'outgoing' }));
    updateOffscreenIndicators();
}

function clearHighlighting() {
    if (!cy) return;
    cy.batch(() => {
        cy.elements().removeClass('highlight-focus highlight-incoming highlight-outgoing dimmed');
        if (grabbableNode) { grabbableNode.ungrabify(); grabbableNode = null; }
    });
    highlightedForIndicators = [];
    updateOffscreenIndicators();
}

// ---------------------------------------------------------------------------
// Layout caching
//
// dagre.layout() is the dominant cost of a graph redraw -- timed directly
// against this project's data via plain Node (no browser needed, dagre has
// no DOM dependency): ~840ms for the full 816-node "All Missions" scope vs
// ~37ms for the ~50-node POP0_ROOT critical-path subgraph. Recomputing that
// on every mode/scope switch is the main reason switching feels slow.
//
// Since the data is static for the life of the page, every (mode, scope)
// pair's layout only needs to be computed once. We cache the resulting node
// positions and, on a repeat visit to an already-seen combination, skip
// dagre entirely and just restore the cached positions. We also stop
// destroying and recreating the whole cytoscape instance on every redraw --
// that rebinds event listeners and reinitializes the renderer for no
// reason when only the element set is changing.
// ---------------------------------------------------------------------------
const layoutCache = new Map(); // `${mode}::${scope}` -> { elements, positions: Map<id,{x,y}> }

function ensureCyInstance() {
    if (cy) return;
    cy = cytoscape({
        container: cyContainer,
        elements: [],
        style: cyStyle,
        wheelSensitivity: 0.25,
        minZoom: 0.02,
        maxZoom: 3.5
    });

    cy.on('tap', 'node', (evt) => {
        selectNode(evt.target.id(), false, true);
    });
    cy.on('tap', (evt) => {
        if (evt.target === cy) clearHighlighting();
    });

    // Cursor feedback: Cytoscape's own stylesheet has no real "cursor"
    // property (the canvas is one DOM element, so per-shape CSS cursors
    // aren't a thing) -- it has to be driven by hand from interaction
    // events. 'grab' over the only-draggable (selected) node or empty
    // canvas (pannable), 'pointer' over any other node (click to select),
    // 'grabbing' while actually dragging or panning.
    cyContainer.style.cursor = 'grab';
    cy.on('mouseover', 'node', (evt) => {
        cyContainer.style.cursor = evt.target.grabbable() ? 'grab' : 'pointer';
    });
    cy.on('mouseout', 'node', () => {
        cyContainer.style.cursor = 'grab';
    });
    cy.on('grab', 'node', () => {
        cyContainer.style.cursor = 'grabbing';
    });
    cy.on('free', 'node', () => {
        cyContainer.style.cursor = 'grab';
    });
    cy.on('mousedown', (evt) => {
        if (evt.target === cy) cyContainer.style.cursor = 'grabbing';
    });
    cy.on('mouseup', (evt) => {
        if (evt.target === cy) cyContainer.style.cursor = 'grab';
    });

    offscreenOverlay = document.createElement('div');
    offscreenOverlay.id = 'offscreenOverlay';
    offscreenOverlay.className = 'offscreen-overlay';
    ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click', 'dblclick'].forEach(evtName => {
        offscreenOverlay.addEventListener(evtName, (e) => {
            e.stopPropagation();
        });
    });
    cyContainer.appendChild(offscreenOverlay);

    // Pan, zoom, and container resize can all change which highlighted
    // nodes are currently offscreen -- 'viewport' covers pan+zoom, and a
    // window resize needs cy.resize() first so cy.width()/height() reflect
    // the new container size before recomputing. Dragging or repositioning
    // nodes also adjusts their rendered positions relative to the screen.
    cy.on('viewport', updateOffscreenIndicators);
    cy.on('drag position', 'node', updateOffscreenIndicators);
    window.addEventListener('resize', () => {
        cy.resize();
        updateOffscreenIndicators();
    });
}

function centerAndSelectRoot(elements) {
    let targetRootId = 'POP0_ROOT';
    if (currentScope === 'act1') targetRootId = 'ACT1';
    else if (currentScope === 'act2') targetRootId = 'ACT2';
    else if (currentScope === 'act3') targetRootId = 'ACT3';
    else if (currentScope === 'dlc') targetRootId = 'DLC_Root';
    else if (nodeMap.has(currentScope)) targetRootId = currentScope;

    let rootNode = cy.getElementById(targetRootId);
    if (!rootNode || rootNode.length === 0) {
        rootNode = cy.getElementById('POP0_ROOT');
    }
    if (!rootNode || rootNode.length === 0) {
        if (elements.length > 0) rootNode = cy.getElementById(elements[0].data.id);
    }
    if (rootNode && rootNode.length > 0) {
        cy.zoom(0.85);
        cy.center(rootNode);
        selectNode(rootNode.id(), false, false);
    } else if (elements.length > 0) {
        cy.fit(undefined, 40);
    }
}

function renderGraph() {
    const key = `${currentMode}::${currentScope}`;
    const cached = layoutCache.get(key);
    const elements = cached ? cached.elements : getGraphElements(currentMode, currentScope);

    ensureCyInstance();
    // The old elements (including whichever one was grabbable, and whatever
    // was tracked for offscreen indicators) are about to be removed, so
    // those references are no longer valid.
    grabbableNode = null;
    highlightedForIndicators = [];
    if (offscreenOverlay) offscreenOverlay.innerHTML = '';

    cy.batch(() => {
        cy.elements().remove();
        if (cached) {
            // Reapply remembered positions directly -- no layout pass needed.
            cy.add(elements.map(el => el.group === 'nodes'
                ? { ...el, position: cached.positions.get(el.data.id) || { x: 0, y: 0 } }
                : el));
        } else {
            cy.add(elements);
        }
        // Only the selected node should ever be draggable (see
        // highlightNodeNeighborhood) -- everything starts locked.
        cy.nodes().ungrabify();
    });

    if (!cached) {
        // rankDir: 'BT' -- edges run prerequisite -> thing it unlocks, and
        // POP0_ROOT (and every scope's own root) has no outgoing edges in
        // this graph, so BT is what places it at rank 0 = the top, with
        // arrows reading upward into it. (Confirmed directly against dagre:
        // for a single connected component this puts the root's y exactly
        // at the minimum y in the layout; TB puts it at the maximum
        // instead.) nodeDimensionsIncludeLabels is required for dagre to
        // size ranks against each node's actual label-fitted width -- the
        // 'width':'label' style otherwise causes dagre to assume a tiny
        // placeholder box and under-space same-rank nodes, which is a large
        // part of what reads as "too many crossings" once labels overlap.
        const hasDagre = cytoscape('layout', 'dagre') !== undefined;
        const layoutConfig = hasDagre ? {
            name: 'dagre',
            rankDir: 'BT',
            nodeSep: 75,
            rankSep: 115,
            edgeSep: 25,
            ranker: 'network-simplex',
            acyclicer: 'greedy',
            edgeWeight: (edge) => edge.data('edgeType') === 'inverted' ? 1 : 4,
            padding: 40,
            spacingFactor: 1.1,
            nodeDimensionsIncludeLabels: true
        } : {
            name: 'breadthfirst',
            directed: true,
            padding: 40,
            spacingFactor: 1.3
        };

        cy.layout(layoutConfig).run();

        const positions = new Map();
        cy.nodes().forEach(n => positions.set(n.id(), { x: n.position('x'), y: n.position('y') }));
        layoutCache.set(key, { elements, positions });
    }

    syncInvertedEdgesVisibility();
    centerAndSelectRoot(elements);
}

// ---------------------------------------------------------------------------
// Legends & UI Controls
// ---------------------------------------------------------------------------
// Shared across both graph-mode legends: node-type colors and selection-
// state colors don't change between Critical Path / Unlock Logic, only the
// edge-type colors (listed per-mode below) do. Kept as one definition each
// so the two can never drift out of sync with each other or with cyStyle.
const NODE_TYPE_LEGEND = `
  <span class="legend-group-label">Node type</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-purple);"></span>List</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-blue);"></span>Sequencer</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-emerald);"></span>Fertile Ground</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-rose);"></span>DLC Addon</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px dashed var(--text-muted);"></span>AND/OR Gate</span>
`;
const SELECTION_LEGEND = `
  <span class="legend-group-label">Selected node</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-white);"></span>Selected (draggable)</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-cyan);"></span>Upstream of it</span>
  <span class="legend-item"><span class="legend-swatch" style="background:transparent; border:2px solid var(--accent-orange);"></span>Downstream of it</span>
  <span class="legend-item" style="opacity:0.6;">Unrelated (faded)</span>
`;

let showInvertedEdges = true;

function syncInvertedEdgesVisibility() {
    if (!cy) return;
    cy.batch(() => {
        const invertedEdges = cy.edges('.edge-inverted');
        if (showInvertedEdges) {
            invertedEdges.removeClass('edge-hidden');
        } else {
            invertedEdges.addClass('edge-hidden');
        }
    });
}

const LEGENDS = {
    critical: `
      <span class="legend-group-label" style="margin-left:0; padding-left:0; border-left:none;">Edges</span>
      <span class="legend-item"><span class="legend-swatch" style="background: var(--accent-emerald);"></span>Prerequisite</span>
      <span class="legend-item"><span class="legend-swatch" style="background: var(--accent-purple);"></span>Completes this</span>
      <span class="legend-item"><span class="legend-swatch" style="background: var(--accent-amber); border: 1px dashed var(--accent-amber);"></span>Alternative (pick 1 of N)</span>
      ${NODE_TYPE_LEGEND}
      ${SELECTION_LEGEND}
      <span class="legend-item" style="color: var(--text-muted); font-size: 0.7rem;">Click a node to highlight its connections</span>
    `,
    unlock: `
      <span class="legend-group-label" style="margin-left:0; padding-left:0; border-left:none;">Edges</span>
      <span class="legend-item"><span class="legend-swatch" style="background: var(--accent-emerald);"></span>Requires completed</span>
      <span class="legend-item"><span class="legend-swatch" style="background: var(--accent-red); border: 1px dashed var(--accent-red);"></span>Requires NOT completed (stay-active)</span>
      <label class="legend-toggle-item" title="Toggle inverted stay-active requirement edges">
        <input type="checkbox" id="toggleInvertedEdges" ${showInvertedEdges ? 'checked' : ''} />
        <span>Show stay-active lines</span>
      </label>
      ${NODE_TYPE_LEGEND}
      ${SELECTION_LEGEND}
      <span class="legend-item" style="color: var(--text-muted); font-size: 0.7rem;">Click a node to highlight its connections</span>
    `
};

function updateLegend() {
    const legendEl = document.getElementById('treeLegend');
    legendEl.innerHTML = LEGENDS[currentMode] || '';

    const toggle = document.getElementById('toggleInvertedEdges');
    if (toggle) {
        toggle.checked = showInvertedEdges;
        toggle.addEventListener('change', (e) => {
            showInvertedEdges = e.target.checked;
            syncInvertedEdgesVisibility();
        });
    }
}

// Mode Buttons
document.getElementById('modeCriticalBtn').addEventListener('click', () => {
    if (currentMode === 'critical') return;
    currentMode = 'critical';
    document.getElementById('modeCriticalBtn').classList.add('btn-active');
    document.getElementById('modeUnlockBtn').classList.remove('btn-active');
    updateLegend();
    renderGraph();
});

document.getElementById('modeUnlockBtn').addEventListener('click', () => {
    if (currentMode === 'unlock') return;
    currentMode = 'unlock';
    document.getElementById('modeUnlockBtn').classList.add('btn-active');
    document.getElementById('modeCriticalBtn').classList.remove('btn-active');
    updateLegend();
    renderGraph();
});

// Scope Filter
document.getElementById('scopeFilter').addEventListener('change', (e) => {
    currentScope = e.target.value;
    renderGraph();
});

// Fit to screen
document.getElementById('fitBtn').addEventListener('click', () => {
    if (cy) {
        cy.fit(undefined, 40);
    }
});

const zoomInBtn = document.getElementById('zoomInBtn');
if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
        if (cy) {
            cy.zoom({
                level: cy.zoom() * 1.3,
                renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 }
            });
        }
    });
}

const zoomOutBtn = document.getElementById('zoomOutBtn');
if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
        if (cy) {
            cy.zoom({
                level: cy.zoom() / 1.3,
                renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 }
            });
        }
    });
}

// ---------------------------------------------------------------------------
// Inspector & Selection Handler
// ---------------------------------------------------------------------------
function renderList(el, items, { emptyText, render }) {
    if (!items.length) {
        el.innerHTML = `<li class="empty-state">${emptyText}</li>`;
        return;
    }
    el.innerHTML = items.map(render).join('');
}

function clickableNode(targetId, colorVar, extraHtml = '') {
    const targetNode = nodeMap.get(targetId);
    const displayName = targetNode ? (targetNode.displayName || targetNode.id) : targetId;
    const showSubId = targetNode && targetNode.displayName && targetNode.displayName !== targetId;
    return `
      <li class="conn-item" onclick="selectNode('${targetId}')" style="cursor: pointer;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
          <strong style="color: var(${colorVar});">${displayName}</strong>
          ${extraHtml}
        </div>
        ${showSubId ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, monospace;">${targetId}</div>` : ''}
      </li>
    `;
}

function describeCompletion(node) {
    const c = node.completion;
    if (!c) return null;
    switch (c.rule) {
        case 'scene-termination':
            return {
                text: (node.seqModeName === 'Serial'
                    ? 'Completes once every scene below has fired its termination output, in order (Serial):'
                    : 'Completes once every scene below has fired its termination output, together (Concurrent):'),
                items: c.scenes.map(s => ({ label: s, clickable: false }))
            };
        case 'internal-signal':
            return {
                text: 'Completes the instant any ONE of these internal signals fires (first one wins, not an AND of all of them):',
                items: c.triggers.map(t => ({ label: t, clickable: nodeMap.has(t) }))
            };
        case 'default-unknown':
            return {
                text: 'No internal completion signal is wired on this item. It presumably falls back to a basic engine default.',
                items: []
            };
        case 'gate-combine':
            return {
                text: `Drives its own Completed output once its ${node.gateType === 'Or' ? 'OR' : 'AND'} of the inputs below is satisfied.`,
                items: []
            };
        case 'not-decoded':
            return { text: 'This item could not be fully decoded from the dump, so its completion rule is unknown.', items: [] };
        default:
            return null;
    }
}

function selectNode(nodeIdentifier, centerGraph = true, highlight = true, changeZoom = true) {
    const node = nodeMap.get(nodeIdentifier);
    if (!node) return;
    const nodeId = node.id || node.name;

    // 1. In Graph View: select and highlight connections
    if (cy) {
        const cyNode = cy.getElementById(nodeId);
        if (cyNode && cyNode.length > 0) {
            if (highlight) {
                highlightNodeNeighborhood(cyNode);
            }
            if (centerGraph) {
                cy.stop();
                const animProps = { center: { eles: cyNode } };
                if (changeZoom) {
                    animProps.zoom = Math.max(cy.zoom(), 0.75);
                }
                cy.animate(animProps, { duration: 250 });
            }
        }
    }

    // 2. Update Inspector Header and Metadata
    const inspectNameEl = document.getElementById('inspectName');
    if (inspectNameEl) inspectNameEl.innerText = node.displayName || nodeId;
    const inspectIdEl = document.getElementById('inspectId');
    if (inspectIdEl) inspectIdEl.innerText = nodeId;

    // Update mobile peek bar and details button
    const peekTitleEl = document.getElementById('peekTitle');
    if (peekTitleEl) peekTitleEl.innerText = node.displayName || nodeId;
    const peekBadgeEl = document.getElementById('peekBadge');
    if (peekBadgeEl) peekBadgeEl.innerText = node.kind === 'gate' ? typeLabelFor(node) : typeLabelFor(node);
    const mobilePeekBar = document.getElementById('mobilePeekBar');
    if (mobilePeekBar) {
        if (window.innerWidth <= 768) {
            mobilePeekBar.style.display = 'flex';
        } else {
            mobilePeekBar.style.display = 'none';
        }
    }
    const mobileInspectLabel = document.getElementById('inspectToggleLabel') || document.getElementById('mobileInspectLabel');
    if (mobileInspectLabel) mobileInspectLabel.innerText = node.displayName || nodeId;

    document.getElementById('inspectHash').innerText = node.kind === 'gate'
        ? `${typeLabelFor(node)} owned by ${nodeMap.get(node.owner)?.displayName || node.owner}`
        : node.hash;
    document.getElementById('metaType').innerText = node.kind === 'gate' ? typeLabelFor(node) : node.type;
    document.getElementById('metaSeqMode').innerText = node.seqModeName || 'None';
    document.getElementById('metaPorts').innerText = (node.requirements || []).length;
    // Parents/children are already covered by the "Implicit: Parent Must Be
    // Active" and "Contains" sections below -- no need to repeat them here.

    const flagsEl = document.getElementById('metaFlags');
    if (flagsEl) {
        if (node.kind === 'item') {
            const flags = [];
            if (node.milestone) flags.push('Milestone');
            if (node.persistent) flags.push('Persistent');
            if (node.alwaysLoaded) flags.push('Always Loaded');
            if (node.resetWhenCompleted) flags.push('Resets On Complete');
            if (node.missionActType && node.missionActType !== 'Invalid') flags.push(node.missionActType);
            flagsEl.innerText = flags.join(', ') || 'None';
        } else {
            flagsEl.innerText = '—';
        }
    }

    // Requirements (Clickable)
    const reqListEl = document.getElementById('inspectReqList');
    renderList(reqListEl, node.requirements || [], {
        emptyText: 'No unlock requirements.',
        render: req => {
            const target = nodeMap.get(req.source);
            const targetDisplay = target?.displayName || req.source;
            const showSubId = target && target.displayName && target.displayName !== req.source;
            const nameColor = req.inverted ? 'var(--accent-red, #ef4444)' : 'var(--accent-blue)';
            return `
              <li class="conn-item" onclick="selectNode('${req.source}')" style="cursor: pointer;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
                  <strong style="color: ${nameColor};">${targetDisplay}</strong>
                  <span class="req-condition-tag ${req.inverted ? 'cond-inverted' : 'cond-direct'}">
                    ${req.inverted ? 'NOT COMPLETED (!)' : 'COMPLETED'}
                  </span>
                </div>
                ${showSubId ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, monospace;">${req.source}</div>` : ''}
                <div style="font-size: 0.72rem; color: var(--text-muted);">
                  Port: ${req.port}${target?.kind === 'gate' ? ` · ${typeLabelFor(target)}` : ''}
                </div>
              </li>
            `;
        }
    });

    // Dependents (Clickable)
    const depListEl = document.getElementById('inspectDepList');
    const dependents = reverseDepsMap.get(nodeId) || [];
    renderList(depListEl, dependents, {
        emptyText: 'No downstream nodes require this.',
        render: dep => {
            const depId = dep.dependentId || dep.dependentName;
            const target = nodeMap.get(depId);
            const targetDisplay = target?.displayName || depId;
            const showSubId = target && target.displayName && target.displayName !== depId;
            const nameColor = dep.inverted ? 'var(--accent-red, #ef4444)' : 'var(--accent-purple)';
            return `
              <li class="conn-item" onclick="selectNode('${depId}')" style="cursor: pointer;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
                  <strong style="color: ${nameColor};">${targetDisplay}</strong>
                  <span class="req-condition-tag ${dep.inverted ? 'cond-inverted' : 'cond-direct'}">
                    ${dep.inverted ? 'Requires Incomplete' : 'Requires Complete'}
                  </span>
                </div>
                ${showSubId ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, monospace;">${depId}</div>` : ''}
              </li>
            `;
        }
    });

    // Contains
    const containsEl = document.getElementById('inspectContainsList');
    renderList(containsEl, node.kind === 'item' ? node.children.map(cid => ({ id: cid })) : [], {
        emptyText: node.kind === 'gate' ? 'Gates do not contain items.' : 'This item contains no child mission items.',
        render: ({ id }) => clickableNode(id, '--accent-emerald')
    });

    // Actions
    const actionsEl = document.getElementById('inspectActionsList');
    const actionEntries = node.kind === 'item' ? (node.actions || []) : [];
    renderList(actionsEl, actionEntries, {
        emptyText: 'This item fires no mission actions on completion.',
        render: action => `
          <li class="conn-item">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--accent-amber);">${action.kind}</strong>
              <span style="font-size: 0.72rem; color: var(--text-muted);">timing ${action.timing}${action.revert ? ' · revert' : ''}</span>
            </div>
            ${action.effects.map(fx => {
                if (fx.op === 'navzone') {
                    return `<div style="font-size: 0.78rem;">NavZone action ${fx.action}${fx.targets.length ? ' → ' + fx.targets.join(', ') : ''}</div>`;
                }
                return `<div style="font-size: 0.78rem;">${fx.op}${fx.target ? ' → ' + fx.target : ' (no target)'}</div>`;
            }).join('')}
          </li>
        `
    });

    // Scenes
    const scenesEl = document.getElementById('inspectScenesList');
    const scenes = node.kind === 'item' ? (node.scenes || []) : [];
    renderList(scenesEl, scenes, {
        emptyText: 'No scene content on this item.',
        render: scene => `
          <li class="conn-item">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--accent-blue);">${scene.sceneName || 'Unknown Scene'}</strong>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${scene.slot}</span>
            </div>
          </li>
        `
    });

    // Completes When
    const completionEl = document.getElementById('inspectCompletionList');
    const completionInfo = describeCompletion(node);
    if (!completionInfo) {
        renderList(completionEl, [], { emptyText: 'Unknown.', render: () => '' });
    } else {
        const introLi = `<li class="completion-note">${completionInfo.text}</li>`;
        const itemLis = completionInfo.items.map(it => {
            const itNode = nodeMap.get(it.label);
            const itDisplay = itNode?.displayName || it.label;
            const showSub = itNode && itNode.displayName && itNode.displayName !== it.label;
            return `
              <li class="conn-item" ${it.clickable ? `onclick="selectNode('${it.label}')" style="cursor: pointer;"` : ''}>
                <strong style="color: var(--accent-amber);">${itDisplay}</strong>
                ${showSub ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, monospace;">${it.label}</div>` : ''}
              </li>
            `;
        }).join('');
        completionEl.innerHTML = introLi + itemLis;
    }

    // Implicit parent list
    const implicitEl = document.getElementById('inspectImplicitParentList');
    const parentNames = node.kind === 'item' ? node.parents : (node.owner ? [node.owner] : []);
    renderList(implicitEl, parentNames, {
        emptyText: 'No parent list — nothing implicit to satisfy.',
        render: pname => clickableNode(pname, '--accent-rose', '<span style="font-size:0.72rem; color: var(--text-muted);">must be active</span>')
    });

    document.getElementById('inspectRaw').innerText = JSON.stringify(node, null, 2);
}

// Expose selectNode to window for inline onclick handlers
window.selectNode = selectNode;

// ---------------------------------------------------------------------------
// Search / Autocomplete Setup
// ---------------------------------------------------------------------------
const searchInput = document.getElementById('nodeSearchInput');
const searchDatalist = document.getElementById('nodeSearchList');
if (searchInput && searchDatalist) {
    searchDatalist.innerHTML = missionNodes
        .map(n => `<option value="${n.displayName || n.id}">${n.id}</option>`)
        .join('');

    function handleSearchJump() {
        const val = searchInput.value.trim().toLowerCase();
        if (!val) return;
        const target = missionNodes.find(n =>
            (n.displayName && n.displayName.toLowerCase() === val) ||
            (n.id && n.id.toLowerCase() === val) ||
            (n.name && n.name.toLowerCase() === val)
        ) || missionNodes.find(n =>
            (n.displayName && n.displayName.toLowerCase().includes(val)) ||
            (n.id && n.id.toLowerCase().includes(val))
        );
        if (target) {
            selectNode(target.id || target.name, true);
        }
    }

    searchInput.addEventListener('change', handleSearchJump);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearchJump();
    });
}

// Initial render
updateLegend();
renderGraph();

// Keep --navbar-height synced with rendered navbar + toolbar dimensions
function updateNavbarHeight() {
    const nav = document.querySelector('popruns-navbar, .header-nav');
    const toolbar = document.getElementById('appToolbar');
    const navH = (nav && nav.offsetHeight) ? nav.offsetHeight : 0;
    const toolH = (toolbar && toolbar.offsetHeight) ? toolbar.offsetHeight : 0;
    const totalH = navH + toolH;
    if (totalH > 0) {
        document.documentElement.style.setProperty('--navbar-height', `${totalH}px`);
    }
}
window.addEventListener('resize', () => {
    updateNavbarHeight();
    if (window.innerWidth > 768) {
        const peek = document.getElementById('mobilePeekBar');
        if (peek) peek.style.display = 'none';
    }
});
if (window.ResizeObserver) {
    const nav = document.querySelector('popruns-navbar, .header-nav');
    const toolbar = document.getElementById('appToolbar');
    const ro = new ResizeObserver(updateNavbarHeight);
    if (nav) ro.observe(nav);
    if (toolbar) ro.observe(toolbar);
}
updateNavbarHeight();

// ---------------------------------------------------------------------------
// Inspector Aside Panel Handling (Collapsible on Desktop & Mobile Drawer)
// ---------------------------------------------------------------------------
function setupInspectorPanel() {
    const aside = document.getElementById('inspectorAside');
    const appContainer = document.querySelector('.app-container');
    const backdrop = document.getElementById('sheetBackdrop');
    const closeBtn = document.getElementById('sheetCloseBtn');
    const peekBar = document.getElementById('mobilePeekBar');
    const toggleBtn = document.getElementById('inspectorToggleBtn') || document.getElementById('mobileInspectorToggle');
    const dragHandle = document.getElementById('sheetDragHandle');

    if (!aside) return;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function openInspector() {
        if (isMobile()) {
            aside.classList.add('sheet-open');
            if (backdrop) backdrop.classList.add('active');
        } else {
            if (appContainer) appContainer.classList.remove('aside-collapsed');
        }
        if (toggleBtn) toggleBtn.classList.add('active');
        if (cy) {
            setTimeout(() => cy.resize(), 260);
        }
    }

    function closeInspector() {
        if (isMobile()) {
            aside.classList.remove('sheet-open');
            if (backdrop) backdrop.classList.remove('active');
        } else {
            if (appContainer) appContainer.classList.add('aside-collapsed');
        }
        if (toggleBtn) toggleBtn.classList.remove('active');
        if (cy) {
            setTimeout(() => cy.resize(), 260);
        }
    }

    function toggleInspector() {
        if (isMobile()) {
            if (aside.classList.contains('sheet-open')) {
                closeInspector();
            } else {
                openInspector();
            }
        } else {
            if (appContainer && appContainer.classList.contains('aside-collapsed')) {
                openInspector();
            } else {
                closeInspector();
            }
        }
    }

    if (peekBar) {
        peekBar.addEventListener('click', openInspector);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleInspector();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeInspector();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeInspector);
    }

    if (dragHandle) {
        dragHandle.addEventListener('click', closeInspector);
    }
}
setupInspectorPanel();

// ---------------------------------------------------------------------------
// Copy PNG & SVG Canvas Handlers
// ---------------------------------------------------------------------------
function setupExportControls() {
    const copyPngBtn = document.getElementById('copyPngBtn');
    const copySvgBtn = document.getElementById('copySvgBtn');

    function flashButtonSuccess(btn, text) {
        const originalText = btn.innerText;
        btn.innerText = text;
        btn.classList.add('btn-active');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('btn-active');
        }, 1800);
    }

    function flashButtonError(btn, text) {
        const originalText = btn.innerText;
        btn.innerText = text;
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2200);
    }

    function getViewportCropBounds() {
        const vw = cy.width();
        const vh = cy.height();

        // Identify nodes that intersect the current viewport
        const visibleNodes = cy.nodes(':visible').filter(n => {
            const bb = n.renderedBoundingBox();
            return bb.x2 > 0 && bb.x1 < vw && bb.y2 > 0 && bb.y1 < vh;
        });

        if (visibleNodes.length === 0) {
            return { cropX: 0, cropY: 0, cropW: vw, cropH: vh, vw, vh };
        }

        const visibleEdges = visibleNodes.edgesWith(visibleNodes);
        const inViewEles = visibleNodes.union(visibleEdges);
        const bb = inViewEles.renderedBoundingBox();

        const margin = 28; // Margin in CSS viewport pixels
        const minX = Math.max(0, bb.x1);
        const minY = Math.max(0, bb.y1);
        const maxX = Math.min(vw, bb.x2);
        const maxY = Math.min(vh, bb.y2);

        const cropX1 = Math.max(0, Math.floor(minX - margin));
        const cropY1 = Math.max(0, Math.floor(minY - margin));
        const cropX2 = Math.min(vw, Math.ceil(maxX + margin));
        const cropY2 = Math.min(vh, Math.ceil(maxY + margin));

        return {
            cropX: cropX1,
            cropY: cropY1,
            cropW: Math.max(10, cropX2 - cropX1),
            cropH: Math.max(10, cropY2 - cropY1),
            vw,
            vh
        };
    }

    async function generateCroppedPngBlob() {
        const { cropX, cropY, cropW, cropH, vw, vh } = getViewportCropBounds();
        const zoom = cy.zoom();

        // Dynamically scale with zoom for ultra-clear output (minimum 3.0x, scaling up with zoom to 6.0x)
        const exportScale = Math.min(6.0, Math.max(3.0, zoom * 3.5));

        const rawDataUrl = cy.png({
            full: false,
            scale: exportScale,
            bg: '#0b111e'
        });

        const img = new Image();
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = rawDataUrl;
        });

        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;
        const ratioX = imgW / vw;
        const ratioY = imgH / vh;

        const sx = Math.max(0, Math.round(cropX * ratioX));
        const sy = Math.max(0, Math.round(cropY * ratioY));
        const sw = Math.min(imgW - sx, Math.round(cropW * ratioX));
        const sh = Math.min(imgH - sy, Math.round(cropH * ratioY));

        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = sw;
        cropCanvas.height = sh;
        const ctx = cropCanvas.getContext('2d');
        ctx.fillStyle = '#0b111e';
        ctx.fillRect(0, 0, sw, sh);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

        return new Promise((resolve, reject) => {
            cropCanvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error('Failed to generate PNG blob'));
            }, 'image/png');
        });
    }

    if (copyPngBtn) {
        copyPngBtn.addEventListener('click', async () => {
            if (!cy) return;
            try {
                const blob = await generateCroppedPngBlob();

                if (navigator.clipboard && window.ClipboardItem) {
                    await navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob })
                    ]);
                    flashButtonSuccess(copyPngBtn, 'Copied PNG!');
                } else {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `pop2008_graph_${currentScope}_${currentMode}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                    flashButtonSuccess(copyPngBtn, 'Downloaded PNG');
                }
            } catch (err) {
                console.error('Failed to copy PNG:', err);
                flashButtonError(copyPngBtn, 'Failed');
            }
        });
    }

    if (copySvgBtn) {
        copySvgBtn.addEventListener('click', async () => {
            if (!cy) return;
            try {
                let svgString = '';
                if (typeof cy.svg === 'function') {
                    svgString = cy.svg({
                        full: false,
                        bg: '#0b111e'
                    });
                }

                if (!svgString) {
                    throw new Error('SVG generation returned empty');
                }

                const { cropX, cropY, cropW, cropH } = getViewportCropBounds();
                if (typeof DOMParser !== 'undefined') {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(svgString, 'image/svg+xml');
                    const svgEl = doc.querySelector('svg');
                    if (svgEl) {
                        svgEl.setAttribute('viewBox', `${cropX} ${cropY} ${cropW} ${cropH}`);
                        svgEl.setAttribute('width', cropW);
                        svgEl.setAttribute('height', cropH);
                        svgString = new XMLSerializer().serializeToString(doc);
                    }
                }

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(svgString);
                    flashButtonSuccess(copySvgBtn, 'Copied SVG!');
                } else {
                    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `pop2008_graph_${currentScope}_${currentMode}.svg`;
                    a.click();
                    URL.revokeObjectURL(url);
                    flashButtonSuccess(copySvgBtn, 'Downloaded SVG');
                }
            } catch (err) {
                console.error('Failed to copy SVG:', err);
                flashButtonError(copySvgBtn, 'Failed');
            }
        });
    }
}
setupExportControls();
