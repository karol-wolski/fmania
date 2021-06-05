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

export type SelectValue = {
  name: string
  value: string
}

export type ProductImages = {
  id: number
  name: string
  imgLink: string
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

export type SingleProductType = {
  id: number | string
  name: string
  price: number
  priceOld?: number
  sizes: SelectValue[]
  popularity: number[]
  image: string
  desc: string
  shortDesc?: string
  slug: string
  category?: string
  subcategory?: string
  color: SelectValue[]
  status?: string
  images: ProductImages[]
}
