import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)

if (hot) {
  hot(module)('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
}
