import React from 'react'
import Checkbox from '../../../shared/Checkbox/Checkbox'
import { CheckboxType } from '../../../types/types'
import FilterBox from '../FilterBox/FilterBox'
import { List, ListItem } from './CheckboxFilterList.style'

interface CheckboxFilterListProps {
  title: string
  data: CheckboxType[]
  callback?: (name: string, filterValue: string | number) => void
}

const CheckboxFilterList: React.FC<CheckboxFilterListProps> = ({ title, data, callback }) => {
  const handleOnChange = (fieldName: string) => {
    if (callback) callback(title, fieldName)
  }
  return (
    <FilterBox boxName={title}>
      <List>
        {data.map(({ inputName, inputId, labelText, color }) => {
          return (
            <ListItem key={inputId}>
              <Checkbox
                inputName={inputName}
                inputId={inputId}
                labelText={labelText}
                color={color}
                callback={handleOnChange}
              />
            </ListItem>
          )
        })}
      </List>
    </FilterBox>
  )
}

export default CheckboxFilterList
