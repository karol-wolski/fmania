import styled, { css } from 'styled-components'
import { Colors } from '../Colors'
const { grey400: Text } = Colors
type LabelProps = {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
  isActive?: boolean
  isEffect?: boolean
}

export const LabelField = styled.label<LabelProps>`
  font-size: 1.4rem;
  font-weight: 300;
  position: ${props => (props.isEffect ? 'absolute' : 'unset')};
  top: 0.3rem;
  left: 1rem;
  color: ${Text};
  transition: all 0.15s ease-out;
  ${props =>
    props.kind === 'big' &&
    css`
      font-size: 1.6rem;
    `};

  ${props =>
    props.isActive &&
    css`
      top: -3rem;
      left: 0;
    `}
`
