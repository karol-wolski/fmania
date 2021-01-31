import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
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
`
