import React from 'react'
import { GetProductPath } from '../../../../helpers/getProductPath'
import { ProductType } from '../../../../types/types'
import { Wrapper, Image, Name, Price, Detail, ImageWrapper, DetailWrapper } from './ProductListItem.style'

interface ProductProps {
  product: ProductType
}

export const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const { name, price, priceOld, sizes, image, desc, slug, sex } = product

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <DetailWrapper>
        <Name to={GetProductPath(sex, slug)}>{name}</Name>
        <Price>
          ${price} {priceOld && <Price old>${priceOld}</Price>}
        </Price>

        <Detail>Size: {sizes.join(', ').toUpperCase()}</Detail>
        <Detail>{desc}</Detail>
      </DetailWrapper>
    </Wrapper>
  )
}

export default SingleProduct
