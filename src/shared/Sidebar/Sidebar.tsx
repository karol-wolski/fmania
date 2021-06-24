import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { LinkElem, UL } from './Sidebar.style'

const Sidebar = () => {
  return (
    <div>
      <UL>
        <li>
          <LinkElem to="/my_profile/personal_information" exact>
            <AiOutlineUser />
            Personal Information
          </LinkElem>
        </li>
      </UL>
    </div>
  )
}

export default Sidebar
