import React from 'react'
import { Btn } from './Button.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary'
  onClick?: () => void
  corner?: boolean
  uppercase?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, kind, category, corner, uppercase, ...props }) => {
  return (
    <Btn kind={kind} category={category} corner={corner ? 1 : 0} uppercase={uppercase ? 1 : 0} {...props}>
      {children}
    </Btn>
  )
}
