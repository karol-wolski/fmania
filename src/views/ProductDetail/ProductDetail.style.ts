import styled, { css } from 'styled-components'
import { Colors } from '../../shared/Colors'
const { black400: primary, white100: secondary, green300: accent, red200: accent2, grey500: accent3 } = Colors

type StatusProps = {
  status: 'available' | 'unavailable'
}

type PriceProp = {
  old?: boolean
}

type ContainerProp = {
  border?: boolean
}

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 117rem;
  padding: 1.5rem;
`

export const Product = styled.form`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.5rem;
  }
`

export const Detail = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ProductName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 2.2rem;
  color: ${primary};
`

export const Marks = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0.3rem 1rem;
  background-color: ${accent};
  color: ${secondary};
  margin-right: 1rem;
`

export const Ratings = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${primary};
`

export const Status = styled.span<StatusProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${props => (props.status === 'available' ? accent : accent2)};
  padding: 0 1.5rem;
  margin: 0 1.5rem;
  border-left: 1px solid ${accent3};
  border-right: 1px solid ${accent3};
`

export const Price = styled.span<PriceProp>`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${props => (props.old ? accent2 : primary)};

  ${props =>
    props.old &&
    css`
      margin-left: 1.5rem;
      text-decoration: line-through;
    `}
`

export const Container = styled.div<ContainerProp>`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  border-bottom: ${props => (props.border ? `1px solid ${accent3}` : 'unset')};
  padding-bottom: ${props => (props.border ? `1rem` : 'unset')};
`

export const SelectContainer = styled(Container)`
  div:nth-child(n + 2) {
    margin-left: 3rem;
  }
`

export const PriceContainer = styled(Container)`
  align-items: unset;
  label {
    margin-right: 1.5rem;
    font-size: 1.6rem;
    font-weight: 400;
  }

  input {
    width: 8.5rem;
  }
`

export const ButtonContainer = styled(Container)`
  padding-left: 3.9rem;
  button:first-of-type {
    margin-right: 1.5rem;
  }
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.5;
`
