import React, { useState } from 'react'
import {
  Nav,
  NavWrapper,
  NavList,
  NavItem,
  NavLink,
  MenuButton,
  SelectGroup,
  Select,
  Basket,
} from './Navigation.styles'
import { IoMdClose, IoMdBasket } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const openMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const CloseMobileMenu = () => {
    if (Object.is(isMobileMenuOpen, true)) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  return (
    <Nav>
      <NavWrapper role="navigation">
        <MenuButton id="toggle" aria-expanded="false" onClick={openMobileMenu}>
          <span className="sr-only">Menu</span>
          {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </MenuButton>
        <NavList isOpen={isMobileMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={CloseMobileMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/women" onClick={CloseMobileMenu}>
              Women
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/men" onClick={CloseMobileMenu}>
              Men
            </NavLink>
          </NavItem>
        </NavList>
        <SelectGroup isVisible={isMobileMenuOpen}>
          <Select name="languages" id="languages">
            <option value="en">EN</option>
            <option value="pl">PL</option>
          </Select>
          <Select name="currency" id="currency">
            <option value="usd">USD</option>
            <option value="pln">PLN</option>
          </Select>
          <Basket to="/cart">
            <IoMdBasket />
          </Basket>
        </SelectGroup>
      </NavWrapper>
    </Nav>
  )
}

export default Navigation
