import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Banner from './Banner'

const mockData = {
  id: 1,
  title: 'Banner',
  buttonText: 'Click me',
  imgLink: 'http://localhost:3000/image.png',
  siteLink: 'http://localhost:3000',
}
describe('Banner', () => {
  it('should be render', () => {
    const history = createBrowserHistory()
    render(
      <Router history={history}>
        (<Banner {...mockData} />)
      </Router>,
    )
    const title = screen.getByRole('heading', { level: 2 })
    const link = screen.getByRole('link')
    const image = screen.getByRole('img')
    expect(title).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })

  it('should render link with correct href attribute and text content', () => {
    const history = createBrowserHistory()
    render(
      <Router history={history}>
        (<Banner {...mockData} />)
      </Router>,
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', expect.stringMatching(mockData.siteLink))
    expect(link).toHaveTextContent(mockData.buttonText)
  })

  it('should render link that have set kind="outline" and category="tertiary"', () => {
    const history = createBrowserHistory()
    render(
      <Router history={history}>
        (<Banner {...mockData} />)
      </Router>,
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('kind', 'outline')
    expect(link).toHaveAttribute('category', 'tertiary')
  })

  it('should render img with correct src and alt attributes', () => {
    const history = createBrowserHistory()
    render(
      <Router history={history}>
        (<Banner {...mockData} />)
      </Router>,
    )

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringMatching(mockData.imgLink))
    expect(image).toHaveAttribute('alt', expect.stringMatching(mockData.title))
  })

  it('should render heading level 2 with correct text content', () => {
    const history = createBrowserHistory()
    render(
      <Router history={history}>
        (<Banner {...mockData} />)
      </Router>,
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(mockData.title)
  })
})
