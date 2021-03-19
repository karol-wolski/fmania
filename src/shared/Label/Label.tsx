import React, { LabelHTMLAttributes } from 'react'
import { LabelField } from './Label.style'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
  children: string | object
  isActive?: boolean
}

export const Label: React.FC<LabelProps> = ({ kind, children, isActive, ...props }) => {
  return (
    <LabelField kind={kind} isActive={isActive} {...props}>
      {children}
    </LabelField>
  )
}
