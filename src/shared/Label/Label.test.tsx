import { render, screen } from '@testing-library/react'
import { Label } from './Label'

describe('Label', () => {
  it('should have property kind = xSmall or kind = small or kind = medium', () => {
    render(<Label kind="xSmall">Label text</Label>)
    const label = screen.getByText(/label text/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle(`font-size: 1.4rem`)
  })

  it('should have property kind = big', () => {
    render(<Label kind="big">Label text</Label>)
    const label = screen.getByText(/label text/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle(`font-size: 1.6rem`)
  })

  it('should have property isEffect = true', () => {
    render(
      <Label kind="small" isEffect>
        Label text
      </Label>,
    )
    const label = screen.getByText(/label text/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle(`position: absolute`)
  })

  it('should display label with input type checkbox', () => {
    render(
      <Label kind="small" htmlFor="name">
        <input type="checkbox" name="name" id="name" />
        Label text
      </Label>,
    )
    const label = screen.getByText(/label text/i)
    expect(label).toBeInTheDocument()
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })
})
