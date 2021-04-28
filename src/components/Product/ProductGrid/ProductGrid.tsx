import React from 'react'
import { ProductType } from '../../../types/types'
import { Wrapper } from './ProductGrid.style'
import SingleProduct from './ProductGridItem/ProductGridItem'

export interface GridProps {
  products: ProductType[]
}

const Grid: React.FC<GridProps> = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </Wrapper>
  )
}

export default Grid
