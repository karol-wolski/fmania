import { Story, Meta } from '@storybook/react/types-6-0'
import { Products } from '../../../shared/DumpData'
import ProductGrid, { GridProps } from './ProductGrid'

export default {
  title: 'Product Grid',
  component: ProductGrid,
} as Meta

const Template: Story<GridProps> = () => (
  <div style={{ margin: '1.5rem' }}>
    <ProductGrid products={Products} />
  </div>
)

export const Default = Template
