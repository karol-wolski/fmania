import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import InfoBox, { InfoBoxProps } from './InfoBox'
import { IoReturnUpBack } from 'react-icons/io5'

export default {
  title: 'InfoBox',
  component: InfoBox,
} as Meta

const Template: Story<InfoBoxProps> = args => <InfoBox {...args} />

export const Default = Template.bind({})
Default.args = {
  desc: 'This is a infobox',
  icon: <IoReturnUpBack />,
}
