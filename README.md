# 小程序-animation
小程序wxss不支持transtion和animation属性，必须用官方api创建动画
<ol>
  <li>wx.createAnimation创建一个animation对象</li>
  <li>animation的各种属性方法定义怎么变换，然后通过step方法保存这一步，如果有多步就多次调用step方法</li>
  <li>animation.export导出动画并绑定到执行节点的animation属性上</li>
</ol>
