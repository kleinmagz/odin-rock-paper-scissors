let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
   const raw = prompt("Enter choice [rock, paper, scissors]:")

   const trimmed = raw.trim();
   const choice = trimmed.toLowerCase();
   console.log(`You chose ${choice}!`)
   if(choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
   } else {
      throw { message: "Invalid choice" }
   }
}

function getComputerChoice() {
   const choices = ["rock", "paper", "scissors"];
   const choice = choices[Math.ceil(Math.random() * 3) - 1];
   console.log(`Computer chose ${choice}`);
   return choice;
}

function playRound(humanChoice, computerChoice) {
   const winningCombinations = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];
   for (const combination of winningCombinations) {
      if(humanChoice === combination[0] && computerChoice === combination[1]) {
         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
         humanScore++;
         return;
      } else if(humanChoice === computerChoice) {
         console.log(`It's a tie! ${computerChoice} and ${humanChoice} doesn't do anything.`);
         return;
      }
   }
   console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
   computerScore++;
   return;
}

function playGame() {
   for (let i = 0; i < 5; i++) {
      console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice()
      playRound(humanChoice, computerChoice);
   }
   if (humanScore > computerScore) {
      console.log("Human wins!");
   } else if (computerScore > humanScore) {
      console.log("Computer wins!");
   } else {
      console.log("It's a tie!");
   }
}

try {
   playGame();
} catch (err) {
   console.error(err.message);
}