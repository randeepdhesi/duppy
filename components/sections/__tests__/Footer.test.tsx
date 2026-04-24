import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders duppy.ai brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('DUPPY').length).toBeGreaterThan(0)
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/The spirit behind your operation/i)).toBeInTheDocument()
  })

  it('renders product links', () => {
    render(<Footer />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 DUPPY/i)).toBeInTheDocument()
  })
})
