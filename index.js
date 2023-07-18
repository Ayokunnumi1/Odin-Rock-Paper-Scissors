const gameOptions = ['rock', 'paper', 'scissors']
function getComputerChoice() {
   const computerIndex = Math.floor(Math.random() * gameOptions.length);
   const computerChoice = gameOptions[computerIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === computerSelection) {
        return "It's a tie";
    }

    else if ((lowerCasePlayerSelection === 'rock' && computerSelection === 'scissors') ||
        (lowerCasePlayerSelection === 'scissors' && computerSelection === 'paper') ||
        (lowerCasePlayerSelection === 'paper' && computerSelection === 'rock'))
    {
        return 'Player won, computer lose';
    } else if ((computerSelection === 'rock' && lowerCasePlayerSelection === 'scissors') ||
        (computerSelection === 'scissors' && lowerCasePlayerSelection === 'paper') ||
        (computerSelection === 'paper' && lowerCasePlayerSelection === 'rock')) {
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



