const Letter = require('./Letter.js')

class Word {
  constructor (word) {
    this.solved = word

    this.letters = word.split('').map(char => new Letter(char))

    this.toString = function () {
      return this.letters.join('')
    }

    this.guessLetter = function (char) {
      return this.letters.forEach(letter => !!letter.makeGuess(char))
    }

    this.done = function () {
      return this.letters.every(char => char.guessed === true)
    }
  }
}

module.exports = Word
