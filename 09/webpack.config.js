
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');
const webpack = require("webpack");
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/',
    filename:'main.js'
  },
  mode:'development',
  devServer:{
    publicPath:'/dist/',
    hot:true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}