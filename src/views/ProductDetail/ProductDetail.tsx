import React from 'react'
import { useParams } from 'react-router'
import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import Reviews from '../../components/Reviews/Reviews'
import Tabs from '../../components/Tabs/Tabs'
import { Button } from '../../shared/Button/Button'
import { Comments, SingleProduct } from '../../shared/DumpData'
import { Input } from '../../shared/Input/Input'
import { Label } from '../../shared/Label/Label'
import Select from '../../shared/Select/Select'
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

interface Params {
  product: string
}

const ProductDetail = () => {
  const { product } = useParams<Params>()

  const { name, price, priceOld, size, color, popularity, images, status, desc, shortDesc } = SingleProduct
  return (
    <Wrapper>
      <Product>
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
            <Select labelName="Size" options={size} />
            <Select labelName="Color" options={color} />
          </SelectContainer>
          <PriceContainer>
            <Label kind="small" isEffect={false}>
              Qty
            </Label>
            <Input kind="small" type="number" />
          </PriceContainer>
          <ButtonContainer>
            <Button kind="contain" category="primary" uppercase>
              Buy now
            </Button>
            <Button kind="outline" category="primary" uppercase>
              Add to cart
            </Button>
          </ButtonContainer>
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
