import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Remote component ni test kosam mock chestunnam
vi.mock('customer_remote/CustomerCard', () => ({
  default: () => <div>Mock Customer Card</div>,
}))

import App from './App'

describe('App component', () => {
  it('renders the app message', () => {
    render(<App />)

    expect(
      screen.getByText(/Hello React Build Application Buliding the app/i)
    ).toBeInTheDocument()
  })
})