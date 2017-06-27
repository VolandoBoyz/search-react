const path = require('path');

const libraryName = 'search-react';
const fileName = `${libraryName}.js`;

const config = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // library: libraryName,
    filename: fileName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /(\.js)|(\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          {
            loader: 'image-webpack-loader',
            options: {},
          },
        ],
      },
    ],
  },
};

module.exports = config;
