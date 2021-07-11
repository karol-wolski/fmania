import React, { useContext, useEffect, useState } from 'react'
import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import Reviews from '../../components/Reviews/Reviews'
import Tabs from '../../components/Tabs/Tabs'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import { Label } from '../../shared/Label/Label'
import Select from '../../shared/Select/Select'
import Alert from '../../components/Alert/Alert'
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../../helpers/localStorage'
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
import { SingleProductType } from '../../types/types'
import { fetchAsync } from '../../helpers/fetch'
import { useParams } from 'react-router'
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { UserContext } from '../../context/UserContext'

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
interface routerParam {
  gender: string
  product: string
}

const ProductDetail: React.FC = () => {
  const { gender, product: productName } = useParams<routerParam>()
  const path = `${gender}/product/${productName}`
  const { register, handleSubmit, errors } = useForm()
  const { isLoggedIn } = useContext(UserContext)
  const [isRedirect, setIsRedirect] = useState(false)

  const [data, setData] = useState<SingleProductType>({
    id: '',
    name: '',
    price: 0,
    priceOld: 0,
    sizes: [
      {
        name: '',
        value: '',
      },
    ],
    popularity: [0, 0],
    image: '',
    desc: '',
    shortDesc: '',
    slug: '',
    category: '',
    subcategory: '',
    color: [
      {
        name: '',
        value: '',
      },
    ],
    status: '',
    images: [
      {
        id: 0,
        name: '',
        imgLink: '',
      },
    ],
  })
  const [comments, setComments] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchAsync(`products/${path}`).then(data => {
      setData(data[0])
      setLoaded(true)
    })
  }, [path])

  const [product, setProduct] = useState<ProductItem>({
    id: 1,
    name: '',
    price: 0,
    color: '',
    size: '',
    image: '',
    quantity: 1,
    code: '',
  })

  useEffect(() => {
    setProduct({
      id: data.id,
      name: data.name,
      price: data.price,
      color: '',
      size: '',
      image: data.image,
      quantity: 1,
      code: '',
    })
  }, [data])

  useEffect(() => {
    fetchAsync(`comments/${data.id}`).then(comment => setComments(comment))
  }, [data, setComments])

  const notify = () =>
    toast('The product has been added to the cart.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'Toastify__toast--success',
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
    product.code = `${data.id}-${product.size}-${product.color}`
    const products = getFromLocalStorage('cart')
    const isProduct = products && findProductInLocalStorage(product.code, products)
    const quantityLS = isProduct && getQuantiTyFromLocalStorage(isProduct)
    const newQuantity = quantityLS && sum(parseInt(product.quantity), parseInt(quantityLS))
    quantityLS ? updateQuantity(product.code, newQuantity, products) : addToLocalStorage('cart', product, true)
    notify()
  }

  const buyNow = () => {
    removeFromLocalStorage('buyNow')
    addToLocalStorage('buyNow', product, true)
    setIsRedirect(true)
  }

  return (
    <Wrapper>
      {isRedirect && <Redirect to="/checkout" />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loaded && (
        <>
          <Product>
            <ProductGallery images={data.images} />
            <Detail>
              <ProductName>{data.name}</ProductName>
              <Container border>
                <Ratings>
                  <Marks>{data.popularity[0]}</Marks>
                  Ratings: {data.popularity[1]}
                </Ratings>
                <Status status={data.status === 'available' ? 'available' : 'unavailable'}>{data.status}</Status>
                <p>Add your review</p>
              </Container>
              <Container>
                <Price>${data.price}</Price> {data.priceOld && <Price old>${data.priceOld}</Price>}
              </Container>
              <SelectContainer>
                <Select
                  labelName="Size"
                  options={data.sizes}
                  onChange={setProductInfo}
                  refForward={register({ required: true })}
                />
                <Select
                  labelName="Color"
                  options={data.color}
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
                <Button kind="contain" category="primary" uppercase onClick={handleSubmit(buyNow)}>
                  Buy now
                </Button>
                <Button kind="outline" category="primary" uppercase onClick={handleSubmit(addToCart)}>
                  Add to cart
                </Button>
              </ButtonContainer>
              {errors.size && <Alert type="Error" message="Size field is required" />}
              {errors.color && <Alert type="Error" message="Color field is required" />}
              <Description>{data.shortDesc}</Description>
            </Detail>
          </Product>
          <Tabs>
            <div aria-label="Descriptions">{data.desc}</div>
            <div aria-label="Ratings & Review">
              {comments.length > 0 ? <Reviews data={comments} /> : <p>Nobody has commented and rated this product.</p>}
              {isLoggedIn ? (
                <ReviewForm productId={data.id} />
              ) : (
                <p>Only logged-in customers can comment on this product.</p>
              )}
            </div>
          </Tabs>
        </>
      )}
    </Wrapper>
  )
}

export default ProductDetail
