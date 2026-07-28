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

let humanScore = 0;
let computerScore = 0;

