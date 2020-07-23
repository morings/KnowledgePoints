# Form表单的使用
## fieldset
它的name属性只有在查找时有用，不会提交
## select
### input.text textarea
选中全部文本：select()
<br>
监听选中：onselect
<br>
获取选中值：textnode.value.substring(textnode.selectionStart,textnode.selectionEnd)
<br>
选择部分值：textnode.setSelectionRange(4,7)

### 普通标签
选中全部文本
```
if(window.getSelection){
  var range=document.createRange();
  range.selectNodeContents(node);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range)            
}
  else if(document.selection){
  //for ie
  var range=document.body.createTextRange()
  range.moveToElementText(node)
  range.select();
}     
```
## range对象
### 创建
```
var range = document.createRange()
```
### 获取选中的值
```
range.toString()
```
### 选择节点
```
selectNode()//选择整个节点，包括子节点
selectNodeContents()//选择节点的子节点
```
### 删除选中节点（text节点和普通节点都会删）
```
deleteNodeContent
```
## selection对象
### 创建
```
var selection = window.getSelection();
document.selection//只有IE支持，
```
### 获取选中的值
```
selection.toString()
```
### Selection对象的方法
#### removeAllRanges
取消页面上的选中
#### addRange
将某个range对象选中
#### removeRange
移除某个range选中
#### selection.collapse
清除选择状态将光标落在指定处
#### selection.collapseToStart
虽然也是不选中任何内容，但是光标的位置变了，选取某一段文字后的起点文字会为作为光标的起点位置
#### selection.collapseToEbnd
该方法的光标永远在选取的文字的最后。注意不是选取的终点,是文字的最后面
#### selection.deleteFromDocument
删除选中节点
#### selection.extend
将终点移到指定位置
#### selection.selectAllChildren 
该方法用于取消当前用户选取内容，并且选取某个指定元素中的全部子元素



