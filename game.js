function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return 'Rock';
    } else if (num === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if (typeof playerSelection === 'string') {

        let formattedPlayer = playerSelection.charAt(0).toUpperCase() 
                            + playerSelection.slice(1).toLowerCase();

        if (formattedPlayer === 'Rock' || formattedPlayer === 'Paper'
        || formattedPlayer === 'Scissors') {
            if (formattedPlayer === computerSelection) {
                return 'Tie.';
            } else if (
                (formattedPlayer === 'Rock' && computerSelection === 'Paper') ||
                (formattedPlayer === 'Paper' && computerSelection === 'Scissors') ||
                (formattedPlayer === 'Scissors' && computerSelection === 'Rock')) {
                return 'You Lose.';
            } else if (
                (formattedPlayer === 'Rock' && computerSelection === 'Scissors') ||
                (formattedPlayer === 'Scissors' && computerSelection === 'Paper') ||
                (formattedPlayer === 'Paper' && computerSelection === 'Rock')) {
                return 'You Win.';
            }
        }
    }

    return 'Please input "rock", "paper", or "scissors".';
}

let playerSelection = 'rock';
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

playerSelection = 21;
console.log(playRound(playerSelection, computerSelection));

playerSelection = 'rOCk';
console.log(playRound(playerSelection, computerSelection));

playerSelection = 'rO';
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let result;
    let i = 0;

    while (i < 5) {
        playerSelection = window.prompt('Rock, paper, scissors... shoot!')
        result = playRound(playerSelection, computerPlay());
        
        if (result !== 'Please input "rock", "paper", or "scissors') {
            if (result === 'You Win.') {
                playerScore++;
                i++;
            } else if (result === 'You Lose.') {
                computerScore++;
                i++;
            } else if (result === 'Tie.') {
                i++;
            }
        }

            console.log(result + ' Your score is ' + playerScore 
                        + ' and the computer\'s score is ' + computerScore);
    }

    if (playerScore === computerScore) {
        console.log('Tie game! What are the chances of that??');
    } else if (playerScore < computerScore) {
        console.log('The computer wins overall!');
    } else {
        console.log('You win overall!!!');
    }
}