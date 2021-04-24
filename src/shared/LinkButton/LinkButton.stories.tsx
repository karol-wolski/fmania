import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './LinkButton'

export default {
  title: 'Button as a Link',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button {...args}>Click me</Button>
  </div>
)
export const ContainPrimary = Template.bind({})
ContainPrimary.args = {
  kind: 'contain',
  category: 'primary',
  link: '/',
}

export const ContainSecondary = Template.bind({})
ContainSecondary.args = {
  kind: 'contain',
  category: 'secondary',
  link: '/',
}

export const OutlinePrimary = Template.bind({})
OutlinePrimary.args = {
  kind: 'outline',
  category: 'primary',
  link: '/',
}

export const OutlineSecondary = Template.bind({})
OutlineSecondary.args = {
  kind: 'outline',
  category: 'secondary',
  link: '/',
}

export const ContainPrimaryCornerRound = Template.bind({})
ContainPrimaryCornerRound.args = {
  kind: 'contain',
  category: 'primary',
  link: '/',
  corner: true,
}

export const ContainPrimaryUppercase = Template.bind({})
ContainPrimaryUppercase.args = {
  kind: 'contain',
  category: 'primary',
  link: '/',
  uppercase: true,
}

const Template1: Story<ButtonProps> = args => (
  <div
    style={{
      backgroundColor: '#127dbb',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button {...args}>Click me</Button>
  </div>
)

export const OutlineThird = Template1.bind({})
OutlineThird.args = {
  kind: 'outline',
  category: 'tertiary',
  link: '/',
}
