// Bug tracking
// Code seems to be completed - debug fest tomorrow
// Only message displaying in "message" h2 is congrats you win
// the spaces have disapeared on the webpage - maybe have spaces come from JS
// Add another div or span for remaining guesses
// add query selector for remaining guesses

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



/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', init);
keyboardChoiceEl.forEach((key) => {
    key.addEventListener('click', keyClick) 
        console.log('key clicked')
    });
resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
// const init = () => {
//     gameOver = false;
//     guessedWord = names[Math.floor(Math.random() * names.length)];
//     guessedLetters = [];
//     shownWord = [];
    
//     for (let i=0; i < guessedWord.length; i++) {
//         if (guessedWord[i] === ' ') {
//             shownWord.push(' ');
//         } else {
//             shownWord.push('_');
//         }
//     }
//     remainingGuesses = 7;
//     render();
// };
const render = () => {
    shownWordEl.textContent = '';
    shownWordEl.textContent = shownWord.join(' '); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    remainingGuessesEl.textContent = `${remainingGuesses} guesses remaining`;
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

// resetGameBtn.addEventListener('click', init);
init();


