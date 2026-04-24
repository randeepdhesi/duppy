import { render, screen } from '@testing-library/react'
import IndustryGrid from '../IndustryGrid'

describe('IndustryGrid', () => {
  it('renders all six industry names', () => {
    render(<IndustryGrid />)
    expect(screen.getByText('Building Supply & Lumber')).toBeInTheDocument()
    expect(screen.getByText('Trucking & Freight')).toBeInTheDocument()
    expect(screen.getByText('Auto Dealerships')).toBeInTheDocument()
    expect(screen.getByText('Wholesale Distribution')).toBeInTheDocument()
    expect(screen.getByText('Legal & Professional Services')).toBeInTheDocument()
    expect(screen.getByText('Electrical & HVAC Wholesale')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<IndustryGrid />)
    expect(screen.getByText(/Six industries/i)).toBeInTheDocument()
  })

  it('renders the intro copy', () => {
    render(<IndustryGrid />)
    expect(screen.getByText(/trained on your data/i)).toBeInTheDocument()
  })
})
