# bootstrap知识学习
# 布局容器
.container根据窗口大小的不同固定宽度的容器div,且左右居中并有一定的padding
```
@media (min-width: 1200px)
.container {
    width: 1170px;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
```
.container-fluid:100%宽度的div
```
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
```
# 栅格系统(超小屏幕 手机 (<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面显示器 (≥992px)	大屏幕 大桌面显示器 (≥1200px))
## Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。
* “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
* 通过“行（row）”在水平方向创建一组“列（column）”。
* 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
* 类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
* 通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
* 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
* 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
* 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。
```
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.col-xs-4 {
    width: 33.33333333%;
}
.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    float: left;
}
@media (min-width: 992px)
.col-md-4 {
    width: 33.33333333%;
}
@media (min-width: 992px)
.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
    float: left;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
```
## 列偏移
使用 .col-md-offset-* 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距（margin）。例如，.col-md-offset-4 类将 .col-md-4 元素向右侧偏移了4个列（column）的宽度。
## 列排版
通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。
```
@media (min-width: 992px)
.col-md-pull-9 {
    right: 75%;
}
```
# 排版
## 标题
HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 .h1 到 .h6 类，为的是给内联（inline）属性的文本赋予标题的样式。
```
//bootstrap.css
.h1, .h2, .h3, h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
//normalize.css
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

```
在标题内还可以包含 `<small>` 标签或赋予 .small 类的元素，可以用来标记副标题。
```
.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small {
    font-size: 65%;
}
```
## 页面主体
Bootstrap 将全局 font-size 设置为 14px，line-height 设置为 1.428。这些属性直接赋予 `<body>` 元素和所有段落元素。另外，`<p>` （段落）元素还被设置了等于 1/2 行高（即 10px）的底部外边距（margin）。
## 内联文本元素
### 被删除的文本
对于被删除的文本使用 `<del>` 标签。
### 小号文本
对于不需要强调的inline或block类型的文本，使用 `<small>` 标签包裹，其内的文本将被设置为父容器字体大小的 85%。标题元素中嵌套的 `<small>` 元素被设置不同的 font-size 。
你还可以为行内元素赋予 .small 类以代替任何 `<small> `元素
### 着重`<strong>`
通过增加 font-weight 值强调一段文本。
### 斜体`<em>`
用斜体强调一段文本。
## 对齐
通过文本对齐类，可以简单方便的将文字重新对齐。
## 改变大小写
通过这几个类可以改变文本的大小写。
## 缩略语 `<abbr>`
当鼠标悬停在缩写和缩写词上时就会显示完整内容，Bootstrap 实现了对 HTML 的 `<abbr>` 元素的增强样式。缩略语元素带有 title 属性，外观表现为带有较浅的虚线框，鼠标移至上面时会变成带有“问号”的指针。如想看完整的内容可把鼠标悬停在缩略语上（对使用辅助技术的用户也可见）, 但需要包含 title 属性。
## 地址`<address>`
## 引用`<blockquote> `
在你的文档中引用其他来源的内容。
## 列表（ul,ol）
### 内联列表
```
.list-inline>li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}
```
## 描述`<dl><dt><dd>`
带有描述的短语列表。
### 水平排列的描述
.dl-horizontal 可以让 `<dl>` 内的短语及其描述排在一行。开始是像 `<dl>` 的默认样式堆叠在一起，随着导航条逐渐展开而排列在一行。
```
@media (min-width: 768px)
.dl-horizontal dt {
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
}
@media (min-width: 768px)
.dl-horizontal dd {
    margin-left: 180px;
}

```
# 表格
## 基本表格（table,thead,tbody)
## 带斑纹的表格
通过 .table-striped 类可以给 <tbody> 之内的每一行增加斑马条纹样式。
## 带边框的表格
添加 .table-bordered 类为表格和其中的每个单元格增加边框。
## 鼠标悬停
通过添加 .table-hover 类可以让 <tbody> 中的每一行对鼠标悬停状态作出响应。
## 紧缩表格
通过添加 .table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半
## 状态类
通过这些状态类可以为行或单元格设置颜色。
Class	描述
.active	鼠标悬停在行或单元格上时所设置的颜色
.success	标识成功或积极的动作
.info	标识普通的提示信息或动作
.warning	标识警告或需要用户注意
.danger	标识危险或潜在的带来负面影响的动作
```
.table>tbody>tr.active>td, .table>tbody>tr.active>th, .table>tbody>tr>td.active, .table>tbody>tr>th.active, .table>tfoot>tr.active>td, .table>tfoot>tr.active>th, .table>tfoot>tr>td.active, .table>tfoot>tr>th.active, .table>thead>tr.active>td, .table>thead>tr.active>th, .table>thead>tr>td.active, .table>thead>tr>th.active {
    background-color: #f5f5f5;
}
.table>tbody>tr.success>td, .table>tbody>tr.success>th, .table>tbody>tr>td.success, .table>tbody>tr>th.success, .table>tfoot>tr.success>td, .table>tfoot>tr.success>th, .table>tfoot>tr>td.success, .table>tfoot>tr>th.success, .table>thead>tr.success>td, .table>thead>tr.success>th, .table>thead>tr>td.success, .table>thead>tr>th.success {
    background-color: #dff0d8;
}
.table>tbody>tr.info>td, .table>tbody>tr.info>th, .table>tbody>tr>td.info, .table>tbody>tr>th.info, .table>tfoot>tr.info>td, .table>tfoot>tr.info>th, .table>tfoot>tr>td.info, .table>tfoot>tr>th.info, .table>thead>tr.info>td, .table>thead>tr.info>th, .table>thead>tr>td.info, .table>thead>tr>th.info {
    background-color: #d9edf7;
}
.table>tbody>tr.warning>td, .table>tbody>tr.warning>th, .table>tbody>tr>td.warning, .table>tbody>tr>th.warning, .table>tfoot>tr.warning>td, .table>tfoot>tr.warning>th, .table>tfoot>tr>td.warning, .table>tfoot>tr>th.warning, .table>thead>tr.warning>td, .table>thead>tr.warning>th, .table>thead>tr>td.warning, .table>thead>tr>th.warning {
    background-color: #fcf8e3;
}
.table>tbody>tr.danger>td, .table>tbody>tr.danger>th, .table>tbody>tr>td.danger, .table>tbody>tr>th.danger, .table>tfoot>tr.danger>td, .table>tfoot>tr.danger>th, .table>tfoot>tr>td.danger, .table>tfoot>tr>th.danger, .table>thead>tr.danger>td, .table>thead>tr.danger>th, .table>thead>tr>td.danger, .table>thead>tr>th.danger {
    background-color: #f2dede;
}
```
## 响应式表格
将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
```
@media screen and (max-width: 767px)
.table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
}
.table-responsive {
    min-height: .01%;
    overflow-x: auto;
}
```
# 表单
## 基本实例
单独的表单控件会被自动赋予一些全局样式。所有设置了 .form-control 类的 <input>、<textarea> 和 <select> 元素都将被默认设置宽度属性为 width: 100%;。 将 label 元素和前面提到的控件包裹在 .form-group 中可以获得最好的排列。

## 内联表单
为 <form> 元素添加 .form-inline 类可使其内容左对齐并且表现为 inline-block 级别的控件。只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话就会使表单折叠）。
```
@media (min-width: 768px)
.form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}
```
## 水平排列的表单
通过为表单添加 .form-horizontal 类，并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局。这样做将改变 .form-group 的行为，使其表现为栅格系统中的行（row），因此就无需再额外添加 .row 了。
```
.form-horizontal .form-group {
    margin-right: -15px;
    margin-left: -15px;
}
```
## 输入框组
通过在文本输入框 <input> 前面、后面或是两边加上文字或按钮，可以实现对表单控件的扩展。为 .input-group 赋予 .input-group-addon 或 .input-group-btn 类，可以给 .form-control 的前面或后面添加额外的元素。
我们不支持在输入框的单独一侧添加多个额外元素（.input-group-addon 或 .input-group-btn）。
我们不支持在单个输入框组中添加多个表单控件。
```
.input-group .form-control, .input-group-addon, .input-group-btn {
    display: table-cell;
}
```