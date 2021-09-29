import { render, screen } from '@testing-library/react'
import Item from './Item'

describe('Item', () => {
  it('should be render', () => {
    const product = {
      name: 'Product',
      size: 'S',
      price: 23.99,
      image: 'test_image.jpg',
      color: 'blue',
    }

    render(<Item product={product} />)
    const title = screen.getByText(product.name)
    const size = screen.getByText(`Size: ${product.size}`)
    const price = screen.getByText(`Price: ${product.price}`)
    const color = screen.getByText(`Color: ${product.color}`)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', product.image)
    expect(img).toHaveAttribute('alt', product.name)
    expect(title).toBeInTheDocument()
    expect(size).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(color).toBeInTheDocument()
  })
})
