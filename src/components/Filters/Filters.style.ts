import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { blue300: bgTitle, white100: textTitle } = Colors

export const Wrapper = styled.section`
  /* ... */
`

export const Title = styled.h2`
  background-color: ${bgTitle};
  color: ${textTitle};
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  padding: 1.5rem 2rem 2.4rem;
  margin: 0;
`
