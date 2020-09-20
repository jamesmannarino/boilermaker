const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './client/app.js'],
  mode: 'development',
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'style-loader',
          // 'css-loader'
          ]
      }
    ]
  }
}
