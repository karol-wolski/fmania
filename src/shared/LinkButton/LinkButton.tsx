import React from 'react'
import { LinkBtn } from './LinkButton.style'

export interface ButtonProps {
  children: string | object
  kind: 'outline' | 'contain'
  category: 'primary' | 'secondary' | 'tertiary'
  link: string
  corner?: 'true' | 'false'
  uppercase?: 'true' | 'false'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  kind,
  category,
  link,
  corner = 'false',
  uppercase = 'false',
}) => {
  return (
    <LinkBtn kind={kind} category={category} corner={corner} uppercase={uppercase} to={link}>
      {children}
    </LinkBtn>
  )
}
