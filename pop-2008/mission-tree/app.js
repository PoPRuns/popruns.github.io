import missionItems from "./data.js";

// Data Lookups
const nodeMap = new Map();
const reverseDepsMap = new Map();

missionItems.forEach(item => {
    nodeMap.set(item.name, item);
    reverseDepsMap.set(item.name, []);
});

missionItems.forEach(item => {
    item.requirements.forEach(req => {
        if (reverseDepsMap.has(req.source_resource)) {
            reverseDepsMap.get(req.source_resource).push({
                dependentName: item.name,
                inverted: req.inverted
            });
        }
    });
});

missionItems.forEach(item => {
    const sources = new Set(
        item.requirements
            .filter(req => req.inverted === true && req.source_port_type_name === 'Completed')
            .filter(req => nodeMap.get(req.source_resource)?.parents.includes(item.name))
            .map(req => req.source_resource)
    );
    item.completion_triggered_by = Array.from(sources);
});

missionItems.forEach(item => {
    const targets = new Set();
    (item.ports_out || [])
        .filter(port => port.type_name === 'Completed')
        .forEach(port => {
            (port.consumers || [])
                .filter(consumer => consumer.inverted === true)
                .filter(consumer => item.parents.includes(consumer.resource))
                .forEach(consumer => targets.add(consumer.resource));
        });
    item.triggers_completion_of = Array.from(targets);
});

// Identify Root items
const referencedAsChild = new Set();
missionItems.forEach(item => {
    item.requirements.forEach(req => {
        referencedAsChild.add(req.source_resource);
    });
});
const roots = missionItems.filter(item => !referencedAsChild.has(item.name));

const treeRootUl = document.getElementById('treeRoot');

// Recursive Tree Builder where Requirements are Children
function buildRequirementTree(node, visitedInBranch = new Set(), reqCondition = null) {
    const li = document.createElement('li');
    const hasRequirements = node.requirements && node.requirements.length > 0;
    const isCycle = visitedInBranch.has(node.name);

    let typeBadge = 'badge-sequencer';
    if (node.type === 'MissionItemList') typeBadge = 'badge-list';
    if (node.type === 'MissionItemFertileGround') typeBadge = 'badge-fertile';

    const nodeItem = document.createElement('div');
    nodeItem.className = 'tree-node-item';
    nodeItem.dataset.name = node.name;

    // Condition Tag
    let conditionHtml = '';
    if (reqCondition !== null) {
        conditionHtml = `
          <span class="req-condition-tag ${reqCondition.inverted ? 'cond-inverted' : 'cond-direct'}">
            ${reqCondition.inverted ? '[REQUIRES INCOMPLETE]' : '[REQUIRES COMPLETED]'}
          </span>
        `;
    }

    nodeItem.innerHTML = `
        ${(hasRequirements && !isCycle) ? '<span class="toggle-btn">▶</span>' : '<span style="width:16px;"></span>'}
        ${conditionHtml}
        <span class="node-label">${node.name}</span>
        <span class="badge-pill ${typeBadge}">${node.type.replace('MissionItem', '')}</span>
        ${isCycle ? '<span style="font-size: 0.65rem; color: var(--accent-amber); font-style: italic;">(ref)</span>' : ''}
      `;

    nodeItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-btn')) return;
        selectNode(node.name);
    });

    if (hasRequirements && !isCycle) {
        const toggle = nodeItem.querySelector('.toggle-btn');
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            li.classList.toggle('collapsed');
            toggle.innerText = li.classList.contains('collapsed') ? '▶' : '▼';
        });
    }

    li.appendChild(nodeItem);

    // Render Requirement Children
    if (hasRequirements && !isCycle) {
        const childUl = document.createElement('ul');
        const nextVisited = new Set(visitedInBranch).add(node.name);

        node.requirements.forEach(req => {
            const reqTargetNode = nodeMap.get(req.source_resource);
            if (reqTargetNode) {
                childUl.appendChild(buildRequirementTree(reqTargetNode, nextVisited, req));
            } else {
                const missingLi = document.createElement('li');
                missingLi.innerHTML = `
                  <div class="tree-node-item" style="opacity: 0.6;">
                    <span style="width:16px;"></span>
                    <span class="req-condition-tag ${req.inverted ? 'cond-inverted' : 'cond-direct'}">
                      ${req.inverted ? '[! NOT COMPLETED]' : '[COMPLETED]'}
                    </span>
                    <span class="node-label">${req.source_resource}</span>
                    <span class="badge-pill" style="background: rgba(255,255,255,0.1);">External</span>
                  </div>
                `;
                childUl.appendChild(missingLi);
            }
        });
        li.appendChild(childUl);
        li.classList.add('collapsed');
    }

    return li;
}

// Render tree from top root elements
roots.forEach(rootNode => {
    treeRootUl.appendChild(buildRequirementTree(rootNode));
});

// Inspector & Selection Handler
function selectNode(nodeName) {
    const node = nodeMap.get(nodeName);
    if (!node) return;

    // 1. Update selection highlight in the tree
    document.querySelectorAll('.tree-node-item').forEach(el => el.classList.remove('selected'));
    const matchedNodeElements = document.querySelectorAll(`.tree-node-item[data-name="${node.name}"]`);

    matchedNodeElements.forEach(el => {
        el.classList.add('selected');

        // 2. Expand all parent <li> elements up the tree hierarchy
        let parentLi = el.closest('li').parentElement?.closest('li');
        while (parentLi) {
            parentLi.classList.remove('collapsed');
            const toggle = parentLi.querySelector(':scope > .tree-node-item > .toggle-btn');
            if (toggle) toggle.innerText = '▼';
            parentLi = parentLi.parentElement?.closest('li');
        }
    });

    // 3. Scroll the first occurrence into view smoothly
    if (matchedNodeElements.length > 0) {
        matchedNodeElements[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // 4. Update Inspector Header and Metadata
    document.getElementById('inspectName').innerText = node.name;
    document.getElementById('inspectHash').innerText = node.hash;
    document.getElementById('metaType').innerText = node.type;
    document.getElementById('metaSeqMode').innerText = node.seqmode_name || 'None';
    document.getElementById('metaParents').innerText = node.parents.join(', ') || 'Root Scope';
    document.getElementById('metaPorts').innerText = node.n_ports_in;

    // Requirements (Clickable)
    const reqListEl = document.getElementById('inspectReqList');
    if (!node.requirements.length) {
        reqListEl.innerHTML = '<li class="empty-state">No requirement prerequisites.</li>';
    } else {
        reqListEl.innerHTML = node.requirements.map(req => `
          <li class="conn-item" onclick="selectNode('${req.source_resource}')" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--accent-blue);">${req.source_resource}</strong>
              <span class="req-condition-tag ${req.inverted ? 'cond-inverted' : 'cond-direct'}">
                ${req.inverted ? 'NOT COMPLETED (!)' : 'COMPLETED'}
              </span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">
              Port Type: ${req.source_port_type_name} (${req.source_port_type})
            </div>
          </li>
        `).join('');
    }

    // Dependents (Clickable)
    const depListEl = document.getElementById('inspectDepList');
    const dependents = reverseDepsMap.get(node.name) || [];
    if (!dependents.length) {
        depListEl.innerHTML = '<li class="empty-state">No downstream nodes require this.</li>';
    } else {
        depListEl.innerHTML = dependents.map(dep => `
          <li class="conn-item" onclick="selectNode('${dep.dependentName}')" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--accent-purple);">${dep.dependentName}</strong>
              <span class="req-condition-tag ${dep.inverted ? 'cond-inverted' : 'cond-direct'}">
                ${dep.inverted ? 'Requires Incomplete' : 'Requires Complete'}
              </span>
            </div>
          </li>
        `).join('');
    }

    // Completion Triggered By (Clickable)
    const completionTriggeredByEl = document.getElementById('inspectCompletionTriggeredByList');
    if (!node.completion_triggered_by.length) {
        completionTriggeredByEl.innerHTML = '<li class="empty-state">No child completion signal found for this node.</li>';
    } else {
        completionTriggeredByEl.innerHTML = node.completion_triggered_by.map(name => `
          <li class="conn-item" onclick="selectNode('${name}')" style="cursor: pointer;">
            <strong style="color: var(--accent-emerald);">${name}</strong>
          </li>
        `).join('');
    }

    // Triggers Completion Of (Clickable)
    const triggersCompletionOfEl = document.getElementById('inspectTriggersCompletionOfList');
    if (!node.triggers_completion_of.length) {
        triggersCompletionOfEl.innerHTML = '<li class="empty-state">This node\'s completion does not close out a parent list.</li>';
    } else {
        triggersCompletionOfEl.innerHTML = node.triggers_completion_of.map(name => `
          <li class="conn-item" onclick="selectNode('${name}')" style="cursor: pointer;">
            <strong style="color: var(--accent-amber);">${name}</strong>
          </li>
        `).join('');
    }

    document.getElementById('inspectRaw').innerText = JSON.stringify(node, null, 2);
}

// Expose selectNode to window for inline onclick handlers in ES Modules
window.selectNode = selectNode;

// Expand / Collapse controls
document.getElementById('expandBtn').addEventListener('click', () => {
    document.querySelectorAll('.tree li').forEach(li => {
        li.classList.remove('collapsed');
        const toggle = li.querySelector('.toggle-btn');
        if (toggle) toggle.innerText = '▼';
    });
});

document.getElementById('collapseBtn').addEventListener('click', () => {
    document.querySelectorAll('.tree li').forEach(li => {
        if (li.querySelector('ul')) {
            li.classList.add('collapsed');
            const toggle = li.querySelector('.toggle-btn');
            if (toggle) toggle.innerText = '▶';
        }
    });
});

// Initial load
if (missionItems.length) selectNode(missionItems[0].name);