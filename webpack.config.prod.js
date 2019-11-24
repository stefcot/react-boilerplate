const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  // build: slowest, rebuild: slower, production: yes, quality: original source
  devtool: 'source-map'
})
