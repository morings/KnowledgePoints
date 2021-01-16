## sourcemap
方便调试

## 压缩js和css
<pre>
const TerserJSPlugin = require('terser-webpack-plugin')
// 分离出css文件
const MIniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    optimization: {    // 打包优化项
        minimizer: [
            new TerserJSPlugin({}),    // js压缩可配置
            new OptimizeCssAssetsWebpackPlugin({}),    // css压缩可配置
        ]
    },
}
</pre>

## hash
hash是跟整个webpack构建项目相关的，每次项目构建hash对应的值都是不同的，即使项目文件没有做“任何修改”。

其实是有修改的，因为每次webpack打包编译都会注入webpack的运行时代码，导致整个项目有变化，所以每次hash值都会变化的。

可以看出，前后两次对应项目构建hash改变了。由此推断使用该方式是无法达到缓存的，因为每次hash都会变化。

## chunkhash
chunkhash，从字面上就能猜出它是跟webpack打包的chunk相关的。具体来说webpack是根据入口entry配置文件来分析其依赖项并由此来构建该entry的chunk，并生成对应的hash值。不同的chunk会有不同的hash值。一般在项目中把公共的依赖库和程序入口文件隔离并进行单独打包构建，用chunkhash来生成hash值，只要依赖公共库不变，那么其对应的chunkhash就不会变，从而达到缓存的目的。

## contenthash
contenthash表示由文件内容产生的hash值，内容不同产生的contenthash值也不一样。在项目中，通常做法是把项目中css都抽离出对应的css文件来加以引用