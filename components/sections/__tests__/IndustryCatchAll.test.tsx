import { render, screen } from '@testing-library/react'
import IndustryCatchAll from '../IndustryCatchAll'

describe('IndustryCatchAll', () => {
  it('renders the section label', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/Built for yours too/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/juggles more than one system/i)).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/its own tools/i)).toBeInTheDocument()
  })

  it('renders the CTA button linking to email', () => {
    render(<IndustryCatchAll />)
    const link = screen.getByText(/Tell us about your operation/i).closest('a')!
    expect(link).toHaveAttribute('href', 'mailto:hello@duppy.ai')
  })
})
