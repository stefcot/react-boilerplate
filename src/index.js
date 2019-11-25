import {hot} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './styles.css'

ReactDOM.render(<App/>, document.getElementById('app'))

if(hot){
  hot(module)('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
        <NextApp />,
        document.getElementById('root')
    );
  });
}
