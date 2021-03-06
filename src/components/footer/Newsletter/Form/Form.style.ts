import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors'
const { grey500: border, black300: label, grey400: button } = Colors

export const Form = styled.form`
  width: 100%;
  position: relative;
  padding-bottom: 1.5rem;
`

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${border};
  display: block;
  width: 100%;
  height: 2rem;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${label};
`

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 1.5rem;
  border: none;
  font-size: 1.8rem;
  background-color: transparent;
  color: ${button};
`
