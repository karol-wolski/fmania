import { getFromLocalStorage } from './localStorage'

export default function isAuthorized() {
  const authToken = getFromLocalStorage('authToken')
  return authToken ? true : false
}
