# wx获取用户信息
<ul>
<li>先调用wx.getSetting判断是否有scope.userInfo权限

```
//查看授权情况
wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
```
</li>
<li>如果有权限就直接调用 wx.getUserInfo获取信息

```
// 获取用户信息
wx.getSetting({
  success: res => {
    if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      wx.getUserInfo({
        success: res => {
          // 可以将 res 发送给后台解码出 unionId
          this.globalData.userInfo = res.userInfo

          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res)
          }
        }
      })
    }
  }
})
```
</li>
<li>如果没有授权，就只能在页面上显示getuserinfo的button,引导用户点击拉起授权窗口，然后再回调中获取用户信息

```
//授权按钮
<button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>

getUserInfo: function(e) {
  console.log(e)
  if(!e.detail.userInfo){
    return wx.showModal({
      title:"错误",
      content:e.detail.errMsg
    })
  }
  app.globalData.userInfo = e.detail.userInfo
  this.setData({
    userInfo: e.detail.userInfo,
    hasUserInfo: true
  })
}
```
</li>
</ul>
