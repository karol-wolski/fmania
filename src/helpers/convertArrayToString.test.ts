import { convertArrayToString } from './convertArrayToString'

const ColorArray = ['blue', 'yellow', 'grey']

describe('convertArrayToString function', () => {
  it('should return a string with array elements separate by default separator (comma)', () => {
    expect(convertArrayToString(ColorArray)).toEqual('blue,yellow,grey')
  })

  it('should return a string with array elements separate by semicolon', () => {
    expect(convertArrayToString(ColorArray, ';')).toEqual('blue;yellow;grey')
  })
})
