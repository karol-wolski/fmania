import { getUniqueValueFromArray } from './getUniqueValueFromArray'

describe('getUniqueValueFromArray function', () => {
  it('should return the unique numbers in array', () => {
    expect(getUniqueValueFromArray([1, 2, 4, 5, 3, 1])).toEqual([1, 2, 4, 5, 3])
  })

  it('should return the unique words in array', () => {
    expect(getUniqueValueFromArray(['blue', 'yellow', 'grey', 'yellow', 'blue'])).toEqual(['blue', 'yellow', 'grey'])
  })
})
