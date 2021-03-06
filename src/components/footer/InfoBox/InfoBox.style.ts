import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { black300: fontColor } = Colors

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 25rem;
  svg {
    font-size: 4.5rem;
  }
`

export const Desc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: 300;
  padding-left: 2rem;
  color: ${fontColor};

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`
