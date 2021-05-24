import React from 'react'
import RangeFilter from './RangeFilter/RangeFilter'
import LinksFilterList from './LinksFilterList/LinksFilterList'
import CheckboxFilterList from './CheckboxFilterList/CheckboxFilterList'
import { Wrapper, Title } from './Filters.style'
import { LinksType, CheckboxType, PriceType } from '../../types/types'

type Links = {
  title: string
  data: LinksType[]
}

type Checkbox = {
  title: string
  data: CheckboxType[]
}

interface FiltersProps {
  links: Links
  color: Checkbox
  price: PriceType
  size: Checkbox
  callback: (name: any, filterValue: any) => void
}

const Filters: React.FC<FiltersProps> = ({ color, price, size, links, callback }) => {
  const { title: PriceTitle, min, max } = price
  const { title: ColorTitle, data: ColorData } = color
  const { title: LinksTitle, data: LinksData } = links
  const { title: SizeTitle, data: SizeData } = size
  return (
    <Wrapper>
      <Title>Filter</Title>
      <LinksFilterList title={LinksTitle} data={LinksData} />
      <RangeFilter title={PriceTitle} min={min} max={max} callback={callback} />
      <CheckboxFilterList title={ColorTitle} data={ColorData} callback={callback} />
      <CheckboxFilterList title={SizeTitle} data={SizeData} callback={callback} />
    </Wrapper>
  )
}

export default Filters
