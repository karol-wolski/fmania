import React from 'react'
import { Btn } from './Button.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, kind, category, ...props }) => {
  return (
    <Btn kind={kind} category={category} {...props}>
      {children}
    </Btn>
  )
}
