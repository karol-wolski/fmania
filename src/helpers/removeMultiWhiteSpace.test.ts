import { removeMultiWhiteSpace } from './removeMultiWhiteSpace'

describe('removeMultiWhiteSpace function', () => {
  it('should return a string without multi-spaces', () => {
    expect(removeMultiWhiteSpace('Lorem ipsum    dolor sit amet,   consectetur adipiscing elit. Fusce aliquet.')).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet.',
    )
  })
})
