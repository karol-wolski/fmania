import React from 'react'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from './Slide/Slide'

const Slider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  const items = [
    {
      id: 1,
      title: '50% Off',
      subtitle: 'Discount on Women’s Wear',
      link: '#',
      imgLink:
        'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
    },
    {
      id: 2,
      title: '30% Off',
      subtitle: 'Discount on Men’s Wear',
      link: '#',
      imgLink:
        'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
    },
    {
      id: 3,
      title: '20% Off',
      subtitle: 'Discount on Child’s Wear',
      link: '#',
      imgLink:
        'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
    },
  ]
  return (
    <SlickSlider {...settings}>
      {items.map(item => (
        <Slide {...item} />
      ))}
    </SlickSlider>
  )
}

export default Slider
