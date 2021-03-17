import React, { InputHTMLAttributes } from 'react'
import { InputField } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
  refForward?: any
}

export const Input: React.FC<InputProps> = ({ kind, refForward, ...props }) => {
  return <InputField kind={kind} ref={refForward} {...props} />
}
