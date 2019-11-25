const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { // use with '@babel/polyfill'
              targets: [
                'last 2 versions',
                'not dead',
                'not < 2%',
                'not ie 11'
              ],
              useBuiltIns: 'entry'
            }],
            '@babel/preset-react'
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  },
  // build: slow, rebuild: fast, production: no, quality: original source (lines only)
  devtool: 'cheap-module-eval-source-map'
})
