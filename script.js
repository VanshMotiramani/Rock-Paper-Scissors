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
// let computerResult = getComputerChoice();
console.log(getComputerChoice());