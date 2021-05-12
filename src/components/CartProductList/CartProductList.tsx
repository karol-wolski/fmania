import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import { Label } from '../../shared/Label/Label'
import { Item, ImageWrapper, Image, Heading, Detail, Price, Container } from './CartProductList.style'

type Product = {
  id: number | string
  name: string
  image: string
  color: string
  size: string | number
  price: number
  quantity: number
}

interface Prop {
  data: Product
  removeHandler: () => void
  updateQuantityHandler: (e: any) => void
}

const CartProductList: React.FC<Prop> = ({ data, removeHandler, updateQuantityHandler }) => {
  const { name, image, color, size, price, quantity } = data

  return (
    <Item>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <div>
        <Heading>{name}</Heading>
        <Detail>
          Size: {size}, Color: {color}
        </Detail>
        <Price>${price}</Price>
        <Container>
          <Label kind="small" isEffect={false}>
            Quantity
            <Input kind="small" type="number" min="1" defaultValue={quantity} onChange={updateQuantityHandler} />
          </Label>
          <Button onClick={removeHandler}>
            <BsTrash /> Remove
          </Button>
        </Container>
      </div>
    </Item>
  )
}

export default CartProductList
