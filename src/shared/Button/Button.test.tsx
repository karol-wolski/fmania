import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should display default button', () => {
    render(<Button>Test</Button>)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
  })

  it('should display button with property corner', () => {
    render(<Button corner>Test</Button>)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border-radius: 0.5rem`)
  })

  it('should display button with property uppercase', () => {
    render(<Button uppercase>Test</Button>)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`text-transform: uppercase`)
  })

  it('should display button with properties kind = contain and category = primary', () => {
    render(
      <Button kind="contain" category="primary">
        Test
      </Button>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid #211f1f`)
    expect(button).toHaveStyle(`background-color: #211f1f`)
    expect(button).toHaveStyle(`color: #fff`)
  })

  it('should display button with properties kind = contain and category = secondary', () => {
    render(
      <Button kind="contain" category="secondary">
        Test
      </Button>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid #506BFA`)
    expect(button).toHaveStyle(`background-color: #506BFA`)
    expect(button).toHaveStyle(`color: #fff`)
  })

  it('should display button with properties kind = outline and category = primary', () => {
    render(
      <Button kind="outline" category="primary">
        Test
      </Button>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid`)
    expect(button).toHaveStyle(`border-color: #979797`)
    expect(button).toHaveStyle(`color: #211f1f`)
  })

  it('should display button with properties kind = outline and category = secondary', () => {
    render(
      <Button kind="outline" category="secondary">
        Test
      </Button>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid`)
    expect(button).toHaveStyle(`border-color: #506BFA`)
    expect(button).toHaveStyle(`color: #506BFA`)
  })
})
