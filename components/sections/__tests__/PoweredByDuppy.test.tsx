import { render, screen } from '@testing-library/react'
import PoweredByDuppy from '../PoweredByDuppy'

describe('PoweredByDuppy', () => {
  it('renders the section label', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText('Your OS, our engine')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText(/Your business\. Your brand\. Powered by Duppy\./i)).toBeInTheDocument()
  })

  it('renders all three OS labels', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText('Crown OS')).toBeInTheDocument()
    expect(screen.getByText('Southridge OS')).toBeInTheDocument()
    expect(screen.getByText('Pacific OS')).toBeInTheDocument()
  })

  it('renders the subline', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText(/Same brain, different face/i)).toBeInTheDocument()
  })
})
