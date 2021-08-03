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

describe('test', () => {
  it('should set data in local storage', () => {
    const key = 'products'
    const value = [{ id: 1, name: 'Product 1' }]
    LS.addToLocalStorage(key, value)
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  it('should add data to existing array in local storage', () => {
    const key = 'products'
    const value = [{ id: 1, name: 'Product 1' }]
    LS.addToLocalStorage(key, value)
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
    const newValue = { id: 2, name: 'Product 2' }
    LS.addToLocalStorage(key, newValue, true)
    const result = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(result))
  })

  it('should get data from local storage', () => {
    const key = 'name'
    const value = 'John'
    LS.addToLocalStorage(key, value)
    expect(LS.getFromLocalStorage(key)).toMatch(value)
  })

  it('should remove all data from local storage', () => {
    const key = 'name'
    const key2 = 'name2'
    const value = 'John'
    LS.addToLocalStorage(key, value)
    LS.addToLocalStorage(key2, value)
    expect(window.localStorage.numOfItems()).toBe(2)
    LS.clearLocalStorage()
    expect(window.localStorage.numOfItems()).toBe(0)
  })

  it('should remove specific object with array in local storage', () => {
    const key = 'products'
    const value = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ]
    LS.addToLocalStorage(key, value)
    const toRemove = 2
    LS.removeFromLocalStorage('products', toRemove)
    const result = [
      { id: 1, name: 'Product 1' },
      { id: 3, name: 'Product 3' },
    ]
    expect(LS.getFromLocalStorage(key)).toEqual(result)
  })

  it('should remove data from local storage', () => {
    const key = 'products'
    const value = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ]
    LS.addToLocalStorage(key, value)
    LS.removeFromLocalStorage('products')
    expect(window.localStorage.getItem(key)).toBeNull()
  })
})
