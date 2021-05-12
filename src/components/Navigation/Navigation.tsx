import React, { useState } from 'react'
import {
  Nav,
  NavWrapper,
  NavList,
  NavItem,
  NavLink,
  SubNav,
  SubNavList,
  SubNavItem,
  SubNavLink,
  MenuButton,
  SelectGroup,
  Select,
  Basket,
} from './Navigation.styles'
import { IoMdArrowDropdown, IoMdClose, IoMdBasket } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  const activeSubmenu = () => setIsSubmenuActive(!isSubmenuActive)
  const openMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <Nav>
      <NavWrapper role="navigation">
        <MenuButton id="toggle" aria-expanded="false" onClick={openMobileMenu}>
          <span className="sr-only">Menu</span>
          {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </MenuButton>
        <NavList isOpen={isMobileMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={activeSubmenu}>
              Collactions <IoMdArrowDropdown />
            </NavLink>
            <SubNav isActive={isSubmenuActive}>
              <SubNavList>
                <SubNavItem>
                  <SubNavLink to="/">Stainless Steel</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Store</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Home Style Store</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Milton</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Ajanta</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Prestige</SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/">Home Town</SubNavLink>
                </SubNavItem>
              </SubNavList>
            </SubNav>
          </NavItem>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Women</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Home & Furniture</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Sports</NavLink>
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
