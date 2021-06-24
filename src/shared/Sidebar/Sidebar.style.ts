import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../Colors'
const { blue300: active, white100: primary, black100: secondary, grey500: accent } = Colors

export const UL = styled.ul`
  list-style: none;
  border: 1px solid ${accent};
  padding: 0;
`

export const LinkElem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 5.5rem;
  color: ${secondary};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem 3rem;
  svg {
    color: ${secondary};
    margin-right: 2rem;
  }
  &.active {
    background-color: ${active};
    color: ${primary};
    svg {
      color: ${primary};
    }
  }
`
