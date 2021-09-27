import { fireEvent, render, screen } from '@testing-library/react'
import Textarea from './Textarea'

describe('Textarea', () => {
  it('should be in the document', () => {
    render(<Textarea />)
    const element = screen.getByRole('textbox')
    expect(element).toBeInTheDocument()
  })

  it('should accept text', () => {
    render(<Textarea />)
    const element = screen.getByRole('textbox')
    fireEvent.change(element, { target: { value: 'Lorem ipsum dolor sit amet.' } })
    expect(element).toHaveValue('Lorem ipsum dolor sit amet.')
  })
})
