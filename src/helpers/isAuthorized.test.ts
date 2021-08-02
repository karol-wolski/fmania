import isAuthorized from './isAuthorized'
import * as LS from './localStorage'

describe('isAuthorized', () => {
  it('should return true if exist token in local storage', () => {
    const spy = jest.spyOn(LS, 'getFromLocalStorage')
    spy.mockReturnValue('test')
    expect(isAuthorized()).toEqual(true)
    spy.mockRestore()
  })
  it('should return false if does not exist token in local storage', () => {
    const spy = jest.spyOn(LS, 'getFromLocalStorage')
    spy.mockReturnValue(undefined)
    expect(isAuthorized()).toEqual(false)
    spy.mockRestore()
  })
})
