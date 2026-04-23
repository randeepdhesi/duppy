import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Your business already has the tools/i)).toBeInTheDocument()
  })

  it('renders the subline', () => {
    render(<Hero />)
    expect(screen.getByText(/AI operating systems/i)).toBeInTheDocument()
  })

  it('renders the See it in action button', () => {
    render(<Hero />)
    expect(screen.getByText('See it in action')).toBeInTheDocument()
  })

  it('renders the Learn more button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
