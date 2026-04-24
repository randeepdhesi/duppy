import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/One command/i)).toBeInTheDocument()
  })

  it('renders the subline', () => {
    render(<Hero />)
    expect(screen.getByText(/Duppy connects your ERP/i)).toBeInTheDocument()
  })

  it('renders the See it in action button', () => {
    render(<Hero />)
    expect(screen.getByText('See it in action')).toBeInTheDocument()
  })

  it('renders the Get in touch button', () => {
    render(<Hero />)
    expect(screen.getAllByText('Get in touch').length).toBeGreaterThan(0)
  })
})
