import React from 'react'
import { InputField, Label } from './InputRadio.style'

interface InputProps {
  name: string
  value: string
  label: string
  disabled?: boolean
  callback?: () => void
}

export const InputRadio: React.FC<InputProps> = ({ name, value, label, disabled, callback }) => {
  return (
    <>
      <Label htmlFor={value} onClick={callback}>
        <InputField type="radio" name={name} id={value} value={value} disabled={disabled} />
        {label}
      </Label>
    </>
  )
}
