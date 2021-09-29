import { render, screen } from '@testing-library/react'
import Reviews from './Reviews'

describe('Order list', () => {
  const reviews = [
    {
      id: 100,
      title: 'Great product',
      description: 'Lorem ipsum dolor sit amet.',
      author: 'John Doe',
      date: '20.10.2021',
      mark: 4,
    },
    {
      id: 101,
      title: 'Best product',
      description: 'Lorem ipsum dolor sit amet.',
      author: 'John Doe',
      date: '22.10.2021',
      mark: 5,
    },
  ]

  it('should display component title: Customer Review', () => {
    render(<Reviews data={reviews} />)
    const title = screen.getByText('Customer Review')
    expect(title).toBeInTheDocument()
  })

  it('should display reviews', () => {
    render(<Reviews data={reviews} />)
    const review1 = screen.getByText(reviews[0].title)
    const review2 = screen.getByText(reviews[1].title)
    expect(review1).toBeInTheDocument()
    expect(review2).toBeInTheDocument()
  })
})
