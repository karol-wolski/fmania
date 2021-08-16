import { fireEvent, render, screen } from '@testing-library/react'
import CartProductList from './CartProductList'

const mockData = {
  id: 1,
  name: 'Jeans',
  image: 'http://localhost:3000/image.png',
  color: 'blue',
  size: 'm',
  price: 39.98,
  quantity: 2,
}

const mockProps = {
  data: mockData,
  removeHandler: jest.fn(),
  updateQuantityHandler: jest.fn(),
}

describe('CartProductList', () => {
  it('should render image with correct src and alt', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )
    const Image = screen.getByRole('img')
    expect(Image).toHaveAttribute('src', expect.stringMatching(mockData.image))
    expect(Image).toHaveAttribute('alt', mockData.name)
  })

  it('should render heading level 2 with correct text', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )
    const Heading = screen.getByRole('heading', { level: 2 })
    expect(Heading).toHaveTextContent(mockData.name)
  })

  it('should render paragraph with text "Size: m, Color: blue"', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )
    const expectText = `Size: ${mockData.size}, Color: ${mockData.color}`
    const Paragraph = screen.getByText(expectText)
    expect(Paragraph).toBeInTheDocument()
  })

  it('should render span with correct price', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )
    const expectText = `$${mockData.price}`
    const Span = screen.getByText(expectText)
    expect(Span).toBeInTheDocument()
  })

  it('should render label with text Quantity, kind equal small', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )
    const expectText = `Quantity`
    const Label = screen.getByText(expectText)
    expect(Label).toBeInTheDocument()
    expect(Label).toHaveAttribute('kind', 'small')
  })

  it('should render input type number with min default value equal 2', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )

    const Input = screen.getByDisplayValue(2)
    expect(Input).toHaveAttribute('type', 'number')
    expect(Input).toHaveAttribute('kind', 'small')
    expect(Input).toHaveAttribute('min', '1')
  })

  it('should render input type number with value equal 2, next change value to 3', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )

    const Input = screen.getByDisplayValue(2)
    expect(Input).toBeInTheDocument()

    fireEvent.change(Input, { target: { value: 3 } })
    expect(Input).toHaveDisplayValue(/3/)
    expect(mockProps.updateQuantityHandler).toHaveBeenCalled()
  })

  it('should render button with text Remove', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )

    const Button = screen.getByRole('button')
    expect(Button).toBeInTheDocument()
    expect(Button).toHaveTextContent(/remove/i)
  })

  it('should called removeHandler after click in button', () => {
    render(
      <CartProductList
        data={mockProps.data}
        removeHandler={mockProps.removeHandler}
        updateQuantityHandler={mockProps.updateQuantityHandler}
      />,
    )

    const Button = screen.getByRole('button')
    expect(Button).toBeInTheDocument()
    fireEvent.click(Button)
    expect(mockProps.removeHandler).toHaveBeenCalled()
  })
})
