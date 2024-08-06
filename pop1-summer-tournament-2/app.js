const loaderElement = document.getElementById('loader');
const bracketElement = document.getElementById('bracket');
const scheduleElement = document.getElementById('schedule-results');
const leaderboardElement = document.getElementById('leaderboard');
const tableBody = leaderboardElement.querySelector('#table-body');
const roundThreeMatches = document.querySelectorAll('.round-three .match-wrap');
const roundFourMatches = document.querySelectorAll('.round-four .match-wrap'); //Semi-Final

const groupTables = document.getElementById('group-tables');

var leaderboardData = [];
var scheduleResults = [];

const createCell = (content) => {
  const cell = document.createElement('td');
  cell.textContent = content;
  return cell;
};

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const players = data.players;
    const groups = data.groups;
    const matches = data.matches;
    const overallStats = {
      totalTimes: [],
      totalAverageTime: 0,
      totalStandardDeviation: 0,
      totalFastestTime: Infinity,
      totalSlowestTime: 0
    };

    groups.forEach((group) => {
      const groupTitle = document.createElement('div');
      groupTitle.classList.add('section-title');
      groupTitle.innerText = `Group ${group.id}`;
      const groupTable = document.createElement('table');
      groupTable.classList.add('schedule-table');
      const groupThead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      headerRow.appendChild(createCell("Player"));
      headerRow.appendChild(createCell("Matches"));
      headerRow.appendChild(createCell("Won"));
      headerRow.appendChild(createCell("Lost"));
      headerRow.appendChild(createCell("Average Time"));
      const groupTbody = document.createElement('tbody');

      group.players.forEach((seed) => {
        const playerObj = players.find((obj) => obj.seed === seed);
        const playerRow = document.createElement('tr');
        playerRow.appendChild(createCell(playerObj.player));
        playerRow.appendChild(createCell(0));
        playerRow.appendChild(createCell(0));
        playerRow.appendChild(createCell(0));
        playerRow.appendChild(createCell("0:00"));
        groupTbody.append(playerRow);
      });

      groupThead.appendChild(headerRow);
      groupTable.appendChild(groupThead);
      groupTable.appendChild(groupTbody);
      groupTables.appendChild(groupTitle);
      groupTables.appendChild(groupTable);
    });

    players.forEach((playerObj) => {
      const newRow = document.createElement('tr');
      newRow.appendChild(createCell(playerObj.player));
      newRow.appendChild(createCell("TODO: No of runs"));
      newRow.appendChild(createCell("TODO: Average"));
      newRow.appendChild(createCell("TODO: SD"));
      newRow.appendChild(createCell("TODO: Fastest"));
      newRow.appendChild(createCell(playerObj.pbBefore));
      newRow.appendChild(createCell(playerObj.pbAfter));
      newRow.appendChild(createCell("TODO: Average"));
      tableBody.appendChild(newRow);
    });

    const overallRow = document.createElement('tr');
    overallRow.appendChild(createCell('Overall'));
    overallRow.appendChild(createCell(overallStats.totalTimes.length));
    overallRow.appendChild(createCell(formatTime(overallStats.totalAverageTime)));
    overallRow.appendChild(createCell(formatTime(overallStats.totalStandardDeviation)));
    overallRow.appendChild(createCell(formatTime(overallStats.totalFastestTime)));
    overallRow.appendChild(createCell(data.wrBefore));
    overallRow.appendChild(createCell(data.wrAfter));
    overallRow.appendChild(createCell(formatTime(overallStats.totalSlowestTime)));
    overallRow.classList.add("overall-stats");
    tableBody.appendChild(overallRow);

    loaderElement.style.display = "none";
    bracketElement.style.display = "block";
  })
  .catch(error => {
    loaderElement.style.textAlign = "center";
    loaderElement.style.color = "white";
    loaderElement.innerHTML = 'Error Occurred';
    console.error(error);
  });

function updateMatchData(matchElement, match, topLife, bottomLife, final = false) {
  const topPlayerElement = matchElement.querySelector('.player-top');
  const bottomPlayerElement = matchElement.querySelector('.player-bottom');
  const matchDataElement = matchElement.querySelector('.match-data');

  setPlayerData(topPlayerElement, match.top, topLife, final);
  setPlayerData(bottomPlayerElement, match.bottom, bottomLife, final);

  if (match.timestamp) {
    let scheduleResult = {}
    const date = new Date(match.timestamp * 1000);
    const options = { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' };
    const localTime = date.toLocaleString('en-US', options);
    matchDataElement.querySelector('.match-time').textContent = localTime;
    scheduleResult.timestamp = match.timestamp;
    scheduleResult.dateTimeString = localTime;
    scheduleResult.topPlayer = match.top.player;
    scheduleResult.bottomPlayer = match.bottom.player;
    scheduleResult.times = [match.top.times, match.bottom.times];
    scheduleResults.push(scheduleResult);
  }
  if (match.youtube) {
    matchDataElement.querySelector('.youtube').innerHTML = `<a href=${match.youtube} target="_blank"><i class="fa fa-youtube-play"></i>Recap</a>`;
  }
}

function setPlayerData(playerElement, playerData, life, final) {
  if (typeof playerData !== 'undefined') {
    playerElement.querySelector('.seed').textContent = playerData.seed;
    playerElement.querySelector('.player-name').textContent = playerData.player;
    if (life === 2) {
      playerElement.querySelector('.life').innerHTML = '&#9654;&#9654;';
    }
    else {
      playerElement.querySelector('.life').innerHTML = '&#9654;&#9655;';
    }

    if (!final) {
      playerElement.querySelector('.score').textContent = playerData.score;
      if (playerData.score === 2) {
        playerElement.classList.add('winner');
      } else {
        playerElement.classList.add('active');
      }
    }
    else {
      playerElement.querySelector('.pre-score').textContent = playerData.scoreOne;
      playerElement.querySelector('.score').textContent = playerData.scoreTwo;
      if (life + playerData.scoreOne >= 5 || playerData.scoreTwo === 3) {
        playerElement.classList.add('winner');
      } else {
        playerElement.classList.add('active');
      }
    }

    if (playerData.times) {
      let existingPlayer = leaderboardData.find(player => player.player === playerData.player);
      if (existingPlayer) {
        // Append times to the existing player's times array
        existingPlayer.times.push(...playerData.times.slice());
      } else {
        // Create a new leaderboard object for the player
        const lbObj = {
          player: playerData.player,
          times: playerData.times.slice()
        };
        leaderboardData.push(lbObj); // Add the new player to the leaderboard
      }
    }
  }
}

function formatTime(seconds) {
  if (typeof seconds === 'undefined') return '-';
  console.log(typeof seconds);
  if (seconds === 3600) return 'DNF';
  if (seconds === Infinity) return '0:00';
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.trunc(seconds % 60);
  let formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

function showBracket() {
  leaderboardElement.style.display = "none";
  scheduleElement.style.display = "none";
  bracketElement.style.display = "block";
}

function showSchedule() {
  leaderboardElement.style.display = "none";
  bracketElement.style.display = "none";
  scheduleElement.style.display = "block";
}

function showLB() {
  bracketElement.style.display = "none";
  scheduleElement.style.display = "none";
  leaderboardElement.style.display = "block";
}

function generateTimeListMarkup(time1, time2) {
  let formattedTime1 = formatTime(time1);
  let formattedTime2 = formatTime(time2);
  let markup = `<ul><li>${time1 !== undefined && time1 <= time2 ? `<span style="color: #d39c0a;">${formattedTime1}</span>` : formattedTime1}</li><li>${time2 !== undefined && time2 < time1 ? `<span style="color: #d39c0a;">${formattedTime2}</span>` : formattedTime2}</li></ul>`;
  return markup;
}
