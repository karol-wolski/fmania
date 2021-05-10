import React from 'react'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type ProductImages = {
  id: number | string
  name: string
  imgLink: string
}

interface ProductProps {
  images: ProductImages[]
}

const ProductGallery: React.FC<ProductProps> = ({ images }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a href={images[i].name}>
          <img src={images[i].imgLink} key={images[i].id} alt={images[i].name} />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-product-gallery slick-product-gallery-thumb',
    className: 'single-product',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <SlickSlider {...settings}>
      {images.map(image => (
        <div key={image.id} className="single-product-item">
          <img src={image.imgLink} alt={image.name} />
        </div>
      ))}
    </SlickSlider>
  )
}

export default ProductGallery
