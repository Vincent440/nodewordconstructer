const Word = require('./Word.js')

describe('A new Word', () => {
  test('Displays placeholder characters for all letters', () => {
    const sky = new Word('sky')
    expect(sky.display()).toBe('___')
  })

  // test('Displays no placeholder for hyphens ', () => {
  //   const sky = new Word('sky')
  //   expect(sky.display()).toBe('___')
  // })
})
