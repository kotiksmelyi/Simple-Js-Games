const myChoice = document.getElementById("my-choice");
const yourChoice = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let result
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber===1) {
        computerChoice = "rock"
    }
    if (randomNumber===2) {
        computerChoice = "paper"
    }
        if (randomNumber===3) {
            computerChoice = "scissors"
    }
    myChoice.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "Draw!"
    }
    if(computerChoice === "rock" && userChoice === "scissors") {
        result = "I win!"
    }
    if(computerChoice === "paper" && userChoice === "rock") {
        result = "I win!"
    }
    if(computerChoice === "scissors" && userChoice === "paper") {
        result = "I win!"
    }
    if(computerChoice === "rock" && userChoice === "paper") {
        result = "You win!"
    }
    if(computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!"
    }
    if(computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!"
    }
    resultDisplay.innerHTML = result
}