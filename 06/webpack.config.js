const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const webpack = require("webpack");
module.exports = {
  entry:{
    index1:'./src/index.js',
    index2:'./src/index2.js',
    initial:['vue']
  },
  output:{
    filename:'[name].js',
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
  ],
  optimization: {
    splitChunks: {
        minSize:0, 
        cacheGroups: {
            commons: {
                name:'commons',
                chunks:'initial',
                minChunks:3,
                
            }
        }
    }
}
}