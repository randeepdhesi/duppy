import { render, screen } from '@testing-library/react'
import FadeInSection from '../FadeInSection'

describe('FadeInSection', () => {
  it('renders children', () => {
    render(<FadeInSection><p>Test content</p></FadeInSection>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('passes className to wrapper', () => {
    render(<FadeInSection className="my-custom"><span>hi</span></FadeInSection>)
    expect(screen.getByText('hi').closest('.my-custom')).toBeInTheDocument()
  })
})
