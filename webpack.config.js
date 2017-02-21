// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   entry: './app/index.js',
//   output: {
//   	filename: 'bundle.js',
//   	path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {test: /\.(js|jsx)$/, use: 'babel-loader'}
//     ]
//   }
// };

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};