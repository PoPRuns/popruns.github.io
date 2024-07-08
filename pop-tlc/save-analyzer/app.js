import initialData from "./data.js";

var renderData = structuredClone(initialData);

function renderDataToHTML() {
    const mainDiv = document.getElementById('dynamic');
    mainDiv.textContent = '';
    renderData.forEach(section => {
        const sectionTitleDiv = document.createElement('div');
        sectionTitleDiv.classList.add("section-header");
        const sectionTitleSpan = document.createElement('span');
        sectionTitleSpan.innerText = section.title;
        sectionTitleDiv.appendChild(sectionTitleSpan);
        if (section.percentage > 0) {
            const percentageDiv = document.createElement('div');
            percentageDiv.classList.add("percent-box");
            percentageDiv.innerText = `${section.percentage}%`;
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
                itemDesc.innerText = ` — ${value.description}`;
                listItemDiv.appendChild(itemDesc);
            }
            sectionData.appendChild(listItemDiv);
        }
        mainDiv.appendChild(sectionData);
    });
}

function openFolderDialog() {
    var input = document.getElementById('folderInput');
    input.click();
}
window.openFolderDialog = openFolderDialog;

function processJson(jsonObj) {
    const sceneList = jsonObj.m_list;
    const gameManagerFrames = sceneList.find(obj => obj.m_sceneName === "GameManager").m_entities[0].m_frames;
    const questInfoList = gameManagerFrames.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.QuestSaveDataFrame").m_Data;

    const entityManager = sceneList.find(obj => obj.m_sceneName === "EntitiesManager");
    const progressionData = entityManager.m_entities[0].m_frames[0].m_dataList.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.PlayerProgressionSubComponent+PlayerProgressionSaveData")?.m_progression;
    const unlockedAbilites = progressionData.m_playerAbilitiesProgressionData.m_unlockedAbilities;
    const unlockedAmulets = progressionData.m_playerStoneOfKnowledgeProgressionData.m_unlockedStoneOfKnowledges;
    const amuletLevels = progressionData.m_playerStoneOfKnowledgeProgressionData.m_stoneLevels;
    const unlockedSkins = progressionData.m_playerSkinProgressionData.m_unlockedSkins.map(obj => obj.m_skin);
    const inventoryData = progressionData.m_playerInventoryProgressionData.m_inventory.map(obj => obj.m_itemType);

    const mapSaveData = entityManager.m_entities[0].m_frames[0].m_dataList.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.PlayerMapSubComponent+PlayerMapSaveData");
    const unlockedLevels = mapSaveData.m_uncoveredLevels.map(obj => obj.key);

    var mainQuestSectionData = renderData.find(section => section.title === "Main Quests").data;
    for (var quest in mainQuestSectionData) {
        const questProps = mainQuestSectionData[quest];
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        if (questState === "Ended") {
            questProps.isUnlocked = true;
        }
        else {
            questProps.isUnlocked = false;
        }
    }

    var sideQuestSectionData = renderData.find(section => section.title === "Side Quests").data;
    for (var quest in sideQuestSectionData) {
        const questProps = sideQuestSectionData[quest];
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList?.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        if (questState === "Ended") {
            questProps.isUnlocked = true;
        }
        else {
            questProps.isUnlocked = false;
        }
    }

    var locationSectionData = renderData.find(section => section.title === "Location Discovery").data;
    for (var location in locationSectionData) {
        const locationrops = locationSectionData[location];
        const locationId = parseInt(location.replace("Level_", ""));
        if (unlockedLevels.includes(locationId)) {
            locationrops.isUnlocked = true;
        }
        else {
            locationrops.isUnlocked = false;
        }
    }

    var abilitySectionData = renderData.find(section => section.title === "Abilities").data;
    for (var ability in abilitySectionData) {
        const abilityProps = abilitySectionData[ability];
        if (unlockedAbilites.includes(ability)) {
            abilityProps.isUnlocked = true;
        }
        else {
            abilityProps.isUnlocked = false;
        }
    }

    var athraSectionData = renderData.find(section => section.title === "Athra Surges").data;
    for (var surge in athraSectionData) {
        const surgeProps = athraSectionData[surge];
        if (unlockedAbilites.includes(surge)) {
            surgeProps.isUnlocked = true;
        }
        else {
            surgeProps.isUnlocked = false;
        }
    }

    var amuletSectionData = renderData.find(section => section.title === "Amulets").data;
    for (var amulet in amuletSectionData) {
        const amuletProps = amuletSectionData[amulet];
        if (unlockedAmulets.includes(amulet)) {
            amuletProps.isUnlocked = true;
            const amuletLevel = amuletLevels[unlockedAmulets.indexOf(amulet)];
            amuletProps.level = amuletLevel;
        }
        else {
            amuletProps.isUnlocked = false;
            amuletProps.level = 0;
            amuletProps.description = initialData.find(section => section.title === "Amulets").data[amulet].description;
        }
    }

    var holderSectionData = renderData.find(section => section.title === "Amulet Holders").data;
    for (var holder in holderSectionData) {
        const holderProps = holderSectionData[holder];
        const sceneGUID = parseInt(holder.split("_")[0].substring(1));
        const objectGUID = parseInt(holder.split("_")[1].substring(1));

        const sceneObj = sceneList.find(obj => obj.m_sceneGUID === sceneGUID);
        const objectObj = (sceneObj?.m_entities ?? []).find(obj => obj.m_objectGUID === objectGUID);
        const inventorySaveObj = ((objectObj?.m_frames ?? [null])[0]?.m_dataList ?? []).find(obj => obj && obj["@type"] === "Alkawa.Gameplay.InventorySubComponent+InventoryStateInfoSaveData");
        const doesHolderExist = (inventorySaveObj?.m_inventoryStateInfoData?.m_items ?? []).find(obj => obj.m_itemType === "SeedOfKnowledge")?.m_itemAmount;


        if (objectObj !== undefined && !doesHolderExist) {
            holderProps.isUnlocked = true;
        }
        else {
            holderProps.isUnlocked = false;
        }
    }

    var upgradeSectionData = renderData.find(section => section.title === "Equipment Upgrades").data;
    for (var upgrade in upgradeSectionData) {
        const upgradeProps = upgradeSectionData[upgrade];
        if (inventoryData.includes(upgrade)) {
            upgradeProps.isUnlocked = true;
        }
        else {
            upgradeProps.isUnlocked = false;
        }
    }

    var skinSectionData = renderData.find(section => section.title === "Skins").data;
    for (var skin in skinSectionData) {
        const skinrops = skinSectionData[skin];
        if (unlockedSkins.includes(skin)) {
            skinrops.isUnlocked = true;
        }
        else {
            skinrops.isUnlocked = false;
        }
    }

    var loreSectionData = renderData.find(section => section.title === "Lore Items").data;
    for (var loreItem in loreSectionData) {
        const loreItemProps = loreSectionData[loreItem];
        if (inventoryData.includes(loreItem)) {
            loreItemProps.isUnlocked = true;
        }
        else {
            loreItemProps.isUnlocked = false;
        }
    }

    renderDataToHTML();
}

function handleChangeSaveFile(e) {
    console.log(e.target.value);
    const files = e.target.files;
    var lastSavedFolderFile = null;
    var popSaveGameFile = null;

    Array.from(files).forEach(file => {
        if (file.name === "lastSavedFolder.txt") {
            lastSavedFolderFile = file;
        }
    });

    if (lastSavedFolderFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const saveFilePartial = `Save_${e.target.result}/PopSaveGameSlot`;
            Array.from(files).forEach(file => {
                if (file.webkitRelativePath.includes(saveFilePartial)) {
                    popSaveGameFile = file;
                }
            });
            if (popSaveGameFile) {
                const saveFileReader = new FileReader();
                saveFileReader.onload = function (event) {
                    const data = event.target.result;
                    if (data.byteLength <= 1074) {
                        console.error("File is too short to delete specified bytes.");
                        return;
                    }
                    const newData = new Blob([data.slice(1074)], { type: 'application/gzip' });
                    const ds = new DecompressionStream("gzip");
                    const decompressedStream = newData.stream().pipeThrough(ds);
                    // Read the decompressed data as chunks
                    const saveReader = decompressedStream.getReader();
                    const chunks = [];

                    (async function () {
                        try {
                            while (true) {
                                const { done, value } = await saveReader.read();
                                if (done) break;
                                chunks.push(value);
                            }

                            // Concatenate all chunks into a single ArrayBuffer
                            const concatenated = chunks.reduce((acc, chunk) => {
                                const chunkArray = new Uint8Array(chunk);
                                const tmp = new Uint8Array(acc.byteLength + chunkArray.byteLength);
                                tmp.set(new Uint8Array(acc), 0);
                                tmp.set(chunkArray, acc.byteLength);
                                return tmp.buffer;
                            }, new ArrayBuffer(0));

                            const textDecoder = new TextDecoder('utf-8');
                            const text = textDecoder.decode(concatenated);
                            const jsonObj = JSON.parse(text.substring(text.indexOf("{")));
                            console.log("Decoded JSON:", jsonObj);
                            processJson(jsonObj);
                        } catch (error) {
                            console.error("Error reading file stream:", error);
                        } finally {
                            saveReader.releaseLock();
                        }
                    })();
                };
                saveFileReader.readAsArrayBuffer(popSaveGameFile);
            }
            else {
                console.log(`${saveFilePartial} not found in the selected folder.`);
            }
        };
        reader.readAsText(lastSavedFolderFile);
    } else {
        console.log("lastSavedFolder.txt not found in the selected folder.");
    }
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

renderDataToHTML();
