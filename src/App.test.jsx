import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders the app message', () => {
    render(<App />)

    expect(
      screen.getByText(/Hello React Build Application Buliding the app/i)
    ).toBeInTheDocument()
  })
})