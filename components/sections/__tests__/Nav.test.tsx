import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '../Nav'

describe('Nav', () => {
  it('renders the duppy.ai logo text', () => {
    render(<Nav />)
    expect(screen.getByText('DUPPY')).toBeInTheDocument()
  })

  it('renders all three nav links', () => {
    render(<Nav />)
    expect(screen.getByText('Why Duppy')).toBeInTheDocument()
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
  })

  it('renders the Get in touch button', () => {
    render(<Nav />)
    expect(screen.getAllByText('Get in touch').length).toBeGreaterThan(0)
  })

  it('shows mobile menu links after hamburger click', () => {
    render(<Nav />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    expect(screen.getAllByText('How it works').length).toBeGreaterThan(1)
  })
})
