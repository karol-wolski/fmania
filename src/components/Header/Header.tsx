import React, { useState, useEffect } from 'react'
import { HeaderWrapper, Image, ButtonsWrapper, Input, Form, FormBtn } from './Header.styles'
import Logo from '../../images/logo.svg'
import { Button } from '../../shared/Button/Button'
import { IoMdSearch, IoMdLogIn, IoMdPersonAdd } from 'react-icons/io'

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const displayText = windowWidth > 400

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', reportWindowSize)
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  return (
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
        <Button kind="contain" category="secondary">
          {displayText ? 'Login' : <IoMdLogIn />}
        </Button>
        <Button kind="contain" category="primary">
          {displayText ? 'Register' : <IoMdPersonAdd />}
        </Button>
      </ButtonsWrapper>
    </HeaderWrapper>
  )
}

export default Header
