import { useLocation } from 'react-router'

export const GetProductPath = (id: string | number | undefined = undefined) => {
  const location = useLocation()
  const path = id === undefined ? location.pathname : location.pathname + '/' + id
  return path
}
