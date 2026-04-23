import { render, screen } from '@testing-library/react'
import SectionLabel from '../SectionLabel'

describe('SectionLabel', () => {
  it('renders the label text', () => {
    render(<SectionLabel>Why Duppy</SectionLabel>)
    expect(screen.getByText('Why Duppy')).toBeInTheDocument()
  })

  it('has uppercase class', () => {
    render(<SectionLabel>Label</SectionLabel>)
    expect(screen.getByText('Label').className).toMatch(/uppercase/)
  })
})
