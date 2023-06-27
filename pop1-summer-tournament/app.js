const loaderElement = document.getElementById('loader');
const bracketElement = document.getElementById('bracket');
const roundOneMatches = document.querySelectorAll('.round-one .match-wrap');
const roundTwoMatches = document.querySelectorAll('.round-two .match-wrap');
const roundThreeMatches = document.querySelectorAll('.round-three .match-wrap');
const roundFourMatches = document.querySelectorAll('.round-four .match-wrap'); //Semi-Final
const roundFiveMatches = document.querySelectorAll('.round-five .match-wrap'); //Final
const secChanceRoundOneMatches = document.querySelectorAll('.sec-chance-round-one .match-wrap');
const secChanceRoundTwoMatches = document.querySelectorAll('.sec-chance-round-two .match-wrap');
const secChanceRoundThreeMatches = document.querySelectorAll('.sec-chance-round-three .match-wrap');
const secChanceRoundFourMatches = document.querySelectorAll('.sec-chance-round-four .match-wrap'); //Semi-Final

fetch("https://api.npoint.io/21f2d9c5dbc231974f6a")
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
      updateMatchData(matchElement, match, 2, 1);
    });
    data.secChanceRoundOneMatches.forEach((match, index) => {
      const matchElement = secChanceRoundOneMatches[index];
      updateMatchData(matchElement, match, 1, 1);
    });
    data.secChanceRoundTwoMatches.forEach((match, index) => {
      console.log(match);
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
    loaderElement.style.display = "none";
    bracketElement.style.display = "initial";
  })
  .catch(error => {
    loaderElement.style.textAlign = "center";
    loaderElement.style.color = "white";
    loaderElement.innerHTML = 'Error Occurred';
    console.error(error);
  });

function updateMatchData(matchElement, match, topLife, bottomLife) {
  const topPlayerElement = matchElement.querySelector('.player-top');
  const bottomPlayerElement = matchElement.querySelector('.player-bottom');
  const matchDataElement = matchElement.querySelector('.match-data');

  setPlayerData(topPlayerElement, match.top, topLife);
  setPlayerData(bottomPlayerElement, match.bottom, bottomLife);

  if (match.timestamp) {
    const date = new Date(match.timestamp * 1000);
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const localTime = date.toLocaleString('en-US', options);
    matchDataElement.querySelector('.match-time').textContent = localTime;
  }
}

function setPlayerData(playerElement, playerData, life) {
  if (typeof playerData !== 'undefined') {
    playerElement.querySelector('.seed').textContent = playerData.seed;
    playerElement.querySelector('.player-name').textContent = playerData.player;
    if (life === 2) {
      playerElement.querySelector('.life').innerHTML = '&#9654;&#9654;';
    }
    else {
      playerElement.querySelector('.life').innerHTML = '&#9654;&#9655;';
    }
    playerElement.querySelector('.score').textContent = playerData.score;
    if (playerData.score === 2) {
      playerElement.classList.add('winner');
    } else {
      playerElement.classList.add('active');
    }
  }
}
