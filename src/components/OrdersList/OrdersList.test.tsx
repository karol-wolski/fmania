import { render, screen } from '@testing-library/react'
import OrdersList from './OrdersList'

describe('Order list', () => {
  const list = [
    {
      id: 100,
      orderId: 10000001,
      productsPrice: 39.98,
      totalPrice: 39.98,
      deliveryPrice: 0,
      status: 'In progress',
      shippedDate: '21.05.2021',
      orderedOn: '21.05.2021',
      products: [
        {
          name: 'Product 1',
          size: 'S',
          price: 29.99,
          image: 'test_image.jpg',
          color: 'blue',
        },
        {
          name: 'Product 2',
          size: 'S',
          price: 9.99,
          image: 'test_image.jpg',
          color: 'blue',
        },
      ],
    },
  ]

  it('should display order id', () => {
    render(<OrdersList orders={list} />)
    const id = screen.getByText(`Order ID:`)
    expect(id).toHaveTextContent(`${list[0].orderId}`)
  })

  it('should display Total products price', () => {
    render(<OrdersList orders={list} />)
    const totalPrice = screen.getByText(`Total products price:`)
    expect(totalPrice).toHaveTextContent(`$${list[0].productsPrice}`)
  })

  it('should display Delivery price', () => {
    render(<OrdersList orders={list} />)
    const deliveryPrice = screen.getByText(`Delivery price:`)
    expect(deliveryPrice).toHaveTextContent(`$${list[0].deliveryPrice}`)
  })

  it('should display Total price', () => {
    render(<OrdersList orders={list} />)
    const totalPrice = screen.getByText(`Total price:`)
    expect(totalPrice).toHaveTextContent(`$${list[0].totalPrice}`)
  })

  it('should display Ordered on', () => {
    render(<OrdersList orders={list} />)
    const orderedOn = screen.getByText(`Ordered on:`)
    expect(orderedOn).toHaveTextContent(`${list[0].orderedOn}`)
  })

  it('should display Shipped date', () => {
    render(<OrdersList orders={list} />)
    const shippingDate = screen.getByText(`Shipped date:`)
    expect(shippingDate).toHaveTextContent(`${list[0].shippedDate}`)
  })

  it('should display Status', () => {
    render(<OrdersList orders={list} />)
    const status = screen.getByText(`Status:`)
    expect(status).toHaveTextContent(`${list[0].status}`)
  })

  it('should display products', () => {
    render(<OrdersList orders={list} />)
    const product1 = screen.getByText(list[0].products[0].name)
    const product2 = screen.getByText(list[0].products[1].name)
    expect(product1).toBeInTheDocument()
    expect(product2).toBeInTheDocument()
  })
})
