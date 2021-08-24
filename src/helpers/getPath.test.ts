import { GetPath } from './getPath'
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
  it('should return path', () => {
    expect(GetPath()).toEqual('/test')
  })
})
