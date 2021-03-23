import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../Colors'
const { grey600: background, grey400: linkBasic, black100: linkBold } = Colors

export const Wrapper = styled.div`
  margin: 0 auto 3rem;
  max-width: 117rem;
  padding: 0 1.5rem;
`

export const BreadcrumbsWrapper = styled.div`
  background-color: ${background};
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
`

export const BreadcrumbLink = styled(Link)`
  color: ${linkBasic};
  padding: 0 0.5rem;
`

export const BreadcrumbLinkBold = styled(Link)`
  color: ${linkBold};
  font-weight: 700;
  padding: 0 0.5rem;
`
