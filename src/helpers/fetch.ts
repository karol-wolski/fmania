import { request } from './request'

export const fetchAsync = async (path: string) => {
  try {
    const response = await request(`${process.env.REACT_APP_API}/${path}`, 'GET', null)
    const json = await response.json()
    return json
  } catch (err) {
    console.log(err)
  }
}
