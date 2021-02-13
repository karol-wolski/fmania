const elements = ['Nav']

const getZindex = (el: string) => {
  const index = elements.indexOf(el)
  return index !== -1 ? (index + 1) * 100 : 0
}

export default getZindex
