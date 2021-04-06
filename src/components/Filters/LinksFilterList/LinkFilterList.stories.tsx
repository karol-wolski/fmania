import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LinksFilterList from './LinksFilterList'
import { FilterLinks } from '../../../shared/DumpData'

export default {
  title: 'Links Filter List',
  component: LinksFilterList,
} as Meta

const Template: Story = ({ title, data }) => {
  return (
    <div style={{ margin: '3rem', position: 'relative' }}>
      <LinksFilterList title={title} data={data} />
    </div>
  )
}

export const LinksDefault = Template.bind({})
LinksDefault.args = {
  title: 'Range filter',
  data: FilterLinks,
}
