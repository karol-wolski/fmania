import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider from './Slider'

const items = [
  {
    id: 1,
    title: '50% Off',
    subtitle: 'Discount on Women’s Wear',
    link: '#',
    imgLink:
      'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
  },
  {
    id: 2,
    title: '30% Off',
    subtitle: 'Discount on Men’s Wear',
    link: '#',
    imgLink:
      'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
  },
  {
    id: 3,
    title: '20% Off',
    subtitle: 'Discount on Child’s Wear',
    link: '#',
    imgLink:
      'https://image.shutterstock.com/z/stock-photo-fashion-clothes-on-clothing-rack-bright-colorful-closet-closeup-of-rainbow-color-choice-of-551997880.jpg',
  },
]

export default {
  title: 'Slider',
  component: Slider,
} as Meta

const Template: Story = () => (
  <div style={{ margin: '1.5rem' }}>
    <Slider slides={items} />
  </div>
)

export const Default = Template
