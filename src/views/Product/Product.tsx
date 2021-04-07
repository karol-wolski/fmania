import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Filters from '../../components/Filters/Filters'
import Product from '../../components/Product/Product'
import { FilterLinks, FilterColor, FilterType, FilterSize, Products } from '../../shared/DumpData'
import { Wrapper, Column } from './Product.style'

interface routerParam {
  id: string
}

const ProductPage: React.FC = () => {
  const { id } = useParams<routerParam>()
  const [filters, setFilters] = useState({
    color: [] as string[],
    size: [] as string[],
    type: [] as string[],
    price: [] as number[],
  })

  const removeArrayElement = (array: any[], element: any) => {
    array = array.filter((item: any) => item !== element)
    return array
  }

  const manageFilters = (object: any, newElement: any, name: string) => {
    const obj = { ...object }
    let array = obj[name]
    if (array.includes(newElement)) {
      array = removeArrayElement(object[name], newElement)
    } else {
      array = [...array, newElement]
    }

    for (const [key] of Object.entries(obj)) {
      if (key === name) {
        obj[key] = array
      }
    }
    setFilters(obj)
  }

  const handleSetFilters = (name: string, filterValue: any) => {
    console.log(filterValue)
    const filterName = name.toLowerCase()
    if (filterName === 'price') {
      setFilters({ ...filters, price: filterValue })
    } else {
      manageFilters(filters, filterValue, filterName)
    }
  }

  useEffect(() => {
    console.log('useeffect: ', filters)
  }, [filters])

  const Links = {
    title: 'Category',
    data: FilterLinks,
  }
  const Color = {
    title: 'Color',
    data: FilterColor,
  }
  const Type = {
    title: 'Type',
    data: FilterType,
  }
  const Size = {
    title: 'Size',
    data: FilterSize,
  }

  const Price = {
    title: 'Price',
    min: 0,
    max: 1500,
  }
  return (
    <Wrapper>
      <Filters links={Links} size={Size} type={Type} color={Color} price={Price} callback={handleSetFilters} />
      <Column>
        <Product title={id} data={Products} />
      </Column>
    </Wrapper>
  )
}

export default ProductPage
