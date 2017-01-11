// pages/product/index.js
Page({
  data:{},
  onLoad:function(e){
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
    wx.request({
      url: "http://app1.zuinanfen.com/product/show?id="+id,
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        console.log(res.data);
        self.setData({
          'title':res.data.title,
          'abstract':res.data.abstract,
          'pic': res.data.pic,
          'desc': res.data.desc
        });
      }
    });
  },
})