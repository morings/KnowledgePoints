const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require("path")
module.exports = {
  entry:'./index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/'
  },
  optimization: {//压缩
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module:{
    rules: [{
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // 这里可以指定一个 publicPath
            // 默认使用 webpackOptions.output中的publicPath
            publicPath: '../'
          },
        },
       {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'less-loader', // compiles Less to CSS
       options: {
         lessOptions: {
           modifyVars: {
             'primary-color': '#7f8fef'
           },
           javascriptEnabled: true,
         }
       },
      }],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'antd.min.css',
      chunkFilename: '[id].css',
    })
  ]
}