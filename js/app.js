// Bug tracking
// Fixed keyboardChoiceEl to target all keys but now need to fix query selector to target all keys

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let gameOver = false;
let guessedWord = names[Math.floor(Math.random () * names.length)];
let guessedLetters = [];
let remainingGuesses = 7;
let displayWord = [];

/*------------------------ Cached Element References ------------------------*/
const keyboardChoiceEl = document.querySelectorAll('.keys');
const startGameBtn = document.querySelector('#start-game');
const resetGameBtn = document.querySelector('#reset-game');
const wordDisplayEl = document.querySelector('#spaces');
const messageEl = document.querySelector('#message');


/*----------------------------- Event Listeners -----------------------------*/
keyboardChoiceEl.addEventListener('click', () => {
    console.log('i am clicked');
})
startGameBtn.addEventListener('click', () => {
    console.log('i am clicked');
})
// resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    gameOver = false;
    guessedWord = names[Math.floor(Math.random () * names.length)];
    guessedLetters = [];
    remainingGuesses = 7;
    displayWord = [];
    render();
};
const render = () => {};


const checkForWinner = () => {
    if (displayWord.every(letter => letter !== '_')) {
        messageEl.textContent = 'Congrats, you win!';
        gameOver = true;
    } else if (remainingGuesses = 0) {
        messageEl.textContent = `You lost! Your word was ${guessedWord}`
        gameOver = true;
    }
};

resetGameBtn.addEventListener('click', init);
init();
render();


