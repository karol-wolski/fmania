import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LoginForm from './LoginForm'

export default {
  title: 'Login Form',
  component: LoginForm,
} as Meta

export const Form: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <LoginForm />
  </div>
)
