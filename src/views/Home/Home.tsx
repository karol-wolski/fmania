import React from 'react'
import Banner from '../../components/Banner/Banner'
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider'
import Slider from '../../components/Slider/Slider'
import { products_1, products_2 } from '../../shared/DumpData'
import { Wrapper, BannerWrapper } from './Home.style'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Slider />
      <ProductsSlider name="Fashion Products" items={products_1} />
      <BannerWrapper>
        <Banner
          id="1"
          title="Exclusive Offers"
          buttonText="Know More"
          siteLink="/"
          imgLink="https://asaransom.com/wp-content/uploads/2018/12/shopping-in-east-aurora-ny-1500x609.jpg"
        />
        <Banner
          id="2"
          title="Men & Women"
          buttonText="Know More"
          siteLink="/"
          imgLink="https://cdn.cdnparenting.com/articles/2018/09/9-Ways-Men-and-Women-Think-Differently.jpg"
        />
      </BannerWrapper>
      <ProductsSlider name="Featured Products" items={products_2} border />
    </Wrapper>
  )
}

export default Home
