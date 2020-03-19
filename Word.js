const Letter = require('./Letter.js')

class Word {
  constructor (word) {
    this.letters = word.split('').map(char => new Letter(char))
    this.display = function () {
      return this.letters.join('')
    }
    this.guessLetter = function (char) {
      return this.letters.forEach(letter => !!letter.makeGuess(char))
    }
  }
}

module.exports = Word
