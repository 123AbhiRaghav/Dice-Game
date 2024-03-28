//Here we take all elements which needs to be changed/interactive
const playerNumSpan = document.getElementById("player-num");
const playerOneScoreSpan = document.getElementById("player-1-score");
const playerTwoScoreSpan = document.getElementById("player-2-score");
const playerOneButton = document.getElementById("player-1-btn");
const playerTwoButton = document.getElementById("player-2-btn");
const resetButton = document.getElementById("reset-btn");
const diceImg = document.getElementById("dice-img");

//Here we set default data for 2 players
const data = {
  currentPlayer: 1,
  playerOneScore: 0,
  playerTwoScore: 0,
};

const setCurrentPlayer = (playerNum) => {
  data.currentPlayer = playerNum;
  playerNumSpan.innerText = data.currentPlayer;
  if (data.currentPlayer == 1) {
    playerOneButton.removeAttribute("disabled");
    playerTwoButton.setAttribute("disabled", "disabled");
  } else {
    playerOneButton.setAttribute("disabled", "disabled");
    playerTwoButton.removeAttribute("disabled");
  }
};

//current player start
const startGame = () => {
  setCurrentPlayer(Math.ceil(Math.random() * 2));
  data.playerOneScore = 0;
  data.playerTwoScore = 0;
  playerTwoScoreSpan.innerText = data.playerTwoScore;
  playerOneScoreSpan.innerText = data.playerOneScore;
};

const rollTheDice = () => {
  const randomNum = Math.ceil(Math.random() * 6);
  diceImg.src = `./public/${randomNum}.png`;
  if (data.currentPlayer == 1) {
    data.playerOneScore += randomNum;
    playerOneScoreSpan.innerText = data.playerOneScore;
  } else {
    data.playerTwoScore += randomNum;
    playerTwoScoreSpan.innerText = data.playerTwoScore;
  }
};

playerOneButton.addEventListener("click", () => {
  rollTheDice();
  if (data.playerOneScore >= 30) {
   setTimeout(() => alert("Player1 Won The Game"),0) ;
    playerOneButton.setAttribute("disabled", "disabled");
    resetButton.removeAttribute("disabled");
  } else {
    setCurrentPlayer(2);
  }
});
playerTwoButton.addEventListener("click", () => {
  rollTheDice();
  if (data.playerTwoScore >= 30) {
    setTimeout(() => alert("Player1 Won The Game"),0)
    playerTwoButton.setAttribute("disabled", "disabled");
    resetButton.removeAttribute("disabled");
  } else {
    setCurrentPlayer(1);
  }
});

resetButton.addEventListener("click", () => {
  startGame();
  resetButton.setAttribute("disabled", "disabled");
});

window.onload = () => {
   startGame();
};
