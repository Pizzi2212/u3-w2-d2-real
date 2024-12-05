import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Welcome from '../components/Welcome'

describe('Welcome Component', () => {
  test('renders the component correctly with a name prop', () => {
    render(<Welcome name="Alice" />)

    const welcomeElement = screen.getByText(/Welcome, /i)
    expect(welcomeElement).toBeInTheDocument()
  })
})
