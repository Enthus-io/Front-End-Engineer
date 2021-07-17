const getUserChoice = (userInput = "") => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  }
  else{
    console.log("ERROR");
  }
}

function getComputerChoice(){
  let ran = Math.floor(Math.random() * 3);

  if(ran === 0)
    return "rock";
  else if(ran === 1)
    return "paper";

  return "scissors";
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "a tie";
  }
  
  else if(userChoice === "rock"){
    
    if(computerChoice === "paper"){
      return "computer";
    }else if(computerChoice === "scissors"){
      return "user";
    }
  }
  
  else if(userChoice === "paper"){
    
    if(computerChoice === "scissors"){
      return "computer";
    }else if(computerChoice === "rock"){
      return "user";
    }
  }
  
  else if(userChoice === "scissors"){
    
    if(computerChoice === "rock"){
      return "computer";
    }else if(computerChoice === "paper"){
      return "user";
    }
  }
}

function playGame(){
  let userChoice = getUserChoice("scissors");
  let computerChoice = getComputerChoice();

  console.log(`The user picked ${userChoice}.`);
  console.log(`The computer picked ${computerChoice}.`);

  console.log("And the winner is " + determineWinner(userChoice, computerChoice));
}

playGame();