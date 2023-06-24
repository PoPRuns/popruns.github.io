const loaderElement = document.getElementById('loader')
const bracketElement = document.getElementById('bracket')
const roundOneMatches = document.querySelectorAll('.round-one .match-wrap');
const roundTwoMatches = document.querySelectorAll('.round-two .match-wrap');
fetch("https://api.npoint.io/21f2d9c5dbc231974f6a")
  .then(response => response.json())
  .then(data => {
    data.roundOneMatches.forEach((match, index) => {
      const matchElement = roundOneMatches[index];
      const topPlayerElement = matchElement.querySelector('.player-top');
      const bottomPlayerElement = matchElement.querySelector('.player-bottom');

      setPlayerData(topPlayerElement, match.top);
      setPlayerData(bottomPlayerElement, match.bottom);
    });
    data.roundTwoMatches.forEach((match, index) => {
      const matchElement = roundTwoMatches[index];
      const topPlayerElement = matchElement.querySelector('.player-top');
      const bottomPlayerElement = matchElement.querySelector('.player-bottom');

      setPlayerData(topPlayerElement, match.top);
      setPlayerData(bottomPlayerElement, match.bottom);
    });
    loaderElement.style.display = "none";
    bracketElement.style.display = "initial";
  })
  .catch(error => {
    loaderElement.style.textAlign = "center";
    loaderElement.style.color = "white"
    loaderElement.innerHTML = 'Error Occured';
    console.error(error);
  });

function setPlayerData(playerElement, playerData) {
  if (typeof playerData !== 'undefined') {
    playerElement.querySelector('.seed').textContent = playerData.seed;
    playerElement.querySelector('.player-name').textContent = playerData.player;
    playerElement.querySelector('.life').innerHTML = '&#9654;&#9654;';
    playerElement.querySelector('.score').textContent = playerData.score;
    if (playerData.score === 2) {
      playerElement.classList.add('winner');
    }
    else {
      playerElement.classList.add('active');
    }
  }
}
