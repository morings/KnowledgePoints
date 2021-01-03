# 配置项解析
## module
<b>webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下：

ES2015 import 语句

CommonJS require() 语句

AMD define 和 require 语句

css/sass/less 文件中的 @import 语句。

样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url,不包括网络连接)
</b>

## module-rules
<b>模块匹配规则</b>

## babel-loader
<b>es6代码转es5(例如示例中的let转var)

## babel-polyfill
<p>Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，

以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

安装命令----cnpm install --save babel-polyfill

因为这是一个 polyfill （它需要在你的源代码之前运行），我们需要让它成为一个 dependency,

而不是一个 devDependency.

然后，在脚本头部，加入如下一行代码。

import 'babel-polyfill';

// 或者

require('babel-polyfill');<p>

## file-loader
<b>对文件进行处理</b>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong><code>name</code></strong></td>
<td style="text-align:center">`{String\</td>
<td style="text-align:center">Function}`</td>
<td style="text-align:left"><code>[hash].[ext]</code></td>
<td>为你的文件配置自定义文件名模板,可以是路径</td>
</tr>
<tr>
<td style="text-align:center"><strong><code>publicPath</code></strong></td>
<td style="text-align:center">`{String\</td>
<td style="text-align:center">Function}`</td>
<td style="text-align:left"><a href="https://webpack.js.org/api/module-variables/#__webpack_public_path__-webpack-specific-" target="_blank"><code>__webpack_public_path__</code></a></td>
<td>为你的文件配置自定义 <code>public</code> 发布目录</td>
</tr>
<tr>
<td style="text-align:center"><strong><code>outputPath</code></strong></td>
<td style="text-align:center">`{String\</td>
<td style="text-align:center">Function}`</td>
<td style="text-align:left"><code>'undefined'</code></td>
<td>为你的文件配置自定义 <code>output</code> 输出目录</td>
</tr>
</tbody>
</table>

## url-loader
<b>url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。</b>
<table>
<thead>
<tr>
<th style="text-align:center">Name</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong><code>name</code></strong></td>
<td style="text-align:center"><code>{String}</code></td>
<td style="text-align:center"><code>[hash].[ext]</code></td>
<td style="text-align:left">超出限制的文件名，可以是路径</td>
</tr>
<tr>
<td style="text-align:center"><strong><code>limit</code></strong></td>
<td style="text-align:center"><code>{Number}</code></td>
<td style="text-align:center"><code>undefined</code></td>
<td style="text-align:left">大小限制，超出执行fallback中的loader（单位 byte）</td>
</tr>
<tr>
<td style="text-align:center"><strong><code>fallback</code></strong></td>
<td style="text-align:center"><code>{String}</code></td>
<td style="text-align:center"><code>file-loader</code></td>
<td style="text-align:left">超出limit后执行的loader</td>
</tr>
</tbody>
</table>