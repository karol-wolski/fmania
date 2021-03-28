import React, { useState } from 'react'
import FilterBox from '../FilterBox/FilterBox'
import { Wrapper, PriceField, PriceWrap, Label, Input } from './RangeFilter.style'

interface RangeFilterProps {
  title: string
  min: number
  max: number
  callback?: (name: string, filterValue: [number, number]) => void
}

const RangeFilter: React.FC<RangeFilterProps> = ({ title, min, max, callback }) => {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const handleSetValue = (type: string, value: number): void => {
    type === 'min' ? setMinValue(value) : setMaxValue(value)
  }

  const handleOnChange = (type: string, value: number): void => {
    handleSetValue(type, value)
    if (callback) callback(title, [minValue, maxValue])
  }

  return (
    <FilterBox boxName={title}>
      <Wrapper>
        <PriceField>
          <Input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={event => handleOnChange('min', parseFloat(event.target.value))}
          />
          <Input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={event => handleOnChange('max', parseFloat(event.target.value))}
          />
        </PriceField>
        <PriceWrap>
          <Label>{minValue}</Label>
          <Label>{maxValue}</Label>
        </PriceWrap>
      </Wrapper>
    </FilterBox>
  )
}

export default RangeFilter
