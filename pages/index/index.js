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
    swiperConf:null,
    products:[],
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
    this.setData({
      swiperConf: app.globalData.swiperConf
    });
  },
  getList:function(page){
    var self = this;
    app.request({
      url: app.globalData.baseUrl+'/product/getlist',
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
