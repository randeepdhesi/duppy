import { render, screen } from '@testing-library/react'
import HowItWorks from '../HowItWorks'

describe('HowItWorks', () => {
  it('renders the section label', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/One voice command/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/counter person/i)).toBeInTheDocument()
  })

  it('renders the phone placeholder', () => {
    render(<HowItWorks />)
    expect(screen.getByTestId('phone-placeholder')).toBeInTheDocument()
  })
})
