const randomNumber= (parseInt(Math.random()*100+1))

const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')

let prevGuess=[];
let numGuess= 1;

let playGame= true;


if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    })
}

// To validate if the guessed number is actually a valid number or not
function validateGuess(guess){
    if (guess=== '' || guess<1 || guess>100 || isNaN(guess)){
        alert('Please Enter a Valid Number between 1 to 100')
        userInput.value=''
    } else{
        prevGuess.push(guess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. The Random number was ${randomNumber}`)
            endGamme()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// To check if the number is correctly guessed or not
function checkGuess(guess){
    if (guess=== randomNumber) {
        displayMessage(`You Guessed it right`)
        endGamme()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is too High`)
    }
}

// This is for running the actual functions
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML= `${11-numGuess}`
}

// To display message
function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}


function endGamme(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML= `<h3 id='newGame'>Start New Game</h3>`;
    startOver.appendChild(p)
    playGame= false
    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


