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
const youWon = document.querySelector('#you-won-sound');
const playerWinCount = document.querySelector('#player-win-count');
const computerWinCount = document.querySelector('#computer-win-count');
let playerCount = 0;
let computerCount = 0;

 function rockImageClicked (e) {
     instructionText.style.display = 'none';
     alert.style.display = 'block';
    playerQuestionMark.src = 'images/rock-icon.svg';
    playerSelection = e.target.id
    const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
}
 rockImage.addEventListener('click', rockImageClicked);

 function paperImageClicked (e) {
    instructionText.style.display = 'none';
    alert.style.display = 'block';
    playerQuestionMark.src = 'images/paper-icon.svg';
    playerSelection = e.target.id
    const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
}
 paperImage.addEventListener('click', paperImageClicked);


 function scissorsImageClicked(e) {
    instructionText.style.display = 'none';
    alert.style.display = 'block';
    playerQuestionMark.src = 'images/scissors-icon.svg';
    playerSelection = e.target.id
    const computerChoice = getComputerChoice();
    // playRound(playerSelection, computerChoice)
    console.log(playRound(playerSelection, computerChoice))
}
scissorsImage.addEventListener('click', scissorsImageClicked);

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
        playerCount++;
        playerWinCount.textContent = playerCount;
        console.log(playerCount);
        
    }
        
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        playerWinStatus.textContent = 'You Lost';
        playerWinText.textContent = `${playerSelection} is beaten by ${computerSelection}`;
        audioLost.play();
        computerCount++;
        console.log(computerWinCount)
        computerWinCount.textContent = computerCount;
    }
    game();

}


function game() {
    const overlay = document.querySelector('.overlay');
    const modalParagraph = document.querySelector('.modal-paragraph');
    const modalButton = document.querySelector('.modal-button');
    const playerWinStatus = alert.querySelector('.alert-h2');
    const playerWinText = alert.querySelector('.alert-paragraph-text');
    
    if (playerWinCount.textContent === '5') {
        console.log(playerWinCount.textContent);
        
        // Reset game counts to start a new game
        playerCount = 0;
        computerCount = 0;
        youWon.play();
        overlay.style.display = 'block';
        modalParagraph.textContent = 'You Won';
        playerWinCount.textContent = '0';
        computerWinCount.textContent = '0';
        instructionText.style.display = 'block';
        // playerWinStatus.style.display = 'none';
        // playerWinText.style.display = 'none';
        alert.style.display = 'none'
        modalButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        });
    } else if (computerWinCount.textContent === '5') {
        overlay.style.display = 'block';
        modalParagraph.textContent = 'You Lost...';
        playerCount = 0;
        computerCount = 0;
        // Reset game counts to start a new game
        playerWinCount.textContent = '0';
        computerWinCount.textContent = '0';
        instructionText.style.display = 'block';
        // playerWinStatus.style.display = 'none';
        // playerWinText.style.display = 'none';
        alert.style.display = 'none';
        modalButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        });
        
    }
}
game();
   
   
    



