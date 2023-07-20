const gameOptions = ['rock', 'paper', 'scissors'];
const rockImage = document.querySelector('.rock-img');
const paperImage = document.querySelector('.paper-img');
const scissorsImage = document.querySelector('.scissors-img');
const playerQuestionMark = document.querySelector('.player-question-mark');
const computerQuestionMark = document.querySelector('.computer-question-mark');

rockImage.addEventListener('click', () => {
    playerQuestionMark.src = 'images/rock-icon.svg';
});

paperImage.addEventListener('click', () => {
    playerQuestionMark.src = 'images/paper-icon.svg';
});

scissorsImage.addEventListener('click', () => {
    playerQuestionMark.src = 'images/scissors-icon.svg';
});


function getComputerChoice() {
   const computerIndex = Math.floor(Math.random() * gameOptions.length);
    const computerChoice = gameOptions[computerIndex];
    if (computerChoice === 'rock') {
       computerQuestionMark.src =  'images/rock-icon.svg';
    }
    else if (computerChoice === 'paper') {
        computerQuestionMark.src =  'images/paper-icon.svg';
    }
    else if (computerChoice === 'scissors') {
        computerQuestionMark.src =  'images/scissors-icon.svg';
    }
    
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper' ) ||
        (playerSelection === 'paper' && computerSelection === 'rock'))
    {
        return 'Player won, computer lose';
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        return 'Computer won, Player lose';
    }

}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter a message; Rock, Paper, Scissors');
//         const lower = playerSelection.toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(`player: ${lower} computer: ${computerSelection} ${playRound(lower, computerSelection)}`);
//     }
// }
// game();



