//app.js
App({
  onLaunch: function () {
    var that = this
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    wx.login({
      success: function(res) {
        if (res.code) {
          that.request({
            url : that.globalData.baseUrl+'/user/logon',
            data: {
              code: res.code
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    baseUrl:'http://app1.zuinanfen.com/index.php',
    orderUrl: 'http://shop.zuinanfen.com/index.php'
  },
  //args include url,type=json/html,cookies,data,success
  request:function(args){
    var contentType = args.type || 'json';
    if(typeof args.cookie != 'undefined'){
      var cookies = 'shop_id=1;'+args.cookies;
    }else{
      var cookies = 'shop_id=1';
    }
    var data = args.data || {};
    wx.request({
      url: args.url,
      header:{
        'Content-Type': contentType,
        'Cookie': cookies
      },
      data:data,
      success: function(res) {
        args.success && args.success(res);
      }
    });
  }
})