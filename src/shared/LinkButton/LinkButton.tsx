import React from 'react'
import { LinkBtn } from './LinkButton.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary'
  link: 'string'
}

export const Button: React.FC<ButtonProps> = ({ children, kind, category, link }) => {
  return (
    <LinkBtn kind={kind} category={category} href={link}>
      {children}
    </LinkBtn>
  )
}
