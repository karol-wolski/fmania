import React from 'react'
import { Button } from '../../shared/LinkButton/LinkButton'
import { Div } from './MyProfile.style'

const MyProfile = () => {
  return (
    <Div>
      <Button link="/my_profile/personal_information" category="primary" kind="contain" uppercase>
        Personal Information
      </Button>
      <Button link="/my_profile/orders" category="primary" kind="contain" uppercase>
        Orders
      </Button>
    </Div>
  )
}

export default MyProfile
