import React from 'react'
//import Warning from './warning'
// with this version of babel, don't need to add @babel/plugin-syntax-dynamic-import

// Will split this piece of code
const Warning = React.lazy(() => import('./warning'))

class App extends React.Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  // have to install @babel/plugin-proposal-class-properties
  state = {
    count: 0
  }

  setCountTo12() {
    this.setState({
      count: 12
    })
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state
    return (
      <main>
        <img src="./logo.png" alt="" />
        <h1>Added watch mode to webpack config!</h1>
        <h2>
          Subtitle gonna raise an accessibility issue with React axe if{' '}
          <code>&lt;h3&gt;</code> is used
        </h2>
        <p>We have to refresh the browser though.</p>
        <h2>Served by webpack dev server</h2>
        <p>
          Now all modifications will be watched by webpack-dev-server.
          <br />
          <em>All will be built ad watched automatically</em> with: <br />
          <code>webpack-dev-server --open --config webpack.config.dev.js</code>
        </p>
        <h2>State</h2>
        <p className={count > 10 ? 'warning' : null}>Count: {count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </main>
    )
  }
}

export default App
