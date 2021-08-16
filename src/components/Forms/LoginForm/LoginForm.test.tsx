import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { UserContext } from '../../../context/UserContext'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginForm from './LoginForm'

describe('Login form', () => {
  it('should be in the document', () => {
    const history = createBrowserHistory()
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Title = screen.getAllByRole('heading', { level: 2 })
    expect(Title[0]).toBeInTheDocument()
  })

  it('should have a label for an email field', () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const component = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const EmailLabel = component.getByLabelText('Email*')
    expect(EmailLabel.getAttribute('name')).toBe('email')
  })

  it('should have a label for a password field', () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const PasswordLabel = screen.getByLabelText('Password*')
    expect(PasswordLabel.getAttribute('name')).toBe('password')
  })

  it('should accept text in email field', () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[0]
    expect(Input.id).toBe('email')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should display error message if email have incorrect pattern', async () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[0]
    expect(Input.id).toBe('email')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
    const LoginButton = screen.getByRole('button')
    expect(LoginButton).toHaveTextContent(/login/i)
    expect(LoginButton).toBeInTheDocument()
    fireEvent.submit(LoginButton)
    const Message = `Please enter your email address in format: yourname@domena.com`
    const ErrorMessage = await screen.findByText(Message)
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email have empty field', async () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[0]
    expect(Input.id).toBe('email')
    expect(Input.value).toMatch('')
    const LoginButton = screen.getByRole('button')
    expect(LoginButton).toHaveTextContent(/login/i)
    expect(LoginButton).toBeInTheDocument()
    fireEvent.submit(LoginButton)
    const Message = `Email field is required`
    const ErrorMessage = await screen.findByText(Message)
    expect(await ErrorMessage).toBeInTheDocument()
    expect(await ErrorMessage).toHaveTextContent(Message)
  })

  it('should accept text in password field', () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[1]
    expect(Input.id).toBe('password')
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should have password field with attribute type password', () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[1]
    expect(Input.id).toBe('password')
    expect(Input).toHaveAttribute('type', 'password')
  })

  it('should display error message if password have empty field', async () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const Input = Inputs[1]
    expect(Input.id).toBe('password')
    expect(Input.value).toMatch('')
    const LoginButton = screen.getByRole('button')
    expect(LoginButton).toHaveTextContent(/login/i)
    expect(LoginButton).toBeInTheDocument()
    fireEvent.submit(LoginButton)
    const Message = `Password field is required`
    const ErrorMessage = await screen.findByText(Message)
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should not display error when value is valid', async () => {
    const history = createBrowserHistory()
    const isLoggedIn = false

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </UserContext.Provider>,
    )

    const Inputs = container.querySelectorAll('input')
    const InputEmail = Inputs[0]
    const InputPassword = Inputs[1]
    expect(InputEmail.id).toBe('email')
    expect(InputPassword.id).toBe('password')
    fireEvent.change(InputEmail, { target: { value: 'test@test.com' } })
    fireEvent.change(InputPassword, { target: { value: 'test123' } })
    const LoginButton = screen.getByRole('button')
    expect(LoginButton).toHaveTextContent(/login/i)
    expect(LoginButton).toBeInTheDocument()
    fireEvent.submit(LoginButton)
    const MessageEmailPattern = `Please enter your email address in format: yourname@domena.com`
    const MessageEmailRequired = `Email field is required`
    const MessagePasswordRequired = `Password field is required`
    const ErrorMessageEmailPattern = await waitFor(() => screen.queryByText(MessageEmailPattern))
    const ErrorMessageEmailRequired = await waitFor(() => screen.queryByText(MessageEmailRequired))
    const ErrorMessagePasswordRequired = await waitFor(() => screen.queryByText(MessagePasswordRequired))
    expect(ErrorMessageEmailPattern).not.toBeInTheDocument()
    expect(ErrorMessageEmailRequired).not.toBeInTheDocument()
    expect(ErrorMessagePasswordRequired).not.toBeInTheDocument()
  })
})
