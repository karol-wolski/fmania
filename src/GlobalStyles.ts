import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
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

  .products-slider .slick-prev, .slick-next {
    top: -45px;
    color: black;
    border: 1px solid silver;
    width: 25px;
    height: 25px;
    color: black;
  }

  .products-slider .slick-prev {
    right: 30px;
    left: unset;
  }

  .products-slider .slick-next {
    right: 0;
  }

  .products-slider .slick-prev:before, .slick-next:before {
    font-family: unset;
    color: black;
  }

  .products-slider .slick-next:before {
    content: '>';
  }

  .products-slider .slick-prev:before {
    content: '<';
  }

  .products-slider .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    border-color: black;
    background: black;
  }

   .products-slider .slick-prev:hover:before, .slick-next:hover:before, .slick-prev:focus:before, .slick-next:focus:before {
    color: white;

   }
`
