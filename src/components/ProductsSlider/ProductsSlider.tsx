import React from 'react'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductSlide from './ProductSlide/ProductSlide'
import { Wrapper, SectionName } from './ProductsSlider.style'

type Item = {
  id: number | string
  title: string
  price: string
  imgLink: string
  border?: boolean
  slug: string
  sex: string
}

export interface ProductsSliderProps {
  name: string
  border?: boolean
  items: Item[]
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ name, border = false, items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'products-slider',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      <SectionName>{name}</SectionName>
      <SlickSlider {...settings}>
        {items.map(item => (
          <ProductSlide border={border} key={item.id} {...item} />
        ))}
      </SlickSlider>
    </Wrapper>
  )
}

export default ProductsSlider
