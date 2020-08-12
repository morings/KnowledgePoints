# 自定义事件

## 创建自定义事件（ie兼容）

```
event = new Event(typeArg, eventInit);
```

<dl>
 <dt><em>typeArg</em></dt>
 <dd>是<a href="/zh-CN/docs/Web/API/DOMString"><code>DOMString</code></a> 类型，表示所创建事件的名称。</dd>
 <dt><em>eventInit</em><span class="inlineIndicator optional optionalInline">可选</span></dt>
</dl>
<dl>
 <dd>是 <code>EventInit</code> 类型的字典，接受以下字段:
 <ul>
  <li><code>"bubbles"</code>，可选，<a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a>类型，默认值为&nbsp;<code style="font-style: normal;">false</code>，表示该事件是否冒泡。</li>
  <li><code>"cancelable"</code>，可选，<a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a>类型，默认值为&nbsp;<code style="font-style: normal;">false</code>， 表示该事件能否被取消。</li>
  <li><code>"composed"</code>，可选，<a href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a>类型，默认值为&nbsp;<code style="font-style: normal;">false</code>，指示事件是否会在影子DOM根节点之外触发侦听器。</li>
 </ul>
 </dd>
</dl>

## 创建自定义事件（兼容所有浏览器）
```
event.initEvent(eventType,canBubble,cancelable)
```
<table class="dataintable">
<tbody><tr>
<th>参数</th>
<th>描述</th>
</tr>

<tr>
<td>eventType</td>
<td>字符串值。事件的类型。</td>
</tr>

<tr>
<td>canBubble</td>
<td>事件是否起泡。</td>
</tr>

<tr>
<td>cancelable</td>
<td>是否可以用 preventDefault() 方法取消事件。</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr >
<th >
参数</th>
<th >
事件接口</th>
<th>
初始化方法</th>
</tr>
<tr>
<td >
HTMLEvents</td>
<td >
HTMLEvent</td>
<td >
iniEvent()</td>
</tr>
<tr>
<td >
MouseEvents</td>
<td >
MouseEvent</td>
<td >
iniMouseEvent()</td>
</tr>
<tr >
<td >
UIEvents</td>
<td >
UIEvent</td>
<td >
iniUIEvent()</td>
</tr>
</tbody>
</table>

## CustomEventInit(不兼容ie)
<dt><em>customEventInit</em><span class="inlineIndicator optional optionalInline">可选</span></dt>
<dl>
 <dd>Is a <code>CustomEventInit</code> dictionary, having the following fields: &nbsp;一个字典类型参数，有如下字段

 <ul>
  <li><code>"detail"</code>, optional and defaulting to <code>null</code>, of type any, that is a event-dependant value associated with the event. &nbsp;&nbsp;可选的默认值是 null 的任意类型数据，是一个与 event 相关的值</li>
  <li>bubbles 一个布尔值，表示该事件能否冒泡。 来自 <a href="/zh-CN/docs/Web/API/Event/Event"><code>EventInit</code></a>。注意：测试chrome默认为不冒泡。</li>
  <li>cancelable 一个布尔值，表示该事件是否可以取消。 来自&nbsp;<a href="/zh-CN/docs/Web/API/Event/Event"><code>EventInit</code></a></li>
 </ul>

 <p><em>The <code>CustomEventInit</code></em><em> dictionary also accepts fields from the <a href="/zh-CN/docs/Web/API/Event/Event"><code>EventInit</code></a> dictionary.</em></p>

 <p>CustomerEventInit 字典参数同样接受来自于 Event 类构造函数的 eventInit 字典参数，如下</p>

 <p>bubbles &nbsp; 一个布尔值，表示该事件能否冒泡</p>

 <p>cancelable &nbsp;一个布尔值，表示该事件是否可以取消</p>
 </div>
 </dd>
</dl>
