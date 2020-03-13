const Letter = require('./Letter.js')

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

  test('A hyphen will not need to be guessed', () => {
    const hyphen = new Letter('-')
    expect(hyphen.guessed).toBe(true)
  })

  test('Spaces will not need to be guessed', () => {
    const blandSpace = new Letter(' ')
    expect(blandSpace.guessed).toBe(true)
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

  test('correctly guessed letters will return true', () => {
    const d = new Letter('d')
    expect(d.makeGuess('d')).toBe(true)
  })

  test('wrong guesses will return false', () => {
    const a = new Letter('a')
    expect(a.makeGuess('d')).toBe(false)
  })
  test('correctly updates the guessed property to true when a correct guess is made', () => {
    const d = new Letter('d')
    d.makeGuess('d')
    expect(d.guessed).toBe(true)
  })
})
