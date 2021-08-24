import { GetPath } from './getPath'

export const GetProductPath = (sex: string, slug: string) =>
  GetPath() === '/search' ? `${sex}/product-${slug}` : `${GetPath()}/product-${slug}`
