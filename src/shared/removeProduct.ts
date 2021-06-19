import { getFromLocalStorage, removeFromLocalStorage } from '../helpers/localStorage'

export const removeProduct = (lsKeyName: string, id: number | string, callback: any) => {
  removeFromLocalStorage(lsKeyName, id)
  callback(getFromLocalStorage(lsKeyName))
}
