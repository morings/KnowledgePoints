const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:'./src/index.js',
  mode:"development",
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'/'
  },
  devServer:{
    publicPath:'/',
    index:'index.html'
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:[{loader:MiniCssExtractPlugin.loader},'css-loader','sass-loader']
      },
      {
        test:/\.css$/,
        use:[{loader:MiniCssExtractPlugin.loader},'css-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    }),
    new HtmlWebpackPlugin({
     
    })
  ]
}