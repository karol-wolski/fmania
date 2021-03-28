import React from 'react'
import { LinksType } from '../../../types/types'
import FilterBox from '../FilterBox/FilterBox'
import { List, ListItem, ListLink } from './LinksFilterList.style'

interface FilterByLinksProps {
  title: string
  data: LinksType[]
}

const FilterByLinks: React.FC<FilterByLinksProps> = ({ title, data }) => {
  return (
    <FilterBox boxName={title}>
      <List>
        {data.map(({ name, numOfProducts, link }) => {
          return (
            <ListItem key={name}>
              <ListLink to={link}>
                {name} ({numOfProducts})
              </ListLink>
            </ListItem>
          )
        })}
      </List>
    </FilterBox>
  )
}

export default FilterByLinks
