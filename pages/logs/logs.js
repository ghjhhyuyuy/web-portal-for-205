//logs.js
Page({
  searchBox: function (e) {
    const that = this;
    let first, second;
    that.setData({
      first: e.detail.value.username,
      second: e.detail.value.pwd
    })
  }
})  