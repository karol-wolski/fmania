import React, { useState, useEffect } from 'react'
import { BsGrid, BsList } from 'react-icons/bs'
import { ProductType } from '../../types/types'
import { Wrapper, Header, Title, Filter, FilterItem, Label, Select, Button, Span } from './Product.style'
import ProductGrid from './ProductGrid/ProductGrid'
import ProductList from './ProductList/ProductList'

export interface ProductProps {
  title: string
  data: ProductType[]
}

const Product: React.FC<ProductProps> = ({ title, data }) => {
  const [products, setProducts] = useState(data)
  const [view, setView] = useState('grid')
  const [sortBy, setSortBy] = useState('popularity')

  useEffect(() => {
    const sortProducts = () => {
      const copyProducts = [...data]

      if (sortBy === 'price-asc') {
        copyProducts.sort((a, b) => a.price - b.price)
      }

      if (sortBy === 'price-desc') {
        copyProducts.sort((a, b) => b.price - a.price)
      }

      if (sortBy === 'popularity') {
        copyProducts.sort((a, b) => b.popularity[0] - a.popularity[0])
      }

      if (sortBy === 'alphabet-asc') {
        copyProducts.sort((a, b) => a.name.localeCompare(b.name))
      }

      if (sortBy === 'alphabet-desc') {
        copyProducts.sort((a, b) => b.name.localeCompare(a.name))
      }

      setProducts(copyProducts)
    }
    sortProducts()
  }, [sortBy, data])

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Filter>
          <FilterItem>
            <Label htmlFor="sort">Sort by</Label>
            <Select name="sort" id="sort" defaultValue={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="price-asc">Price ASC</option>
              <option value="price-desc">Price DESC</option>
              <option value="popularity">Popularity</option>
              <option value="alphabet-asc">A - Z</option>
              <option value="alphabet-desc">Z - A</option>
            </Select>
          </FilterItem>
          <FilterItem>
            <Span>View</Span>
            <Button onClick={() => setView('grid')} active={view === 'grid'}>
              <BsGrid />
            </Button>
            <Button onClick={() => setView('list')} active={view === 'list'}>
              <BsList />
            </Button>
          </FilterItem>
        </Filter>
      </Header>
      {view === 'grid' ? <ProductGrid products={products} /> : <ProductList products={products} />}
    </Wrapper>
  )
}

export default Product
