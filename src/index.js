import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

// React aXe will check accessibility inconsistencies
// and report them in the console, suggest solutions to fix problems
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)

if (hot) {
  hot(module)('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <React.StrictMode>
        <DefaultErrorBoundary>
          <NextApp />
        </DefaultErrorBoundary>
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
}
