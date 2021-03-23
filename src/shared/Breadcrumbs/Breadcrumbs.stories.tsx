import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Breadcrumbs from './Breadcrumbs'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as Meta

export const Template: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <Breadcrumbs />
  </div>
)
