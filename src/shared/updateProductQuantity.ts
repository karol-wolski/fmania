import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'

export const updateProductQuantity = (lsKeyName: string, id: number | string, quantity: any, callback?: any) => {
  const products = getFromLocalStorage(lsKeyName)
  const index = products.findIndex((product: any) => product.code === id)
  products[index].quantity = quantity
  addToLocalStorage(lsKeyName, products)
  callback && callback(getFromLocalStorage(lsKeyName))
}
