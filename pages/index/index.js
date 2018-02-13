//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    companyName:'时光花田祥云店',
    pictures:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WOiafSxN1cre25gtkkOq2gs2BrgJ0n1qX7RbiaTL14NZicErENHOtyA2Pw/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1W9nDc8okvxIEU4hegLzdELmz5K2Qls9jb0XibgsibW9FxDEibcbmicHfwMQ/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1Wo9U79sCKzltCkeaLbhiauC5vRVXRKoeRz4PUMMvt8py9bDWFngeb8Xg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WzX36ffQGsoUMBHDbicF6PgJZNLjPlrJU7R2IaDWAwgfTb0T4Oc7ahVw/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WvBqgB5aH8yfgnD1p5g9qTvTm45hic9Cv1LdT0pjicBQSqLVC7wcTdoTw/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WOueRiaFJuKZMeA95oAf9ZejR9iclCdSoYYZ8AJm0k6Gxh2NfliaHc2nzw/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WqF86ESZSFI0UYPRQwRNJMPgbwocnjriaBz0RXwx14BEHicOERHYVk8vg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1WibG6bDnZKSVftQ2O1btRh9WRY7BAokjTb5DZyfrQbCptrE3oGubf1Mg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/XyyLpCc38w3BGRwGANfaM7CRK9ZnLq1Wy2YXu9ouJb29HPJQPOAgZuWMz47HlvS9HZyDCJEW2icmicq8d67HJv1A/0?wx_fmt=jpeg'
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
