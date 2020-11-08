const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:['./src/index.js'],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  },
  mode:"development",
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
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    })
  ]
}