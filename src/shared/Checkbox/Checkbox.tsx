import React, { useState, InputHTMLAttributes } from 'react'
import { Input, Label, CheckedEffect } from './Checkbox.style'
import { IoCheckmark } from 'react-icons/io5'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string
  inputName: string
  labelText: string
  color?: string
  callback: (fieldName: string) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ inputName, inputId, labelText, color, callback }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckedState = () => {
    setIsChecked(!isChecked)
    callback(inputName)
  }

  return (
    <Label htmlFor={inputId}>
      <Input
        type="checkbox"
        name={inputName}
        id={inputId}
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
