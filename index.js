const gameOptions = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
   const computerIndex = Math.floor(Math.random() * gameOptions.length);
   const computerChoice = gameOptions[computerIndex];
    return computerChoice;
}
console.log(getComputerChoice());