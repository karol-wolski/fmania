import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
} as Meta

const Template: Story = () => <Navigation />

export const Default = Template
