import React, { InputHTMLAttributes } from 'react'
import { InputField } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
  ref?: any
}

export const Input: React.FC<InputProps> = ({ kind, children, ...props }) => {
  return <InputField kind={kind} {...props} />
}
