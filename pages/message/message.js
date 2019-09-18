Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:[{
      nickname1: '',
      avatarUrl1: '',
      text1: '',
    }],
    userText:'',
    userNickName:'',
    userAvatarUrl:''
  },
  input:function(e){
    var that = this
    this.setData({
      userText: e.detail.value
    })
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userNickName: res.userInfo.nickName,
          userAvatarUrl: res.userInfo.avatarUrl,
        })
      },
    })
  },
  send:function(e){
    var that = this
    wx.request({
      url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/UpLoadServlet',
      data: {
        text: that.data.userText,
        nickname: that.data.userNickName,
        avatarurl: that.data.userAvatarUrl,
        text1: that.data.text1
      },
      dataType: 'json',
      method: 'get',
      success: function (res) {
        wx.request({
          url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/ShowTextServlet', //真实的接口地址
          dataType: 'json',
          method: 'get',
          success: function (res) {
            //通过返回值显示多行数据？？？
            console.log(res.data)
            that.setData({
              res: res.data,
              //设置数据
            })
          },
          fail: function (err) {
            console.log(err)
          }
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  onLoad:function(){
    var that = this
    wx.request({
      url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/ShowTextServlet', //真实的接口地址
      dataType: 'json',
      method: 'get',
      success: function (res) {
        //通过返回值显示多行数据？？？
        console.log(res.data)
        that.setData({
          res: res.data,
          //设置数据
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  btn:function(){

  }
})