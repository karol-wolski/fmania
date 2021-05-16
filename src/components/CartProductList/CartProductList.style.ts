import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { black100: base, grey300: base2, grey500: accent } = Colors

export const Item = styled.div`
  border: 1px solid ${accent};
  padding: 3rem 2rem;
  display: grid;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 4fr;
  }
`

export const ImageWrapper = styled.div`
  border: 1px solid ${accent};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.7rem;
  width: 12.7rem;
  @media (min-width: 568px) {
    margin-left: 0;
    margin-right: 1rem;
  }
`

export const Image = styled.img`
  width: 70%;
  padding: 1.5rem;
`

export const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${base};
`

export const Detail = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${base2};
`

export const Price = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    margin: 0 0 0 1rem;
    width: 5rem;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
