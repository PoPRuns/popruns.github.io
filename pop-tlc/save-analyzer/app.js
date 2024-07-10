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
    const lootInfoList = gameManagerFrames.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.LootRecorder+LootSaveDataFrame").m_data.m_data;

    const entityManager = sceneList.find(obj => obj.m_sceneName === "EntitiesManager");
    const progressionData = entityManager.m_entities[0].m_frames[0].m_dataList.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.PlayerProgressionSubComponent+PlayerProgressionSaveData")?.m_progression;
    const unlockedAbilites = progressionData.m_playerAbilitiesProgressionData.m_unlockedAbilities;
    const unlockedAmulets = progressionData.m_playerStoneOfKnowledgeProgressionData.m_unlockedStoneOfKnowledges;
    const amuletLevels = progressionData.m_playerStoneOfKnowledgeProgressionData.m_stoneLevels;
    const unlockedSkins = progressionData.m_playerSkinProgressionData.m_unlockedSkins.map(obj => obj.m_skin);
    const inventoryProgressionData = progressionData.m_playerInventoryProgressionData;
    const inventoryData = inventoryProgressionData.m_inventory;
    const inventoryList = inventoryData.map(obj => obj.m_itemType);

    const mapSaveData = entityManager.m_entities[0].m_frames[0].m_dataList.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.PlayerMapSubComponent+PlayerMapSaveData");
    const unlockedLevels = mapSaveData.m_uncoveredLevels.map(obj => obj.key);

    var mainQuestSection = renderData.find(section => section.title === "Main Quests");
    var mainQuestSectionData = mainQuestSection.data;
    mainQuestSection.completedPercent = 0;
    for (var quest in mainQuestSectionData) {
        const questProps = mainQuestSectionData[quest];
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        if (questState === "Ended") {
            questProps.isUnlocked = true;
            if (!questProps.displayName.includes("*")) {
                mainQuestSection.completedPercent += (15 / 4);
            }
        }
        else {
            questProps.isUnlocked = false;
        }
    }

    var sideQuestSection = renderData.find(section => section.title === "Side Quests");
    var sideQuestSectionData = sideQuestSection.data;
    sideQuestSection.completedPercent = 0;
    for (var quest in sideQuestSectionData) {
        const questProps = sideQuestSectionData[quest];
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList?.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        if (questState === "Ended") {
            questProps.isUnlocked = true;
            if (!questProps.displayName.includes("*")) {
                sideQuestSection.completedPercent += (20 / 9);
            }
        }
        else {
            questProps.isUnlocked = false;
        }
    }

    var locationSection = renderData.find(section => section.title === "Location Discovery");
    var locationSectionData = locationSection.data;
    locationSection.completedPercent = 0;
    for (var location in locationSectionData) {
        const locationrops = locationSectionData[location];
        const locationId = parseInt(location.replace("Level_", ""));
        if (unlockedLevels.includes(locationId)) {
            locationrops.isUnlocked = true;
            locationSection.completedPercent += (1 / 3);
        }
        else {
            locationrops.isUnlocked = false;
        }
    }

    var abilitySection = renderData.find(section => section.title === "Abilities");
    var abilitySectionData = abilitySection.data;
    abilitySection.completedPercent = 0;
    for (var ability in abilitySectionData) {
        const abilityProps = abilitySectionData[ability];
        if (unlockedAbilites.includes(ability)) {
            abilityProps.isUnlocked = true;
            abilitySection.completedPercent += (1 / 2);
        }
        else {
            abilityProps.isUnlocked = false;
        }
    }

    var athraSection = renderData.find(section => section.title === "Athra Surges");
    var athraSectionData = athraSection.data;
    athraSection.completedPercent = 0;
    for (var surge in athraSectionData) {
        const surgeProps = athraSectionData[surge];
        if (unlockedAbilites.includes(surge)) {
            surgeProps.isUnlocked = true;
            athraSection.completedPercent += (1 / 2);
        }
        else {
            surgeProps.isUnlocked = false;
        }
    }

    var amuletSection = renderData.find(section => section.title === "Amulets");
    var amuletSectionData = renderData.find(section => section.title === "Amulets").data;
    amuletSection.completedPercent = 0;
    for (var amulet in amuletSectionData) {
        const amuletProps = amuletSectionData[amulet];
        if (unlockedAmulets.includes(amulet)) {
            amuletProps.isUnlocked = true;
            const amuletLevel = amuletLevels[unlockedAmulets.indexOf(amulet)];
            amuletProps.level = amuletLevel;
            if (!amuletProps.displayName.includes("*")) {
                amuletSection.completedPercent += (5 / 98) * amuletLevel;
            }
        }
        else {
            amuletProps.isUnlocked = false;
            amuletProps.level = 0;
            amuletProps.description = initialData.find(section => section.title === "Amulets").data[amulet].description;
        }
    }

    var holderSection = renderData.find(section => section.title === "Amulet Holders");
    var holderSectionData = holderSection.data;
    holderSection.completedPercent = 0;
    for (var holder in holderSectionData) {
        const holderProps = holderSectionData[holder];

        if (holder === "Special_ProphecyQuestReward") {
            const inventoryJars = inventoryData.find(obj => obj.m_itemType === "QuestItem_FrescoElement")?.m_itemAmount ?? 0;
            const collectedJars = inventoryProgressionData.m_itemLootCount.find(obj => obj.key === "QuestItem_FrescoElement")?.value ?? 0;
            const depositedJars = collectedJars - inventoryJars;
            const doesLootExist = lootInfoList.find(obj => obj.m_type.includes("SeedOfKnowledge"));
            if (depositedJars >= 15 && !doesLootExist) {
                holderProps.isUnlocked = true;
                holderSection.completedPercent += (5 / 9);
            }
            else {
                holderProps.isUnlocked = false;
            }
            continue;
        }

        const sceneGUID = parseInt(holder.split("_")[0].substring(1));
        const objectGUID = parseInt(holder.split("_")[1].substring(1));

        const sceneObj = sceneList.find(obj => obj.m_sceneGUID === sceneGUID);
        const objectObj = (sceneObj?.m_entities ?? []).find(obj => obj.m_objectGUID === objectGUID);
        const inventorySaveObj = ((objectObj?.m_frames ?? [null])[0]?.m_dataList ?? []).find(obj => obj && obj["@type"] === "Alkawa.Gameplay.InventorySubComponent+InventoryStateInfoSaveData");
        const doesHolderExist = (inventorySaveObj?.m_inventoryStateInfoData?.m_items ?? []).find(obj => obj.m_itemType === "SeedOfKnowledge")?.m_itemAmount;


        if (objectObj !== undefined && !doesHolderExist) {
            holderProps.isUnlocked = true;
            holderSection.completedPercent += (5 / 9);
        }
        else {
            holderProps.isUnlocked = false;
        }
    }

    var upgradeSection = renderData.find(section => section.title === "Equipment Upgrades");
    var upgradeSectionData = upgradeSection.data;
    upgradeSection.completedPercent = 0;
    for (var upgrade in upgradeSectionData) {
        const upgradeProps = upgradeSectionData[upgrade];
        if (inventoryList.includes(upgrade)) {
            upgradeProps.isUnlocked = true;
            upgradeSection.completedPercent += (5 / 6);
        }
        else {
            upgradeProps.isUnlocked = false;
        }
    }

    var shardSection = renderData.find(section => section.title === "Memory Shards");
    var shardSectionData = shardSection.data;
    shardSection.completedPercent = 0;
    for (var shard in shardSectionData) {
        const shardProps = shardSectionData[shard];

        if (shard === "Special_VisionAbility") {
            if (inventoryList.includes("GearUpgrade_VisionPackShop1")) {
                shardProps.isUnlocked = true;
                shardSection.completedPercent += (5 / 6);
            }
            else {
                shardProps.isUnlocked = false;
            }
            continue;
        }

        const sceneGUID = parseInt(shard.split("_")[0].substring(1));
        const objectGUID = parseInt(shard.split("_")[1].substring(1));

        const sceneObj = sceneList.find(obj => obj.m_sceneGUID === sceneGUID);
        const objectObj = (sceneObj?.m_entities ?? []).find(obj => obj.m_objectGUID === objectGUID);
        const inventorySaveObj = ((objectObj?.m_frames ?? [null])[0]?.m_dataList ?? []).find(obj => obj && obj["@type"] === "Alkawa.Gameplay.InventorySubComponent+InventoryStateInfoSaveData");
        const doesShardExist = (inventorySaveObj?.m_inventoryStateInfoData?.m_items ?? []).find(obj => obj.m_itemType === "GearUpgrade_VisionPackChest")?.m_itemAmount;


        if (objectObj !== undefined && !doesShardExist) {
            shardProps.isUnlocked = true;
            shardSection.completedPercent += (5 / 6);
        }
        else {
            shardProps.isUnlocked = false;
        }
    }

    var skinSection = renderData.find(section => section.title === "Skins");
    var skinSectionData = skinSection.data;
    skinSection.completedPercent = 0;
    for (var skin in skinSectionData) {
        const skinrops = skinSectionData[skin];
        if (unlockedSkins.includes(skin)) {
            skinrops.isUnlocked = true;
            if (!skinrops.displayName.includes("*")) {
                skinSection.completedPercent += 1;
            }
        }
        else {
            skinrops.isUnlocked = false;
        }
    }

    var loreSection = renderData.find(section => section.title === "Lore Items");
    var loreSectionData = loreSection.data;
    loreSection.completedPercent = 0;
    for (var loreItem in loreSectionData) {
        const loreItemProps = loreSectionData[loreItem];
        if (inventoryList.includes(loreItem)) {
            loreItemProps.isUnlocked = true;
            loreSection.completedPercent += (5 / 57);
        }
        else {
            loreItemProps.isUnlocked = false;
        }
    }

    renderDataToHTML();
}

function handleChangeSaveFile(e) {
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
                            const jsonObj = JSON.parse(text.substring(text.indexOf('{"m_list')));
                            console.info("Decoded JSON:", jsonObj);
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
                console.error(`${saveFilePartial} not found in the selected folder.`);
            }
        };
        reader.readAsText(lastSavedFolderFile);
    } else {
        console.error("lastSavedFolder.txt not found in the selected folder.");
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
