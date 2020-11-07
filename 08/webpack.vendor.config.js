const path = require('path');
const webpack = require('webpack')
const dllAssetPath = path.join(__dirname,'dll')
const dllLibraryName = 'dllExample'
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry:['react','vue'],
  output:{
    path:dllAssetPath,
    filename:'vendor.js',
    library:dllLibraryName
  },
  mode:'development',
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name:dllLibraryName,
      path:path.join(dllAssetPath,'manifest.json')
    })
  ]
}