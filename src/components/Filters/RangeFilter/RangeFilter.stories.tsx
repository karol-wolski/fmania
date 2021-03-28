import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import RangeFilter from './RangeFilter'
import { PriceType } from '../../../types/types'

export default {
  title: 'Range Filter',
  component: RangeFilter,
} as Meta

const Template: Story<PriceType> = args => {
  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <RangeFilter {...args} />
    </div>
  )
}

export const RangeDefault = Template.bind({})
RangeDefault.args = {
  title: 'Range filter',
  min: 0,
  max: 1500,
}
