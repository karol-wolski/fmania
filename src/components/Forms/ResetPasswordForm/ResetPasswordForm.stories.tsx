import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ResetPasswordForm from './ResetPasswordForm'

export default {
  title: 'Reset Password Form',
  component: ResetPasswordForm,
} as Meta

export const Form: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <ResetPasswordForm />
  </div>
)
