const gameOptions = ['rock', 'paper', 'scissors'];
const rockImage = document.querySelector('.rock-img');
const paperImage = document.querySelector('.paper-img');
const scissorsImage = document.querySelector('.scissors-img');
const playerQuestionMark = document.querySelector('.player-question-mark');
const computerQuestionMark = document.querySelector('.computer-question-mark');
let playerSelection = '';
const instructionText = document.querySelector('.instruction-text')
const alert = document.querySelector('.alert');
const audioWin = document.querySelector('#audio-win');
const audioLost = document.querySelector('#audio-lost');
const audioTie = document.querySelector('#audio-tie')

rockImage.addEventListener('click', (e) => {
    instructionText.style.display = 'none';
    playerQuestionMark.src = 'images/rock-icon.svg';
    playerSelection = e.target.id
   const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
});

paperImage.addEventListener('click', (e) => {
    instructionText.style.display = 'none';
    playerQuestionMark.src = 'images/paper-icon.svg';
    playerSelection = e.target.id
    const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
});

scissorsImage.addEventListener('click', (e) => {
    instructionText.style.display = 'none';
    playerQuestionMark.src = 'images/scissors-icon.svg';
    playerSelection = e.target.id
    const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
});


function getComputerChoice() {
   const computerIndex = Math.floor(Math.random() * gameOptions.length);
    const computerChoice = gameOptions[computerIndex];
    if (computerChoice === 'rock') {
       computerQuestionMark.src =  'images/rock-icon.svg';
    }
    else if (computerChoice === 'paper') {
        computerQuestionMark.src = 'images/paper-icon.svg';
        
    }
    else if (computerChoice === 'scissors') {
        computerQuestionMark.src =  'images/scissors-icon.svg';
    }
    
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    const playerWinStatus = alert.querySelector('.alert-h2');
    const playerWinText = alert.querySelector('.alert-paragraph-text');
    if (playerSelection === computerSelection) {
        playerWinStatus.textContent = "It's a tie";
        playerWinText.textContent = `${playerSelection} ties with ${computerSelection}`;
        audioTie.play();
    }

    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper' ) ||
        (playerSelection === 'paper' && computerSelection === 'rock'))
    {
        playerWinStatus.textContent = 'You Won';
        playerWinText.textContent = `${playerSelection} beat ${computerSelection}`;
        audioWin.play();
    }
        
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        playerWinStatus.textContent = 'You Lost';
        playerWinText.textContent = `${playerSelection} is beaten by ${computerSelection}`;
        audioLost.play();
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



