import React from 'react'
import { Wrapper, Product, Image, Title, Price } from './ProductSlide.style'

export interface ProductProps {
  id: number | string
  title: string
  price: string
  imgLink: string
  border?: boolean
  slug: string
  sex: string
}

const ProductSlide: React.FC<ProductProps> = ({ title, price, imgLink, border, slug, sex }) => {
  return (
    <Wrapper>
      <Product>
        <Image src={imgLink} alt={title} border={border} />
        <Title to={`${sex}/product-${slug}`}>{title}</Title>
        <Price>{price}</Price>
      </Product>
    </Wrapper>
  )
}

export default ProductSlide
