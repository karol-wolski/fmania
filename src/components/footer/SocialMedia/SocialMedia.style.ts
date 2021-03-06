import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
const { grey900: IconC, grey800: IconHover } = Colors

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  padding-right: 1rem;

  &:last-of-type {
    padding-right: 0;
  }
`

export const ListLink = styled.a`
  color: ${IconC};
  font-size: 1.8rem;

  &:hover {
    color: ${IconHover};
  }
`
