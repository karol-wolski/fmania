import styled, { css } from 'styled-components'
import { Colors } from '../../shared/Colors'
const { white100: secondary, black100: primary, blue200: accent, grey300: border } = Colors

type ButtonProps = {
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary'
  corner?: 1 | 0
  uppercase?: 1 | 0
}

export const Btn = styled.button<ButtonProps>`
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: ${props => (props.corner ? '0.5rem' : 'unset')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'unset')};

  @media (min-width: 360px) {
    padding: 1.15rem 3rem;
  }

  ${props =>
    props.kind === 'contain' &&
    props.category === 'primary' &&
    css`
      border: 2px solid ${primary};
      background-color: ${primary};
      color: ${secondary};

      &:hover,
      &:focus {
        background-color: ${secondary};
        color: ${primary};
      }
    `}

  ${props =>
    props.kind === 'contain' &&
    props.category === 'secondary' &&
    css`
      border: 2px solid ${accent};
      background-color: ${accent};
      color: ${secondary};

      &:hover,
      &:focus {
        background-color: ${secondary};
        color: ${accent};
      }
    `}

    ${props =>
    props.kind === 'outline' &&
    css`
      border: 2px solid;
      background-color: ${secondary};
    `}

  ${props =>
    props.kind === 'outline' &&
    props.category === 'primary' &&
    css`
      border-color: ${border};
      color: ${primary};

      &:hover,
      &:focus {
        background-color: ${primary};
        color: ${secondary};
      }
    `}

  ${props =>
    props.kind === 'outline' &&
    props.category === 'secondary' &&
    css`
      border-color: ${accent};
      color: ${accent};

      &:hover,
      &:focus {
        background-color: ${accent};
        color: ${secondary};
      }
    `}
`
