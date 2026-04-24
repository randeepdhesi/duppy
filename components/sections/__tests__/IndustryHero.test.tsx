import { render, screen } from '@testing-library/react'
import IndustryHero from '../IndustryHero'

describe('IndustryHero', () => {
  it('renders the main headline', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/One operator/i)).toBeInTheDocument()
  })

  it('renders the amber emphasis text', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/Every industry/i)).toBeInTheDocument()
  })

  it('renders the subheadline', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/connects to whatever your business already runs on/i)).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/Built to adapt/i)).toBeInTheDocument()
  })
})
