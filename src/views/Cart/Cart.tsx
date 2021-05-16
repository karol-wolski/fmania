import React, { useState } from 'react'
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartPriceDetail from '../../components/CartPriceDetail/CartPriceDetail'
import CartProductList from '../../components/CartProductList/CartProductList'
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../../helpers/localStorage'
import { Wrapper } from './Cart.style'

type Product = {
  id: number | string
  name: string
  image: string
  color: string
  size: string | number
  price: number
  quantity: number
  code: string
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState(getFromLocalStorage('cart'))
  const totalQuantity =
    products === null ? 0 : products.reduce((total: number, item: any) => parseFloat(item.quantity) + total, 0)
  const totalPrice =
    products === null
      ? 0
      : products.reduce((total: number, item: any) => parseFloat(item.quantity) * item.price + total, 0) || 0

  const removeProduct = (id: number | string) => {
    removeFromLocalStorage('cart', id)
    setProducts(getFromLocalStorage('cart'))
  }

  const updateQuantity = (id: number | string, quantity: any) => {
    const index = products.findIndex((product: any) => product.code === id)
    products[index].quantity = quantity
    addToLocalStorage('cart', products)
    setProducts(getFromLocalStorage('cart'))
  }

  return (
    <>
      {products === null ? (
        <CartEmpty />
      ) : (
        <Wrapper>
          <div>
            {products.map(({ id, name, image, color, size, price, quantity, code }: Product, index: number) => (
              <CartProductList
                key={index}
                data={{ id, name, image, color, size, price, quantity }}
                removeHandler={() => removeProduct(code)}
                updateQuantityHandler={e => updateQuantity(code, parseInt(e.target.value))}
              />
            ))}
          </div>
          <CartPriceDetail data={{ totalQuantity: totalQuantity, totalPrice: totalPrice, deliveryPrice: 10 }} />
        </Wrapper>
      )}
    </>
  )
}

export default Cart
