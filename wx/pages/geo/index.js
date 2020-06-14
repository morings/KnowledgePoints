Page({
  getGeo(){
    wx.getLocation({
      altitude:true,
      isHighAccuracy:true,
      type: 'gcj02',//返回可以用于wx.openLocation的经纬度
      success:(res)=>{
        wx.openLocation({
          latitude:res.latitude,
          longitude:res.longitude
        })
       
      },
      fail:(err)=>{
        console.log(err)
      }
    })
    
  },
  chooseGeo(){
    wx.getLocation({
      success:(res)=>{
        wx.chooseLocation({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })
  }
})