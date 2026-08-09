// tree_builder.js -- port of web_ui/server.py's tree-building layer (everything that turns
// decoded records into the {label,value,mono,children} node shape app.js renders).
'use strict';

import { enumName, BITMASK_FIELDS, FLOAT_FIELD_NAMES, FIXED_ARRAY_CAPACITY } from './popsave.js';
import { crc32 } from './crc32.js';

export function node(label, value, mono, children) {
    return { label, value: value || '', mono: !!mono, children: children || [] };
}

function isBigIntOrNumber(v) { return typeof v === 'bigint' || typeof v === 'number'; }

export function formatValue(schema, propName, val, isFloat) {
    const enumNm = typeof val === 'number' ? enumName(propName, val) : null;
    if (enumNm) return `${enumNm} (${val})`;
    if (val === null || val === undefined) {
        return propName.startsWith('0x') ? '(unresolved name)' : '(value position not yet confirmed)';
    }
    // JS doesn't distinguish 1 from 1.0 at runtime the way Python's isinstance(val, float) does, so
    // a whole-number float (e.g. CameraFOV=1.0, or a composite child of kind 0x0a) needs an
    // explicit signal that it came from an 'f32' read -- `isFloat` when the caller knows the
    // format directly (composite children), FLOAT_FIELD_NAMES as a fallback for named fields.
    if (typeof val === 'number' && (!Number.isInteger(val) || isFloat || FLOAT_FIELD_NAMES.has(propName))) {
        return val.toFixed(4);
    }
    if (isBigIntOrNumber(val) && BITMASK_FIELDS.has(propName)) {
        const bv = typeof val === 'bigint' ? val : BigInt(val);
        if (bv >= -128n && bv < 256n) {
            const masked = bv & 0xffn;
            return `0x${masked.toString(16).padStart(2, '0')} (${masked.toString(2).padStart(8, '0')})`;
        }
        const unsigned = bv < 0n ? bv + (1n << 64n) : bv;
        let bits = 0n, tmp = unsigned;
        while (tmp > 0n) { bits += tmp & 1n; tmp >>= 1n; }
        return `0x${unsigned.toString(16).padStart(16, '0')} (${bits} bits set)`;
    }
    if (typeof val === 'number' && schema.isBoolField(propName)) {
        if (val === 0) return 'false (0)';
        if (val === 1) return 'true (1)';
        return `${val} (unexpected for a bool)`;
    }
    if (propName.endsWith('ID') || propName === 'ObjectToSave') {
        if (val === 0) return '0 (none)';
        const name = schema.resolveInstanceName(val);
        return name ? `${name} (0x${(val >>> 0).toString(16).padStart(8, '0')})` : `0x${(val >>> 0).toString(16).padStart(8, '0')}`;
    }
    if (typeof val === 'bigint') return val.toString();
    return String(val);
}

function buildPropertyNode(schema, ps, dec, offset, prop, recordSize, nameTableEnd) {
    const val = ps.decodePropertyValue(dec, offset, prop.hash, recordSize, nameTableEnd);
    const comps = ps.resolveMultiComponent(dec, offset, prop.hash);
    const nested = prop.name === 'AchievementsTrackingData' ? ps.decodeAchievementsTrackingData(dec, offset) : null;
    const arr = ps.activeOddTags(dec, offset, prop.hash);
    let shown;
    if (val !== null) {
        shown = formatValue(schema, prop.name, val);
    } else if (comps) {
        shown = comps.map(([lbl, , , v]) => `${lbl}=${v.toFixed(3)}`).join(', ');
    } else if (arr) {
        shown = `(array, ${arr[0]} entries)`;
    } else if (nested) {
        shown = '';
    } else {
        shown = formatValue(schema, prop.name, null);
    }
    const n = node(prop.name, shown);
    if (comps) {
        for (const [lbl, , , v] of comps) n.children.push(node(lbl, v.toFixed(4), true));
    }
    if (nested) {
        for (const [name, , , v] of nested) n.children.push(node(name, formatValue(schema, name, v), true));
    }
    return n;
}

// Display names are the real in-game ability names (Ormazd's four gifts): Rebound=Step,
// Grapple=Hand, Dash=Breath, FlyOnBeam=Wings. Colors as specified: red/blue/green/yellow.
export const POWER_PLATE_INFO = [
    ['Step of Ormazd', 1, '#e5484d'],
    ['Hand of Ormazd', 3, '#3b9eff'],
    ['Breath of Ormazd', 4, '#30a46c'],
    ['Wings of Ormazd', 5, '#f5c518'],
];
const POWER_PLATE_NAME_BY_TYPE = new Map(POWER_PLATE_INFO.map(([name, typeVal]) => [typeVal, name]));

function arrayElementLabel(typeField, typeVal, index) {
    if (typeField === 'MagicPlateComponentType') {
        const nm = POWER_PLATE_NAME_BY_TYPE.get(typeVal);
        if (nm) return nm;
    }
    const nm = enumName(typeField, typeVal);
    if (nm) return nm.replace('MagicType_', '');
    return `[${index}]`;
}

function buildTrapsPowersChildren(ps, dec, traps, powers) {
    const out = [];
    for (const [klass, field, typeField, recs] of [
        ['TrapsManager', 'Traps', 'TrapType', traps],
        ['PowersManager', 'Powers', 'MagicPlateComponentType', powers],
    ]) {
        for (const r of recs) {
            const rnode = node(klass, `${field}[${r.elements.length}]`);
            r.elements.forEach((elem, k) => {
                const enode = node(arrayElementLabel(typeField, elem[typeField], k));
                for (const [fname, val] of Object.entries(elem)) {
                    let shown;
                    if (fname === 'Enabled' || fname === 'ManualActivation') {
                        shown = val ? 'true' : 'false';
                    } else {
                        const nm = enumName(fname, val);
                        shown = nm ? `${nm} (${val})` : String(val);
                    }
                    enode.children.push(node(fname, shown, true));
                }
                rnode.children.push(enode);
            });
            out.push(rnode);
        }
    }
    return out;
}

function formatValueRaw(schema, propName, val) {
    // ObjectToSave's own display uses the ID-style resolver too (see formatValue's endsWith('ID')
    // branch, extended to cover this one name explicitly).
    return formatValue(schema, propName, val);
}

function buildPortalNodes(schema, portals) {
    const out = [];
    for (const r of portals) {
        const used = r.objectToSave.filter((x) => x).length;
        const pnode = node('PortalDynamicLoaderSaveState', `${used} / ${FIXED_ARRAY_CAPACITY} slots used`);
        for (let k = 0; k < FIXED_ARRAY_CAPACITY; k++) {
            const objId = r.objectToSave[k], flag = r.activeFlag[k];
            if (!objId && !flag) continue;
            const onode = node(`ObjectToSave[${k}]`, formatValueRaw(schema, 'ObjectToSave', objId), true);
            onode.children.push(node('ActiveFlag', flag ? 'true' : 'false', true));
            pnode.children.push(onode);
        }
        out.push(pnode);
    }
    return out;
}

export function buildGameStateTree(schema, ps, dec) {
    const objs = ps.enumerateSaveGameObjects(dec);
    const items = ps.findMissionItems(dec);
    const regions = ps.findSectionGameData(dec);
    const comps = ps.findComposites(dec);
    const graphs = ps.findGraphs(dec);
    const singles = {
        CorruptionLevel: ps.findSingleFieldRecords(dec, 'CorruptionLevel'),
        RuntimeEnabled: ps.findSingleFieldRecords(dec, 'RuntimeEnabled'),
    };
    const traps = ps.findArrayContainers(dec, 'Traps');
    const powers = ps.findArrayContainers(dec, 'Powers');
    const portals = ps.findFixedCapacityArrays(dec);
    const pgpmUnaligned = ps.findUnalignedRecords(dec).filter((e) => e.klass === 'PopGamePlayManager');

    const claimed = new Set();
    for (const rs of [items, regions, comps, graphs, traps, powers, portals]) {
        for (const r of rs) claimed.add(r.offset);
    }
    for (const rs of Object.values(singles)) for (const r of rs) claimed.add(r.offset);

    let others = objs.filter((o) => !claimed.has(o.offset));
    others = others.concat(pgpmUnaligned.map((e) => ({ offset: e.offset, end: null, size: null, uid: e.uid, kind: 'unaligned' })));
    others.sort((a, b) => a.offset - b.offset);

    const sections = [];

    // -- World Objects --
    const arrChildren = [];
    let currentAct = null;
    const actHash = crc32('CurrentAct') >>> 0;
    for (const o of others) {
        const ptab = ps.readPropertyTable(dec, o.offset, o.size);
        const instName = ps.resolveInstanceName(o.uid);
        let cls = null;
        if (ptab) {
            [cls] = schema.guessRecordClass(ptab.properties.map((p) => p.name));
        } else if (o.size === 364) {
            cls = 'CompositeSaveGameObject';
        }
        const label = instName || cls || (ptab === null ? '(unrecognized shape)' : '(unnamed)');
        const rnode = node(label, cls || '');
        if (ptab) {
            for (const prop of ptab.properties) {
                rnode.children.push(buildPropertyNode(schema, ps, dec, o.offset, prop, o.size, ptab.nameTableEnd));
            }
            if (cls === 'PopGamePlayManager' && currentAct === null) {
                currentAct = ps.decodePropertyValue(dec, o.offset, actHash, o.size, ptab.nameTableEnd);
            }
        }
        arrChildren.push(rnode);
    }
    const worldChildren = arrChildren.concat(buildPortalNodes(schema, portals));
    sections.push(node(`World Objects (${worldChildren.length})`, '', false, worldChildren));

    // -- Mission Items --
    const miChildren = items.map((it) => {
        const name = ps.resolveInstanceName(it.uid) || `0x${(it.uid >>> 0).toString(16).padStart(8, '0')}`;
        const mnode = node(name);
        for (const [lbl, rel] of [['MIState', 0], ['WasEverCompleted', 4], ['WasEverPlayed', 5]]) {
            const val = dec[it.stateOffset + rel];
            mnode.children.push(node(lbl, formatValue(schema, lbl, val), true));
        }
        return mnode;
    });
    sections.push(node(`Mission Items (${items.length})`, '', false, miChildren));

    // -- Region Trackers --
    const labelled = regions.map((r) => {
        const nm = (ps.resolveInstanceName(r.uid) || `0x${(r.uid >>> 0).toString(16).padStart(8, '0')}`).replace('(SectionGameData) ', '');
        return { nm, fake: nm.includes('_FAKE'), r };
    });
    const live = labelled.filter((x) => x.r.initialized && !x.fake);
    const totalSeeds = live.reduce((s, x) => s + x.r.NbSparklesCollected, 0);
    const order = (x) => {
        const rank = ps.seedRegionRank(x.nm);
        if (x.fake || !x.r.initialized || rank === null) {
            return [1, x.fake ? 1 : 0, x.r.initialized ? 0 : 1, 0, x.nm.toLowerCase()];
        }
        return [0, 0, 0, rank, ''];
    };
    const sortedRegions = [...labelled].sort((a, b) => {
        const oa = order(a), ob = order(b);
        for (let i = 0; i < oa.length; i++) { if (oa[i] < ob[i]) return -1; if (oa[i] > ob[i]) return 1; }
        return 0;
    });
    const regChildren = sortedRegions.map(({ nm, fake, r }) => {
        const note = fake ? '(streaming variant)' : (!r.initialized ? '(never loaded)' : '');
        const rnode = node(nm, note);
        if (r.initialized) {
            for (const lbl of ['NbTimeVisited', 'NbSparklesCollected', 'FertileGroundStatus', 'NbFightsDone']) {
                rnode.children.push(node(lbl, formatValue(schema, lbl, r[lbl]), true));
            }
        }
        return rnode;
    });
    sections.push(node(`Region Trackers (${regChildren.length})`, '', false, regChildren));

    // -- Composite Objects --
    const compChildren = comps.map((c) => {
        const nm = ps.resolveInstanceName(c.uid) || `0x${(c.uid >>> 0).toString(16).padStart(8, '0')}`;
        const cnode = node(nm);
        for (const ch of c.children) {
            if (ch.empty) {
                cnode.children.push(node('(empty)', `0x${(ch.uid >>> 0).toString(16).padStart(8, '0')}`));
                continue;
            }
            const val = ps.compositeChildValue(dec, ch);
            const shown = val !== null ? formatValue(schema, ch.name, val, ch.kind === 0x0a) : `(${ch.valueLen} bytes, kind 0x${ch.kind.toString(16)})`;
            cnode.children.push(node(ch.name, shown, true));
        }
        return cnode;
    });
    sections.push(node(`Composite Objects (${compChildren.length})`, '', false, compChildren));

    // -- Graph Rule Variables --
    const sortedGraphs = [...graphs].sort((a, b) => (a.klass < b.klass ? -1 : a.klass > b.klass ? 1 : 0));
    const graphChildren = sortedGraphs.map((g) => {
        const gnode = node(g.klass, `Variables[${g.variables.length}]`);
        for (const v of g.variables) {
            const vnode = node(`[${v.index}] ${v.klass}`);
            for (const f of v.fields) vnode.children.push(node(f.fieldName, f.value.toFixed(4), true));
            gnode.children.push(vnode);
        }
        return gnode;
    });
    sections.push(node(`Graph Rule Variables (${graphChildren.length})`, '', false, graphChildren));

    // -- Corruption Zones / Graph Rules --
    for (const [section, field] of [['Corruption Zones', 'CorruptionLevel'], ['Graph Rules', 'RuntimeEnabled']]) {
        const found = singles[field];
        if (!found.length) continue;
        const sectChildren = found.map((r) => {
            const nm = ps.resolveInstanceName(r.uid) || `0x${(r.uid >>> 0).toString(16).padStart(8, '0')}`;
            return node(nm, formatValue(schema, field, r.value), true);
        });
        sections.push(node(`${section} (${sectChildren.length})`, '', false, sectChildren));
    }

    // -- Traps & Powers --
    const tpChildren = buildTrapsPowersChildren(ps, dec, traps, powers);
    sections.push(node(`Traps & Powers (${tpChildren.length})`, '', false, tpChildren));

    return [node('Game State (blob1)', '', false, sections), { lightSeeds: totalSeeds, traps, powers, singles, currentAct }];
}

export function buildHeaderNode(header) {
    const ts = header.timestampUtc;
    return node('Header', '', false, [
        node('magic', `0x${(header.magic >>> 0).toString(16).padStart(8, '0')} (RGMH)`),
        node('title', header.title),
        node('level_name', header.levelName),
        node('timestamp (UTC)', ts ? ts.toISOString().replace('.000Z', '').replace('T', ' ') : '(invalid)'),
    ]);
}

export function buildCheckpointNode(blob2) {
    return node('Checkpoint (blob2)', '', false, [
        node('checkpoint_code', blob2.checkpointCode),
        node('resolved region', blob2.checkpointRegion || '(unknown code)'),
        node('level_name', blob2.levelName),
    ]);
}

export const LIGHT_SEEDS_MAX = 1001;
export const ACT_LABELS = { 0: 'Act 0', 1: 'Act 1', 2: 'Act 2', 3: 'Act 3' };
export const CORRUPTION_ZONE_NAMES = new Set(
    ['LR', 'OB', 'RC', 'HC'].flatMap((p) => [1, 2, 3, 4, 5, 6].map((n) => `${p}${n}`)));

function computePowerPlates(powers) {
    const enabledByType = new Map();
    for (const r of powers) for (const e of r.elements) enabledByType.set(e.MagicPlateComponentType, !!e.Enabled);
    return POWER_PLATE_INFO.map(([name, typeVal, color]) => ({ name, color, enabled: !!enabledByType.get(typeVal) }));
}

export function computeSummary(schema, ps, extra) {
    const corruptionFound = (extra.singles.CorruptionLevel || []).filter((r) => CORRUPTION_ZONE_NAMES.has(ps.resolveInstanceName(r.uid)));
    const healed = corruptionFound.filter((r) => !r.value).length;
    const act = extra.currentAct;
    return {
        current_act: ACT_LABELS[act] !== undefined ? ACT_LABELS[act] : (act !== null ? `Act ${act}` : 'unknown'),
        light_seeds: extra.lightSeeds,
        light_seeds_max: LIGHT_SEEDS_MAX,
        power_plates: computePowerPlates(extra.powers),
        healed_levels: healed,
        healed_levels_total: CORRUPTION_ZONE_NAMES.size,
    };
}

export function loadSaveData(schema, ps, header, blob2, dec, fileName) {
    const [gameStateNode, extra] = buildGameStateTree(schema, ps, dec);
    const tree = node('root', '', false, [buildHeaderNode(header), buildCheckpointNode(blob2), gameStateNode]);
    const title = fileName.replace(/\.PoPSavedGame$/i, '');
    return {
        title,
        subtitle: blob2.checkpointRegion || header.levelName || '',
        summary: computeSummary(schema, ps, extra),
        tree,
    };
}

