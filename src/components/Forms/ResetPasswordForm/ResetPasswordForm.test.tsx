import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ResetPasswordForm from './ResetPasswordForm'

describe('Reset Password Form', () => {
  it('should be in the document', () => {
    render(<ResetPasswordForm />)
    const Title = screen.getByText(/Reset Password/i)
    expect(Title).toBeInTheDocument()
  })

  it('should have a label for an email field', () => {
    const component = render(<ResetPasswordForm />)
    const email = component.getByLabelText('Email*')
    expect(email.getAttribute('name')).toBe('email')
  })

  it('should accept text in email field', () => {
    const { container } = render(<ResetPasswordForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test@test.com' } })
    expect(Input.value).toMatch('test')
  })

  it('should have type email in email field', () => {
    const { container } = render(<ResetPasswordForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input).toHaveAttribute('type', 'email')
  })

  it('should display error message if email have empty value', async () => {
    const { container } = render(<ResetPasswordForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Reset/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Email field is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email have incorrect pattern', async () => {
    const { container } = render(<ResetPasswordForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Reset/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Please enter your email address in format: yourname@domena.com`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should not display error when value is valid', async () => {
    const { container } = render(<ResetPasswordForm />)

    const Email = container.querySelector('input[name="email"]')
    fireEvent.change(Email, { target: { value: 'john@doe.com' } })
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Reset/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)

    const MessageEmailRequired = `Email is required`
    const MessageEmailPattern = `Please enter your email address in format: yourname@domena.com`
    const ErrorMessageEmailRequired = await waitFor(() => screen.queryByText(MessageEmailRequired))
    const ErrorMessageEmailPattern = await waitFor(() => screen.queryByText(MessageEmailPattern))
    expect(ErrorMessageEmailRequired).not.toBeInTheDocument()
    expect(ErrorMessageEmailPattern).not.toBeInTheDocument()
  })
})
