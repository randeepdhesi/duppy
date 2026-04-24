import { render, screen } from '@testing-library/react'
import BuildingSupplyDeepDive from '../BuildingSupplyDeepDive'

describe('BuildingSupplyDeepDive', () => {
  it('renders the section label', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Where we started/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Built from the inside out/i)).toBeInTheDocument()
  })

  it('renders the founder-market copy', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/missing layer/i)).toBeInTheDocument()
  })

  it('renders the Crown OS proof point', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Crown OS is live/i)).toBeInTheDocument()
  })

  it('renders BisTrack in the integration list', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getAllByText(/BisTrack/i).length).toBeGreaterThan(0)
  })

  it('renders the terminal demo command', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Norwegian Fluted/i)).toBeInTheDocument()
  })
})
