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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    //Create container for selection buttons
    const btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';

    //Create buttons for selection rock, paper & scissors
    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    rockBtn.id = 'rock-btn';

    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    paperBtn.id = 'paper-btn';

    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors';
    scissorsBtn.id = 'scissors-btn';

    //Append buttons to container and container to body
    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);

    document.body.appendChild(btnContainer);

    //Create container for result and append to body
    const resultContainer = document.createElement('div');
    resultContainer.id = 'result-container';
    document.body.appendChild(resultContainer);

    //Create container for score and append to body
    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    document.body.appendChild(scoreContainer);

    function updateScoreDisplay() {
        scoreContainer.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    }

    function playRound(humanChoice, computerChoice) {
        
        let resultMsg = '';

        if (gameOver) {
            return;
        } else {
            if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
                (humanChoice === 'Paper' && computerChoice === 'Rock') ||
                (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
                    resultMsg = (`You won: ${humanChoice} beats ${computerChoice}`);
                    ++humanScore;
            } else if ((humanChoice === 'Rock' && computerChoice === 'Rock') ||
                (humanChoice === 'Paper' && computerChoice === 'Paper') ||
                (humanChoice === 'Scissors' && computerChoice === 'Scissors')) {
                    resultMsg = "It's a draw!";
                    console.log(resultMsg);
            } else {
                resultMsg = (`You lost: ${computerChoice} beats ${humanChoice}`);
                ++computerScore;
            }
        }
        resultContainer.textContent = resultMsg;
        updateScoreDisplay();

        if (humanScore === 5) {
            resultContainer.textContent = "Congratulations! You won the game!";
            gameOver = true;
            disableButtons();
        } else if (computerScore === 5) {
            resultContainer.textContent = "Game Over! The computer won the game!";
            gameOver = true;
            disableButtons();
        }
    }

    function disableButtons() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    rockBtn.addEventListener('click', () => {
        playRound('Rock', getComputerChoice());
    });

    paperBtn.addEventListener('click', () => {
        playRound('Paper', getComputerChoice());
    });

    scissorsBtn.addEventListener('click', () => {
        playRound('Scissors', getComputerChoice());
    });
}

playGame()