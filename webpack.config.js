const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlPluginRemove = require('html-webpack-plugin-remove')
const WebpackPlaycanvas = require('webpack-playcanvas')
const playcanvasOption = require('./playcanvas.config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new HtmlPluginRemove(/<script.*?src="..*?\.js".*?<\/script>/),
    new WebpackPlaycanvas(playcanvasOption)
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader" 
        ]
      }
    ]
  }
}