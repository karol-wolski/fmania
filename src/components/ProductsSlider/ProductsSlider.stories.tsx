import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProductsSlider, { ProductsSliderProps } from './ProductsSlider'
import { products_1 } from '../../shared/DumpData'

export default {
  title: 'Products Slider',
  component: ProductsSlider,
} as Meta

const Template: Story<ProductsSliderProps> = args => (
  <div style={{ margin: '1.5rem' }}>
    <ProductsSlider name="Fashion Products" items={products_1} border={args.border} />
  </div>
)

export const Border = Template.bind({})
Border.args = {
  border: true,
}

export const Default = Template
