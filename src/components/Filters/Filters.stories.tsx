import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Filters from './Filters'
import { FilterColor, FilterLinks, FilterSize, FilterType } from '../../shared/DumpData'

export default {
  title: 'Filter',
  component: Filters,
} as Meta

const Template: Story = ({ color, price, type, size, links, callback }) => {
  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <Filters color={color} price={price} type={type} size={size} links={links} callback={callback} />
    </div>
  )
}

export const RangeDefault = Template.bind({})
RangeDefault.args = {
  links: {
    title: 'Category',
    data: FilterLinks,
  },
  color: {
    title: 'Color',
    data: FilterColor,
  },
  price: {
    title: 'Price',
    min: 0,
    max: 1000,
  },
  type: {
    title: 'Type',
    data: FilterType,
  },
  size: {
    title: 'Size',
    data: FilterSize,
  },
}
