const Word = require('./Word.js')
const inquirer = require('inquirer')

const wordToBeGuessed = new Word('light-year')

const questionPrompt = {
  name: 'guess',
  type: 'input',
  message: 'Guess a letter!\n',
  validate: function (char) {
    const validLetters = /[a-z]/gi
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

    this.start = function () {
      this.promptUser()
    }

    this.updateGame = function () {
      if (this.numGuessesRemaining <= 0) {
        console.log()
        console.log('No Guesses Remaining! Goodbye.')
        this.gameOver()
      }

      if (this.currentWord.done() === true) {
        console.log('You solved it!')
        this.gameOver()
      }

      this.promptUser()
    }

    this.promptUser = function () {
      console.log('Target word: ' + this.currentWord.toString())
      console.log('Guesses Available: ' + this.numGuessesRemaining)
      console.log('Not Guessed: ' + this.currentWord.letters.filter(chars => !chars.guessed).length)

      inquirer.prompt([questionPrompt]).then(userPick => {
        console.log(userPick)

        // A guess can be made here but nothing to stop once all correct letters are guessed
        // Incorrect guesses do not count against the user currently
        // guessing does not return any values
        // Guessing correctly guessed letters counts against the number of guesses remaining

        this.currentWord.guessLetter(userPick.guess)

        this.updateGame()
      })
    }

    this.gameOver = function () {
      console.log('\n----------------------------------------\n')
      console.log('Progress: ' + this.currentWord.toString())
      console.log('Solution: ' + this.currentWord.solved)
      console.log('Guesses Available: ' + this.numGuessesRemaining)

      console.log('Not Guessed: ' + this.numberOfRemainingLettersToBeGuessed)

      console.log('Game over called')

      process.exit(0)
    }
  }
}

module.exports = Game
