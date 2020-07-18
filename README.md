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
