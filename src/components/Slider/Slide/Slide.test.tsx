import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Slide from './Slide'

describe('Slide', () => {
  const history = createBrowserHistory()
  const slide = {
    id: 1001,
    title: 'Slide 1',
    subtitle: 'Lorem ipsum dolor sit amet.',
    link: '/slide',
    imgLink: 'http://localhost:8080/img.png',
  }

  it('should display image', () => {
    render(
      <Router history={history}>
        <Slide {...slide} />
      </Router>,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', slide.imgLink)
    expect(img).toHaveAttribute('alt', slide.title)
  })

  it('should display title', () => {
    render(
      <Router history={history}>
        <Slide {...slide} />
      </Router>,
    )
    const title = screen.getByText(slide.title)
    expect(title).toBeInTheDocument()
  })

  it('should display subtitle', () => {
    render(
      <Router history={history}>
        <Slide {...slide} />
      </Router>,
    )
    const subtitle = screen.getByText(slide.subtitle)
    expect(subtitle).toBeInTheDocument()
  })

  it('should display button', () => {
    render(
      <Router history={history}>
        <Slide {...slide} />
      </Router>,
    )
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', slide.link)
    expect(button).toHaveAttribute('category', 'secondary')
    expect(button).toHaveAttribute('kind', 'contain')
    expect(button).toHaveTextContent('View Products')
  })
})
