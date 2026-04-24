import { render, screen } from '@testing-library/react'
import IndustryCard from '../IndustryCard'

describe('IndustryCard', () => {
  const props = {
    num: '01',
    name: 'Building Supply & Lumber',
    desc: 'Counter staff juggling multiple systems to serve one customer.',
    integrations: ['BisTrack', 'Spruce', 'Outlook'],
  }

  it('renders the industry number', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders the industry name', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('Building Supply & Lumber')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText(/Counter staff juggling/i)).toBeInTheDocument()
  })

  it('renders all integration tags joined with ·', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('BisTrack · Spruce · Outlook')).toBeInTheDocument()
  })
})
