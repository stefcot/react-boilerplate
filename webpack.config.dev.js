const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000
  },
  // build: slow, rebuild: fast, production: no, quality: original source (lines only)
  devtool: 'cheap-module-eval-source-map'
})
