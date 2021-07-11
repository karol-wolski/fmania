import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Filters from '../../components/Filters/Filters'
import Product from '../../components/Product/Product'
import { convertArrayToString } from '../../helpers/convertArrayToString'
import { GetProductPath } from '../../helpers/getProductPath'
import { getUniqueValueFromArray } from '../../helpers/getUniqueValueFromArray'
import { request } from '../../helpers/request'
import { CheckboxType, LinksType, ProductType } from '../../types/types'
import { Wrapper } from './Product.style'

interface routerParam {
  gender: string
}

const ProductPage: React.FC = () => {
  const { gender } = useParams<routerParam>()
  const path = GetProductPath()
  const [data, setData] = useState([])
  const [dataFilter, setDataFilter] = useState([])
  const [filterColorData, setFilterColorData] = useState<CheckboxType[]>([])
  const [filterSizeData, setFilterSizeData] = useState<CheckboxType[]>([])
  const [filterCategoryData, setFilterCategoryData] = useState<LinksType[]>([])
  const [maxPrice, setMaxPrice] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [filters, setFilters] = useState({
    color: [] as string[],
    size: [] as string[],
    price: [] as number[],
  })

  const getSelectedFilters = useCallback(() => {
    const { color, size, price } = filters
    let filter = ''
    if (color) {
      const colors = convertArrayToString(color)
      filter = colors.length > 0 ? `colors=${colors}&` : ``
    }
    if (size) {
      const sizes = convertArrayToString(size)
      filter += sizes.length > 0 ? `sizes=${sizes}&` : ``
    }
    if (price) {
      const prices = convertArrayToString(price)
      filter += prices.length > 0 ? `prices=${prices}&` : ``
    }
    return filter
  }, [filters])

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await request(`${process.env.REACT_APP_API}/products${path}`, 'GET', null)
        const json = await response.json()
        setData(json)
        setDataFilter(json)
      } catch (err) {
        console.log(err)
      }
    }

    fetchAsync()
  }, [path])

  useEffect(() => {
    const filter = getSelectedFilters()
    const fetchAsync = async () => {
      try {
        const response = await request(`${process.env.REACT_APP_API}/products${path}?${filter}`, 'GET', null)
        const json = await response.json()
        setData(json)
      } catch (err) {
        console.log(err)
      }
    }

    fetchAsync()
  }, [path, getSelectedFilters])

  const setPrice = (params: ProductType[]) => {
    const prices = params.map(({ price }) => price)
    const max = Math.max(...prices)
    const ceil = Math.ceil(max)
    setMaxPrice(ceil)
  }

  const setSizes = (params: ProductType[]) => {
    const sizes = params.map(({ sizes }) => sizes)
    const flatArray = sizes.flat(Infinity)
    const unique = getUniqueValueFromArray(flatArray)

    const arrayOfObjects = unique.map(item => {
      return {
        inputName: item,
        labelText: item,
      }
    })
    setFilterSizeData(arrayOfObjects)
  }

  const setColors = (params: ProductType[]) => {
    const colors = params.map(({ color }) => color)
    const flatArray = colors.flat(Infinity)
    const unique = flatArray.filter(
      (item: any, pos: any, arr: any) => arr.map((obj: any) => obj.name).indexOf(item.name) === pos,
    )

    const arrayOfObjects = unique.map((item: any) => {
      return {
        inputName: item.name,
        labelText: item.name,
        color: item.value,
      }
    })
    setFilterColorData(arrayOfObjects)
  }

  const setLinks = useCallback(
    (params: ProductType[]) => {
      const arrayPathname = path.split('/').filter(item => item)
      const category =
        arrayPathname.length === 1
          ? params.map(({ category }) => category)
          : params.map(({ subcategory }) => subcategory)

      let unique = getUniqueValueFromArray(category)

      let numOfDuplicates = unique.map(value => [value, category.filter(item => item === value).length])
      const arrayOfObjects = numOfDuplicates.map(item => {
        return {
          name: item[0],
          numOfProducts: item[1],
          link: `${path}/${item[0]}`,
        }
      })
      setFilterCategoryData(arrayOfObjects)
    },
    [path],
  )

  useEffect(() => {
    setPrice(dataFilter)
    setSizes(dataFilter)
    setColors(dataFilter)
    setLinks(dataFilter)
    if (dataFilter.length > 0) setIsLoaded(true)
  }, [data, dataFilter, setLinks])

  const removeArrayElement = (array: any[], element: any) => {
    array = array.filter((item: any) => item !== element)
    return array
  }

  const manageFilters = (object: any, newElement: string, name: string) => {
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
    const filterName = name.toLowerCase()
    if (filterName === 'price') {
      setFilters({ ...filters, price: filterValue })
    } else {
      manageFilters(filters, filterValue, filterName)
    }
  }

  const Links = {
    title: 'Category',
    data: filterCategoryData,
  }
  const Color = {
    title: 'Color',
    data: filterColorData,
  }
  const Size = {
    title: 'Size',
    data: filterSizeData,
  }

  const Price = {
    title: 'Price',
    min: 0,
    max: maxPrice,
  }
  return (
    <Wrapper>
      {isLoaded && (
        <>
          <Filters links={Links} size={Size} color={Color} price={Price} callback={handleSetFilters} />
          <Product title={gender} data={data} />
        </>
      )}
    </Wrapper>
  )
}

export default ProductPage
