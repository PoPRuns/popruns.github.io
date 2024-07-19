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
            if (value.quantity) {
                const flowerImg = document.createElement('img');
                if (value.quantity === 4) {
                    flowerImg.src = 'full_flower.svg';
                }
                else {
                    flowerImg.src = 'single_flower.svg';
                }
                flowerImg.width = flowerImg.width = 20;
                listItemDiv.appendChild(flowerImg);
            }
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

    renderData = structuredClone(initialData);

    function updateSectionData(title, percentPerItem, checkUnlock) {
        const section = renderData.find(section => section.title === title);
        const sectionData = section.data;
        for (var item in sectionData) {
            const itemProps = sectionData[item];
            const isUnlocked = checkUnlock(item, itemProps);
            itemProps.isUnlocked = isUnlocked;
            section.completedPercent += isUnlocked * !itemProps.displayName.includes("*") * (itemProps.level ?? 1) * (itemProps.quantity ?? 1) * percentPerItem;
        }
    }

    function getObjectFromGUID(item) {
        const [sceneGUID, objectGUID] = item.split("_").map(id => parseInt(id.substring(1)));
        const sceneObj = sceneList.find(obj => obj.m_sceneGUID === sceneGUID);
        const objectObj = (sceneObj?.m_entities ?? []).find(obj => obj.m_objectGUID === objectGUID);
        return objectObj
    }

    function checkChestPickedFromScene(item, itemType) {
        const objectObj = getObjectFromGUID(item);
        const inventorySaveObj = ((objectObj?.m_frames ?? [null])[0]?.m_dataList ?? []).find(obj => obj && obj["@type"] === "Alkawa.Gameplay.InventorySubComponent+InventoryStateInfoSaveData");
        const doesItemExist = (inventorySaveObj?.m_inventoryStateInfoData?.m_items ?? []).find(obj => obj.m_itemType === itemType)?.m_itemAmount;
        return (objectObj !== undefined && !doesItemExist);
    }

    function checkIEPickedFromScene(item) {
        const objectObj = getObjectFromGUID(item);
        const IESaveObj = ((objectObj?.m_frames ?? [null])[0]?.m_dataList ?? []).find(obj => obj && obj["@type"] === "Alkawa.Gameplay.InteractiveElementActionSubComponent+IEASaveData");
        const IEInteracted = (IESaveObj?.m_logicsData ?? []).find(obj => obj["@type"] === "Alkawa.Gameplay.InteractiveElementLogicBase+IELBSaveData")?.m_stateinfoSaveData?.m_alreadyInteracted;
        return (IESaveObj !== undefined && IEInteracted);
    }

    function checkBossLootPicked(item) {
        debugger;
        const [questlootGUID, sceneGUID] = item.split("_");
        const questInfo = questInfoList.find(obj => obj.m_GUID === questlootGUID);
        const questState = questInfo?.m_questElementsFlatList.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        const questDone = (questState === "Ended");
        const doesLootExist = lootInfoList.find(obj => obj.m_sceneGUID.toString() === sceneGUID);
        return (questDone && !doesLootExist);
    }

    updateSectionData("Main Quests", (15 / 4), (quest, questProps) => {
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        return (questState === "Ended");
    });

    updateSectionData("Side Quests", (20 / 9), (quest, questProps) => {
        const questInfo = questInfoList.find(obj => obj.m_GUID === quest);
        const questState = questInfo?.m_questElementsFlatList.find(obj => obj["@type"] === "Alkawa.Gameplay.QuestSaveData")?.m_currentState;
        return (questState === "Ended");
    });

    updateSectionData("Location Discovery", (1 / 3), (location, locationrops) => {
        const locationId = parseInt(location.replace("Level_", ""));
        return unlockedLevels.includes(locationId);
    });

    updateSectionData("Abilities", (1 / 2), (ability, abilityProps) => {
        return unlockedAbilites.includes(ability);
    });

    updateSectionData("Athra Surges", (1 / 2), (surge, surgeProps) => {
        return unlockedAbilites.includes(surge);
    });

    updateSectionData("Amulets", (5 / 98), (amulet, amuletProps) => {
        if (unlockedAmulets.includes(amulet)) {
            amuletProps.level = amuletLevels[unlockedAmulets.indexOf(amulet)];
            return true;
        }
        return false;
    });

    updateSectionData("Amulet Holders", (5 / 9), (holder, holderProps) => {
        if (holder === "Special_ProphecyQuestReward") {
            const inventoryJars = inventoryData.find(obj => obj.m_itemType === "QuestItem_FrescoElement")?.m_itemAmount ?? 0;
            const collectedJars = inventoryProgressionData.m_itemLootCount.find(obj => obj.key === "QuestItem_FrescoElement")?.value ?? 0;
            const depositedJars = collectedJars - inventoryJars;
            const doesLootExist = lootInfoList.find(obj => obj.m_type.includes("SeedOfKnowledge"));
            return (depositedJars >= 15 && !doesLootExist);
        }
        return checkChestPickedFromScene(holder, "SeedOfKnowledge");
    });

    updateSectionData("Equipment Upgrades", (5 / 6), (upgrade, upgradeProps) => {
        return inventoryList.includes(upgrade);
    });

    updateSectionData("Soma Flowers", (5 / 48), (petal, petalProps) => {
        if (petal.startsWith("S")) {
            return checkChestPickedFromScene(petal, "HaomaFragment");
        }
        else if (petal.startsWith("IE_")) {
            return checkIEPickedFromScene(petal.slice(3));
        }
        else if (petal.startsWith("BossLoot_")) {
            return checkBossLootPicked(petal.slice(9));
        }
        return false;
    });

    updateSectionData("Memory Shards", (5 / 6), (shard, shardProps) => {
        if (shard === "Special_VisionAbility") {
            return inventoryList.includes("GearUpgrade_VisionPackShop1");
        }
        return checkChestPickedFromScene(shard, "GearUpgrade_VisionPackChest");
    });

    updateSectionData("Skins", 1, (skin, upgradePrskinropsops) => {
        return unlockedSkins.includes(skin);
    });

    updateSectionData("Lore Items", (5 / 57), (loreItem, loreItemProps) => {
        return inventoryList.includes(loreItem);
    });

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
