import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { Colors } from '../src/shared/Colors'
const { grey400: arrow } = Colors

export default createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  label {
      display:block;
      margin: 10px 0;
  }

  .no-scroll {
    overflow: hidden;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  .slick-dots li button:before {
    color: #fff;  
  }

  .slick-dots li.slick-active button:before {
    color: #fff;
    font-size: 8px;
  }

  .slick-dots {
    bottom: 1.5rem;
  }

  .products-slider > .slick-prev, 
  .products-slider > .slick-next {
    top: -45px;
    color: black;
    border: 1px solid silver;
    width: 25px;
    height: 25px;
    color: black;
  }

  .products-slider > .slick-prev {
    right: 30px;
    left: unset;
  }

  .products-slider > .slick-next {
    right: 0;
  }

  .products-slider .slick-prev:before, .slick-next:before,
  .single-product .slick-prev:before, .slick-next:before {
    font-family: unset;
    color: black;
  }

  .products-slider .slick-next:before,
  .single-product .slick-next:before {
    content: '>';
  }

  .products-slider .slick-prev:before,
  .single-product .slick-prev:before {
    content: '<';
  }

  .products-slider .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus,
  .single-product .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    border-color: black;
    background: black;
  }

   .products-slider .slick-prev:hover:before, .slick-next:hover:before, .slick-prev:focus:before, .slick-next:focus:before,
   .single-product .slick-prev:hover:before, .slick-next:hover:before, .slick-prev:focus:before, .slick-next:focus:before {
    color: white;
   }
  
  .single-product {
    height: max-content;
  }

  .single-product .slick-slide img {
    width: 60%;
  }

   .single-product .slick-product-gallery {
    display: flex !important;
    list-style: none;
    justify-content: center;
    align-items: center;
    
    li {
      margin: 0 0.5rem;
      height: 6.6rem;

      a {
        height: inherit;

        img {
          height: inherit;
        }
      }
    }
   }

   .single-product .slick-list {
    max-height: 43rem;
    max-width: 32rem !important;
    margin: 0 auto;
  
    @media (min-width: 960px) {
      max-width: 45.8rem !important;
    }
   }

    .single-product-item {
    display: flex !important;
    align-items: center;
    justify-content: center;
    border: 1px solid #DEDEDE;
    padding: 1.5rem;
    max-height: 43rem;
    max-width: 32rem !important;
  
    @media (min-width: 960px) {
      max-width: 45.8rem !important;
    }

    overflow: hidden;
   }

  .single-product .slick-arrow {
    position: absolute;
    top: 90%;
    border-radius: 50%;
  }

  .single-product .slick-prev {
    left: 0;
  }

  .single-product .slick-next {
    right: 0;
  }

  .single-product .slick-prev, .slick-next {
    border: 1px solid ${arrow};
    width: 25px;
    height: 25px;
    color: ${arrow};
  }

  .Toastify__toast--success {
    background-color: #00CD00;
    color: #fff;
    font-size: 1.4rem;
  }
`
