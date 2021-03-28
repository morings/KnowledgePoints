const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    entry1: './src/entry/entry1.js',
    entry2: './src/entry/entry2.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      maxAsyncRequests: 3,
      minSize: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
  
}