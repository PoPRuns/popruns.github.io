const loaderElement = document.getElementById('loader');
const bracketElement = document.getElementById('bracket');
const scheduleElement = document.getElementById('schedule-results');
const scheduleBody = scheduleElement.querySelector('#table-body');
const leaderboardElement = document.getElementById('leaderboard');
const tableBody = leaderboardElement.querySelector('#table-body');
const roundThreeMatches = document.querySelectorAll('.round-three .match-wrap');
const roundFourMatches = document.querySelectorAll('.round-four .match-wrap'); //Semi-Final

const groupTables = document.getElementById('group-tables');

const createCell = (content, cellType = 'td') => {
  const cell = document.createElement(cellType);
  if (typeof content !== 'object') {
    console.log(typeof content);
    cell.textContent = content;
  }
  else {
    cell.appendChild(content);
  }
  return cell;
};

fetch("https://api.npoint.io/21f2d9c5dbc231974f6a")
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

    players.forEach((playerObj) => {
      playerObj.poolMatches = 0;
      playerObj.poolWins = 0;
      playerObj.poolLosses = 0;
      playerObj.poolMiniWins = 0;
      playerObj.poolTimes = [];
      playerObj.times = [];
    });

    matches.forEach((match) => {
      let player1Score = 0;
      let player2Score = 0;
      const player1 = players.find((obj) => obj.seed === match.player1.seed);
      const player2 = players.find((obj) => obj.seed === match.player2.seed);

      if (match.type !== 'pool') {
        populateKOMatchData(match.type, player1, player2);
      }

      if (player1 && player2) {
        match.player1.times.forEach((time, index) => {
          player1Score += (time < match.player2.times[index] ? 1 : 0);
          player2Score += (time > match.player2.times[index] ? 1 : 0);
        })

        player1.times.push(...match.player1.times);
        player2.times.push(...match.player2.times);
        if (match.type === 'pool') {
          if (player1Score >= 3) {
            player1.poolMatches += 1;
            player1.poolWins += 1;
            player2.poolMatches += 1;
            player2.poolLosses += 1;
          }
          if (player2Score >= 3) {
            player1.poolMatches += 1;
            player1.poolLosses += 1;
            player2.poolMatches += 1;
            player2.poolWins += 1;
          }
          player1.poolMiniWins += player1Score;
          player1.poolTimes.push(...match.player1.times);
          player2.poolMiniWins += player2Score;
          player2.poolTimes.push(...match.player2.times);
        }
        else {
          populateKOMatchScore(match.type, player1Score, player2Score);
        }
      }

      if (match.timestamp) {
        // Create a new row in the schedule table
        const date = new Date(match.timestamp * 1000);
        const options = { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' };
        const dateTimeString = date.toLocaleString('en-US', options);
        const scheduleRow = document.createElement('tr');
        const playersList = document.createElement('ul');
        playersList.appendChild(createCell(player1.player, 'li'));
        playersList.appendChild(createCell(player2.player, 'li'));
        scheduleRow.appendChild(createCell(dateTimeString));
        scheduleRow.appendChild(createCell(playersList));

        for (let i = 0; i < 5; i++) {
          scheduleRow.appendChild(createCell(generateTimeListMarkup(match.player1.times[i], match.player2.times[i])));
        }

        if (match.youtube) {
          const link = document.createElement('a');
          const icon = document.createElement('i');
          icon.style.fontSize = '1.5em';
          icon.classList.add('fa', 'fa-youtube-play');
          link.appendChild(icon);
          link.href = match.youtube;
          link.target = '_blank';
          scheduleRow.appendChild(createCell(link));
        }
        else {
          scheduleRow.appendChild(createCell('-'));
        }

        const currentUnixTimestamp = Math.floor(Date.now() / 1000);
        scheduleRow.classList.add(match.timestamp < currentUnixTimestamp ? 'past-row' : 'future-row');
        scheduleBody.appendChild(scheduleRow);
      }
    });

    players.forEach((playerObj) => {
      const times = playerObj.times;
      playerObj.average = Infinity;

      if (times.length > 0) {
        const averageTime = times.reduce(function (acc, val) {
          return acc + val;
        }, 0) / times.length;

        const sumOfSquaredDifferences = times.reduce(function (acc, val) {
          const difference = val - averageTime;
          return acc + (difference * difference);
        }, 0);
        const letiance = sumOfSquaredDifferences / times.length;
        playerObj.average = averageTime;
        playerObj.standardDeviation = Math.sqrt(letiance);
      }

      playerObj.fastestTime = Math.min.apply(null, times);
      playerObj.fastestPoolTime = Math.min.apply(null, playerObj.poolTimes);
      playerObj.slowestTime = Math.max.apply(null, times);
    });

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
      headerRow.appendChild(createCell("Games Won"));
      headerRow.appendChild(createCell("Fastest Time"));
      const groupTbody = document.createElement('tbody');

      group.players.sort((a, b) => {
        const playerA = players.find((obj) => obj.seed === a);
        const playerB = players.find((obj) => obj.seed === b);
        return (
          playerB.poolWins - playerA.poolWins ||
          playerB.poolMiniWins - playerA.poolMiniWins ||
          playerA.fastestPoolTime - playerB.fastestPoolTime ||
          a - b
        );
      });

      group.players.forEach((seed) => {
        const playerObj = players.find((obj) => obj.seed === seed);
        const playerRow = document.createElement('tr');
        playerRow.appendChild(createCell(playerObj.player));
        playerRow.appendChild(createCell(playerObj.poolMatches));
        playerRow.appendChild(createCell(playerObj.poolWins));
        playerRow.appendChild(createCell(playerObj.poolLosses));
        playerRow.appendChild(createCell(playerObj.poolMiniWins));
        playerRow.appendChild(createCell(formatTime(playerObj.fastestPoolTime)));
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
      newRow.appendChild(createCell(playerObj.times.length));
      newRow.appendChild(createCell(formatTime(playerObj.average)));
      newRow.appendChild(createCell(formatTime(playerObj.standardDeviation)));
      newRow.appendChild(createCell(formatTime(playerObj.fastestTime)));
      newRow.appendChild(createCell(playerObj.pbBefore));
      newRow.appendChild(createCell(playerObj.pbAfter));
      newRow.appendChild(createCell(formatTime(playerObj.slowestTime)));
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

function formatTime(seconds) {
  if (typeof seconds === 'undefined' || seconds === Infinity || seconds === -Infinity) return '-';
  if (seconds === 3600) return 'DNF';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.trunc(seconds % 60);
  const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

function populateKOMatchData(matchType, player1, player2) {
  const matchElement = document.getElementById(matchType);
  const player1Element = matchElement.querySelector(".matchup .player-top");
  const player2Element = matchElement.querySelector(".matchup .player-bottom");
  if (player1) {
    player1Element.querySelector('.player-name').textContent = player1.player;
    player1Element.querySelector('.seed').textContent = player1.seed;
    player1Element.classList.add('active');
  }
  if (player2) {
    player2Element.querySelector('.player-name').textContent = player2.player;
    player2Element.querySelector('.seed').textContent = player2.seed;
    player2Element.classList.add('active');
  }
}

function populateKOMatchScore(matchType, player1Score, player2Score) {
  if (player1Score + player2Score > 0) {
    const matchElement = document.getElementById(matchType);
    const player1Element = matchElement.querySelector(".matchup .player-top");
    const player2Element = matchElement.querySelector(".matchup .player-bottom");

    player1Element.querySelector('.score').textContent = player1Score;
    player2Element.querySelector('.score').textContent = player2Score;

    if (player1Score >= 3) {
      player1Element.classList.add('winner');
    }
    if (player2Score >= 3) {
      player2Element.classList.add('winner');
    }
  }
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

function goldenTime(time) {
  const element = document.createElement('span');
  element.style.color = '#d39c0a';
  element.textContent = time;
  return element;
}

function generateTimeListMarkup(time1, time2) {
  const formattedTime1 = formatTime(time1);
  const formattedTime2 = formatTime(time2);
  const timeList = document.createElement('ul');
  timeList.appendChild(time1 !== undefined && time1 <= time2 ? createCell(goldenTime(formattedTime1), 'li') : createCell(formattedTime1, 'li'));
  timeList.appendChild(time2 !== undefined && time2 < time1 ? createCell(goldenTime(formattedTime2), 'li') : createCell(formattedTime2, 'li'));
  return timeList;
}
