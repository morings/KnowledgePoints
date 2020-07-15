# 常见像素单位
## css单位
### px-CSS像素(CSS pixels): 又称为逻辑像素
和分辨率有关，1px为1像素点的大小
### pt
绝对单位 1pt 等于 1/72 英寸,但是显示的时候都是换算为px，pt=px 乘以 3/4,所以不同设备的展示也不同
## dp-设备像素(device independent pixels): 设备屏幕的物理像素，任何设备的物理像素的数量都是固定的
和分辨率无关，每个设备都是固定的
## dpr设备像素比DPR(devicePixelRatio)是默认缩放为100%的情况下，设备像素和CSS像素的比值
dpr，也被成为device pixel ratio，即物理像素与逻辑像素的比，iphone6下dpr=2,pc下的dpr=1,
<br>
对于设备像素比DPR也有对应的javascript属性window.devicePixelRatio,每个设备都是固定的

