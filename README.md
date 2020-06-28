# bootstrap-插件知识学习
## 概览
1.JavaScript 插件可以单个引入（使用 Bootstrap 提供的单个 *.js 文件），或者一次性全部引入（使用 bootstrap.js 或压缩版的 bootstrap.min.js）
2.所有插件都依赖 jQuery （也就是说，jQuery必须在所有插件之前引入页面）。 bower.json 文件中列出了 Bootstrap 所支持的 jQuery 版本。

## 过渡效果（transition.js）
transition.js文件为Bootstrap具有过渡动画效果的组件提供了动画过渡效果。不过需要注意的是，这些过渡动画都是采用CSS3来实现的，所以IE6-8浏览器是不具备这些过渡动画效果。
默认情况之下，Bootstrap框架中以下组件使用了过渡动画效果：
模态弹出窗（Modal）的滑动和渐变效果；
选项卡（Tab）的渐变效果；
警告框（Alert）的渐变效果；
图片轮播（Carousel）的滑动效果。
## 模态框（弹窗）
### 基本使用
通过data-toggle和data-target打开弹窗
```
<button class="btn btn-primary" data-toggle='modal' data-target='#dialog1'>打开弹窗</button>
//任何标签都行，不一定要button
```
### 尺寸(给dialog容器加上class)
modal-lg：大尺寸
modal-sm：小尺寸
```
@media (min-width: 992px)
.modal-lg {
    width: 900px;
}
@media (min-width: 768px)
.modal-sm {
    width: 300px;
}
```
### 禁止动画效果
去掉modal容器的fade类
### 获取触发容器
监听弹窗的show.bs.modal事件，通过它的event事件的relatedTarget获取
```
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
})
```
### modal方法
#### 参数：
backdrop:布尔类型或static,默认值为true,设为false是没有modal背景，且点击modal无法关闭弹窗，设置为static为有背景色，但是点击modal不会关闭弹窗
keyboard：默认值true，按下esc是否关闭弹窗
show：弹窗是否显示，默认为true
remote:可以使用远程地址，来填充弹窗内容
#### 方法：
##### .modal(options)
将页面中的某块内容作为模态框激活。接受可选参数 object。
```
$('#myModal').modal({
  keyboard: false
})
```
##### .modal('toggle')
手动打开或关闭模态框。在模态框显示或隐藏之前返回到主调函数中（也就是，在触发 shown.bs.modal 或 hidden.bs.modal 事件之前）。
```
$('#myModal').modal('toggle')

```
##### .modal('show')
手动打开模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 shown.bs.modal 事件之前）。
```
$('#myModal').modal('show')

```
##### .modal('hide')
手动隐藏模态框。在模态框隐藏之前返回到主调函数中 （也就是，在触发 hidden.bs.modal 事件之前）。
```
$('#myModal').modal('hide')

```
##### .modal('handleUpdate')
R重新调整弹窗的位置以与滚动条相对，以防出现滚动条，这会使弹窗跳转到左侧。

仅当弹窗的高度在打开时发生变化时才需要。
```
$('#myModal').modal('handleUpdate')
```
#### 事件：
##### show.bs.modal
show 方法调用之后立即触发该事件。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 relatedTarget 属性进行访问。
##### shown.bs.modal
此事件在模态框已经显示出来（并且同时在 CSS 过渡效果完成）之后被触发。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 
relatedTarget 属性进行访问。
##### hide.bs.modal	
hide 方法调用之后立即触发该事件。
##### hidden.bs.modal	
此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。
##### loaded.bs.modal	
从远端的数据源加载完数据之后触发该事件。
## 下拉dropdown
三部分，外部dropdown父容器（类），其内部两部分，触发按钮和dropdown-menu菜单;触发按钮要有data-toggle="dropdown"的属性
## 滚动监听
滚动监听插件是用来根据滚动条所处的位置来自动更新导航项的。如代码所示，滚动导航条下面的区域并关注导航项的变化。下拉菜单中的条目也会自动高亮显示。
### 需要相对定位（relative positioning）
无论何种实现方式，滚动监听都需要被监听的组件是 position: relative; 
### 通过 JavaScript 调用
在 CSS 中添加 position: relative; 之后，通过 JavaScript 代码启动滚动监听插件：
```
$('body').scrollspy({ target: '#navbar-example' })
```
### 方法
.scrollspy('refresh')
当使用滚动监听插件的同时在 DOM 中添加或删除元素后，你需要像下面这样调用此刷新（ refresh） 方法：
```
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
```
### 参数
#### 可以通过 data 属性或 JavaScript 传递参数。对于 data 属性，其名称是将参数名附着到 data- 后面组成，例如 data-offset=""。
```
名称	类型	默认值	描述
offset	number	10	计算滚动位置时相对于顶部的偏移量（像素数）。
```
### 事件
事件类型	描述
activate.bs.scrollspy	每当一个新条目被激活后都将由滚动监听插件触发此事件。
```
$('#myScrollspy').on('activate.bs.scrollspy', function () {
  // do something…
})
```
## tab(标签页)
给一个标签加上data-toggle="tab"，然后指定href为tab的class或id
```
<div class="container">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab" class='tabHome'>Home</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class='tabProfile'>Profile</a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" class='tabMessages'>Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab" class='tabSettings'>Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">home</div>
    <div role="tabpanel" class="tab-pane" id="profile">profile</div>
    <div role="tabpanel" class="tab-pane" id="messages">messages</div>
    <div role="tabpanel" class="tab-pane" id="settings">settings</div>
  </div>
  <button class="btn btn-danger" onclick="showTab()">接口调用</button>
</div>
```
### 方法
tab('show')
```
$(".tabHome").tab('show')//
```
### 事件
```
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
$('a[data-toggle="tab"]').on('hidden.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
```
### 过渡效果
在所有tab标签上加上fade类就行,记得要在初始展示的tab标签上加上in类