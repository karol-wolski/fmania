import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { black400: TitleText, grey500: border } = Colors

export const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid ${border};
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${TitleText};
  margin-bottom: 2rem;
`
