import React from 'react'
import { IoMdBasket } from 'react-icons/io'
import IconRounded from '../../shared/IconRounded/IconRounded'
import { Text, Wrapper } from './CartEmpty.style'

const CartEmpty: React.FC = () => {
  return (
    <Wrapper>
      <IconRounded>
        <IoMdBasket />
      </IconRounded>
      <Text>Your cart is empty!</Text>
    </Wrapper>
  )
}

export default CartEmpty
