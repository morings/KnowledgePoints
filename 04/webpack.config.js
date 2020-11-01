const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  entry:['./src/index.js'],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    publicPath:'./dist/'
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
        use:['file-loader']
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}