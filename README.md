# html5位置系统
##  HTML5新增了用于获取浏览器所在定位的对象：
```
  window.navigator.geolocation {

       getCurrentPosition: fn  用于获取当前定位信息

       watchPosition: fn  不停的监视定位信息的改变

       clearWatch: fn 清除监视

  }//只能在https的环境下使用
```
## getCurrentPosition(callback,errorCallback,options)
## callback:获取成功回调
## errorCallback：获取失败回调
## 第三个参数是一个PositionOptions对象。 PositionOptions对象的成员：enableHighAccuracy——布尔值，表示是否启用高精确度模式，如果启用这个模式，浏览器在获取位置信息时可能需要耗费更多的时间。；timeout——限制请求位置的事件，设置多少毫秒后会报告一个超时错误；maximumAge——告诉浏览器我们愿意接受缓存过的位置，只要它不早于指定的毫秒数；
## watchPosition方法不断获得关于位置的更新。所需参数与getCurrentPosition方法相同，工作方式也一样。 区别在于：随着位置发生改变，回调函数会被反复地调用。 

  

  

   

   

   

