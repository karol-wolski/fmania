import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { grey800: primary } = Colors

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${primary};
  text-align: center;
  width: 100%;
  display: block;
`
