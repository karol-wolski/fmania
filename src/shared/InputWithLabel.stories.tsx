import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input } from './Input/Input'
import { Label } from './Label/Label'

export default {
  title: 'Input with label',
  component: Input,
} as Meta

const Template: Story = ({ kind, children }) => {
  const [isActive, setIsActive] = useState(false)
  const [state, setState] = useState('')

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)
  const onFocusHandle = (e: React.ChangeEvent<HTMLInputElement>) => setIsActive(true)
  const onBlurHandle = (e: React.ChangeEvent<HTMLInputElement>) => !state && setIsActive(false)

  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <Input kind={kind} name="input" onFocus={onFocusHandle} onBlur={onBlurHandle} onChange={updateField} />
      <Label kind={kind} isActive={isActive}>
        {children}
      </Label>
    </div>
  )
}

export const xSmall = Template.bind({})
xSmall.args = {
  kind: 'xSmall',
  placeholder: 'xSmall',
  children: 'xSmall',
}

export const Small = Template.bind({})
Small.args = {
  kind: 'small',
  placeholder: 'Small',
  children: 'Small',
}

export const Medium = Template.bind({})
Medium.args = {
  kind: 'medium',
  placeholder: 'Medium',
  children: 'Medium',
}

export const Big = Template.bind({})
Big.args = {
  kind: 'big',
  placeholder: 'Big',
  children: 'Big',
}
