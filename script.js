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



function playGame(rounds) {
  
  let humanScore = 0;
  let computerScore = 0;
  
  // play x number of rounds
  for (let i = 0; i < rounds; i++) {
  playRound(getUserChoice(), getComputerChoice());
  }
  console.log("Human score = ", humanScore);
  
  // determine round-winner
  function playRound(humanChoice, computerChoice) {
  
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats rock");
      computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    }
  
    else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beat paper");
      computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    }
  
    else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats scissors")
      computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beat paper");
      humanScore++;
    }
  
    else if (humanChoice == computerChoice) {
      console.log("Tie");
      humanScore++;
      computerScore++;
    }
  }
}

let rounds = +prompt("Enter the number of rounds you want to play: ", ''); 

playGame(rounds); 
