import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Button } from '../../shared/LinkButton/LinkButton'
import { Div } from './MyProfile.style'

const MyProfile = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  return (
    <>
      {!isLoggedIn ? (
        <Redirect to="/login" />
      ) : (
        <Div>
          <Button link="/my_profile/personal_information" category="primary" kind="contain" uppercase>
            Personal Information
          </Button>
          <Button link="/my_profile/orders" category="primary" kind="contain" uppercase>
            Orders
          </Button>
        </Div>
      )}
    </>
  )
}

export default MyProfile
