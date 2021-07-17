let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(h, c, t) {
    let humanDiff = Math.abs(h - t);
    let computerDiff = Math.abs(c - t);
    let winner;

    if (humanDiff <= computerDiff) {
        winner = true;
    } else {
        winner = false;
    }

    return winner;
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    } else if (winner == "computer") {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}