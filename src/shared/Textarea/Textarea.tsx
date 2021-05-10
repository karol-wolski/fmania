import React, { TextareaHTMLAttributes } from 'react'
import { TextArea } from './Textarea.style'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: any) => void
}

const Textarea: React.FC<TextAreaProps> = ({ ...props }) => {
  return <TextArea {...props} />
}

export default Textarea
