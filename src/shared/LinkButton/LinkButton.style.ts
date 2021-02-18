import styled, { css } from 'styled-components'
import { Colors } from '../Colors'
const { white100: secondary, black100: primary, blue200: accent, grey300: border } = Colors

type ButtonProps = {
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary'
}

export const LinkBtn = styled.a<ButtonProps>`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  text-transform: uppercase;

  @media (min-width: 568px) {
    padding: 1.15rem 3rem;
    font-size: 1.4rem;
  }

  ${props =>
    props.kind === 'contain' &&
    props.category === 'primary' &&
    css`
      border: 2px solid ${primary};
      background-color: ${primary};
      color: ${secondary};

      &:hover {
        border: 2px solid ${primary};
        background-color: transparent;
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

      &:hover {
        border: 2px solid ${secondary};
        background-color: transparent;
        color: ${secondary};
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

      &:hover {
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

      &:hover {
        background-color: ${accent};
        color: ${secondary};
      }
    `}
`
