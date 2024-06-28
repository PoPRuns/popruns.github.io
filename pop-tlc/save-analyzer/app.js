var renderData = [
    {
        title: "Abilities",
        percentage: 5,
        description: "Each ability from this list provides 0.5% game completion.",
        data: {
            MiniMap: {
                dispalyName: "Eye of the Wanderer",
                isUnlocked: false
            },
            BowAim: {
                dispalyName: "Bow of Menolias",
                isUnlocked: false
            },
            ChakramAim: {
                dispalyName: "Chakram of Menolias",
                isUnlocked: false
            },
            AirDash: {
                dispalyName: "Rush of the Simurgh",
                isUnlocked: false
            },
            Teleport: {
                dispalyName: "Shadow of the Simurgh",
                isUnlocked: false
            },
            Clairvoyance: {
                dispalyName: "Clairvoyance",
                isUnlocked: false
            },
            Warp: {
                dispalyName: "Dimensional Claw",
                isUnlocked: false
            },
            DoubleJump: {
                dispalyName: "Gravity Wings",
                isUnlocked: false
            },
            ChakramTeleport: {
                dispalyName: "Chakram Shadow of the Simurgh",
                isUnlocked: false
            },
            ScarfAim: {
                dispalyName: "Fabric of Time",
                isUnlocked: false
            }
        }
    },
    {
        title: "Athra Surges",
        percentage: 5,
        description: "Each Athra Surge from this list provides 0.5% game completion.",
        data: {
            FocusAbilityPiercingAttack: {
                dispalyName: "Verethragna's Smite",
                isUnlocked: false
            },
            FocusAbilityAntiAir: {
                dispalyName: "Shahbaz' Spirit",
                isUnlocked: false
            },
            FocusAbilityWindSlashAttack: {
                dispalyName: "Wind of Sistan",
                isUnlocked: false
            },
            FocusAbilitySuperChargeAttack: {
                dispalyName: "Vayu's Wave",
                isUnlocked: false
            },
            FocusAbilityHeal: {
                dispalyName: "Bahman's Breath",
                isUnlocked: false
            },
            FocusAbilitySuperShotLaserAim: {
                dispalyName: "Arash's Ray",
                isUnlocked: false
            },
            FocusAbilityGroundSlam: {
                dispalyName: "Hadhayans' Might",
                isUnlocked: false
            },
            FocusAbilitySuperWarrior: {
                dispalyName: "Soul of Gilgamesh",
                isUnlocked: false
            },
            FocusAbilityMaelstrom: {
                dispalyName: "Bahamut's Rage",
                isUnlocked: false
            },
            FocusAbilityFullCounterStance: {
                dispalyName: "Rashnu's Judgment",
                isUnlocked: false
            }
        }
    }
];

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
            const listItem = document.createElement('p');
            listItem.innerText = `${value.isUnlocked ? "☑️" : "❌"} ${value.dispalyName}`;
            sectionData.appendChild(listItem);
        }
        mainDiv.appendChild(sectionData);
    });
}

function openFolderDialog() {
    var input = document.getElementById('folderInput');
    input.click();
}

function processJson(jsonObj) {
    const entityManager = jsonObj.m_list.find(obj => obj.m_sceneName === "EntitiesManager");
    const progressionData = entityManager.m_entities[0].m_frames[0].m_dataList.find(obj => obj && obj["@type"] === "Alkawa.Gameplay.PlayerProgressionSubComponent+PlayerProgressionSaveData");
    const unlockedAbilites = progressionData.m_progression.m_playerAbilitiesProgressionData.m_unlockedAbilities;
    console.log(unlockedAbilites);
    var abilitySectionData = renderData.find(section => section.title === "Abilities").data;
    for (var ability in abilitySectionData) {
        abilityProps = abilitySectionData[ability];
        if (unlockedAbilites.includes(ability)) {
            abilityProps.isUnlocked = true;
        }
        else {
            abilityProps.isUnlocked = false;
        }
    }
    var athraSectionData = renderData.find(section => section.title === "Athra Surges").data;
    for (var surge in athraSectionData) {
        surgeProps = athraSectionData[surge];
        if (unlockedAbilites.includes(surge)) {
            surgeProps.isUnlocked = true;
        }
        else {
            surgeProps.isUnlocked = false;
        }
    }
    renderDataToHTML();

    console.log("Unlocked Abilites:", unlockedAbilites);
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
                            const jsonObj = JSON.parse(text.slice(text.indexOf("{")));
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

renderDataToHTML();
