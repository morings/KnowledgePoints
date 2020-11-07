
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry:"./src/index.js",
  mode:'production',
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/',
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest:require(path.join(__dirname,"dll/manifest.json"))
    })
  ]
}