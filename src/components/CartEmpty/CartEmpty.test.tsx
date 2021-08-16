import { render, screen } from '@testing-library/react'
import CartEmpty from './CartEmpty'

describe('Cart empty', () => {
  it('should be render with text content: "Your cart is empty!"', () => {
    render(<CartEmpty />)
    const text = screen.getByText(/Your cart is empty!/i)
    expect(text).toBeInTheDocument()
  })
})
