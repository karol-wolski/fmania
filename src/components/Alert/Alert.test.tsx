import { render, screen } from '@testing-library/react'
import Alert from './Alert'

it('should render Alert type success with message', () => {
  render(<Alert type="Success" message="Success" />)
  const alertElement = screen.getByText(/success/i)
  expect(alertElement).toBeInTheDocument()
  expect(alertElement).toHaveAttribute('type', expect.stringMatching(/success/i))
})

it('should render Alert  type error with message', () => {
  render(<Alert type="Error" message="Error" />)
  const alertElement = screen.getByText(/error/i)
  expect(alertElement).toBeInTheDocument()
  expect(alertElement).toHaveAttribute('type', expect.stringMatching(/error/i))
})

it('should render Alert  type warning with message', () => {
  render(<Alert type="Warn" message="Warn" />)
  const alertElement = screen.getByText(/warn/i)
  expect(alertElement).toBeInTheDocument()
  expect(alertElement).toHaveAttribute('type', expect.stringMatching(/warn/i))
})

it('should render Alert  type info with message', () => {
  render(<Alert type="Info" message="Info" />)
  const alertElement = screen.getByText(/info/i)
  expect(alertElement).toBeInTheDocument()
  expect(alertElement).toHaveAttribute('type', expect.stringMatching(/info/i))
})
