// Bug tracking


/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let winner = false;
let answer = '';
let gameWord = names[Math.floor(Math.random () * names.length)];
let remainingGuesses = 7;

/*------------------------ Cached Element References ------------------------*/
const keyboardChoice = document.querySelector('.keys')
const startGameBtn = document.querySelector('#start-game')
const resetGameBtn = document.querySelector('#reset-game')

/*----------------------------- Event Listeners -----------------------------*/
keyboardChoice.addEventListener('click', () => {
    console.log('i am clicked');
})
startGameBtn.addEventListener('click', () => {
    console.log('i am clicked');
})
// resetGameBtn.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    let answer = '';
    let gameWord = names[Math.floor(Math.random () * names.length)];
    let winner = false;
    let remainingGuesses = 7;
    render();
};
const render = () => {};


const checkForWinner = () => {

}

resetGameBtn.addEventListener('click', init);
init();
render();


