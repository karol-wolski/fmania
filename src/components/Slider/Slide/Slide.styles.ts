import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { white100: textColor } = Colors

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 114rem;
  max-height: 52.8rem;
`

export const DescWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;

  @media (min-width: 568px) {
    padding-left: 4rem;
  }

  @media (min-width: 667px) {
    padding-left: 8.5rem;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 3.6rem;
  color: ${textColor};
  margin: 0;
  line-height: 0.75;

  @media (min-width: 568px) {
    font-size: 6rem;
  }

  @media (min-width: 667px) {
    font-size: 8.4rem;
  }
`

export const SubTitle = styled.span`
  font-family: 'Anton', sans-serif;
  font-size: 1.8rem;
  color: ${textColor};
  padding: 1.5rem 0;

  @media (min-width: 568px) {
    padding: 2.4rem 0;
    font-size: 2.2rem;
  }

  @media (min-width: 667px) {
    padding: 3rem 0;
    font-size: 2.6rem;
  }
`
