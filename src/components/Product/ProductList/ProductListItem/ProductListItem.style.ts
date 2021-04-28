import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Colors } from '../../../../shared/Colors'
const { black100: primary, blue300: accent, grey200: accent2 } = Colors

type PriceProp = {
  old?: boolean
}

export const ImageWrapper = styled.div`
  padding: 1rem 3rem;
`

export const Image = styled.img`
  max-height: 18.8rem;
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${accent2};
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Name = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${primary};
  margin: 1rem 0;
`

export const Detail = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 1rem 0;
  line-height: 1.5;

  &:last-of-type {
    margin-bottom: 0;
  }
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
