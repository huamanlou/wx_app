// pages/card/card.js
var app = getApp();
Page({
  data: {
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //调用应用实例的方法获取全局数据
    this.getList();
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
  getList:function(){
    var self = this;
    app.request({
      url: app.globalData.orderUrl+'/api/cardlist',
      success: function(res) {
        console.log(res.data);
        self.setData({
          'cards':res.data.list
        });
      }
    });
  },
})