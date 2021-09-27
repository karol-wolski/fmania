import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Button } from './LinkButton'

describe('Button', () => {
  const history = createBrowserHistory()
  it('should display link button with property corner', () => {
    render(
      <Router history={history}>
        <Button kind="contain" category="primary" link="/test" corner>
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border-radius: 0.5rem`)
  })

  it('should display link button with property uppercase', () => {
    render(
      <Router history={history}>
        <Button kind="contain" category="primary" link="/test" uppercase>
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`text-transform: uppercase`)
  })

  it('should display link button with properties kind = contain and category = primary', () => {
    render(
      <Router history={history}>
        <Button kind="contain" category="primary" link="/test">
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid #211f1f`)
    expect(button).toHaveStyle(`background-color: #211f1f`)
    expect(button).toHaveStyle(`color: #fff`)
  })

  it('should display link button with properties kind = contain and category = secondary', () => {
    render(
      <Router history={history}>
        <Button kind="contain" category="secondary" link="/test">
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid #506BFA`)
    expect(button).toHaveStyle(`background-color: #506BFA`)
    expect(button).toHaveStyle(`color: #fff`)
  })

  it('should display link button with properties kind = outline and category = primary', () => {
    render(
      <Router history={history}>
        <Button kind="outline" category="primary" link="/test">
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid`)
    expect(button).toHaveStyle(`border-color: #979797`)
    expect(button).toHaveStyle(`color: #211f1f`)
  })

  it('should display link button with properties kind = outline and category = secondary', () => {
    render(
      <Router history={history}>
        <Button kind="outline" category="secondary" link="/test">
          Test
        </Button>
      </Router>,
    )
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`border: 2px solid`)
    expect(button).toHaveStyle(`border-color: #506BFA`)
    expect(button).toHaveStyle(`color: #506BFA`)
  })
})
