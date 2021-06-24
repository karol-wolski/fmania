import { getFromLocalStorage } from './localStorage'

export const request = async (url: string, method: string, payload: any) => {
  const getRequest = () => {
    const headers = {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${getFromLocalStorage('authToken')}`,
    }
    switch (method) {
      case 'GET':
        return { method, headers }

      case 'DELETE':
        return { method, headers }

      case 'POST':
        return { method, headers, body: JSON.stringify(payload) }

      case 'PUT':
        return { method, headers, body: JSON.stringify(payload) }

      default:
        return { method, headers }
    }
  }

  const response = await fetch(url, getRequest())
  return response
}
