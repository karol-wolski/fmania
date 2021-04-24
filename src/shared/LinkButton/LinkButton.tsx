import React from 'react'
import { LinkBtn } from './LinkButton.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary' | 'tertiary'
  link: string
  corner?: boolean
  uppercase?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, kind, category, link, corner, uppercase }) => {
  return (
    <LinkBtn kind={kind} category={category} corner={corner ? 1 : 0} uppercase={uppercase ? 1 : 0} to={link}>
      {children}
    </LinkBtn>
  )
}
