# MiniCssExtractPlugin

## 使用方法
<pre>
loader:MiniCssExtractPlugin.loader放在最前面
plugin:new MiniCssExtractPlugin({
  filename://打包的路径和文件名
})
</pre>

## 在webpack中使用postcss(给css加上前缀)
<pre>
 {
  test:/\.scss$/,
  use:[{loader:MiniCssExtractPlugin.loader,options:{publicPath:'../'}},'css-loader','postcss-loader','sass-loader']
}
</pre>
