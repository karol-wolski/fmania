import React from 'react'
import { Box, BoxTitle, BoxItem } from './CartPriceDetail.style'

type Cart = {
  totalQuantity: number
  totalPrice: number
  deliveryPrice: number
}

interface CartPriceProp {
  data: Cart
}

const CartPriceDetail: React.FC<CartPriceProp> = ({ data }) => {
  const { totalQuantity, totalPrice, deliveryPrice } = data
  const result = totalPrice + deliveryPrice

  return (
    <Box>
      <BoxTitle>Price Details</BoxTitle>
      <BoxItem>
        <p>
          Price ({totalQuantity} {totalQuantity === 1 ? `item` : `items`})
        </p>
        <span>${totalPrice}</span>
      </BoxItem>
      <BoxItem>
        <p>Delivery Charge</p> <span>${deliveryPrice}</span>
      </BoxItem>
      <BoxItem>
        <p>Amount Payable</p> <span>${result}</span>
      </BoxItem>
    </Box>
  )
}

export default CartPriceDetail
