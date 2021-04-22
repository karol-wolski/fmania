import React, { LabelHTMLAttributes } from 'react'
import { LabelField } from './Label.style'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  kind: 'xSmall' | 'small' | 'medium' | 'big'
  children: string | object
  isActive?: boolean
  isEffect?: boolean
}

export const Label: React.FC<LabelProps> = ({ kind, children, isActive, isEffect = true, ...props }) => {
  return (
    <LabelField kind={kind} isActive={isActive} isEffect={isEffect} {...props}>
      {children}
    </LabelField>
  )
}
