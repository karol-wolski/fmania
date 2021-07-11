import { removeFromLocalStorage } from './localStorage'

export const Logout = (callback: any) => {
  removeFromLocalStorage('authToken')
  callback((state: boolean) => !state)
}
