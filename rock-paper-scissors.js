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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
                console.log(`You won: ${humanChoice} beats ${computerChoice}`);
                ++humanScore;
        } else if ((humanChoice === 'Rock' && computerChoice === 'Rock') ||
            (humanChoice === 'Paper' && computerChoice === 'Paper') ||
            (humanChoice === 'Scissors' && computerChoice === 'Scissors')) {
                console.log('Draw');
        } else {
            console.log(`You lost: ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
    }
    
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('Human wins!');
    } else if (humanScore < computerScore){
        console.log('Computer wins!')
    } else {
        console.log('It is a draw!')
    }
}

playGame()
