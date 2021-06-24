import React from 'react'
import EditUserDataForm from '../../../components/Forms/EditUserDataForm/EditUserDataForm'
import ProfileWithSidebar from '../../../templates/ProlileWithSidebar/ProfileWithSidebar'

const PersonalInformation: React.FC = () => {
  return (
    <ProfileWithSidebar title="Personal Information">
      <EditUserDataForm />
    </ProfileWithSidebar>
  )
}

export default PersonalInformation
