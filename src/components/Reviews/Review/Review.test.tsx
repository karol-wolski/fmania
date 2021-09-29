import { render, screen } from '@testing-library/react'
import Review from './Review'

describe('Review', () => {
  const review = {
    id: 100,
    title: 'Great product',
    description: 'Lorem ipsum dolor sit amet.',
    author: 'John Doe',
    date: '20.10.2021',
    mark: 4,
  }
  it('should display title', () => {
    render(<Review {...review} />)
    const title = screen.getByText(review.title)
    expect(title).toBeInTheDocument()
  })
  it('should display comment', () => {
    render(<Review {...review} />)
    const description = screen.getByText(review.description)
    expect(description).toBeInTheDocument()
  })
  it('should display author and date', () => {
    render(<Review {...review} />)
    const author = screen.getByText(`by ${review.author},`)
    expect(author).toHaveTextContent(review.date)
  })
})
