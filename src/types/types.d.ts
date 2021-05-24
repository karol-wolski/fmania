export type LinksType = {
  name: string
  numOfProducts?: number
  link: string
}

export type CheckboxType = {
  inputName: string
  labelText: string
  color?: string
}

export type PriceType = {
  title: string
  min: number
  max: number
}

type Color = {
  name: string
  value: string
}

export type ProductType = {
  id: number | string
  name: string
  price: number
  priceOld?: number
  sizes: string[] | number[]
  popularity: number[]
  image: string
  desc: string
  shortDesc?: string
  slug: string
  category?: string
  subcategory?: string
  color?: Color[] | string
}
