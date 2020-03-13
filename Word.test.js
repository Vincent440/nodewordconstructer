const Word = require('./Word.js')

describe('A new Word', () => {
  test('Displays one underscore for each character of the word', () => {
    const sky = new Word('sky')
    expect(sky.display()).toBe('___')
  })

  test('Spaces between words passed will always display', () => {
    const solarSystem = new Word('solar system')
    expect(solarSystem.display()).toBe('_____ ______')
  })

  test('Displays no placeholder for hyphens ', () => {
    const lightYear = new Word('light-year')
    expect(lightYear.display()).toBe('_____-____')
  })

  test('A hyphened word can have all of its letters guessed', () => {
    const guessedLightYear = new Word('light-year')
    guessedLightYear.guessLetter('l')
    guessedLightYear.guessLetter('i')
    guessedLightYear.guessLetter('g')
    guessedLightYear.guessLetter('h')
    guessedLightYear.guessLetter('t')
    guessedLightYear.guessLetter('y')
    guessedLightYear.guessLetter('e')
    guessedLightYear.guessLetter('a')
    guessedLightYear.guessLetter('r')
    expect(guessedLightYear.display()).toBe('light-year')
  })
})

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
