import React, { useState } from 'react'
import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import Reviews from '../../components/Reviews/Reviews'
import Tabs from '../../components/Tabs/Tabs'
import { Button } from '../../shared/Button/Button'
import { Comments, SingleProduct } from '../../shared/DumpData'
import { Input } from '../../shared/Input/Input'
import { Label } from '../../shared/Label/Label'
import Select from '../../shared/Select/Select'
import Alert from '../../components/Alert/Alert'
import { addToLocalStorage, getFromLocalStorage } from '../../helpers/localStorage'
import { useForm } from 'react-hook-form'
import {
  Container,
  Marks,
  Price,
  ProductName,
  Ratings,
  Status,
  Wrapper,
  SelectContainer,
  PriceContainer,
  ButtonContainer,
  Detail,
  Description,
  Product,
} from './ProductDetail.style'

type ProductItem = {
  id: number | string
  name: string
  price: number
  color: string
  size: string
  image: string
  quantity: any
  code: string
}

const ProductDetail: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const { id, name, price, priceOld, size, color, popularity, images, status, desc, shortDesc } = SingleProduct
  const [product, setProduct] = useState<ProductItem>({
    id: id,
    name: name,
    price: price,
    color: '',
    size: '',
    image: images[0].imgLink,
    quantity: 1,
    code: '',
  })

  const setProductInfo = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  const updateQuantity = (code: string, quantity: number, products: ProductItem[]) => {
    const index = products.findIndex((item: any) => item.code === code)
    products[index].quantity = quantity
    addToLocalStorage('cart', products)
  }

  const sum = (a: number, b: number) => a + b

  const findProductInLocalStorage = (code: string, products: ProductItem[]) => {
    const item = products.filter((ls: any) => ls.code === code)
    const result = item.length === 1 ? item : false
    return result
  }

  const getQuantiTyFromLocalStorage = (product: ProductItem[]) => {
    const quantity = product[0].quantity
    return quantity
  }

  const addToCart = () => {
    product.code = `${id}-${product.size}-${product.color}`
    const products = getFromLocalStorage('cart')
    const isProduct = products && findProductInLocalStorage(product.code, products)
    const quantityLS = isProduct && getQuantiTyFromLocalStorage(isProduct)
    const newQuantity = quantityLS && sum(parseInt(product.quantity), parseInt(quantityLS))
    quantityLS ? updateQuantity(product.code, newQuantity, products) : addToLocalStorage('cart', product, true)
  }

  const onSubmit = () => addToCart()

  return (
    <Wrapper>
      <Product onSubmit={handleSubmit(onSubmit)}>
        <ProductGallery images={images} />
        <Detail>
          <ProductName>{name}</ProductName>
          <Container border>
            <Ratings>
              <Marks>{popularity[0]}</Marks>
              Ratings: {popularity[1]}
            </Ratings>
            <Status status={status === 'available' ? 'available' : 'unavailable'}>{status}</Status>
            <p>Add your review</p>
          </Container>
          <Container>
            <Price>${price}</Price> {priceOld && <Price old>${priceOld}</Price>}
          </Container>
          <SelectContainer>
            <Select
              labelName="Size"
              options={size}
              onChange={setProductInfo}
              refForward={register({ required: true })}
            />
            <Select
              labelName="Color"
              options={color}
              onChange={setProductInfo}
              refForward={register({ required: true })}
            />
          </SelectContainer>
          <PriceContainer>
            <Label kind="small" isEffect={false}>
              Qty
            </Label>
            <Input
              name="quantity"
              kind="small"
              type="number"
              defaultValue={1}
              onChange={setProductInfo}
              refForward={register({ required: true })}
            />
          </PriceContainer>
          <ButtonContainer>
            <Button kind="contain" category="primary" uppercase>
              Buy now
            </Button>
            <Button kind="outline" category="primary" uppercase>
              Add to cart
            </Button>
          </ButtonContainer>
          {errors.size && <Alert type="Error" message="Size field is required" />}
          {errors.color && <Alert type="Error" message="Color field is required" />}
          <Description>{shortDesc}</Description>
        </Detail>
      </Product>
      <Tabs>
        <div aria-label="Descriptions">{desc}</div>
        <div aria-label="Ratings & Review">
          <Reviews data={Comments} />
          <ReviewForm />
        </div>
      </Tabs>
    </Wrapper>
  )
}

export default ProductDetail
