const Word = require('./Word.js')
const inquirer = require('inquirer')
const wordToBeGuessed = new Word('light-year')

class Game {
  constructor () {
    this.guessesMade = []
    this.numberOfGuessesAvailable = 10
    this.currentWord = wordToBeGuessed
    this.numberOfRemainingLettersToBeGuessed = this.currentWord.length
    this.start = function () {
      this.updateGame()
    }
    this.updateGame = function () {
      this.numberOfRemainingLettersToBeGuessed = 0
      this.currentWord.letters.forEach(letter => {
        if (!letter.guessed) {
          this.numberOfRemainingLettersToBeGuessed++
        }
        if (this.numberOfRemainingLettersToBeGuessed > this.numberOfGuessesAvailable) {
          this.gameOver()
        }
      })
      this.promptUserGuess()
    }
    this.promptUserGuess = function () {
      console.log(this.currentWord.display())
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
        }
      ]).then(userPick => {
        this.guessesMade.push(userPick.guess)
        this.currentWord.guessLetter(userPick.guess)
        this.next()
      })
    }
    this.next = function () {
      this.updateGame()
      if (this.numberOfGuessesAvailable === 0) {
        this.gameOver()
      }
    }
    this.gameOver = function () {
      process.exit(1)
    }
  }
}

module.exports = Game
