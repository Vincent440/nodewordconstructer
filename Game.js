const Word = require('./Word.js')
const inquirer = require('inquirer')
const wordToBeGuessed = new Word('light-year')

const Game = function () {
  const self = this

  self.guessesMade = []

  self.numberOfGuessesAvailable = 10

  self.currentWord = wordToBeGuessed

  self.numberOfRemainingLettersToBeGuessed = self.currentWord.length

  self.start = function () {
    self.updateGame()
  }
  self.updateGame = function () {
    self.numberOfRemainingLettersToBeGuessed = 0

    self.currentWord.letters.forEach(letter => {
      if (!letter.guessed) {
        self.numberOfRemainingLettersToBeGuessed++
      }
      if (self.numberOfRemainingLettersToBeGuessed > self.numberOfGuessesAvailable) {
        self.gameOver()
      }
    })
    self.promptUserGuess()
  }

  self.promptUserGuess = function () {
    console.log(self.currentWord.display())
    inquirer.prompt([
      {
        name: 'guess',
        type: 'input',
        message: 'Guess a letter!\n',
        validate: function (char) {
          const validLetterInput = new RegExp(/[a-z]+/g)
          if (char.length === 1 && validLetterInput.test(char)) {
            return true
          }
          return 'Must guess a single letter A - Z'
        }
      }]).then(userPick => {
      console.log(self.numberOfGuessesAvailable)
      console.log(self.numberOfRemainingLettersToBeGuessed)
      self.guessesMade.push(userPick.guess)
      self.currentWord.guessLetter(userPick.guess)
      console.log(self.guessesMade)
      self.next()
    })
  }

  self.next = function () {
    self.updateGame()
    if (self.numberOfGuessesAvailable === 0) {
      self.gameOver()
    }
  }

  self.gameOver = function () {
    console.log('Good game')
    process.exit(1)
  }
}

module.exports = Game
