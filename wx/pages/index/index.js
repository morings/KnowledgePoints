//index.js
//获取应用实例
const app = getApp()
var SocketTask = null;
Page({
  data:{
    message:''
  },
  //打开链接
  openSocket(){
    SocketTask = wx.connectSocket({
      url: 'wss://example.qq.com',
      header:{
        'content-type': 'application/json'
      },
      protocols: ['protocol1']
    })
    SocketTask.onOpen(()=>{
      console.log("WebSocket链接成功")
    })
    SocketTask.onClose(()=>{
      console.log("WebSocket链接关闭");
      SocketTask = null;
    })
    SocketTask.onError(()=>{
      console.log("WebSocket链接错误")
    })
    SocketTask.onMessage(()=>{
      console.log("WebSocket收到了消息")
    })
  },
  //发送消息
  sendMessage(){
    if(!SocketTask){
      return wx.showToast({
        title:"请先链接webscoket",
        icon:'none'
      })
    }
    if(!this.data.message){
      return  wx.showToast({
        title:"请输入要发送的内容",
        icon:'none'
      })
    }
    SocketTask.send({
      data:this.data.message,
      success: function() {
        console.log('发送成功');
        this.setData({
          message:''
        })
      },
      fail(){
        console.log('发送失败')
      }
    })
  },
  //输入发送消息
  handInput(event){
    this.setData({
      message:event.detail.value
    })
  }
})
