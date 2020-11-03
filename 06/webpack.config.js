
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')
module.exports = {
  entry:'./src/foo.js',
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/'
  },
  mode:'development',
  optimization:{//学习地址：https://www.cnblogs.com/kwzm/p/10314827.html
    splitChunks:{
      chunks:'all',
      minSize: {
        javascript: 0,
        style: 50000,
      },
      minChunks: 2,
      cacheGroups: {
        vendors: {      
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name:'vendor'
        },
        default: {
          priority: -20,
          name:'common'
        }
      }
    }
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}