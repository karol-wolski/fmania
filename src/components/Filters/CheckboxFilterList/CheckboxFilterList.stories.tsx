import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CheckboxFilterList from './CheckboxFilterList'
import { FilterColor, FilterSize } from '../../../shared/DumpData'

export default {
  title: 'Checkbox Filter List',
  component: CheckboxFilterList,
} as Meta

const Template: Story = ({ title, data, callback }) => {
  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <CheckboxFilterList title={title} data={data} callback={callback} />
    </div>
  )
}

export const CheckboxDefault = Template.bind({})
CheckboxDefault.args = {
  title: 'Checkbox Filter List',
  data: FilterSize,
}

export const CheckboxColor = Template.bind({})
CheckboxColor.args = {
  title: 'Checkbox Filter List',
  data: FilterColor,
}
