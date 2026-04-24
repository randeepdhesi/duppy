import { render, screen } from '@testing-library/react'
import CtaSection from '../CtaSection'

describe('CtaSection', () => {
  it('renders the heading', () => {
    render(<CtaSection />)
    expect(screen.getByText(/Ready to put an AI/i)).toBeInTheDocument()
  })

  it('renders the Get in touch button linking to email', () => {
    render(<CtaSection />)
    const link = screen.getByText('Get in touch').closest('a')!
    expect(link).toHaveAttribute('href', 'mailto:hello@duppy.ai')
  })

  it('renders the sub-text', () => {
    render(<CtaSection />)
    expect(screen.getByText(/live demo/i)).toBeInTheDocument()
  })
})
