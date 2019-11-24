const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
// use curly brackets to avoid BundleAnalyzerPlugin is not a constructor error
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
  mode: 'production',
  // build: slowest, rebuild: slower, production: yes, quality: original source
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test:/\.css$/,
        use:[
          'css-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle_analyzer.html'
      })
  ]
})
