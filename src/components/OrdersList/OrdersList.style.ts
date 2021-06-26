import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { black100: primary, grey800: secondary, grey100: accent } = Colors

export const Wrapper = styled.div`
  border-bottom: 1px solid ${accent};
  padding: 1.5rem 0;
  &:last-of-type {
    margin-bottom: 3rem;
  }
`

export const OrderDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${secondary};
    margin: 0.5rem 0;

    span {
      color: ${primary};
      font-weight: 700;
    }
  }
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  padding: 1.5rem 0;
`
