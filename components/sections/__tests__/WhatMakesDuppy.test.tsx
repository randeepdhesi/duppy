import { render, screen } from '@testing-library/react'
import WhatMakesDuppy from '../WhatMakesDuppy'

describe('WhatMakesDuppy', () => {
  it('renders the section label', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText('Why Duppy')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText(/Three commitments/i)).toBeInTheDocument()
  })

  it('renders all three card titles', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText('Your Brand')).toBeInTheDocument()
    expect(screen.getByText('Your Systems')).toBeInTheDocument()
    expect(screen.getByText('Your AI')).toBeInTheDocument()
  })

  it('renders card body text', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText(/Every deployment carries your name/i)).toBeInTheDocument()
  })
})
