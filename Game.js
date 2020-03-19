const Word = require('./Word.js')
const inquirer = require('inquirer')
const wordToBeGuessed = new Word('light-year')
const questionPrompt = {
  name: 'guess',
  type: 'input',
  message: 'Guess a letter!\n',
  validate: function (char) {
    const validLetters = /[a-z]/g
    if (char.length === 1 && char.test(validLetters)) {
      return true
    }
    char = ''
    return 'Must guess a single letter A - Z'
  }
}

class Game {
  constructor () {
    this.numberOfGuessesAvailable = 10
    this.currentWord = wordToBeGuessed
    this.numberOfRemainingLettersToBeGuessed = this.currentWord.length

    this.start = function () {
      this.update()
    }

    this.update = function () {
      this.numberOfRemainingLettersToBeGuessed = 0
      this.currentWord.letters.forEach(letter => {
        if (!letter.guessed) {
          this.numberOfRemainingLettersToBeGuessed++
        }
      })
      this.next()
    }

    this.next = function () {
      if (this.numberOfRemainingLettersToBeGuessed > this.numberOfGuessesAvailable) {
        this.gameOver()
      }
      if (this.numberOfGuessesAvailable === 0) {
        this.gameOver()
      }
      this.promptUser()
    }

    this.promptUser = function () {
      console.log(this.currentWord.display())
      inquirer.prompt([questionPrompt]).then(userPick => {
        console.log(userPick)
        this.currentWord.guessLetter(userPick.guess)
        this.update()
      })
    }

    this.gameOver = function () {
      process.exit(1)
    }
  }
}

module.exports = Game
