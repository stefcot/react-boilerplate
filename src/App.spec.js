// Initialize a set of tests
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

const setup = () => {
  const { container, getByText, asFragment } = render(<App />)
  return { container, getByText, asFragment }
}

describe('App', () => {
  afterEach(cleanup)
  // Supposed to fail cause of the lazy loading,
  // Otherwise, install babel-plugin-dynamic-import-node
  // cause jest runs on node
  it('It should render App component', () => {
    render(<App />)
  })

  it('It should render App component the same as snapshot', () => {
    const { asFragment } = setup()

    expect(asFragment()).toMatchSnapshot()

    // For state testing and others functionnal assertions
    // It's better to use enzyme
  })
})
