import initialData from "./data.js";

var renderData = structuredClone(initialData);

function renderTabButtons(tab) {
    const mainDiv = document.getElementById('tab-buttons-container');
    mainDiv.innerText = '';
    renderData.forEach(obj => {
        const tabButtonWrapper = document.createElement('div');
        tabButtonWrapper.classList.add("tab-button-wrapper");
        const tabButton = document.createElement('button');
        tabButton.classList.add("tab-button");
        if (obj.tab === tab) {
            tabButton.classList.add("tab-button-selected");
        }
        tabButton.onclick = () => renderDataToHTML(obj.tab);
        tabButton.innerText = obj.tab;
        tabButtonWrapper.appendChild(tabButton);
        mainDiv.appendChild(tabButtonWrapper);
    });
}

function renderDataToHTML(tab) {
    renderTabButtons(tab);
    const mainDiv = document.getElementById('dynamic');
    mainDiv.innerText = '';
    renderData.find(obj => obj.tab === tab).data.forEach(section => {
        const sectionTitleDiv = document.createElement('div');
        sectionTitleDiv.classList.add("section-header");
        const sectionTitleSpan = document.createElement('span');
        sectionTitleSpan.innerText = section.title;
        sectionTitleDiv.appendChild(sectionTitleSpan);
        if (section.percentage > 0) {
            const percentageDiv = document.createElement('div');
            percentageDiv.classList.add("percent-box");
            const roundedCompletion = Math.round(section.completedPercent * 100) / 100;
            percentageDiv.innerText = `${roundedCompletion} / ${section.percentage} %`;
            sectionTitleDiv.appendChild(percentageDiv);
        }
        mainDiv.appendChild(sectionTitleDiv);
        const sectionDescriptionDiv = document.createElement('div');
        sectionDescriptionDiv.classList.add('section-description');
        sectionDescriptionDiv.innerText = section.description;
        mainDiv.appendChild(sectionDescriptionDiv);
        const sectionData = document.createElement('div');
        sectionData.classList.add('section-data');
        for (const key in section.data) {
            const value = section.data[key];
            const listItemDiv = document.createElement('div');
            listItemDiv.classList.add("section-list-item");
            const listItem = document.createElement('span');
            listItem.innerText = `${value.isUnlocked ? "☑️" : "❌"} ${value.displayName}`;
            listItemDiv.appendChild(listItem);
            if (value.level > 0) {
                const upgradesLeft = value.maxLevel - value.level;
                value.description = `${value.level === 1 ? "" : `+${value.level - 1}`} Unlocked${upgradesLeft ? `, ${upgradesLeft} Upgrade(s) Left` : ""}`;
            }
            if (value.description) {
                const itemDesc = document.createElement('span');
                itemDesc.classList.add('item-description');
                itemDesc.innerText = `— ${value.description}`;
                listItemDiv.appendChild(itemDesc);
            }
            sectionData.appendChild(listItemDiv);
        }
        mainDiv.appendChild(sectionData);
    });
}
window.renderDataToHTML = renderDataToHTML;

function openFolderDialog() {
    var input = document.getElementById('folderInput');
    input.click();
}
window.openFolderDialog = openFolderDialog;

function processJson(jsonObj) {
    const unlockedItems = jsonObj.unlockableManager.unlockedItems;
    const variableLists = jsonObj.variableList.serializedGameVariableLists;
    const consolidatedvariableList = []
    variableLists.forEach(variableList => consolidatedvariableList.push(...variableList.variables));

    renderData = structuredClone(initialData);

    function updateSectionData(tab, sectionTitle, percentPerItem, checkUnlock) {
        const section = renderData.find(obj => obj.tab === tab).data.find(section => section.title === sectionTitle);
        const sectionData = section.data;
        for (var item in sectionData) {
            const itemProps = sectionData[item];
            const isUnlocked = checkUnlock(item, itemProps);
            itemProps.isUnlocked = isUnlocked;
            section.completedPercent += isUnlocked * (itemProps.level ?? 1) * (itemProps.quantity ?? 1) * percentPerItem;
        }
    }

    function checkItemUnlocked(GUID) {
        const item = unlockedItems.find(obj => obj.guid === GUID);
        return item !== undefined;
    }

    function checkVariableFlag(variableName) {
        const variable = consolidatedvariableList.find(variable => variable.name === variableName);
        return Boolean(variable.value);
    }

    updateSectionData("Sukhra's Forge", "Upgrades", 0, (upgrade_guid, _) => {
        return checkItemUnlocked(upgrade_guid);
    });

    updateSectionData("Sukhra's Forge", "Weapons", 0, (weapon_guid, _) => {
        return checkItemUnlocked(weapon_guid);
    });

    updateSectionData("Sukhra's Forge", "Tools", 0, (tool_guid, _) => {
        return checkItemUnlocked(tool_guid);
    });

    updateSectionData("Paachi's Workshop", "Upgrades", 0, (upgrade_guid, _) => {
        return checkItemUnlocked(upgrade_guid);
    });

    updateSectionData("Paachi's Workshop", "Medallion Packs", 0, (pack_guid, _) => {
        return checkItemUnlocked(pack_guid);
    });

    updateSectionData("Paachi's Workshop", "Medallions", 0, (medallion_guid, _) => {
        return checkItemUnlocked(medallion_guid);
    });

    updateSectionData("Progression", "Biomes", 0, (biome_variable, _) => {
        return checkVariableFlag(biome_variable);
    });

    updateSectionData("Progression", "Awakening Stones", 0, (medallion_guid, _) => {
        return checkItemUnlocked(medallion_guid);
    });

    updateSectionData("Laleh's Tent", "Skins", 0, (skin_guid, _) => {
        return checkItemUnlocked(skin_guid);
    });

    renderDataToHTML("Sukhra's Forge");
}

function parseAndProcessJson(jsonText) {
    let masterJson = {}
    const unlockableMatch = jsonText.match(/UnlockableManagerSaver.*?=\s(.*?)==/s);
    if (unlockableMatch) {
        const unlockableJson = JSON.parse(unlockableMatch[1]);
        masterJson["unlockableManager"] = unlockableJson;
        console.log(unlockableJson);
    }
    const variableListMatch = jsonText.match(/VariableListSaver.*?=\s(.*?)==/s);
    if (variableListMatch) {
        const variablesJson = JSON.parse(variableListMatch[1]);
        masterJson["variableList"] = variablesJson;
        console.log(variablesJson);
    }
    processJson(masterJson);
}

function handleChangeSaveFile(e) {
    const files = e.target.files;
    const validNamePattern = /^global.*\.sav$/;
    var lastSavedFolderFile = null;
    var popSaveGameFile = null;

    if (Array.from(files).length === 0) {
        console.error("No file selected.");
        return;
    }

    var saveFile = files[0];

    if (!saveFile || !validNamePattern.test(saveFile.name)) {
        console.error("Invalid save file.");
        return;
    }

    const saveFileReader = new FileReader();
    saveFileReader.onload = function (event) {
        const data = event.target.result;
        parseAndProcessJson(data);
    }
    saveFileReader.readAsText(saveFile);
}
window.handleChangeSaveFile = handleChangeSaveFile;

function handleCopyLocation(e) {
    navigator.clipboard.writeText(e.target.value);
    document.getElementById("save-location-tooltip-click").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("save-location-tooltip-click").style.visibility = "hidden";
    }, 3000);
}
window.handleCopyLocation = handleCopyLocation;

renderTabButtons("Sukhra's Forge");
renderDataToHTML("Sukhra's Forge");
