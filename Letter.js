const Letter = function (singleCharacter) {
  // A string value to store the underlying character for the letter
  switch (singleCharacter.length) {
    case 1:
      this.character = singleCharacter
      break
    default:
      throw new Error('A letter can ONLY be a SINGLE character')
  }
  // A boolean value that stores whether that letter has been guessed yet
  if (this.character === '-') {
    this.guessed = true
  } else if (this.character === '_') {
    throw new Error('Underscores are Reserved characters')
  } else {
    this.guessed = false
  }
  // Letter's display function is named toString,
  this.toString = function () {
    // JavaScript will call that function automatically whenever casting that object to a string
    // A function that returns the underlying character if the letter has been guessed,
    return this.guessed ? this.character : '_'
  }
  // A function that takes a character as an argument and checks it against the underlying character,
  this.makeGuess = function (guessedChar) {
    if (guessedChar.toLowerCase() === this.character.toLowerCase() || this.character === '-') {
      this.guessed = true// updating the stored boolean value to true if it was guessed correctly
      return true
    } else {
      return false
    }
  }
}

module.exports = Letter
