function getComputerChoice() {
  let computerChoice
  // output: 0, 1 or 2
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    computerChoice = "rock"; 
  }
  else if (randomNumber == 1) {
    computerChoice = "paper"; 
  }
  else {
    computerChoice = "scissors"; 
  }
  return computerChoice; 
}

let userSelection = document.querySelector('#userSelection');
let runningScore = document.querySelector('.runningScore');
let roundLog = document.querySelector('.roundLog'); 
let gameWinner = document.querySelector('.gameWinner')

let roundResult; 

let currentRound = 0;

function playGame(rounds) {
  
  let humanScore = 0;
  let computerScore = 0;
  let userChoice;
  
  userSelection.addEventListener('click', (event) => {
  userChoice = event.target.textContent;
  playRound(userChoice, getComputerChoice())
  
  runningScore.textContent = `human score: ${humanScore}, computer score: ${computerScore}`
  
  currentRound++;
  
  roundLog.textContent += `Round ${currentRound}: ${roundResult}\n`
  
  if (currentRound === rounds) {
    userSelection.textContent = ''; 
    
    if (humanScore > computerScore) {
      gameWinner.textContent = 'You won!'
    }
    else if (humanScore < computerScore) {
      gameWinner.textContent = 'You lost!'
    }
    else {
      gameWinner.textContent = 'You tied!'
    }
  }
  
  }
)
  
  // determine round-winner
  function playRound(humanChoice, computerChoice) {
  
    if (humanChoice == "rock" && computerChoice == "paper") {
      roundResult = "You lose! Paper beats rock";
      computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
      roundResult = "You win! Rock beats scissors";
      humanScore++;
    }
  
    else if (humanChoice == "paper" && computerChoice == "scissors") {
      roundResult = "You lose! Scissors beat paper";
      computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
      roundResult = "You win! Paper beats rock";
      humanScore++;
    }
  
    else if (humanChoice == "scissors" && computerChoice == "rock") {
      roundResult = "You lose! Rock beats scissors";
      computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
      roundResult = "You win! Scissors beat paper";
      humanScore++;
    }
  
    else if (humanChoice == computerChoice) {
      roundResult = "Tie";
      humanScore++;
      computerScore++;
    }
  }
}

playGame(5); 
