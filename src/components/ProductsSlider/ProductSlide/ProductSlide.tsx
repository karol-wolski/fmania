import React from 'react'
import { Wrapper, Product, Image, Title, Price } from './ProductSlide.style'

export interface ProductProps {
  id: number | string
  title: string
  price: string
  imgLink: string
  border?: boolean
}

const ProductSlide: React.FC<ProductProps> = ({ title, price, imgLink, border }) => {
  return (
    <Wrapper>
      <Product>
        <Image src={imgLink} alt={title} border={border} />
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Product>
    </Wrapper>
  )
}

export default ProductSlide
