const GAME_ID = "o1y3re46";
const IL_CAT_ID = "n2yz3lzk";

var levelMapping = {};

async function getBestRun(levelVar, subCatString) {
    const levelId = levelVar.scope.level;
    const varKey = levelVar.id;
    const varValue = Object.keys(levelVar.values.choices).find(key => levelVar.values.choices[key] === subCatString);

    try {
        const response = await fetch(`https://www.speedrun.com/api/v1/leaderboards/${GAME_ID}/level/${levelId}/${IL_CAT_ID}?top=1&var-${varKey}=${varValue}`);
        const data = await response.json();
        const runs = data.data.runs;

        if (runs.length > 0) {
            const run = runs.find(item => item.place === 1);
            if (run !== undefined) {
                const userResponse = await fetch(`https://www.speedrun.com/api/v1/users/${run.run.players[0].id}`);
                const userData = await userResponse.json();
                return [run.run.times.primary_t, userData.data.names.international, userData.data.location.country.code];
            }
        }
        return ["-", null, null];
    } catch (error) {
        console.error('Error fetching best run:', error);
        return ["-", null, null];
    }
}

function formatTime(seconds) {
    if (typeof seconds !== 'number') return '-';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(2).padStart(5,"0");
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

function insertCell(levelVar, row, index, subCatString) {
    const cell = row.insertCell(index);
    getBestRun(levelVar, subCatString).then(info => {
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
    });
}

fetch(`https://www.speedrun.com/api/v1/games/${GAME_ID}/levels`)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(levelVar => {
            levelMapping[levelVar.id] = levelVar.name.replace("Boss Revenge - ", "").replace(" (All Bosses)", "");
        });
        fetch(`https://www.speedrun.com/api/v1/games/${GAME_ID}/variables`)
            .then(response => response.json())
            .then(data => {
                const levelVars = data.data.filter(variable => variable.category === IL_CAT_ID && variable.name === "Difficulty");
                const levelsTable = document.getElementById('levelsTable');
                levelVars.forEach(levelVar => {
                    const newRow = levelsTable.insertRow();
                    const levelCell = newRow.insertCell(0);
                    levelCell.textContent = levelMapping[levelVar.scope.level];
                    insertCell(levelVar, newRow, 1, "Rookie");
                    insertCell(levelVar, newRow, 2, "Immortal");
                    insertCell(levelVar, newRow, 3, "No Hit");
                });
            })
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });
