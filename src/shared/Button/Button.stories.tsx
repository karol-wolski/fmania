import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => (
  <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button {...args}>Click me</Button>
  </div>
)
export const ContainPrimary = Template.bind({})
ContainPrimary.args = {
  kind: 'contain',
  category: 'primary',
}

export const ContainSecondary = Template.bind({})
ContainSecondary.args = {
  kind: 'contain',
  category: 'secondary',
}

export const OutlinePrimary = Template.bind({})
OutlinePrimary.args = {
  kind: 'outline',
  category: 'primary',
}

export const OutlineSecondary = Template.bind({})
OutlineSecondary.args = {
  kind: 'outline',
  category: 'secondary',
}

export const ContainPrimaryCornerRound = Template.bind({})
ContainPrimaryCornerRound.args = {
  kind: 'contain',
  category: 'primary',
  corner: true,
}

export const ContainPrimaryUppercase = Template.bind({})
ContainPrimaryUppercase.args = {
  kind: 'contain',
  category: 'primary',
  uppercase: true,
}
