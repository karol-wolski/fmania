import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './LinkButton'

export default {
  title: 'Button as a Link',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => (
  <div style={{ margin: '1.5rem' }}>
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
