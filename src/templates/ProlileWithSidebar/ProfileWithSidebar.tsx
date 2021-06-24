import React from 'react'
import Sidebar from '../../shared/Sidebar/Sidebar'
import { Wrapper } from './ProfileWithSidebar.style'

interface ProfileWithSidebarProps {
  title: string
  children: any
}

const ProfileWithSidebar: React.FC<ProfileWithSidebarProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </Wrapper>
  )
}

export default ProfileWithSidebar
