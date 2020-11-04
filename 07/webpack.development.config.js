const {merge} = require('webpack-merge')
const config = require("./webpack.common.config")
module.exports = merge([
  config,
  {
    mode:'development',
    devtool:'source-map',
    devServer:{
      publicPath:'/dist/'
    }
  }
])