import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../../shared/Colors'
const { grey400: LinkText } = Colors

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  padding-bottom: 2rem;

  &:last-of-type {
    padding-bottom: unset;
  }
`
export const ListLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${LinkText};

  &:hover {
    font-weight: 700;
  }
`
