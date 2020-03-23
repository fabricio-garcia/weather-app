/* eslint-disable import/no-unresolved */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  target: 'node',

  entry: {
    app: path.resolve(__dirname, 'src/js', 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/bundle.js',
  },

  devServer: {
    port: 3000,
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
