import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartPriceDetail from '../../components/CartPriceDetail/CartPriceDetail'
import CartProductList from '../../components/CartProductList/CartProductList'
import { getFromLocalStorage } from '../../helpers/localStorage'
import { Button } from '../../shared/Button/Button'
import { removeProduct } from '../../shared/removeProduct'
import { updateProductQuantity } from '../../shared/updateProductQuantity'
import { Products, Wrapper } from './Cart.style'

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
  const lsKeyName = 'cart'
  const [products, setProducts] = useState(getFromLocalStorage(lsKeyName))
  const [isRedirect, setIsRedirect] = useState(false)
  const totalQuantity =
    products === null ? 0 : products.reduce((total: number, item: any) => parseFloat(item.quantity) + total, 0)
  const totalPrice =
    products === null
      ? 0
      : products.reduce((total: number, item: any) => parseFloat(item.quantity) * item.price + total, 0) || 0

  return (
    <>
      {isRedirect && <Redirect to="/checkout" />}
      {products === null ? (
        <CartEmpty />
      ) : (
        <Wrapper>
          <Products>
            {products.map(({ id, name, image, color, size, price, quantity, code }: Product, index: number) => (
              <CartProductList
                key={index}
                data={{ id, name, image, color, size, price, quantity }}
                removeHandler={() => removeProduct(lsKeyName, code, setProducts)}
                updateQuantityHandler={e =>
                  updateProductQuantity(lsKeyName, code, parseInt(e.target.value), setProducts)
                }
              />
            ))}
            <Button kind="contain" category="primary" onClick={() => setIsRedirect(true)}>
              Go to checkout
            </Button>
          </Products>
          <CartPriceDetail data={{ totalQuantity: totalQuantity, totalPrice: totalPrice, deliveryPrice: 0 }} />
        </Wrapper>
      )}
    </>
  )
}

export default Cart
