import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Colors } from '../../../../shared/Colors'
const { black100: primary, blue300: accent, grey200: accent2 } = Colors

type PriceProp = {
  old?: boolean
}

export const ImageWrapper = styled.div`
  border: 1px solid ${accent2};
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 27.8rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Name = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${primary};
  margin: 1rem 0;
`

export const Price = styled.span<PriceProp>`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => (props.old ? accent2 : accent)};

  ${props =>
    props.old &&
    css`
      text-decoration: line-through;
    `}
`
