const Letter = function (char) {
  // A string value to store the underlying character for the letter
  this.character = char;
  // A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;
  //Letter's display function is named toString,
  this.toString = function () {
    // JavaScript will call that function automatically whenever casting that object to a string
    // A function that returns the underlying character if the letter has been guessed,
    if (this.character === " ") {
      return " ";
    }//ADD CONDIONAL TO CHECK FOR SPACE FIRST BEFORE THIS TO MAYBE KEEP SPACES
    else if (this.character === "-") {
      return "-";
    }
    else if (this.guessed) {
      return this.character;
    }
    else {//or a placeholder(underscore) if the letter has not been guessed
      return "_";
    }
  }
  // A function that takes a character as an argument and checks it against the underlying character,
  this.makeGuess = function (guessedChar) {
    if (guessedChar.toUpperCase() === this.character.toUpperCase() || this.character === "-" || this.character === " ") {
      this.guessed = true;// updating the stored boolean value to true if it was guessed correctly
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Letter;