import React from 'react'
import Sidebar from '../../shared/Sidebar/Sidebar'
import { Wrapper, SectionTitle } from './ProfileWithSidebar.style'

interface ProfileWithSidebarProps {
  title: string
  children: any
}

const ProfileWithSidebar: React.FC<ProfileWithSidebarProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <section>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </section>
    </Wrapper>
  )
}

export default ProfileWithSidebar
