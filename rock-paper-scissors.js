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
};

console.log(`Computer choose: ${getComputerChoice()}`);

function getHumanChoice() {
    humanChoice = prompt("Choose between rock, paper or scissors: ")
    return humanChoice;
}

console.log(`Human choose: ${getHumanChoice()}`);