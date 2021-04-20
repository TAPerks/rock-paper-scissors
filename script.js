
let playerSelection = prompt ("Select Your Move:", "Rock/Paper/Scissors");
console.log (playerSelection);

let computerSelection = computerPlay ();
function computerPlay () {
    if (Math.floor(Math.random() * 3) + 1 == 1) {
        return "rock";
    } else if (Math.floor(Math.random() * 3) + 1 == 2) {
        return "paper";
    } else  
        return "scissors";
}
console.log (playerSelection);
console.log (computerSelection);

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win!";    
        } else if (playerSelection === "rock" && computerSelection === "paper" || 
             playerSelection === "paper" && computerSelection === "scissors" || 
             playerSelection === "scissors" && computerSelection === "rock") {          
         return "You Lose!";
        } else if (playerSelection === computerSelection) {
            return "It's a tie!"; }
        
}

console.log (playerSelection);
console.log (computerSelection);
console.log (playRound (playerSelection, computerSelection))