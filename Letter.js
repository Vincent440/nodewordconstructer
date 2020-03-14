class Letter {
  constructor (singleCharacter) {
    switch (singleCharacter.length) {
      case 1:
        this.character = singleCharacter
        break
      default:
        throw new Error('A letter can ONLY be a SINGLE character')
    }
    if (this.character === '-' || this.character === ' ') {
      this.guessed = true
    } else if (this.character === '_') {
      throw new Error('Underscores are Reserved characters')
    } else {
      this.guessed = false
    }
    this.toString = function () {
      return this.guessed ? this.character : '_'
    }
    this.makeGuess = function (guessedChar) {
      if (guessedChar.toLowerCase() === this.character.toLowerCase()) {
        this.guessed = true
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = Letter
