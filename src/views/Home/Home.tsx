import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider'
import Slider from '../../components/Slider/Slider'
import { Wrapper, BannerWrapper } from './Home.style'
import Banner_Image_Men from '../../assets/images/Banner/men.jpg'
import Banner_Image_Women from '../../assets/images/Banner/women.jpg'

const Home: React.FC = () => {
  const [newProducts, setNewProducts] = useState([])
  const [discountProducts, setDiscountProducts] = useState([])
  const [slides, setSlides] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.REACT_APP_API}/products/new`),
      fetch(`${process.env.REACT_APP_API}/products/discount`),
      fetch(`${process.env.REACT_APP_API}/sliders`),
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        setNewProducts(data[0])
        setDiscountProducts(data[1])
        setSlides(data[2])
        setIsLoaded(true)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Wrapper>
      {isLoaded && (
        <>
          <Slider slides={slides} />
          <ProductsSlider name="New Products" items={newProducts} />
          <BannerWrapper>
            <Banner id="1" title="Men Collection" buttonText="Know More" siteLink="/men" imgLink={Banner_Image_Men} />
            <Banner
              id="2"
              title="Women Collection"
              buttonText="Know More"
              siteLink="/women"
              imgLink={Banner_Image_Women}
            />
          </BannerWrapper>
          <ProductsSlider name="Discount Products" items={discountProducts} border />
        </>
      )}
    </Wrapper>
  )
}

export default Home
