# 微信小程序位置系统（调用前需要 用户授权 scope.userLocation）
stopLocationUpdate:关闭接受位置变化信息前后台都关闭
startLocationUpdate：开启前台接受位置变化
startLocationUpdateBackground：开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。调用前需要 用户授权 scope.userLocationBackground需在app.json中配置requiredBackgroundModes: ['location']后使用
wx.openLocation：在微信内置地图查看问题
onLocationChange(callback):监听位置变化，必须在调用startLocationUpdate和startLocationUpdateBackground之后使用
offLocationChange（callback）：取消监听
getLocation:获取当前位置信息(设置type: 'gcj02',返回可以用于wx.openLocation的经纬度)
chooseLocation:打开微信内置地图选择位置
