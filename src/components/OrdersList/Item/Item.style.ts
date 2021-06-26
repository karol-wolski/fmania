import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { black100: primary, grey800: secondary } = Colors

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${primary};

  @media (min-width: 480px) {
    font-size: 1.8rem;
  }
`

export const Detail = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${secondary};

  span {
    color: ${primary};
    font-weight: 700;
  }
`

export const Price = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${primary};
`

export const Image = styled.img`
  height: 15rem;
`

export const Wrapper = styled.div`
  display: grid;

  @media (min-width: 460px) {
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.5rem;
  }
`
