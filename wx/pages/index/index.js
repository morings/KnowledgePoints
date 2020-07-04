//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    ani:null,
  },
  start:function(){
    var animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease',
      delay: 1000
    });
    animation.opacity(0.2).translate(100, -100).step();
    animation.opacity(1).translate(0,0).step();
    this.setData({
      ani:  animation.export()
    })
  }
})
