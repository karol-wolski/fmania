import getZindex from './z-index'
import * as el from '../shared/zIndexArrayItems'
const mockArray = ['element-one', 'element-two', 'element-three']

const mockArr = el as { ELEMENTS: string[] }

describe('z-index', () => {
  it('should return 100 for the first element of the array', () => {
    mockArr.ELEMENTS = mockArray
    expect(getZindex('element-one')).toBe(100)
  })
  it('should return 200 for the second element of the array', () => {
    mockArr.ELEMENTS = mockArray
    expect(getZindex('element-two')).toBe(200)
  })
  it('should return 300 for the third element of the array', () => {
    mockArr.ELEMENTS = mockArray
    expect(getZindex('element-three')).toBe(300)
  })
})
