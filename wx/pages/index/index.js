//index.js
//获取应用实例
const app = getApp()

Page({
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  }
})
