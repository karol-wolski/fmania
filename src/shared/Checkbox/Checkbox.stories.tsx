import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta

const Template: Story = ({ inputName, labelText, color, callback }) => {
  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <Checkbox inputName={inputName} labelText={labelText} color={color} callback={callback} />
    </div>
  )
}

export const CheckboxDefault = Template.bind({})
CheckboxDefault.args = {
  inputName: 'checkbox',
  inputId: 'checkbox',
  labelText: 'Checkbox default',
}

export const CheckboxColor = Template.bind({})
CheckboxColor.args = {
  inputName: 'checkbox-blue',
  inputId: 'checkbox-blue',
  labelText: 'Color checkbox',
  color: '#0b49bd',
}

export const CheckboxColorCallback = Template.bind({})
CheckboxColorCallback.args = {
  inputName: 'checkbox-blue',
  inputId: 'checkbox-blue',
  labelText: 'Color checkbox with callback',
  color: '#0b49bd',
  callback: (name: string) => alert(name),
}

export const CheckboxDefaultCallback = Template.bind({})
CheckboxDefaultCallback.args = {
  inputName: 'checkbox callback',
  inputId: 'checkbox callback',
  labelText: 'Checkbox callback',
  callback: (name: string) => alert(name),
}
