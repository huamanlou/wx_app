//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    logo:"/image/logo.png",
    imgUrls: ['/image/slide1.jpg',
  'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    test:'发现醉南粉',
    products:[{pic:'https://static.oschina.net/uploads/space/2016/0923/095232_tmA0_2915469.jpg?_=5901054'}],
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // var that = this;
    this.getList(1);
    
  },
  getList:function(page){
    var self = this;
    wx.request({
      url: "http://app1.zuinanfen.com/product/getlist",
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        console.log(res.data);
        self.setData({
          'products':res.data
        });
      }
    });
  },
  listClick:function(event){
    console.log(event); 
    var id = event.currentTarget.id;
    wx.navigateTo({url:'/pages/product/index?id='+id});
  }
});
