let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3) 
    const compChoice = choices[randomNum]
    return compChoice
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection == 'scissors' && computerSelection === 'paper') ||
        (playerSelection == 'paper' && computerSelection === 'rock')) {

            playerScore ++
            result = (`You won! ${playerSelection } beats ${computerSelection} <br><br>Player score: ${playerScore }<br>Computer score: ${computerScore}`);
    
            if (playerScore === 5) {
                result += '<br><br>You won the game, you\'re the best of the <strong>WORLD</strong>, and you can get all what you want in this life!!! <br><br>Reload the page to play again'
                disableButtons()
            }
        }
        else if (playerSelection == computerSelection) {
            result = (`It\'s a tie. You both chose ${playerSelection}
                <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);
        }
        else {
            computerScore ++
            result = (`You lose! ${computerSelection} beats ${playerSelection} <br><br>Player score: ${playerScore } <br>Computer score: ${computerScore}`)
    
            if (computerScore == 5) {
                result += '<br><br>I am the <strong>MACHINE</strong> and you couldn\'t beat me, I am your <strong>NIGHTMARE</strong> now muahahahahah <br><br>Reload the page to play again'
                disableButtons()
            }
        }
    
        document.getElementById('result').innerHTML = result
        return
    }
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value)
        })
    })
    
