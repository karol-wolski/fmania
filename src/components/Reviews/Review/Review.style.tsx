import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
const { black400: Accent2, grey300: Accent, grey400: Text, yellow100: Icon, grey500: BorderLine } = Colors

export const Wrapper = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${BorderLine};
`

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${Accent2};
`

export const Desc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${Text};
`

export const Author = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${Accent};
`

export const Date = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${Accent};
`

export const StarActive = styled(AiFillStar)`
  color: ${Icon};
  font-size: 1.6rem;
`

export const Star = styled(AiOutlineStar)`
  color: ${Accent};
  font-size: 1.6rem;
`
