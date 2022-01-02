const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) 
    
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Tie!'
    }  
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Victory!'
    }  
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Loss!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Victory!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Loss!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Victory!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Loss!'
    }
    resultDisplay.innerHTML = result
}