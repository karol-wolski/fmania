import { useLocation } from 'react-router'

export const GetProductPath = (id: string | number) => {
  const location = useLocation()
  const path = location.pathname + '/' + id
  return path
}
