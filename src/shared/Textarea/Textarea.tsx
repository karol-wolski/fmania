import React, { TextareaHTMLAttributes } from 'react'
import { TextArea } from './Textarea.style'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  refForward?: any
}

const Textarea: React.FC<TextAreaProps> = ({ refForward, ...props }) => {
  return <TextArea ref={refForward} {...props} />
}

export default Textarea
