const Word = require('./Word.js')
const helloWorld = new Word('Hello World')
helloWorld.guessLetter('l')
helloWorld.guessLetter('d')
helloWorld.guessLetter('h')
helloWorld.guessLetter('w')
console.log(helloWorld.display().length)
// const inquirer = require('inquirer')

// 'Solar System', 'big bang theory', 'binary star', 'astronomer', 'astronomy', 'telescope', 'asteroid', 'dwarf star', 'dwarf planet', 'meteor shower', 'planet', 'light-year'
// global var to hold the current word the user is guessing
// const wordsArray = ['Astronaut', 'Neil Armstrong', 'International Space Station', 'Rocket', 'Satellite']
// let currentWord = ''
// const guessesAvailable = 10

// Randomly selects a word and uses the Word constructor to store it

// function grabCurrentWordFromArr (curWord, wordArr) {
//   curWord = ''// clears current word to ensure it is an empty string
//   i = Math.floor(Math.random() * wordArr.length) // grabs random index from the word arr
//   curWord = wordArr[i]
//   wordArr = wordArr.splice(i, 1)
//   return curWord
// }

// function promptWordGuess (word) {
//   inquirer.prompt([
//     {
//       name: 'guess',
//       type: 'input',
//       message: 'Guess a letter!',
//       validate: char => {
//         const validLetterInput = new RegExp(/[a-z]+/g)

//         if (char.length >= 2 || !validLetterInput.test(char)) {
//           char = ''
//           return false
//         } else {
//           return true
//         }
//       }
//     }]).then(userPick => {
//     char = userPick.guess
//     word.guessLetter(userPick.guess)
//     promptWordGuess(word)
//   })
// }
// function displayPromptSetWordArray () {
//   // gameWord = new Word(grabCurrentWordFromArr(currentWord,gameWordArray));
//   currentWord = new Word('light-year')
//   console.log(currentWord)
//   promptWordGuess(currentWord)
// }

// displayPromptSetWordArray()

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
// ============================================
// const lettersThatHaveAlreadyBeenGuessed = []
// let remainingNumberOfGuessesLeft = 10
// let numberOfLettersRemainingToGuess = 0
// // let correctNumberOfGuessesMade = 0
// // ===========================================
// const guessedLightYear = new Word('light-year')

// guessedLightYear.letters.forEach(letter => {
//   if (letter.guessed === false) {
//     numberOfLettersRemainingToGuess++
//   }
// })

// const testGuess = guessedLightYear.guessLetter('i')
// if (testGuess === false) {
//   console.log('BAD GUESS')
// }
// if (testGuess === true) {
//   console.log('GOOD GUESS')
// }
// guessedLightYear.guessLetter('l')
// guessedLightYear.guessLetter('i')
// guessedLightYear.guessLetter('g')
// guessedLightYear.guessLetter('h')
// guessedLightYear.guessLetter('t')
// guessedLightYear.guessLetter('y')
// guessedLightYear.guessLetter('e')
// guessedLightYear.guessLetter('a')
// guessedLightYear.guessLetter('r')
// numberOfLettersRemainingToGuess = 0
// guessedLightYear.letters.forEach(letter => {
//   if (letter.guessed === false) {
//     numberOfLettersRemainingToGuess++
//   }
// })
// console.log(numberOfLettersRemainingToGuess)
// console.log(guessedLightYear.letters.length)
// console.log(guessedLightYear.display())

// if (guessedLightYear.display() === 'light-year' && remainingNumberOfGuessesLeft > 0 && numberOfLettersRemainingToGuess === 0) {
//   console.log('you win a hyphened game of node word constructor')
// }
// // A game constructor to be used inside the inquirer prompts,
// // which will accept a word or a string of words
// // It will pass them to the Word / Letter constructors.
// // Game will contain all of the logic for each instance of the game the user plays
