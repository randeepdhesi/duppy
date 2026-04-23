import { render } from '@testing-library/react'
import GhostIcon from '../GhostIcon'

describe('GhostIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<GhostIcon size={24} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies the size prop to width and height', () => {
    const { container } = render(<GhostIcon size={48} />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('applies the color prop as fill', () => {
    const { container } = render(<GhostIcon size={24} color="#6C3FC5" />)
    expect(container.querySelector('svg')).toHaveAttribute('fill', '#6C3FC5')
  })

  it('applies className to the SVG', () => {
    const { container } = render(<GhostIcon size={24} className="opacity-5" />)
    expect(container.querySelector('svg')).toHaveClass('opacity-5')
  })
})
