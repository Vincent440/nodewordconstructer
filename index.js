const Game = require('./Game.js')
const game = new Game()
game.start()

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
// guessedLightYear.letters.forEach(letter => {
//   if (letter.guessed === false) {
//     numberOfLettersRemainingToGuess++
//   }
// })

// if (guessedLightYear.display() === 'light-year' && remainingNumberOfGuessesLeft > 0 && numberOfLettersRemainingToGuess === 0) {
//   console.log('you win a hyphened game of node word constructor')
// }
