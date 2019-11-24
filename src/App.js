import React from 'react'

class App extends React.Component {
  render() {
    debugger
    return (
        <div>
          <h1>Added watch mode to webpack config!</h1>
          <p>We have to refresh the browser though.</p>
          <h2>Served by webpack dev server</h2>
          <p>Now all modifications will be watched by webpack-dev-server.<br/>
            <em>All will be built ad watched automatically</em> with: <br/>
            <code>webpack-dev-server --open --config webpack.config.dev.js</code>
          </p>
        </div>
    )
  }
}

export default App
