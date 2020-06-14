# 微信文件系统
## 图片上传：wx.chooseImage()从图片或照相机中选择图片，获取临时文件路径，然后通过wx.uploadFile上传文件
## 视频上传：wx.chooseVideo=>wx.uploadFile
## chooseMedia选择图片或视频（chooseImage和chooseVideo的结合体）
## 文件上传：wx.chooseFile=>wx.uploadFile
## 文件下载：wx.downloadFile下载网络文件，获取临时文件路径，然后通过saveFilE传入临时文件路径保存到本地