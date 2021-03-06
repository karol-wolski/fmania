import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  width: 6.8rem;
  height: 3.52rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.3);

  &:last-of-type {
    padding-right: 0;
  }

  @media (max-width: 568px) {
    margin-bottom: 1rem;
  }
`

export const Img = styled.img`
  width: 100%;
`
