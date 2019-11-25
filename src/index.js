import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

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
