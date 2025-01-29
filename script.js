// console.log("Hello World!")
//GET random number 1- 100
// IF rand <20 >80 rock
//IF rand >20 <30 <80 > 60 paper
//ELSE Scissor

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let randomNumber = getRandomInt(100);

    if((randomNumber>=0 && randomNumber<=10) || (randomNumber > 90 && randomNumber<=100)) {
        return "ROCK";
    } else if((randomNumber>10 && randomNumber<=30) || (randomNumber > 70 && randomNumber<=90)) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }

    return "ERROR";
}
// human choice
function getHumanChoice() {
    let humanResponse = prompt("Put up your choice: ");
    return humanResponse;
}

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    
    if(humanChoice === "exit") {
        return "exit";
    } else if(!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor")) {
        return "Invalid selection";
    } else if(humanChoice === computerChoice) {
        drawScore++;
        return "We Think Same, damn";
    } else if((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            return "Smart HUH!!, You Won";
    } else {
        computerScore++;
        return "I Made A better move, You LOSE";
    }
}

function playGame() {
    let numberOfRounds = parseInt(prompt("How many number of rounds"), 10);
    while(numberOfRounds > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let singleRound = playRound(humanSelection, computerSelection);
        console.log(singleRound);

        if (singleRound === "exit") {
            break;
        }

        numberOfRounds--;
    }

    console.log("Your Score: " + humanScore);
    console.log("Comp Score: " + computerScore);
    console.log("Drawed Games: " + drawScore);
}
    
playGame();

// console.log("Human score: " + humanScore);
// console.log("Computer Score: " + computerScore);