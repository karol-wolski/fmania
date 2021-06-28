import React from 'react'
import Item from './Item/Item'
import { Wrapper, OrderDetail, Products } from './OrdersList.style'

type Order = {
  id: number | string
  orderId: number
  shippedDate: string
  orderedOn: string
  status: string
  products: any[]
  deliveryPrice: number
  productsPrice: number
  totalPrice: number
}

interface Props {
  orders: Order[]
}

const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <>
      {orders.map(({ orderId, shippedDate, orderedOn, status, products, deliveryPrice, productsPrice, totalPrice }) => (
        <Wrapper key={orderId}>
          <OrderDetail>
            <p>
              Order ID: <span>{orderId}</span>
            </p>
            <p>
              Total products price: <span>${productsPrice}</span>
            </p>
            <p>
              Delivery price: <span>${deliveryPrice}</span>
            </p>
            <p>
              Total price: <span>${totalPrice}</span>
            </p>
          </OrderDetail>
          <OrderDetail>
            <p>
              Ordered on: <span>{orderedOn}</span>
            </p>
            <p>
              Shipped date: <span>{shippedDate}</span>
            </p>
            <p>
              Status: <span>{status}</span>
            </p>
          </OrderDetail>
          <Products>
            {products.map((product, index) => (
              <Item product={product} key={orderId + index} />
            ))}
          </Products>
        </Wrapper>
      ))}
    </>
  )
}

export default OrdersList
