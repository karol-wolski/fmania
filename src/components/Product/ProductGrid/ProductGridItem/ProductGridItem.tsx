import React from 'react'
import { GetProductPath } from '../../../../helpers/getProductPath'
import { ProductType } from '../../../../types/types'
import { Wrapper, Image, Name, Price, ImageWrapper } from './ProductGridItem.style'

interface ProductProps {
  product: ProductType
}

export const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, priceOld, image } = product

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <Name to={GetProductPath(id)}>{name}</Name>
      <Price>
        ${price} {priceOld && <Price old>${priceOld}</Price>}
      </Price>
    </Wrapper>
  )
}

export default SingleProduct
