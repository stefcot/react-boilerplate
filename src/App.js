import React from 'react'

class App extends React.Component {
  // have to install @babel/plugin-proposal-class-properties
  state = {
    count: 0
  }

  render() {
    return (
        <div>
          <h1>Added watch mode to webpack config!</h1>
          <p>We have to refresh the browser though.</p>
          <h2>Served by webpack dev server</h2>
          <p>Now all modifications will be watched by webpack-dev-server.<br/>
            <em>All will be built ad watched automatically</em> with: <br/>
            <code>webpack-dev-server --open --config webpack.config.dev.js</code>
          </p>
          <h2>State</h2>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
          <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
        </div>
    )
  }
}

export default App
