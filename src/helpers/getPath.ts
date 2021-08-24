import { useLocation } from 'react-router'

export const GetPath = () => {
  const { pathname } = useLocation()
  return pathname
}
