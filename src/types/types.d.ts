export type LinksType = {
  name: string
  numOfProducts: number
  link: string
}

export type CheckboxType = {
  inputId: string
  inputName: string
  labelText: string
  color?: string
}

export type PriceType = {
  title: string
  min: number
  max: number
}

export type ProductType = {
  id: number | string
  name: string
  price: number
  priceOld?: number
  size: string[] | number[]
  popularity: number[]
  image: string
  desc: string
}
