# 配置项解析
## entry
<b>字符串</b>

入口文件地址（默认name为main）

<b>数组</b>

传入一个数组的作用就是将多个资源预先合并，在打包时数组中的最后一个元素作为入口文件

<b>对象</b>

多入口文件，key-value形式，key是chunkname,value可以是字符串，数组

<b>函数</b>

只要返回上面的配置就行

## output
<b>filename</b>

输出文件名字，可以是单纯文件名或者地址

<b>path</b>

指定输出文件的位置，要求绝对路径

<b>publicPath</b>

静态资源打包前缀地址

## devServer
<b>publicPath</b>

配置express（devServer的核心就是express）的静态资源路径

<b>contentBase</b>

contentbase代表html页面所在的相对目录，如果我们不配置项，contentBase的路径是相对与webpack.config.js文件所在的目录的，有的时候，我们习惯将webpack配置文件统一放着一个build文件下，这个时候我们在写contentBase路径的时候就需要注意了。