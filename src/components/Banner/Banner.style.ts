import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { white100: textColor } = Colors

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 100%;
  position: relative;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${textColor};
  margin: 0 0 1.4rem;

  @media (min-width: 480px) {
    font-size: 3.1rem;
    margin-bottom: 3rem;
  }
`
