// Initialize a set of tests
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from './App'

const setup = () => {
  const {container, getByText, asFragment } = render(<App/>)
  return {container, getByText, asFragment }
}

describe('App', () => {
  afterEach(cleanup);
  // Supposed to fail cause of the lazy loading,
  // Otherwise, install babel-plugin-dynamic-import-node
  // cause jest runs on node
  it('It should render App component', () => {
    const { container } = setup()
  })

  it('It should render App component with count set to 12', () => {
    const { getByText, asFragment } = setup()
    const timesToClick = 12
    const addButton = getByText('+')

    for(let i = 0; i <=timesToClick; i = i + 1) {
      fireEvent.click(addButton)
    }

    expect(asFragment()).toMatchSnapshot();

    // For state testing and others functionnal assertions
    // It's better to use enzyme
    // expect(getByText(container, timesToClick)).toBeVisible()
  })
})
