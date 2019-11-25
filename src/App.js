import React from 'react'
import Warning from './warning'

class App extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // have to install @babel/plugin-proposal-class-properties
  state = {
    count: 0
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement(){
    this.setState({count: this.state.count - 1})
  }

  render() {
    const {count} = this.state
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
          <p className={count >10 ? 'warning' : null}>Count: {count}</p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          {count >10 ? <Warning/> : null}
        </div>
    )
  }
}

export default App
