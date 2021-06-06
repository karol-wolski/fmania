import React from 'react'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from './Slide/Slide'

type SingleSlide = {
  id: number | string
  title: string
  subtitle: string
  link: string
  imgLink: string
}

interface Slides {
  slides: SingleSlide[]
}

const Slider: React.FC<Slides> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  return (
    <SlickSlider {...settings}>
      {slides.map(item => (
        <Slide key={item.title} {...item} />
      ))}
    </SlickSlider>
  )
}

export default Slider
