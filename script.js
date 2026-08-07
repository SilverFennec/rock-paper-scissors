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

function getUserChoice() {
  // get case-insensitive user input
  let userChoice = prompt("Enter rock, paper, or scissors", "").toLowerCase();
  
  return userChoice; 
}

const roundLog = document.querySelector('.roundLog'); 

let userSelection = document.querySelector('#userSelection');
let runningScore = document.querySelector('#runningScore');

let roundResult; 

let currentRound = 0;
let rounds = 5;

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
  }
)


  // play x number of rounds
  /* for (let i = 0; i < rounds; i++) {
  playRound(getUserChoice(), getComputerChoice());
  } */
  
  let winner; 
  if (humanScore > computerScore) {
    winner = "human"; 
  }
  else if (humanScore < computerScore) {
    winner = "computer"; 
  }
  else {
    winner = "tie"
  }
  console.log("Winner = ", winner)
  
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

// let rounds = +prompt("Enter the number of rounds you want to play: ", '');

playGame(rounds); 
