import styled from 'styled-components'
import { Colors } from '../Colors'
const { grey700: Border, grey400: Text } = Colors

export const InputField = styled.input`
  margin-right: 1.5rem;
  color: ${Text};
  border: 1px solid ${Border};
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`
