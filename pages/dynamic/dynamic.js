Page({
  /**
   * 页面的初始数据
   */
  data: {
    res:[{
      dizhi: '',
      text: '',
    }],
      focus: false,
      id:'',
  },
  sersh: function (e) {
      this.setData({
        id: e.detail.value
      })
  },
  find: function (e) {
    var that = this
    //打印所有关于点击对象的信息
    if (that.data.id != '') {
      wx.request({
        url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/FindServlet',
        data: {
          id: that.data.id
        },
        dataType: 'json',
        method: 'get',

        success: function (res) {
          that.setData({
            res: res.data //设置数据
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
    else{
      wx.request({
        url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/TestServlet', //真实的接口地址
        dataType: 'json',
        method: 'get',
        success: function (res) {
          console.log(res.data)
          that.setData({
            res: res.data //设置数据
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.ghjhhyuyuy.xin/Xiaochengxu/TestServlet', //真实的接口地址
      dataType: 'json',
      method: 'get',
      success: function (res) {
        console.log(res.data)
        that.setData({
          res:res.data //设置数据
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  }
})
