import { Story, Meta } from '@storybook/react/types-6-0'
import { Products } from '../../../shared/DumpData'
import ProductList, { ListProps } from './ProductList'

export default {
  title: 'Product List',
  component: ProductList,
} as Meta

const Template: Story<ListProps> = () => (
  <div style={{ margin: '1.5rem' }}>
    <ProductList products={Products} />
  </div>
)

export const Default = Template
