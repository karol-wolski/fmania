import styled, { css } from 'styled-components'
import { Colors } from '../Colors'
const { grey700: Border, grey400: Text } = Colors
type InputProps = {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
}

export const InputField = styled.input<InputProps>`
  height: 3rem;
  width: 100%;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  font-size: 1.4rem;
  color: ${Text};
  border: 1px solid ${Border};
  ${props =>
    props.kind === 'xSmall' &&
    css`
      height: 3.4rem;
      font-size: 1.8rem;
    `}
  ${props =>
    props.kind === 'small' &&
    css`
      height: 3.7rem;
      font-size: 1.4rem;
    `}
    ${props =>
    props.kind === 'medium' &&
    css`
      height: 4.1rem;
      font-size: 1.4rem;
    `}
    ${props =>
    props.kind === 'big' &&
    css`
      height: 5rem;
      font-size: 1.6rem;
    `};
`
