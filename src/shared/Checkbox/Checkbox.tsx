import React, { useState, InputHTMLAttributes } from 'react'
import { Input, Label, CheckedEffect } from './Checkbox.style'
import { IoCheckmark } from 'react-icons/io5'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string
  labelText: string
  color?: string
  callback: (fieldName: string) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ inputName, labelText, color, callback }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckedState = () => {
    setIsChecked(!isChecked)
    callback(inputName)
  }

  return (
    <Label htmlFor={inputName}>
      <Input
        type="checkbox"
        name={inputName}
        id={inputName}
        checked={isChecked}
        color={color}
        onChange={handleCheckedState}
      />
      {labelText}

      {!color && (
        <CheckedEffect isActive={isChecked} onChange={handleCheckedState}>
          <IoCheckmark />
        </CheckedEffect>
      )}
    </Label>
  )
}

export default Checkbox
