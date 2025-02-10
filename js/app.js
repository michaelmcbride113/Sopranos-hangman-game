/*-------------------------------- Constants --------------------------------*/
const init = () => {
    gameOver = false;
    guessedWord = names[Math.floor(Math.random() * names.length)];
    guessedLetters = [];
    shownWord = [];
    
    for (let i=0; i < guessedWord.length; i++) {
        if (guessedWord[i] === ' ') {
            shownWord.push(' / ');
        } else {
            shownWord.push('_');
        }
    }
    remainingGuesses = 6;
    guessedLettersEl.textContent = '';
    messageEl.textContent = 'Make a selection';
    render();
};
const updateHangman= () => {
    if (remainingGuesses === 6) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png" alt="Gallows" width="200" height="300" />`;
    } else if (remainingGuesses === 5) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173033/1.png" alt="Hangman head" width="200" height="300" />`;
    } else if (remainingGuesses === 4) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173038/2.png" alt="Hangman body" width="200" height="300" />`;
    } else if (remainingGuesses === 3) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215172733/3.png" alt="Hangman arm 1" width="200" height="300" />`;
    } else if (remainingGuesses === 2) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173815/4.png" alt="Hangman arm 2" width="200" height="300" />`;
    } else if (remainingGuesses === 1) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173859/5.png" alt="Hangman leg 1" width="200" height="300" />`;
    } else if (remainingGuesses === 0) {
        hangmanPiecesEl.innerHTML = `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/6.png" alt="Hangman leg 2" width="200" height="300" />`;
    }
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
            messageEl.textContent = 'You always had the makings of a varsity athlete'

        }
    }
    if (!correctLetter) {
        remainingGuesses--;
        messageEl.textContent = 'Marone, that guess was terrible'
    }
    render();
};

/*-------------------------------- Variables --------------------------------*/
let gameOver = false;
let guessedWord = names[Math.floor(Math.random() * names.length)];
let guessedLetters = [];
let shownWord = [];
let remainingGuesses = 6;

console.log(guessedWord)
/*------------------------ Cached Element References ------------------------*/
const keyboardChoiceEl = document.querySelectorAll('.keys');
const startGameBtn = document.querySelector('#start-game');
const resetGameBtn = document.querySelector('#reset-game');
const shownWordEl = document.querySelector('#spaces');
const messageEl = document.querySelector('#message');
const remainingGuessesEl = document.querySelector('#remaining-guesses'); 
const guessedLettersEl = document.querySelector('#guessed-letters'); 
const hangmanPiecesEl = document.querySelector('#hangman-pieces')


/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', init);
keyboardChoiceEl.forEach((key) => {
    key.addEventListener('click', keyClick) 
        console.log('key clicked')
    });
resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
const render = () => {
    shownWordEl.textContent = shownWord.join(' ');
    remainingGuessesEl.textContent = `${remainingGuesses} guesses remaining`;
    guessedLettersEl.textContent = `Letters guessed: ${guessedLetters} `;
    updateHangman ();
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


