import { render, screen } from '@testing-library/react'
import { BiCloset } from 'react-icons/bi'
import NoItems from './NoItems'

describe('Cart empty', () => {
  it('should be render with text content: "Your cart is empty!"', () => {
    render(<NoItems text="No items" icon={<BiCloset />} />)
    const text = screen.getByText(/No Items/i)
    expect(text).toBeInTheDocument()
  })
})
