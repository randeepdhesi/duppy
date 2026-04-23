import { render, screen } from '@testing-library/react'
import BuiltForBuildingSupply from '../BuiltForBuildingSupply'

describe('BuiltForBuildingSupply', () => {
  it('renders the section label', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText('Industry focus')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText(/Built for building supply/i)).toBeInTheDocument()
  })

  it('renders BisTrack in body copy', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText(/BisTrack/)).toBeInTheDocument()
  })

  it('renders the image placeholder', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByTestId('industry-image-placeholder')).toBeInTheDocument()
  })
})
