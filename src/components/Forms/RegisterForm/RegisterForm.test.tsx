import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import RegisterForm from './RegisterForm'

describe('Register Form', () => {
  it('should be in the document', () => {
    render(<RegisterForm />)
    const Title = screen.getByText(/Create New Customer Account/i)
    expect(Title).toBeInTheDocument()
  })

  it('should have a label for first name field', () => {
    const component = render(<RegisterForm />)
    const firstName = component.getByLabelText(/first name/i)
    expect(firstName.getAttribute('name')).toBe('firstName')
  })

  it('should have a label for last name field', () => {
    const component = render(<RegisterForm />)
    const lastName = component.getByLabelText(/last name/i)
    expect(lastName.getAttribute('name')).toBe('lastName')
  })

  it('should have a label for an email field', () => {
    const component = render(<RegisterForm />)
    const email = component.getByLabelText('Email*')
    expect(email.getAttribute('name')).toBe('email')
  })

  it('should have a label for newsletter field', () => {
    const component = render(<RegisterForm />)
    const newsletter = component.getByLabelText(/Sign up for Newsletter/i)
    expect(newsletter.getAttribute('name')).toBe('newsletter')
  })

  it('should have a label for password field', () => {
    const component = render(<RegisterForm />)
    const password = component.getByLabelText('Password*')
    expect(password.getAttribute('name')).toBe('password')
  })

  it('should have a label for confirm password field', () => {
    const component = render(<RegisterForm />)
    const passwordConfirm = component.getByLabelText(/confirm password*/i)
    expect(passwordConfirm.getAttribute('name')).toBe('passwordConfirm')
  })

  it('should accept text in first name field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="firstName"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should accept text in last name field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="lastName"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should accept text in email field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test@test.com' } })
    expect(Input.value).toMatch('test')
  })

  it('should accept text in password field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="password"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should accept text in confirm password field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="passwordConfirm"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should have type email in email field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input).toHaveAttribute('type', 'email')
  })

  it('should have type password in password field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="password"]')
    expect(Input).toHaveAttribute('type', 'password')
  })

  it('should have type password in confirm password field', () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="passwordConfirm"]')
    expect(Input).toHaveAttribute('type', 'password')
  })

  it('should display error message if first name have empty value', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="firstName"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `First Name is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if last name have empty value', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="lastName"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Last Name is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email have empty value', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Email is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email have incorrect pattern', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="email"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Please enter your email address in format: yourname@domena.com`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if password have empty value', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="password"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Password is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if password have value at least 8 characters', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="password"]')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test123' } })
    expect(Input.value.length).toBeLessThan(8)
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Password should have at least 8 characters`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if confirm password have empty value', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="passwordConfirm"]')
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Password is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if confirm password have value at least 8 characters', async () => {
    const { container } = render(<RegisterForm />)

    const Input = container.querySelector('input[name="passwordConfirm"]')
    fireEvent.change(Input, { target: { value: 'test123' } })
    expect(Input.value.length).toBeLessThan(8)
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Confirm Password should have at least 8 characters`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if password and confirm password values are not same', async () => {
    const { container } = render(<RegisterForm />)
    const Password = container.querySelector('input[name="password"]')
    fireEvent.change(Password, { target: { value: 'test123' } })
    const PasswordConfirm = container.querySelector('input[name="passwordConfirm"]')
    fireEvent.change(PasswordConfirm, { target: { value: 'test1234' } })
    expect(Password.value).not.toMatch(PasswordConfirm.value)
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Password do not match`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should not display error when value is valid', async () => {
    const { container } = render(<RegisterForm />)

    const FirstName = container.querySelector('input[name="firstName"]')
    fireEvent.change(FirstName, { target: { value: 'John' } })
    const LastName = container.querySelector('input[name="lastName"]')
    fireEvent.change(LastName, { target: { value: 'Doe' } })
    const Email = container.querySelector('input[name="email"]')
    fireEvent.change(Email, { target: { value: 'john@doe.com' } })
    const Password = container.querySelector('input[name="password"]')
    fireEvent.change(Password, { target: { value: 'test1234' } })
    const ConfirmPassword = container.querySelector('input[name="passwordConfirm"]')
    fireEvent.change(ConfirmPassword, { target: { value: 'test1234' } })
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Create an Account/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)

    const MessageFirstNameRequired = `First Name is required`
    const MessageLastNameRequired = `Last Name is required`
    const MessageEmailRequired = `Email is required`
    const MessageEmailPattern = `Please enter your email address in format: yourname@domena.com`
    const MessagePasswordRequired = `Password is required`
    const MessagePasswordCharacters = `Password should have at least 8 characters`
    const MessageConfirmPasswordRequired = `Confirm Password is required`
    const MessageConfirmPasswordCharacters = `Confirm Password should have at least 8 characters`
    const MessagePasswordsDoNotMatch = `Password do not match`
    const ErrorMessageFirstNameRequired = await waitFor(() => screen.queryByText(MessageFirstNameRequired))
    const ErrorMessageLastNameRequired = await waitFor(() => screen.queryByText(MessageLastNameRequired))
    const ErrorMessageEmailRequired = await waitFor(() => screen.queryByText(MessageEmailRequired))
    const ErrorMessageEmailPattern = await waitFor(() => screen.queryByText(MessageEmailPattern))
    const ErrorMessagePasswordRequired = await waitFor(() => screen.queryByText(MessagePasswordRequired))
    const ErrorMessageConfirmPasswordRequired = await waitFor(() => screen.queryByText(MessageConfirmPasswordRequired))
    const ErrorMessagePasswordCharacters = await waitFor(() => screen.queryByText(MessagePasswordCharacters))
    const ErrorMessageConfirmPasswordCharacters = await waitFor(() =>
      screen.queryByText(MessageConfirmPasswordCharacters),
    )
    const ErrorMessagePasswordsDoNotMatch = await waitFor(() => screen.queryByText(MessageConfirmPasswordCharacters))
    expect(ErrorMessageFirstNameRequired).not.toBeInTheDocument()
    expect(ErrorMessageLastNameRequired).not.toBeInTheDocument()
    expect(ErrorMessageEmailRequired).not.toBeInTheDocument()
    expect(ErrorMessageEmailPattern).not.toBeInTheDocument()
    expect(ErrorMessagePasswordRequired).not.toBeInTheDocument()
    expect(ErrorMessageConfirmPasswordRequired).not.toBeInTheDocument()
    expect(ErrorMessagePasswordCharacters).not.toBeInTheDocument()
    expect(ErrorMessageConfirmPasswordCharacters).not.toBeInTheDocument()
    expect(ErrorMessagePasswordsDoNotMatch).not.toBeInTheDocument()
  })
})
