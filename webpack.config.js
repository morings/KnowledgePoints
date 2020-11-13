const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  entry:['./src/index.js'],
  output:{
    filename:'zm-components.js',
    path:path.resolve(__dirname,'./dist')
  },
  mode:"production",
  devServer:{
    publicPath:'/dist/'
  },
  module:{
    rules:[
      { "test":/\.m?js$/, use: {loader:"babel-loader", options:{presets:["@babel/preset-env"]}}, exclude:/node_modules|bower_components/},
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
            outputPath:"imgs/"
          }
        }]
      },
      {
        test:/\.scss$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'zm-components.css',
    }),
  ]
}