import styled from 'styled-components'

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
