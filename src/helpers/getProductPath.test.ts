import { GetProductPath } from './getProductPath'
import * as GetPathFun from './getPath'

describe('Get Product Path', () => {
  const spy = jest.spyOn(GetPathFun, 'GetPath')
  it('should return path for every product', () => {
    spy.mockReturnValue('/women/trousers')
    expect(GetProductPath('women', 'jeans-blue')).toEqual('/women/trousers/product-jeans-blue')
  })

  it('should return path for product if location pathname equal search', () => {
    spy.mockReturnValue('/women')
    expect(GetProductPath('women', 'jeans-blue')).toEqual('/women/product-jeans-blue')
  })
})
