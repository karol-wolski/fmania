import { useLocation } from 'react-router'

export const GetUrlParam = () => new URLSearchParams(useLocation().search)
