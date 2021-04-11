const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./'
  },
  mode:"development",
  devServer:{
    publicPath:'/',
    hot: true
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
          loader:'file-loader',
          options:{
            esModule: false,
            name:'[name]_[contenthash].[ext]',
            outputPath:"imgs/"//会影响文件引入的路径(覆盖output中的publicPath)，例如css中的图片就是MiniCssExtractPlugin的publicPath+这个outputPath
          }
        }]
      },
      {
        test:/\.scss$/,
        use:[{loader:MiniCssExtractPlugin.loader,options:{publicPath:'../'}},'css-loader','postcss-loader','sass-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/[name].css',
      chunkFilename:'css/[id].css'//异步加载的chunk
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}