import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should have property kind = xSmall', () => {
    render(<Input kind="xSmall" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle(`font-size: 1.8rem`)
    expect(input).toHaveStyle(`height: 3.4rem`)
  })

  it('should have property kind = small', () => {
    render(<Input kind="small" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle(`font-size: 1.4rem`)
    expect(input).toHaveStyle(`height: 3.7rem`)
  })

  it('should have property kind = medium', () => {
    render(<Input kind="medium" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle(`font-size: 1.4rem`)
    expect(input).toHaveStyle(`height: 4.1rem`)
  })

  it('should have property kind = big', () => {
    render(<Input kind="big" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle(`font-size: 1.6rem`)
    expect(input).toHaveStyle(`height: 5rem`)
  })
})
