import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import RegisterForm from './RegisterForm'

export default {
  title: 'Register Form',
  component: RegisterForm,
} as Meta

export const Form: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <RegisterForm />
  </div>
)
