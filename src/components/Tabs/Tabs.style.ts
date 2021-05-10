import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { grey400: MainColor, grey500: Accent } = Colors

type ListItemProp = {
  active?: boolean
  tabIndex?: any
}
type TabPanelProp = {
  active?: boolean
}

export const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Tab = styled.li<ListItemProp>`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 3.6rem;
  border: 1px solid ${MainColor};
  background-color: ${props => (props.active ? Accent : 'unset')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TabPanel = styled.div<TabPanelProp>`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${MainColor};
  padding: 2.4rem 3rem;
  border: 1px solid ${MainColor};
  display: ${props => (props.active ? 'block' : 'none')};
`
