import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider from './Slider'

export default {
  title: 'Slider',
  component: Slider,
} as Meta

const Template: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <Slider />
  </div>
)

export const Default = Template
