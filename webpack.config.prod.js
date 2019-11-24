const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
// use curly brackets to avoid BundleAnalyzerPlugin is not a constructor error
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
  mode: 'production',
  // build: slowest, rebuild: slower, production: yes, quality: original source
  devtool: 'source-map',
  plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle_analyzer.html'
      })
  ]
})
