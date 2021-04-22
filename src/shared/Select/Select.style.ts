import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { black400: base, grey400: accent, grey700: accent2 } = Colors

export const SelectWrapper = styled.div`
  display: flex;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${base};
  margin-right: 1.5rem;
`

export const SelectStyle = styled.select`
  padding: 0.5rem;
  border: 1px solid ${accent2};
`

export const Option = styled.option`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${accent};
`
