# h5-postmessage-跨域iframe通信
## 通过其处理跨域请求
### obj.postMessage 包含两个参数，第一个参数为发送的消息内容。第二个为来源域限制。即限制接收窗体的 URL。注意obj必须是接受窗口对象
### window.addEventListener("message", callback( event ) {},false)
#### event对象属性
data： 接收到的消息</br>
origin： 调用 postMessage 时消息发送方窗口的origin</br>
source： 对发送消息的窗口对象的引用; 所以可以使用此来在具有不同origin的两个窗口之间建立双向通信。
# 同域下的ifame可以与父页面相互访问里面的属性
