const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dev = require('./webpack.dev.config');
const prod = require('./webpack.prod.config');

module.exports = (_, { mode }) => {
  const isDevBuild = mode === 'development';
  const config = isDevBuild ? dev : prod;

  return merge({
    entry: './client/src/index.jsx',
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].[hash].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          exclude: /node_modules/,
          use: 'url-loader?limit=25000',
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: `${__dirname}/public/index.html`,
      }),
      new CleanWebpackPlugin(['dist']),
    ],
  }, config);
};
