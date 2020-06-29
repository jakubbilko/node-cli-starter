const path = require('path');

module.exports = {
  entry: './src/app.ts',
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      { test: /\.(js|ts)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
