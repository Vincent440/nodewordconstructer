const Word = require('./Word.js')
const inquirer = require('inquirer')

const wordToBeGuessed = new Word('light-year')

const questionPrompt = {
  name: 'guess',
  type: 'input',
  message: 'Guess a letter!\n',
  validate: function (char) {
    const validLetters = /[a-z]/g
    if (char.length === 1 && validLetters.test(char)) {
      return true
    }
    char = ''
    return 'Must guess a single letter A - Z'
  }
}

class Game {
  constructor () {
    // Set starting State
    this.numGuessesRemaining = 10
    this.currentWord = wordToBeGuessed
    this.numberOfRemainingLettersToBeGuessed = this.currentWord.length

    this.start = function () {
      this.update()
    }

    this.update = function () {
      const previousNumberOfLettersToBeGuessed = this.numberOfRemainingLettersToBeGuessed
      this.numberOfRemainingLettersToBeGuessed = 0

      this.currentWord.letters.forEach(letter => {
        if (!letter.guessed) {
          this.numberOfRemainingLettersToBeGuessed++
        }
      })
      if (previousNumberOfLettersToBeGuessed - this.numberOfRemainingLettersToBeGuessed === 0) {
        this.numGuessesRemaining -= 1
      }

      this.next()
    }

    this.next = function () {
      if (this.numberOfRemainingLettersToBeGuessed > this.numGuessesRemaining || this.numGuessesRemaining <= 0) {
        this.gameOver()
      }

      this.promptUser()
    }

    this.promptUser = function () {
      console.log('Target word: ' + this.currentWord.display())
      console.log('Guesses Available: ' + this.numGuessesRemaining)
      console.log('Not Guessed: ' + this.numberOfRemainingLettersToBeGuessed)

      inquirer.prompt([questionPrompt]).then(userPick => {
        console.log(userPick)

        // A guess can be made here but nothing to stop once all correct letters are guessed
        // Incorrect guesses do not count against the user currently
        // guessing does not return any values
        // Guessing correctly guessed letters counts against the number of guesses remaining

        this.currentWord.guessLetter(userPick.guess)

        this.update()
      })
    }

    this.gameOver = function () {
      console.log('\n----------------------------------------\n')
      console.log('Target word: ' + this.currentWord.display())

      console.log('Guesses Available: ' + this.numGuessesRemaining)

      console.log('Not Guessed: ' + this.numberOfRemainingLettersToBeGuessed)

      console.log('Game over called')

      process.exit(1)
    }
  }
}

module.exports = Game
