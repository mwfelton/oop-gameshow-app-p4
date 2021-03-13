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

// function testert(){
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
// }

// testert()
// Test Code End

// Step 8

// let game = null;
// const button = document.getElementById('btn__reset');

// button.addEventListener('click', function(){
//     game = new Game().startGame()
// });


// const overlay = document.getElementById('overlay')
// overlay.style.backgroundImage = "url('images/fail-bg.jpg')"

// console.log(overlay)

// if (overlay.className === 'lose'){
//     console.log('partyyy')

// }



let game; 
const button = document.getElementById('btn__reset');

button.addEventListener('click', function(){
    game = new Game()
    game.startGame()
});

const keys = document.querySelectorAll('.keyrow button')

keys.forEach(item => item.addEventListener('click', function(){
    console.log(item)
    game.handleInteraction(item)
}))

document.addEventListener('keydown', (e) => {
    keys.forEach(key => {
        if (e.key === key.textContent && !key.disabled){
            game.handleInteraction(key)
        }
    })  
})


