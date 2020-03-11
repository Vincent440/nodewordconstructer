const Letter = require('./Letter.js')

// * **Letter.js**: Contains a constructor, Letter
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter.

// That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

describe('Letter.js Constructor', () => {
  test('a new letter has becomes a letter object the init letter passed as the character property', () => {
    const a = new Letter('a')
    expect(a.character).toBe('a')
  })

  test('a new letter has a guessed boolean, set to false at init', () => {
    const a = new Letter('a')
    expect(a.guessed).toBe(false)
  })

  test('special characters are set to guessed = true at init such as the hyphen character or < - >', () => {
    const hyphen = new Letter('-')
    expect(hyphen.guessed).toBe(true)
  })

  test('special characters are set to guessed = true at init such as the underscore character or < _ >', () => {
    const underscore = new Letter('_')
    expect(underscore.guessed).toBe(true)
  })

  test('a new letter has a method to return the character or a placeholder  < _ > ', () => {
    const a = new Letter('a')
    expect(a.toString()).toBe('_')
  })
})
