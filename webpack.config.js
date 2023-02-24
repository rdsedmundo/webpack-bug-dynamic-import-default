const path = require('node:path');

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
