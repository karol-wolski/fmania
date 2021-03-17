import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Alert, { AlertProps } from './Alert'

export default {
  title: 'Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = args => (
  <div style={{ margin: '1.5rem' }}>
    <Alert {...args} />
  </div>
)
export const WarningAlert = Template.bind({})
WarningAlert.args = {
  type: 'Warn',
  message: 'This is warning alert!',
}

export const InfoAlert = Template.bind({})
InfoAlert.args = {
  type: 'Info',
  message: 'This is info alert!',
}

export const ErrorAlert = Template.bind({})
ErrorAlert.args = {
  type: 'Error',
  message: 'This is error alert!',
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  type: 'Success',
  message: 'This is success alert!',
}
