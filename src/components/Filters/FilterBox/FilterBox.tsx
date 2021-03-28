import React from 'react'
import { Wrapper, Title } from './FilterBox.style'

interface FilterBoxProps {
  boxName: string
  children: any
}

const FilterBox: React.FC<FilterBoxProps> = ({ boxName, children }) => {
  return (
    <Wrapper>
      <Title>{boxName}</Title>
      {children}
    </Wrapper>
  )
}

export default FilterBox
