//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    companyName:'时光花田祥云店'
  },
  //事件处理函数
  showMap:function(){
     wx.navigateTo({
       url: '/pages/map/map',
     })


  },
  call:function(){
     wx.makePhoneCall({
       phoneNumber: '18513636303',
     })


  }

})
