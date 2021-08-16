import { render, screen } from '@testing-library/react'
import CartPriceDetail from './CartPriceDetail'

const mockOneItem = {
  totalQuantity: 1,
  totalPrice: 19.99,
  deliveryPrice: 0,
}

const mockTwoItems = {
  totalQuantity: 2,
  totalPrice: 19.99,
  deliveryPrice: 3.4,
}

describe('CartPriceDetail', () => {
  it('should render "Price Details" title', () => {
    render(<CartPriceDetail data={mockOneItem} />)
    const title = screen.getByText('Price Details')
    expect(title).toBeInTheDocument()
  })

  it('should render "Price (1 item)$19.99"', () => {
    render(<CartPriceDetail data={mockOneItem} />)
    const element = screen.getByText('Price (1 item)')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Price (1 item)$19.99')
  })

  it('should render "Price (2 items)$19.99"', () => {
    render(<CartPriceDetail data={mockTwoItems} />)
    const element = screen.getByText('Price (2 items)')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Price (2 items)$19.99')
  })

  it('should render "Delivery Charge $0"', () => {
    render(<CartPriceDetail data={mockOneItem} />)
    const element = screen.getByText('Delivery Charge')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Delivery Charge $0')
  })

  it('should render "Delivery Charge $3.4"', () => {
    render(<CartPriceDetail data={mockTwoItems} />)
    const element = screen.getByText('Delivery Charge')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Delivery Charge $3.4')
  })

  it('should render "Amount Payable $19.99" when total price = 19.99 and delivery price = 0', () => {
    render(<CartPriceDetail data={mockOneItem} />)
    const element = screen.getByText('Amount Payable')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Amount Payable $19.99')
  })

  it('should render "Amount Payable $23.39" when total price = 19.99 and delivery price = 3.4', () => {
    render(<CartPriceDetail data={mockTwoItems} />)
    const element = screen.getByText('Amount Payable')
    expect(element).toBeInTheDocument()
    const text = element.closest('li')
    expect(text).toHaveTextContent('Amount Payable $23.39')
  })
})
