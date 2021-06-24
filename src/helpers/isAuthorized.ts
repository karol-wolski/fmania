import { getFromLocalStorage } from './localStorage'

export default function isAuthorized() {
  const authToken = getFromLocalStorage('authToken')
  if (authToken) return true
}
