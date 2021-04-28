import { Story, Meta } from '@storybook/react/types-6-0'
import { Products } from '../../shared/DumpData'
import Product, { ProductProps } from './Product'

export default {
  title: 'Product',
  component: Product,
} as Meta

const Template: Story<ProductProps> = () => (
  <div style={{ margin: '1.5rem' }}>
    <Product title="Products" data={Products} />
  </div>
)

export const Default = Template
