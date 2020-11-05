
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = {
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/',
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:path.resolve(__dirname,'./index.html'),
    })
  ]
}