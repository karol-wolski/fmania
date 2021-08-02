export const fakeLocalStorage = (function () {
  let store: any = {}

  return {
    getItem(key: string) {
      return store[key] || null
    },
    setItem(key: string, value: any) {
      store[key] = value.toString()
    },
    removeItem(key: string) {
      delete store[key]
    },
    clear() {
      store = {}
    },
    numOfItems() {
      return Object.keys(store).length
    },
  }
})()
