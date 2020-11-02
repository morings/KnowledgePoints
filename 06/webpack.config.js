const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')
module.exports = {
  entry:'./src/foo.js',
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/'
  },
  mode:'development',
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}