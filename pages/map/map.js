Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },

  onReady:function(e){
    this.mapCtx = wx.createMapContext("map", this)
    this.mapCtx.moveToLocation()

  }
  
})