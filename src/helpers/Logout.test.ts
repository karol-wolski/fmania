import { Logout } from './Logout'
import * as LS from './localStorage'
import { fakeLocalStorage } from '../../test/mocks/fakeLocalStorage'

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: fakeLocalStorage,
  })
})

afterEach(() => {
  window.localStorage.clear()
})

describe('Logout', () => {
  it('should remove data from local storage and run callback function', () => {
    const key = 'authToken'
    const value = 'token123'
    const mockCallbackFunction = jest.fn()
    LS.addToLocalStorage(key, value)
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
    Logout(mockCallbackFunction)
    expect(mockCallbackFunction).toBeCalledTimes(1)
    expect(window.localStorage.getItem(key)).toBe(null)
  })
})
