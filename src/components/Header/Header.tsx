import React, { useState, useEffect, useContext } from 'react'
import { HeaderWrapper, Image, ButtonsWrapper, Input, Form, FormBtn } from './Header.styles'
import Logo from '../../images/logo.svg'
import { Button as LinkButton } from '../../shared/LinkButton/LinkButton'
import { IoMdSearch, IoMdLogIn, IoMdPersonAdd, IoMdLogOut, IoMdPerson } from 'react-icons/io'
import { Button } from '../../shared/Button/Button'
import { Logout } from '../../helpers/Logout'
import { UserContext } from '../../context/UserContext'

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  const displayText = windowWidth > 400

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', reportWindowSize)
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  return (
    <>
      <HeaderWrapper>
        <Image src={Logo} alt="" />

        <Form action="#">
          <Input type="search" name="" id="" placeholder="Search" />
          <FormBtn>
            <span className="sr-only">Search</span>
            <IoMdSearch />
          </FormBtn>
        </Form>

        <ButtonsWrapper>
          {isLoggedIn ? (
            <>
              <LinkButton kind="contain" category="secondary" link="/my_profile" corner>
                {displayText ? 'Profile' : <IoMdPerson />}
              </LinkButton>
              <Button kind="contain" category="primary" onClick={() => Logout(setIsLoggedIn)} corner>
                {displayText ? 'Log out' : <IoMdLogOut />}
              </Button>
            </>
          ) : (
            <>
              <LinkButton kind="contain" category="secondary" link="/login" corner>
                {displayText ? 'Login' : <IoMdLogIn />}
              </LinkButton>
              <LinkButton kind="contain" category="primary" link="/register" corner>
                {displayText ? 'Register' : <IoMdPersonAdd />}
              </LinkButton>
            </>
          )}
        </ButtonsWrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header
