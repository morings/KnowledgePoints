const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  entry:['./src/index.js'],
  output:{
    filename:'zm-components.js',
    publicPath: './',
    path:path.resolve(__dirname,'./dist')
  },
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
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 20000,
          name: 'fonts/[name]-[hash].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 20000,
          name: 'images/[name]-[hash].[ext]'
        }
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
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