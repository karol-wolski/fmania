import { request } from './request'

export const fetchAsync = async (path: string, method: string = 'GET', payload: any = null) => {
  try {
    const response = await request(`${process.env.REACT_APP_API}/${path}`, method, payload)
    const json = await response.json()
    return json
  } catch (err) {
    console.log(err)
  }
}
