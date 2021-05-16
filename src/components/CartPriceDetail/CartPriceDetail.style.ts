import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { grey300: base, black100: base2, blue200: accent, white100: accent2, grey500: accent3 } = Colors

export const Box = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LI = styled.li`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`

export const BoxTitle = styled(LI)`
  font-size: 1.4rem;
  color: ${accent2};
  background-color: ${accent};
  padding: 1.6rem 2rem;
`

export const BoxItem = styled(LI)`
  font-size: 1.6rem;
  color: ${base};
  padding: 1.3rem 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${accent3};

  span {
    color: ${base2};
  }
`
