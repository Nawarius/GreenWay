const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode:'development',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve:{
    extensions: ['js'],
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src.core'),
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')},
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    })
  ]
}