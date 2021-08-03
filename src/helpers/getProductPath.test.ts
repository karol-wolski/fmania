import { GetProductPath } from './getProductPath'
import routeData from 'react-router'

const mockLocation = {
  pathname: '/test',
  hash: '',
  search: '',
  state: '',
}

beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
})

describe('Get Path', () => {
  it('should return path without item id', () => {
    expect(GetProductPath()).toEqual('/test')
  })

  it('should return path with item id equal 2', () => {
    expect(GetProductPath(2)).toEqual('/test/2')
  })
})
