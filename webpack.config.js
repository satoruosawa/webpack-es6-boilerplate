const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/dist'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
    })
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    host: '0.0.0.0',
    port: 5000
  }
}
