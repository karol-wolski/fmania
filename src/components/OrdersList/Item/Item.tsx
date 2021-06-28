import React from 'react'
import { Wrapper, Detail, Image, Title } from './Item.style'

type Product = {
  name: string
  size: string | number
  color: string
  price: number
  image: string
}

interface Prop {
  product: Product
}

const Item: React.FC<Prop> = ({ product }) => {
  const { name, size, color, price, image } = product
  return (
    <Wrapper>
      <Image src={image} alt={name} />
      <div>
        <Title>{name}</Title>
        <div>
          <Detail>Size: {size}</Detail>
          <Detail>Color: {color}</Detail>
          <Detail>Price: {price}</Detail>
        </div>
      </div>
    </Wrapper>
  )
}

export default Item
