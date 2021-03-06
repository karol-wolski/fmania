import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { black100: sectionTextColor, grey300: textColor } = Colors

export const Wrapper = styled.div`
  max-width: 46rem;
`

export const SectionName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${sectionTextColor};
  padding-bottom: 1rem;
`

export const Desc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${textColor};
`
