export const getFromLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key)!)
export const clearLocalStorage = () => localStorage.clear()
export const addToLocalStorage = (key: string, value: any, addItemToArray: boolean = false) => {
  if (addItemToArray) {
    let existingItem = getFromLocalStorage(key) || []
    existingItem.push(value)
    localStorage.setItem(key, JSON.stringify(existingItem))
  } else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const removeFromLocalStorage = (key: string, value: any | undefined = undefined) => {
  if (value) {
    let existingItem = getFromLocalStorage(key)
    existingItem.splice(
      existingItem.findIndex((el: any) => el.id === value || el.code === value),
      1,
    )
    addToLocalStorage(key, existingItem)
    if (existingItem.length === 0) localStorage.removeItem(key)
  } else {
    localStorage.removeItem(key)
  }
}
