const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode:'development',
  output: {
    filename: 'mainBundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}