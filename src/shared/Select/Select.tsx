import React from 'react'
import { removeMultiWhiteSpace } from '../../helpers/removeMultiWhiteSpace'
import { Label, Option, SelectStyle, SelectWrapper } from './Select.style'

type OptionProp = {
  name: string
  value: string
}

interface SelectParam {
  labelName: string
  options: OptionProp[]
}

const Select: React.FC<SelectParam> = ({ labelName, options }) => {
  const selectName = removeMultiWhiteSpace(labelName)

  return (
    <SelectWrapper>
      <Label htmlFor={selectName}>{labelName}</Label>
      <SelectStyle name={selectName} id={selectName}>
        <Option value="*">Select {labelName}</Option>
        {options.map(({ name, value }) => (
          <Option key={name} value={value}>
            {name}
          </Option>
        ))}
      </SelectStyle>
    </SelectWrapper>
  )
}

export default Select
