import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../shared/Colors'
import getZindex from '../../helpers/z-index'
const { white100: secondary, black100: primary, blue100: accent1, blue200: accent2 } = Colors

type NavListProps = {
  isOpen: boolean
}

type SubNavProps = {
  isActive: boolean
}

type SelectGroupProps = {
  isVisible: boolean
}

export const Nav = styled.div`
  width: 100%;
  background-color: ${primary};
  position: relative;
  z-index: ${getZindex('Nav')};
`

export const NavWrapper = styled.nav`
  max-width: 117rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`

export const NavList = styled.ul<NavListProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  height: calc(100vh - 5rem);
  flex-direction: column;
  align-items: center;
  list-style: none;
  background-color: ${primary};
  padding: 0;

  @media (max-width: 767px) {
    position: absolute;
    top: 4rem;
    left: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    align-items: flex-start;
    height: auto;
  }
`

export const NavItem = styled.li`
  margin-bottom: 3rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    margin: 0 3rem 0 0;
  }
`

export const NavLink = styled(Link)`
  color: ${secondary};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;

  &:hover {
    color: ${accent1};
  }
`

export const SubNav = styled.div<SubNavProps>`
  display: ${props => (props.isActive ? 'block' : 'none')};
  box-shadow: 0 -0.6rem 2.5rem -1.3rem rgba(0, 0, 0, 0.72);
  background-color: ${secondary};
  padding: 2.5rem 3rem 0;

  @media (max-width: 767px) {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 8rem;
    padding-right: 7rem;
    &::before {
      content: '';
      position: absolute;
      top: -1rem;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 1rem 1rem 1rem;
      border-color: transparent transparent ${secondary} transparent;
    }
  }
`

export const SubNavList = styled.ul`
  list-style: none;
`

export const SubNavItem = styled.li`
  padding-bottom: 2rem;
  &:nth-last-of-type() {
    padding-bottom: 0;
  }
`

export const SubNavLink = styled(Link)`
  color: #5b5b5b;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;
`

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${secondary};
  font-size: 1.6rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

export const SelectGroup = styled.div<SelectGroupProps>`
  display: ${props => (props.isVisible ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  & > select:nth-child(2) {
    margin: 0 2rem;
  }
`

export const Select = styled.select`
  background-color: transparent;
  color: ${secondary};
  border: none;
  font-size: 1.4rem;
  font-weight: 400;

  option {
    background-color: ${primary};
  }
`

export const Basket = styled(Link)`
  color: ${secondary};
  text-decoration: none;
  position: relative;
  font-size: 2rem;

  &:hover {
    color: ${accent1};
  }
`

export const BasketItems = styled.span`
  background-color: ${accent2};
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`
