import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../../shared/Colors'
const { black100: sectionTextColor, grey300: linkColor } = Colors

export const Wrapper = styled.div`
  width: 17rem;
`

export const SectionName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${sectionTextColor};
  padding-bottom: 1rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li`
  padding-bottom: 1.5rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const ListLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${linkColor};
`
