import styled, { css } from 'styled-components'
import { Colors } from '../Colors'
const { grey400: LabelText, black100: BorderCheckedEffect, white100: Background } = Colors

type InputProps = {
  color?: string
}

type CheckedEffectProps = {
  isActive: boolean
}

export const Input = styled.input<InputProps>`
  margin-right: 1rem;
  width: ${props => (props.color ? '1.4rem' : '2.1rem')};
  height: ${props => (props.color ? '1.4rem' : '2.1rem')};
  appearance: ${props => (props.color ? 'none' : 'checkbox')};
  background-color: ${props => (props.color ? props.color : Background)};

  ${props =>
    props.color &&
    css`
      &:focus {
        outline-offset: 0.8rem;
      }

      &:checked:before {
        content: '';
        position: absolute;
        background-color: transparent;
        border: 2px solid ${props.color};
        top: -4px;
        left: -6px;
        width: 2.1rem;
        height: 2rem;
        border-radius: 1px;
      }
    `};
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${LabelText};
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
`

export const CheckedEffect = styled.div<CheckedEffectProps>`
  display: ${props => (props.isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 1px;
  border: 1px solid ${BorderCheckedEffect};
  background-color: ${Background};
`
