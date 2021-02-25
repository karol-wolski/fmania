import React from 'react'
import { LinkBtn } from './LinkButton.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary' | 'tertiary'
  link: string
}

export const Button: React.FC<ButtonProps> = ({ children, kind, category, link }) => {
  return (
    <LinkBtn kind={kind} category={category} to={link}>
      {children}
    </LinkBtn>
  )
}
