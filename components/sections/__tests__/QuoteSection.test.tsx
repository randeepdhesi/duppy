import { render, screen } from '@testing-library/react'
import QuoteSection from '../QuoteSection'

describe('QuoteSection', () => {
  it('renders the pull quote text', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/dismal failure as a sales tool/i)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/Software Advice/i)).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/We built the layer that fixes this/i)).toBeInTheDocument()
  })
})
