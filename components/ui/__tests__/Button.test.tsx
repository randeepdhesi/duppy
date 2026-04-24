import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('renders children text', () => {
    render(<Button href="#">Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as an anchor with correct href', () => {
    render(<Button href="/contact">Contact</Button>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/contact')
  })

  it('applies bg-duppy-amber for primary variant', () => {
    render(<Button href="#" variant="primary">Primary</Button>)
    expect(screen.getByRole('link').className).toMatch(/bg-duppy-amber/)
  })

  it('applies border class for outline variant', () => {
    render(<Button href="#" variant="outline">Outline</Button>)
    expect(screen.getByRole('link').className).toMatch(/border/)
  })
})
