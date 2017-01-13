var app = getApp();
Page({
  data:{
    swiperConf:null
  },
  onLoad:function(e){
    this.setData({
      swiperConf: app.globalData.swiperConf
    });
    // 页面初始化 options为页面跳转所带来的参数
    this.getInfo(e.id);
   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getInfo:function(id){
    var self = this;
    app.request({
      url: app.globalData.baseUrl+'/product/show?id='+id,
      success: function(res) {
        self.setData({
          'title':res.data.title,
          'abstract':res.data.abstract,
          'pic': res.data.pic,
          'desc': res.data.desc,
        });
      }
    });
    
  },
})