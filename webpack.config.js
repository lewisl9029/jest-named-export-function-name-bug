const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'main': [
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: `build.js`,
  },
  module: {
    loaders: [
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './'),
        loader: 'babel-loader',
      }
    ]
  }
}
