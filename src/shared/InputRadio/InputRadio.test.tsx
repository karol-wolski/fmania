import { render, screen } from '@testing-library/react'
import { InputRadio } from './InputRadio'

describe('Input', () => {
  it('should be in the document and set correct values', () => {
    render(<InputRadio name="test-name" label="test-label" value="test-value" />)
    const label = screen.getByLabelText('test-label')
    expect(label).toBeInTheDocument()
    const input = screen.getByDisplayValue('test-value')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'radio')
    expect(input).toHaveAttribute('name', 'test-name')
    expect(input).toHaveAttribute('id', 'test-value')
  })

  it('should be disabled', () => {
    render(<InputRadio name="test-name" label="test-label" value="test-value" disabled />)
    const input = screen.getByDisplayValue('test-value')
    expect(input).toBeInTheDocument()
    expect(input).toBeDisabled()
  })
})
