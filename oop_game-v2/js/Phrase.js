/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//  variable for addphrasetodisplay method
const phraseDiv = document.getElementById('phrase');
// const phraseUl = phraseDiv.children
console.log(phraseDiv)



//  Create the Phrase class in the Phrase.js file.

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const letter = this.phrase.split('');
        for (let i = 0; i < letter.length; i++) {
            const li = document.createElement('li');
            if (letter[i] === ' ') {
                li.classList = 'space';
                li.textContent = ' ';
            } else {
                li.classList = `hide letter ${letter[i]}`;
                li.textContent = letter[i];
            }
            phraseDiv.appendChild(li);
        }    
    }

    checkLetter(letter) {
        if (this.phrase.includes(letter)){
        return true
        } else {
        return false
        }
    }

/**
* Displays passed letter on screen after a match is found
*  (string) letter - Letter to display
*/
    showMatchedLetter(letter) {

        const li = document.querySelectorAll('#phrase li')

        for (let i = 0; i <= li.length; i++){
            if(this.phrase[i] === letter){
            li[i].className = 'show'
            }
        }
    }
}


