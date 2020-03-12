const Letter = require('./Letter.js')

const Word = function (word) {
  // An array of new Letter objects representing the letters of the underlying word
  this.letters = word.split('').map(char => new Letter(char))
  // function that returns a string representing the word. This should call the function on each letter object
  this.display = function () {
    return this.letters.join('')
  }
  // A function that takes a character as an argument and calls the guess function on each letter object
  this.guessLetter = function (char) {
    this.letters.forEach(function (letter) {
      if (letter.makeGuess(char)) {
        return true
      }
    })
    return false
  }
}

module.exports = Word
