/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// let phrase1 = new Phrase('Guess me you dingdong');
// let phrase2 = new Phrase('hey super coder')
// let phrase3 = new Phrase('i love karuneshwari')
// let phrase4 = new Phrase('hans zimmer is good')
// let phrase5 = new Phrase('i bow to sadhguru')


 class Game {
    constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases()
    this.activePhrase = null
    }

          /**
    * Creates phrases for use in game
    * return {array} An array of phrases that could be used in the game
    */

   createPhrases() {
    const phraseArray = ['Guess me you dingdong', 'hey super farty', 'i love karuneshwari', 'hans zimmer is good', 'i bow to sadhguru']

    const forGame = phraseArray.map(arr => new Phrase(arr), []);
    return forGame
    }

    getRandomPhrase(){
        let game = new Game();
        const random = game.phrases[Math.floor(Math.random() * game.phrases.length)];
        return random
    }
   
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        let game = new Game();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        // game.activePhrase = this.getRandomPhrase().addPhraseToDisplay(); <= what is this nonsense they gave us in the study guide?!?
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        
        const phraseLi = document.querySelectorAll('#phrase li')
        for (let i = 0; i < phraseLi.length; i++){
            if (!phraseLi[i].classList.contains('hide')){
                return true
            } else {
                return false
            }
        }
    }

        /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
        
   removeLife() {
    this.missed ++;
    let hearts = document.querySelector('img[src="images/liveHeart.png"]')
    if (this.missed < 6) {
        hearts.src = 'images/lostHeart.png';
    } if (this.missed === 5){
        game.gameOver(true);
    }
 }

        // removeLife() {
        //    this.missed ++;
        //    let hearts = document.querySelector('img[src="images/liveHeart.png"]')
        //    if (this.missed < 6) {
        //        hearts.src = 'images/lostHeart.png';
        //    } else if (this.missed === 5){
        //        this.gameOver(false);
        //    }
        // }

    /**
    * Displays game over message
    */
            
        gameOver(won){

            const overlay = document.getElementById('overlay')
            const h1 =document.getElementById('game-over-message')

            if (won){
                overlay.style.display = '';                
                h1.textContent = 'well done. you are not terrible';
                overlay.className = 'win'
            } else {
                h1.textContent = 'Unfortunately.. you are a loser';
                overlay.className = 'lose'
            }
        }
  
//**
// * Handles onscreen keyboard button clicks
// * @param (HTMLButtonElement) button - The clicked button element
// */

handleInteraction(button) {
    console.log(button);
    const btnLetter = button.textContent
    button.disabled = true
    

    if (!this.activePhrase.checkLetter(btnLetter)){
        button.className = 'wrong'
        this.removeLife()
        game.gameOver(game.checkForWin())
    } else {
        button.className = 'chosen'
        this.activePhrase.showMatchedLetter(btnLetter)
        game.gameOver(game.checkForWin())
    }
    };
  

   
    

 };

 