
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')
module.exports = {
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/',
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}