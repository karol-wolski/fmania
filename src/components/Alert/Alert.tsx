import React from 'react'
import { AlertWrapper } from './Alert.style'
import { BiErrorCircle } from 'react-icons/bi'
import { GrCircleInformation, GrStatusWarning, GrStatusGood } from 'react-icons/gr'

export interface AlertProps {
  message: string
  type: 'Info' | 'Warn' | 'Error' | 'Success'
  role?: string
}

const Alert: React.FC<AlertProps> = ({ type, message, role }) => {
  let icon

  if (type === 'Info') {
    icon = <GrCircleInformation />
  } else if (type === 'Warn') {
    icon = <GrStatusWarning />
  } else if (type === 'Error') {
    icon = <BiErrorCircle />
  } else if (type === 'Success') {
    icon = <GrStatusGood />
  } else {
    new Error('Incorrect type')
  }

  return (
    <AlertWrapper type={type} role={role}>
      {icon} {message}
    </AlertWrapper>
  )
}

export default Alert
