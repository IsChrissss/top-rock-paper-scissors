function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

/* console.log(`Computer choose: ${getComputerChoice()}`); */

function getHumanChoice() {
    humanChoice = prompt("Choose between rock, paper or scissors: ")
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}

/* console.log(`Human choose: ${getHumanChoice()}`); */

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
            humanChoice += 1;
            console.log('You won!')
    } else {
        computerChoice += 1;
        console.log(`You lost: ${computerChoice} beats ${humanChoice}`)
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);