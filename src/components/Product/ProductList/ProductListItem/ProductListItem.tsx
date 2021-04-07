import React from 'react'
import { ProductType } from '../../../../types/types'
import { Wrapper, Image, Name, Price, Detail, ImageWrapper, DetailWrapper } from './ProductListItem.style'

interface ProductProps {
  product: ProductType
}

export const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, priceOld, size, image, desc } = product
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <DetailWrapper>
        <Name to={id.toString()}>{name}</Name>
        <Price>
          ${price} {priceOld && <Price old>${priceOld}</Price>}
        </Price>

        <Detail>Size: {size.join(', ').toUpperCase()}</Detail>
        <Detail>{desc}</Detail>
      </DetailWrapper>
    </Wrapper>
  )
}

export default SingleProduct
