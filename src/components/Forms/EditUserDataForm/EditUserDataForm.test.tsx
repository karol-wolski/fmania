import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import EditUserDataForm from './EditUserDataForm'
import { UserContext } from '../../../context/UserContext'
import server from '../../../../test/msw/server'
import { rest } from 'msw'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Edit user data form', () => {
  it('should have a label for a First Name field', () => {
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const firstNameLabel = screen.getByLabelText('First Name*')
    expect(firstNameLabel.getAttribute('name')).toBe('firstName')
  })

  it('should have a label for a Last Name field', () => {
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const lastNameLabel = screen.getByLabelText('Last Name*')
    expect(lastNameLabel.getAttribute('name')).toBe('lastName')
  })

  it('should have a label for an Email field', () => {
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const emailLabel = screen.getByLabelText('Email*')
    expect(emailLabel.getAttribute('name')).toBe('email')
  })

  it('should have a label for a Telephone field', () => {
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const telephoneLabel = screen.getByLabelText('Telephone*')
    expect(telephoneLabel.getAttribute('name')).toBe('telephone')
  })

  it('should display user data in input field (API)', async () => {
    const isLoggedIn = true

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const firstName = await waitFor(() => screen.findByDisplayValue('John'))
    const lastName = await waitFor(() => screen.findByDisplayValue('Doe'))
    const email = await waitFor(() => screen.findByDisplayValue('john@doe.com'))
    const telephone = await waitFor(() => screen.findByDisplayValue('400400400'))

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(telephone).toBeInTheDocument()
  })

  it('should display error message if first name input is empty', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const firstName = await screen.findByDisplayValue('John')
    expect(firstName).toBeInTheDocument()
    const Input = container.querySelector('input[name="firstName"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: '' } })
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `First Name is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if last name input is empty', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const lastName = await screen.findByDisplayValue('Doe')
    expect(lastName).toBeInTheDocument()
    const Input = container.querySelector('input[name="lastName"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: '' } })
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Last Name is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email input is empty', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const email = await screen.findByDisplayValue('john@doe.com')
    expect(email).toBeInTheDocument()
    const Input = container.querySelector('input[name="email"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: '' } })
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Email is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if email have incorrect format', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const email = await screen.findByDisplayValue('john@doe.com')
    expect(email).toBeInTheDocument()
    const Input = container.querySelector('input[name="email"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: 'john' } })
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Please enter your email address in format: yourname@domena.com`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if telephone input is empty', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const telephone = await screen.findByDisplayValue('400400400')
    expect(telephone).toBeInTheDocument()
    const Input = container.querySelector('input[name="telephone"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: '' } })
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Telephone number is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should have attribute type tel in telephone input', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const telephone = await screen.findByDisplayValue('400400400')
    expect(telephone).toBeInTheDocument()
    const Input = container.querySelector('input[name="telephone"]')
    expect(Input).toHaveAttribute('type', 'tel')
  })

  it('should have attribute type email in email input', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const telephone = await screen.findByDisplayValue('400400400')
    expect(telephone).toBeInTheDocument()
    const Input = container.querySelector('input[name="email"]')
    expect(Input).toHaveAttribute('type', 'email')
  })

  it('should display toast after click save button if all is ok', async () => {
    const isLoggedIn = true

    const { container } = render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const email = await screen.findByDisplayValue('john@doe.com')
    expect(email).toBeInTheDocument()

    const Input = container.querySelector('input[name="email"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: 'john2@doe.com' } })
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const toast = await screen.findByText('Your account has been successfully updated.')
    expect(toast).toBeInTheDocument()
  })

  it('should display error message after click save button if something is bad', async () => {
    const isLoggedIn = true
    const errorMessage = 'Something went wrong :( Try again later!'

    server.use(
      rest.put(`${process.env.REACT_APP_API}/user`, (req, res, ctx) => {
        return res(ctx.json({ error: errorMessage }))
      }),
    )

    render(
      <UserContext.Provider value={{ isLoggedIn }}>
        <EditUserDataForm />
      </UserContext.Provider>,
    )

    const name = await screen.findByDisplayValue('John')
    expect(name).toBeInTheDocument()

    const Button = await screen.findByRole('button')
    expect(Button).toHaveTextContent(/Save/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const error = await screen.findByText(errorMessage)
    expect(error).toBeInTheDocument()
  })
})
