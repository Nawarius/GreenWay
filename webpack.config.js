const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const getFilename = ext => isProd ? `bundle.[hash].${ext}` : `bundle.${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  mode:'development',
  output: {
    filename: getFilename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve:{
    extensions: ['.js'],
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    }
  },
  devtool: isProd ? false : 'source-map',
  devServer:{
    port: 3000,
    hot: !isProd
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')},
      ]
    }),
    new MiniCssExtractPlugin({
      filename: getFilename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },

}