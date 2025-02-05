// Bug tracking
// Code seems to be completed - debug fest tomorrow

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let gameOver = false;
let guessedWord = names[Math.floor(Math.random () * names.length)];
let guessedLetters = [];
let shownWord = [];
let remainingGuesses = 7;


/*------------------------ Cached Element References ------------------------*/
const keyboardChoiceEl = document.querySelectorAll('.keys');
const startGameBtn = document.querySelector('#start-game');
const resetGameBtn = document.querySelector('#reset-game');
const shownWordEl = document.querySelector('#spaces');
const messageEl = document.querySelector('#message');


/*----------------------------- Event Listeners -----------------------------*/
keyboardChoiceEl.forEach((key) => {
    key.addEventListener('click', () => {
        console.log('key clicked')
    })
})

startGameBtn.addEventListener('click', init => {
    console.log('i am clicked');
})
// resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    gameOver = false;
    guessedWord = names[Math.floor(Math.random () * names.length)];
    guessedLetters = [];
    shownWord = [];
    for (let i=0; i < guessedWord.length; i++) {
        if (guessedWord[i] === ' ') {
            shownWord.push(' ');
        } else {
            shownWord.push('_');
        }
    }
    remainingGuesses = 7;
    render();
};
const render = () => {
    shownWordEl.innerText = '';
    for (let i = 0; i < shownWord.length; i++) {
        shownWordEl.textContent += shownWord[i] = '';
    }
    messageEl.textContent = `${remainingGuesses} guesses remaining`;
    checkForWinner();
};

const checkForWinner = () => {
    if (shownWord.every(letter => letter !== '_')) {
        messageEl.textContent = 'Congrats, you win!';
        gameOver = true;
    } else if (remainingGuesses === 0) {
        messageEl.textContent = `You lost! Your word was ${guessedWord}`
        gameOver = true;
    }
};

const keyClick = (event) => {
    if(gameOver) return;
    const letter = event.target.textContent;
    const guessedLettersFilter = guessedLetters.filter((guessedLetter) => 
        guessedLetter === letter);
    if(guessedLettersFilter.length > 0) {
        messageEl.textContent = `You already guesses ${letter}, please make another selection`;
        return;
    }
    guessedLetters.push(letter);

    let correctLetter = false;

    for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWord[i] === letter) {
            shownWord[i] = letter;
            correctLetter = true;
        }
    }
    if (!correctLetter) {
        remainingGuesses - 1;
    }
    render();
};


resetGameBtn.addEventListener('click', init);
init();
render();


