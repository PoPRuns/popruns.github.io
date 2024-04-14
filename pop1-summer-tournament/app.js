const loaderElement = document.getElementById('loader');
const bracketElement = document.getElementById('bracket');
const scheduleElement = document.getElementById('schedule-results');
const leaderboardElement = document.getElementById('leaderboard');
const roundOneMatches = document.querySelectorAll('.round-one .match-wrap');
const roundTwoMatches = document.querySelectorAll('.round-two .match-wrap');
const roundThreeMatches = document.querySelectorAll('.round-three .match-wrap');
const roundFourMatches = document.querySelectorAll('.round-four .match-wrap'); //Semi-Final
const roundFiveMatches = document.querySelectorAll('.round-five .match-wrap'); //Final
const secChanceRoundOneMatches = document.querySelectorAll('.sec-chance-round-one .match-wrap');
const secChanceRoundTwoMatches = document.querySelectorAll('.sec-chance-round-two .match-wrap');
const secChanceRoundThreeMatches = document.querySelectorAll('.sec-chance-round-three .match-wrap');
const secChanceRoundFourMatches = document.querySelectorAll('.sec-chance-round-four .match-wrap');
const secChanceRoundFiveMatches = document.querySelectorAll('.sec-chance-round-five .match-wrap'); //Semi-Final

var leaderboardData = [];
var scheduleResults = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    data.roundOneMatches.forEach((match, index) => {
      const matchElement = roundOneMatches[index];
      updateMatchData(matchElement, match, 2, 2);
    });
    data.roundTwoMatches.forEach((match, index) => {
      const matchElement = roundTwoMatches[index];
      updateMatchData(matchElement, match, 2, 2);
    });
    data.roundThreeMatches.forEach((match, index) => {
      const matchElement = roundThreeMatches[index];
      updateMatchData(matchElement, match, 2, 2);
    });
    data.roundFourMatches.forEach((match, index) => {
      const matchElement = roundFourMatches[index];
      updateMatchData(matchElement, match, 2, 2);
    });
    data.roundFiveMatches.forEach((match, index) => {
      const matchElement = roundFiveMatches[index];
      updateMatchData(matchElement, match, 2, 1, final = true);
    });
    data.secChanceRoundOneMatches.forEach((match, index) => {
      const matchElement = secChanceRoundOneMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });
    data.secChanceRoundTwoMatches.forEach((match, index) => {
      const matchElement = secChanceRoundTwoMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });
    data.secChanceRoundThreeMatches.forEach((match, index) => {
      const matchElement = secChanceRoundThreeMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });
    data.secChanceRoundFourMatches.forEach((match, index) => {
      const matchElement = secChanceRoundFourMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });
    data.secChanceRoundFiveMatches.forEach((match, index) => {
      const matchElement = secChanceRoundFiveMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });

    const tableBody = leaderboardElement.querySelector('#table-body');
    const scheduleBody = scheduleElement.querySelector('#table-body');
    const finaleBody = scheduleElement.querySelector('#finale-body');
    // Create an array to store the stats
    var sortedStats = [];
    let overallStats = {
      totalTimes: [],
      totalAverageTime: 0,
      totalStandardDeviation: 0,
      totalFastestTime: Infinity,
      totalSlowestTime: 0
    };

    leaderboardData.forEach(function (stat) {
      let playerName = stat.player;
      const lives = data.stats.find(player => player.player === playerName)?.lives ?? 2;
      const pbBefore = data.stats.find(player => player.player === playerName)?.pbBefore ?? '-';
      const pbAfter = data.stats.find(player => player.player === playerName)?.pbAfter ?? '-';
      let playerLives = ` <span style="color:red; text-shadow: 2px 2px 5px black;">${'&#9654;'.repeat(lives)}${'&#9655;'.repeat(2 - lives)}</span>`;
      let times = stat.times;
      overallStats.totalTimes = overallStats.totalTimes.concat(stat.times.filter(time => time !== 3600));

      // Calculate average time
      let averageTime = times.reduce(function (acc, val) {
        return acc + val;
      }, 0) / times.length;

      // Find fastest time
      let fastestTime = Math.min.apply(null, times);

      // Find slowest time
      let slowestTime = Math.max.apply(null, times);

      // Calculate standard deviation
      let sumOfSquaredDifferences = times.reduce(function (acc, val) {
        let difference = val - averageTime;
        return acc + (difference * difference);
      }, 0);
      let letiance = sumOfSquaredDifferences / times.length;
      let standardDeviation = Math.sqrt(letiance);

      // Push the stat object to the sortedStats array
      sortedStats.push({
        playerName: playerName,
        playerLives: playerLives,
        times: times,
        averageTime: averageTime,
        standardDeviation: standardDeviation,
        fastestTime: fastestTime,
        pbBefore: pbBefore,
        pbAfter: pbAfter,
        slowestTime: slowestTime,
      });
    });

    // Sort the stats by average time in ascending order
    sortedStats.sort(function (a, b) {
      return (
        a.averageTime - b.averageTime ||
        a.standardDeviation - b.standardDeviation ||
        a.fastestTime - b.fastestTime ||
        a.slowestTime - b.slowestTime
      );
    });

    // Calculate overall average time
    overallStats.totalAverageTime = overallStats.totalTimes.reduce(function (acc, val) {
      return acc + val;
    }, 0) / overallStats.totalTimes.length;

    // Find overall fastest time
    overallStats.totalFastestTime = Math.min.apply(null, overallStats.totalTimes);

    // Find overall slowest time
    overallStats.totalSlowestTime = Math.max.apply(null, overallStats.totalTimes);

    // Calculate overall standard deviation
    let sumOfSquaredDifferences = overallStats.totalTimes.reduce(function (acc, val) {
      let difference = val - overallStats.totalAverageTime;
      return acc + (difference * difference);
    }, 0);
    let letiance = sumOfSquaredDifferences / overallStats.totalTimes.length;
    overallStats.totalStandardDeviation = Math.sqrt(letiance);

    // Iterate through the sorted stats and assign them to the HTML elements
    sortedStats.forEach(function (stat) {
      let playerName = stat.playerName;
      let playerLives = stat.playerLives;
      let times = stat.times;
      let averageTime = stat.averageTime;
      let standardDeviation = stat.standardDeviation;
      let fastestTime = stat.fastestTime;
      let slowestTime = stat.slowestTime;
      let pbBefore = stat.pbBefore;
      let pbAfter = stat.pbAfter;

      // Create a new row in the table
      let newRow = document.createElement('tr');
      newRow.innerHTML = '<td>' + playerName + playerLives + '</td>' +
        '<td>' + times.length + '</td>' +
        '<td>' + formatTime(averageTime) + '</td>' +
        '<td>' + formatTime(standardDeviation) + '</td>' +
        '<td>' + formatTime(fastestTime) + '</td>' +
        '<td>' + pbBefore + '</td>' +
        '<td>' + pbAfter + '</td>' +
        '<td>' + formatTime(slowestTime) + '</td>';

      // Append the new row to the table body
      tableBody.appendChild(newRow);
    });

    // Create a new row for overall stats
    let overallRow = document.createElement('tr');
    overallRow.innerHTML = '<td>Overall</td>' +
      '<td>' + overallStats.totalTimes.length + '</td>' +
      '<td>' + formatTime(overallStats.totalAverageTime) + '</td>' +
      '<td>' + formatTime(overallStats.totalStandardDeviation) + '</td>' +
      '<td>' + formatTime(overallStats.totalFastestTime) + '</td>' +
      '<td>' + data.wrBefore + '</td>' +
      '<td>' + data.wrAfter + '</td>' +
      '<td>' + formatTime(overallStats.totalSlowestTime) + '</td>';
    overallRow.classList.add("overall-stats");

    // Append the overall row to the table body
    tableBody.appendChild(overallRow);

    scheduleResults.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    });

    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    scheduleResults.forEach(function (item) {
      let dateTimeString = item.dateTimeString;

      let players = `<ul><li>${item.topPlayer}</li><li>${item.bottomPlayer}</li></ul>`;

      // Create a new row in the table
      let newRow = document.createElement('tr');
      newRow.innerHTML = '<td>' + dateTimeString + '</td>' +
        '<td>' + players + '</td>';

      // Check if the row is in the past or future
      if (item.timestamp < currentUnixTimestamp) {
        newRow.classList.add('past-row');
      } else {
        newRow.classList.add('future-row');
      }

      // Best of 3
      if (item.times[0].length <= 3) {
        for (let i = 0; i < 3; i++) {
          newRow.innerHTML += '<td>' + generateTimeListMarkup(item.times[0][i], item.times[1][i]) + '</td>';
        }
        scheduleBody.appendChild(newRow);
      }
      // Best of 5
      else {
        for (let i = 0; i < 5; i++) {
          newRow.innerHTML += '<td>' + generateTimeListMarkup(item.times[0][i], item.times[1][i]) + '</td>';
        }
        finaleBody.appendChild(newRow);
      }
    });

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
  if (seconds === 3600) return 'DNF';
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
