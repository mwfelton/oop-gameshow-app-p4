/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//  THE BEGINNING OF THE APP 

// Testing Code
 
// let phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`)

// let game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `,phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// let game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);












// const button = document.getElementById('btn__reset');
// // button.addEventListener('click', ( )=> {
// //     game.startGame()
// // });


// button.addEventListener('click', (evt) => {
//     game.startGame()
//     evt.target.style.display = 'none';
//     document.getElementById('play-area').style.opacity = '1';
// });