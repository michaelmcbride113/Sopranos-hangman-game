// Bug tracking
// Fix spaces with the _
// Add pieces with incorrect guess
// Update message when reseting game

/*-------------------------------- Constants --------------------------------*/
const init = () => {
    gameOver = false;
    guessedWord = names[Math.floor(Math.random() * names.length)];
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

const keyClick = (event) => {
    if(gameOver) return;
    const letter = event.target.textContent;
    const guessedLettersFilter = guessedLetters.filter((guessedLetter) => 
        guessedLetter === letter);
    if(guessedLettersFilter.length > 0) {
        messageEl.textContent = `You already guessed ${letter}, please make another selection`;
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
        remainingGuesses--;
        messageEl.textContent = 'Incorrect guess, guess again!'
    }
    render();
};

/*-------------------------------- Variables --------------------------------*/
let gameOver = false;
let guessedWord = names[Math.floor(Math.random() * names.length)];
let guessedLetters = [];
let shownWord = [];
let remainingGuesses = 7;

console.log(guessedWord)
/*------------------------ Cached Element References ------------------------*/
const keyboardChoiceEl = document.querySelectorAll('.keys');
const startGameBtn = document.querySelector('#start-game');
const resetGameBtn = document.querySelector('#reset-game');
const shownWordEl = document.querySelector('#spaces');
const messageEl = document.querySelector('#message');
const remainingGuessesEl = document.querySelector('#remaining-guesses'); 
const guessedLettersEl = document.querySelector('#guessed-letters'); 


/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', init);
keyboardChoiceEl.forEach((key) => {
    key.addEventListener('click', keyClick) 
        console.log('key clicked')
    });
resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
const render = () => {
    shownWordEl.textContent = shownWord.join(' '); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    remainingGuessesEl.textContent = `${remainingGuesses} guesses remaining`;
    guessedLettersEl.textContent = `Letters guessed: ${guessedLetters} `;
    checkForWinner();
};

const checkForWinner = () => {
    if (shownWord.every(letter => letter !== '_')) {
        messageEl.textContent = 'Congrats, you win!';
        gameOver = true;
    } else if (remainingGuesses === 0) {
        messageEl.textContent = `You lost! Your word was ${guessedWord}`;
        gameOver = true;
    }
};

init();


