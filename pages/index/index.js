//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    companyName:'时光花田祥云店',
    pictures:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WKV6eGYD7KVEbkicoL3aQz5OcuQCWgicFnLK3atGib9uWQn80TgiacDavYA/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WTrp8fl2icY81ufJRfX0uLJvM2cZTzyQ84mNKiaNrd1PzsagK2scRglJQ/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WZHicKXejvvoSbbTmtm7qQaDAWiaRaNv8A3Vo4rDUIr0ryqASHbSIkl6Q/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WWLhKBDUecibUjPgianORtFtiaWK7byVHgd4ysXp0SyFQauhZKUExrTDKA/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WDNnyr0XrrPI1rKEDXVLqJFZ7w3kOvu1Kxic2LfgBNUO9r5V78lRz8Ug/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1Wpqsib0CqOREuibXuHX9YFJmT0TMA0efc2WuZoB9Kmc3FNPgcxJgJcs5A/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WSb6l0qeNC4XAvh7SJib7Y0w1yNADnCCrYFpMUXHYazicbDmVP6DB4WRg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WBquF5krwggnic7x8EibTR6Kb7L6vicjhoLlVUpxN7k1lT11k7wmIRKKuA/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WSRqN3peygZzLoX1bmABuHPtykicjRPfUreLRPiazX43b4NRUst48DdTQ/0?wx_fmt=jpeg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 2000
  },
  //事件处理函数
  showMap:function(){
    wx.openLocation({
      latitude: 40.086720,
      longitude: 116.537340,
      scale: '18',
      name: '时光花田',
      address: '北京市顺义区安泰大街中粮祥云小镇南区10号楼110'
    })
  

  },
  call:function(){
     wx.makePhoneCall({
       phoneNumber: '18513636303',
     })


  },
  imageView: function (event) {
    var id = event.target.id;
    var a = this.data.pictures;
    wx.previewImage({  
      current:a[id],
      urls: a
    })
  }

})
