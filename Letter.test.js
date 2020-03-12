const Letter = require('./Letter.js')

// * **Letter.js**: Contains a constructor, Letter
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter.

// That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

describe('A new letter ', () => {
  // Describe - test name - test
  test('contains a property containing a string of the character', () => {
    const a = new Letter('a')
    expect(a.character).toBe('a')
  })

  test('throws error for underscore characters as they are reserved for placeholder characters', () => {
    expect(() => {
      return new Letter('_')
    }).toThrow('Underscores are Reserved characters')
  })

  test('throws error when nothing is passed to the constructor', () => {
    expect(() => {
      return new Letter()
    }).toThrow("Cannot read property 'length' of undefined")
  })

  test('throws error when more then one letter is passed', () => {
    expect(() => {
      return new Letter('octopus')
    }).toThrow('A letter can ONLY be a SINGLE character')
  })

  test('contains a property that holds a guessed boolean defaulting to false', () => {
    const c = new Letter('c')
    expect(c.guessed).toBe(false)
  })

  test('such as a hyphen will not need to be guessed', () => {
    const hyphen = new Letter('-')
    expect(hyphen.guessed).toBe(true)
  })

  test('while not guessed the letter will display a placeholder underscore', () => {
    const d = new Letter('d')
    expect(d.toString()).toBe('_')
  })
})

describe('A guessed letter', () => {
  test('is hidden if only incorrect guesses only have been made on it', () => {
    const d = new Letter('d')
    d.makeGuess('a')
    d.makeGuess('b')
    d.makeGuess('c')
    d.makeGuess('e')
    expect(d.guessed).not.toBe(true)
  })

  test('will not display if the letter has not been correctly guessed', () => {
    const d = new Letter('d')
    d.makeGuess('a')
    d.makeGuess('b')
    d.makeGuess('c')
    d.makeGuess('e')
    expect(d.toString()).not.toBe('d')
  })

  test('once guessed correctly will display the correct letter', () => {
    const d = new Letter('d')
    d.makeGuess('d')
    expect(d.toString()).toBe('d')
  })

  test('correctly updates the guessed property to true when a correct guess is made', () => {
    const d = new Letter('d')
    d.makeGuess('d')
    expect(d.guessed).toBe(true)
  })
})
