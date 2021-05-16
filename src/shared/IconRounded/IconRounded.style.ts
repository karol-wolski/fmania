import styled from 'styled-components'
import { Colors } from '../Colors'
const { green500: base, green300: base2, green400: accent } = Colors

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${base2};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  margin: 3rem 0 5rem;

  &:before {
    content: '';
    width: 15rem;
    height: 15rem;
    background: ${base};
    border: 2px solid ${accent};
    z-index: -1;
    position: absolute;
    border-radius: 50%;
  }

  svg {
    font-size: 5rem;
    color: white;
  }
`
