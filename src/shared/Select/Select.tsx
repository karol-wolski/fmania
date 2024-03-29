import React, { SelectHTMLAttributes } from 'react'
import { removeMultiWhiteSpace } from '../../helpers/removeMultiWhiteSpace'
import { SelectValue } from '../../types/types'
import { Label, Option, SelectStyle, SelectWrapper } from './Select.style'
interface SelectParam extends SelectHTMLAttributes<HTMLSelectElement> {
  labelName: string
  options: SelectValue[]
  refForward?: any
}

const Select: React.FC<SelectParam> = ({ labelName, options, refForward, ...props }) => {
  const selectName = removeMultiWhiteSpace(labelName).toLocaleLowerCase()

  return (
    <SelectWrapper>
      <Label htmlFor={selectName}>{labelName}</Label>
      <SelectStyle name={selectName} id={selectName} ref={refForward} {...props}>
        <Option value="">Select {labelName}</Option>
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
