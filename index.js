/* eslint-disable no-undef */

const Word = require('./Word.js')
const inquirer = require('inquirer')

// 'Solar System', 'big bang theory', 'binary star', 'astronomer', 'astronomy', 'telescope', 'asteroid', 'dwarf star', 'dwarf planet', 'meteor shower', 'planet', 'light-year'
// global var to hold the current word the user is guessing
// const wordsArray = ['Astronaut', 'Neil Armstrong', 'International Space Station', 'Rocket', 'Satellite']
let currentWord = ''
// const guessesAvailable = 10
// Randomly selects a word and uses the Word constructor to store it
// function grabCurrentWordFromArr (curWord, wordArr) {
//   curWord = ''// clears current word to ensure it is an empty string
//   i = Math.floor(Math.random() * wordArr.length) // grabs random index from the word arr
//   curWord = wordArr[i]
//   wordArr = wordArr.splice(i, 1)
//   return curWord
// }

function promptWordGuess (word) {
  inquirer.prompt([
    {
      name: 'guess',
      type: 'input',
      message: 'Guess a letter!',
      validate: char => {
        const validLetterInput = new RegExp(/[a-z]+/g)

        if (char.length >= 2 || !validLetterInput.test(char)) {
          char = ''
          return false
        } else {
          return true
        }
      }
    }]).then(userPick => {
    char = userPick.guess
    word.guessLetter(userPick.guess)
    promptWordGuess(word)
  })
}
function displayPromptSetWordArray () {
  // gameWord = new Word(grabCurrentWordFromArr(currentWord,gameWordArray));
  currentWord = new Word('light-year')
  console.log(currentWord)
  promptWordGuess(currentWord)
}

displayPromptSetWordArray()
