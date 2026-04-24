import { render, screen } from '@testing-library/react'
import HowItWorks from '../HowItWorks'

describe('HowItWorks', () => {
  it('renders the section label', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Speak\. It handles the rest/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HowItWorks />)
    expect(screen.getAllByText(/Pacific Coast Builders/i).length).toBeGreaterThan(0)
  })

  it('renders the phone placeholder', () => {
    render(<HowItWorks />)
    expect(screen.getByTestId('phone-placeholder')).toBeInTheDocument()
  })
})
