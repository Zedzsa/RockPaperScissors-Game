// UI stuff
const roundsDisplay = document.getElementById("rounds");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");

// Sets the variables that will be used later
let round = 0;
let playerScore = 0;
let computerScore = 0;

// Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Functions to start the game with the selection that is pressed 
// Just learned () => is the same as function(){} kinda

rockButton.addEventListener("click", () => playGame('rock'));
paperButton.addEventListener("click", () => playGame('paper'));
scissorsButton.addEventListener("click", () => playGame('scissors'));

// Updates game ui by converting to UI text.
function updateGameUI() {
    roundsDisplay.textContent = `Round ${round}`;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
};

// Function to generate computer choice
function getComputerChoice(){
    const choices = ['rock' , 'paper' , 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

// Plays a round of the game

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        resultDisplay.textContent = `It's a Tie! Player = ${playerSelection}, Computer = ${computerSelection}`;
    } else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock'))
        {
             playerScore++;
             resultDisplay.textContent = `You Win!, ${playerSelection} beats ${computerSelection}`;
    } else{
        computerScore++;
        resultDisplay.textContent = `You Lose!, ${computerSelection} beats ${playerSelection}`;
    }
};
// Function to play the game. OH REALLY?

function playGame(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection ,computerSelection);
    round++
    updateGameUI();

    if(round === 6){
        alert(`Game Ended, Player score: ${playerScore}, Computer Score: ${computerScore}. Click OK to Reset `);
        endGame();
    } 
};

function endGame() {
    // Resetting scores and round count
    playerScore = 0;
    computerScore = 0;
    round = 0;

    // Update UI to display end of game
    roundsDisplay.textContent = "Round: 0";
    resultDisplay.textContent = "Choose Your Weapon";
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
};