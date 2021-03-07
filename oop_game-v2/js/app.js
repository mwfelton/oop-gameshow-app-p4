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

let game = new Game()
const button = document.getElementById('btn__reset');

button.addEventListener('click', function(){
    game.startGame()
});

const keys = document.querySelectorAll('.keyrow button')
console.log(keys)

keys.forEach(item => item.addEventListener('click', function(){
    game.handleInteraction(item)
}))

document.addEventListener('keydown', (e) => {
    for (key of keys){
        if (e.key === key.textContent){
            game.handleInteraction(key)
        }
    }    
})




// You can add the eventlistener in the app.js file below the eventlistener on line 59, 

// iterate through the keys variable, you're going to want to check if the key that's pressed is equal to the key textContent and if it's not already disabled (this will prevent the loss of life if the user clicks a disabled letter). 

// In the if statement you'll call the game.handleInteraction method passing it the key iteration. Personally, I found it easier to use a for-of loop for this but it's up to you what feels comfortable.
