function getComputerChoice(){
    let choice = '';
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0){
        choice = "rock";
    } else if (randomNumber === 1){
        choice = "paper";
    } else if (randomNumber === 2){
        choice = "scissors";
    }
    return choice;
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    return userInput;
}

// console.log(getHumanChoice());


let humanScore, computerScore = 0;
function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
    result = '';
    if (humanChoice === "rock" && computerChoice === "paper"){
        result = "You lose! Paper beats Rock :(";
        console.log(computerScore = computerScore + 1);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        result = "You lose! Scissors beats Paper :(";
        console.log(computerScore = computerScore + 1);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        result = "You lose! Rock beats Scissors :(";
        console.log(computerScore = computerScore + 1);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        result = "You win! Rocks beats Scissors :)";
        console.log(humanScore = humanScore + 1);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        result = "You win! Paper beats Rock :)";
        console.log(humanScore = humanScore + 1);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        result = "You win! Scissors beats Paper :)";
        console.log(humanScore = humanScore + 1);
    } else if (humanChoice === computerChoice){
        result = "It's a tie -_-";
    }
    return result;

}    

console.log(playRound());



// function playGame(){
//     return playRound(humanChoice, computerChoice);
// }
    



// // console.log(humanScore);
// // console.log(computerScore);

// console.log(playRound());



