import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SearchForm from './SearchForm'

describe('Edit user data form', () => {
  it('should have a label for a First Name field', () => {
    render(<SearchForm />)

    const firstNameLabel = screen.getByLabelText('What product do you want to find?')
    expect(firstNameLabel.getAttribute('name')).toBe('search')
  })

  it('should have attribute type search in telephone input', async () => {
    const { container } = render(<SearchForm />)

    const Input = container.querySelector('input[name="search"]')
    expect(Input).toHaveAttribute('type', 'search')
  })

  it('should have attribute type email in email input', async () => {
    const { container } = render(<SearchForm />)

    const Input = container.querySelector('input[name="search"]')
    expect(Input).toHaveAttribute('placeholder', 'What product do you want to find?')
  })
})
