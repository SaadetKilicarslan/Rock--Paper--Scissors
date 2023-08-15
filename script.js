const choices = ["rock", "paper", "scissors"];

let gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

let player = {
  choice: null,
};

function playRock() {
  player.choice = "rock";
  playGame();
}

function playPaper() {
  player.choice = "paper";
  playGame();
}

function playScissors() {
  player.choice = "scissors";
  playGame();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Win";
  } else {
    return "Loss";
  }
}

function displayMessage(result) {
  const messageElement = document.getElementById("message");
  messageElement.innerText = `You ${result}!`;
}

function updateGameStats(result) {
  if (result === "Win") {
    gameStats.wins++;
  } else if (result === "Loss") {
    gameStats.losses++;
  } else {
    gameStats.ties++;
  }

  const gameStatsElement = document.getElementById("game-stats");
  gameStatsElement.innerText = `Wins: ${gameStats.wins} | Losses: ${gameStats.losses} | Ties: ${gameStats.ties}`;
}

function playGame() {
  const computerChoice = getComputerChoice();

  const result = compareChoices(player.choice, computerChoice);

  document.getElementById(
    "player-choice"
  ).innerText = `Your Choice: ${player.choice}`;
  document.getElementById(
    "computer-choice"
  ).innerText = `Computer's Choice: ${computerChoice}`;

  displayMessage(result);
  updateGameStats(result);
}
