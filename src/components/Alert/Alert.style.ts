import styled, { css } from 'styled-components'
import { Colors } from '../../shared/Colors'
const {
  white100: main,
  red100: bgError,
  red200: borderError,
  green100: bgSuccess,
  green200: borderSuccess,
  orange100: bgWarn,
  orange200: borderWarn,
  blue100: bgInfo,
  blue200: borderInfo,
} = Colors

type AlertProps = {
  type: 'Info' | 'Warn' | 'Error' | 'Success'
}

export const AlertWrapper = styled.span<AlertProps>`
  color: ${main};
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  forn-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  ${props =>
    props.type === 'Error' &&
    css`
      border: 1px solid ${bgError};
      background-color: ${borderError};
    `}
  ${props =>
    props.type === 'Warn' &&
    css`
      border: 1px solid ${borderWarn};
      background-color: ${bgWarn};
    `}
  ${props =>
    props.type === 'Info' &&
    css`
      border: 1px solid ${borderInfo};
      background-color: ${bgInfo};
    `}
  ${props =>
    props.type === 'Success' &&
    css`
      border: 1px solid ${borderSuccess};
      background-color: ${bgSuccess};
    `}

  svg {
    margin-right: 0.5rem;
    font-size: 1.6rem;
    font-weight: 700;

    path {
      stroke: ${main};
    }
  }
`
