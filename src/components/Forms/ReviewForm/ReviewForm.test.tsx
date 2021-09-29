import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ReviewForm from './ReviewForm'
import server from '../../../../test/msw/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Review form', () => {
  it('should be in the document', () => {
    render(<ReviewForm productId={2} />)
    const Title = screen.getByText(/Give Your Review/i)
    expect(Title).toBeInTheDocument()
  })

  it('should have a label for Title field', () => {
    const component = render(<ReviewForm productId={2} />)
    const Title = component.getByLabelText(/Title*/i)
    expect(Title.getAttribute('name')).toBe('title')
  })

  it('should have a label for Review field', () => {
    const component = render(<ReviewForm productId={2} />)
    const Review = component.getByLabelText(/Review*/i)
    expect(Review.getAttribute('name')).toBe('review')
  })

  it('should accept text in Title field', () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Input = container.querySelector('input[name="title"]') as HTMLInputElement
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'test' } })
    expect(Input.value).toMatch('test')
  })

  it('should accept text in Review field', () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Textarea = container.querySelector('textarea[name="review"]') as HTMLTextAreaElement
    expect(Textarea.value).toMatch('')
    fireEvent.change(Textarea, { target: { value: 'test' } })
    expect(Textarea.value).toMatch('test')
  })

  it('should display error message if title have empty value', async () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Input = container.querySelector('input[name="title"]') as HTMLInputElement
    expect(Input.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Submit/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Title is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if title have less than 2 characters', async () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Input = container.querySelector('input[name="title"]') as HTMLInputElement
    expect(Input.value).toMatch('')
    fireEvent.change(Input, { target: { value: 'a' } })
    expect(Input.value).toMatch('a')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Submit/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Title should have at least 2 characters`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display error message if review have empty value', async () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Textarea = container.querySelector('textarea[name="review"]') as HTMLInputElement
    expect(Textarea.value).toMatch('')
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Submit/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    const Message = `Review is required`
    const ErrorMessage = await waitFor(() => screen.findByText(Message))
    expect(ErrorMessage).toBeInTheDocument()
    expect(ErrorMessage).toHaveTextContent(Message)
  })

  it('should display toast after click button if all is ok', async () => {
    const { container } = render(<ReviewForm productId={2} />)

    const Input = container.querySelector('input[name="title"]') as HTMLInputElement
    fireEvent.change(Input, { target: { value: 'Lorem ipsum!' } })
    const Textarea = container.querySelector('textarea[name="review"]') as HTMLTextAreaElement
    fireEvent.change(Textarea, { target: { value: 'Lorem ipsum dolor sit amet!' } })
    const Button = screen.getByRole('button')
    expect(Button).toHaveTextContent(/Submit/i)
    expect(Button).toBeInTheDocument()
    fireEvent.submit(Button)
    await waitFor(() =>
      expect(
        screen.getByText(
          'The review has been successfully added. Soon your review will appear in the reviews section.',
        ),
      ).toBeInTheDocument(),
    )
  })
})
