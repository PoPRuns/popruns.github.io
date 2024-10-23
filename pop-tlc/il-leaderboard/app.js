const GAME_ID = "o1y3re46";
const IL_CAT_ID = "n2yz3lzk";

const levelMapping = {};
const userMapping = {};
var levelVars = []

const tabs = {
    "Boss": {
        label: "Boss Attack",
        categories: ["Rookie", "Immortal", "No Hit"]
    },
    "Hound": {
        label: "Divine Trials - Hound",
        categories: ["Rookie", "Immortal"]
    },
    "Peacock": {
        label: "Divine Trials - Peacock",
        categories: ["Rookie", "Immortal"]
    },
    "Stallion": {
        label: "Divine Trials - Stallion",
        categories: ["Rookie", "Immortal"]
    },
    "Auroch": {
        label: "Divine Trials - Auroch",
        categories: ["Rookie", "Immortal"]
    },
}

fetch(`https://www.speedrun.com/api/v1/games/${GAME_ID}/levels`)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(levelVar => {
            levelMapping[levelVar.id] = levelVar.name;
        });
        fetch(`https://www.speedrun.com/api/v1/games/${GAME_ID}/variables`)
            .then(response => response.json())
            .then(data => {
                levelVars = data.data.filter(variable => variable.category === IL_CAT_ID && variable.name === "Difficulty");
                renderTabButtons("Boss");
                renderDataToHTML("Boss");
            })
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });

function cleanCategoryName(categoryName) {
    const removeList = ["Boss Revenge - ", " (All Bosses)", "Divine Trial - ", "Hound: ", "Peacock: ", "Stallion: ", "Auroch: "];
    removeList.forEach(word => {
        categoryName = categoryName.replace(word, "");
    });
    return categoryName;
}

function renderTabButtons(tab) {
    const mainDiv = document.getElementById('tab-buttons-container');
    mainDiv.innerText = '';
    for (const key in tabs) {
        const obj = tabs[key];
        const tabButton = document.createElement('button');
        tabButton.classList.add("tab-button");
        if (key === tab) {
            tabButton.classList.add("tab-button-selected");
        }
        tabButton.onclick = () => renderDataToHTML(key);
        tabButton.innerText = obj.label;
        mainDiv.appendChild(tabButton);
    }
}

async function fetchRunData(levelId, varKey = null, varValue = null) {
    let url = `https://www.speedrun.com/api/v1/leaderboards/${GAME_ID}/level/${levelId}/${IL_CAT_ID}?top=1&embed=players`;
    if (varKey && varValue) {
        url += `&var-${varKey}=${varValue}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        const bestRun = data.data.runs.find(item => item.place === 1);

        if (bestRun) {
            const userData = data.data.players.data[0];
            return [bestRun.run.times.primary_t, userData.names.international, userData.location.country.code];
        }
    } catch (error) {
        console.error('Error fetching run data:', error);
    }

    return ["-", null, null];
}

function formatTime(seconds) {
    if (typeof seconds !== 'number') return '-';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(2).padStart(5, "0");
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

function insertCell(levelVar, row, index, subCatString) {
    const cell = row.insertCell(index);
    const varValue = Object.keys(levelVar.values.choices).find(key => levelVar.values.choices[key] === subCatString);

    fetchRunData(levelVar.scope.level, levelVar.id, varValue).then(info => {
        populateRunCell(info, cell);
    });
}

function populateRunCell(info, cell) {
    const [time, playerId, countryCode] = info;
    const timeDiv = document.createElement('div');
    timeDiv.innerText = `${formatTime(time)}`;
    timeDiv.style.color = 'rgba(209,213,219,.8)';
    cell.appendChild(timeDiv);
    if (playerId !== null) {
        const playerDiv = document.createElement('div');
        playerDiv.style.display = 'flex';
        if (countryCode !== null) {
            const flagImg = document.createElement('img');
            flagImg.src = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${countryCode}.svg`;
            flagImg.alt = `flag_${countryCode}`;
            flagImg.width = 18;
            flagImg.style.paddingRight = '5px';
            playerDiv.appendChild(flagImg);
        }
        const playerElement = document.createElement('span');
        playerElement.innerText = `${playerId}`;
        playerDiv.appendChild(playerElement);

        cell.appendChild(playerDiv);
    }
}

function insertSingle(row, levelId, noOfCategories) {
    const cell = row.insertCell(1);
    cell.colSpan = noOfCategories;
    fetchRunData(levelId).then(info => {
        populateRunCell(info, cell);
    });
}

function renderDataToHTML(tab) {
    renderTabButtons(tab);
    const tabObj = tabs[tab];
    const mainContainter = document.getElementById('dymanic');
    mainContainter.innerText = "";
    const levelsTable = document.createElement('table');
    const levelsRow = document.createElement('tr');
    const emptyCell = document.createElement('th');
    levelsRow.appendChild(emptyCell);
    const categories = tabObj.categories;
    categories.forEach(element => {
        const categoryCell = document.createElement('th');
        categoryCell.innerText = element;
        levelsRow.appendChild(categoryCell);
    });
    levelsTable.appendChild(levelsRow);
    mainContainter.appendChild(levelsTable);

    for (const levelId in levelMapping) {
        const levelName = levelMapping[levelId];
        if (!levelName.includes(tab)) {
            continue;
        }
        const newRow = levelsTable.insertRow();
        const levelCell = newRow.insertCell(0);
        levelCell.textContent = cleanCategoryName(levelName);
        const levelVar = levelVars.find(obj => obj.scope.level === levelId);
        if (levelVar) {
            let index = 1;
            categories.forEach(category => {
                insertCell(levelVar, newRow, index, category);
                index += 1;
            });
        }
        else {
            insertSingle(newRow, levelId, categories.length);
        }
    }
}
