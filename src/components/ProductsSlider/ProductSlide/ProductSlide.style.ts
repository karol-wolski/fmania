import styled, { css } from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { black100: textColor, blue300: priceColor, grey500: border } = Colors

type ImageProps = {
  border?: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26.2rem;
`

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  ${props =>
    props.border &&
    css`
      border: 1px solid ${border};
    `}
`

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${textColor};
`

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${priceColor};
`
