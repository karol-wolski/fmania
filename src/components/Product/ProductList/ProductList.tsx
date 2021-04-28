import React from 'react'
import { ProductType } from '../../../types/types'
import { Wrapper } from './ProductList.style'
import SingleProduct from './ProductListItem/ProductListItem'

export interface ListProps {
  products: ProductType[]
}

const List: React.FC<ListProps> = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </Wrapper>
  )
}

export default List
