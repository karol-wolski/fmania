import { ELEMENTS } from '../shared/zIndexArrayItems'

const getZindex = (el: string) => {
  const index = ELEMENTS.indexOf(el)
  return index !== -1 ? (index + 1) * 100 : 0
}

export default getZindex
