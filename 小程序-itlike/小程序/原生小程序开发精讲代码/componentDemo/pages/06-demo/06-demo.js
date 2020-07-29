// pages/06-demo/06-demo.js
Page({
  _handlerAutoLogin: function(evt) {
    console.log(evt)
    if(evt.detail.value.length > 0) {
      // 被选中, 应该, 选中另外一个  记住密码
      this.setData({
        rememberPwd: true
      })
    }
  },
  _handlerRememberPwd: function(evt) {
    if(evt.detail.value.length === 0) {
      // 取消的时候, 应该自动取消, 自动登录选项
      this.setData({
        autoLogin: false
      })
    }
  },
  _handlerPwdInput: function(evt) {
    let passwordV = evt.detail.value;
    this.setData({
      passwordV: passwordV,
      canLogin: passwordV.length > 0 && this.data.isGood
    })
 
  },
  _handlerAccountInput: function(evt) {
    let accountV = evt.detail.value;

    this.setData({
      accountV: accountV,
      isGood: accountV.length >= 3,
      canLogin: this.data.passwordV.length > 0 && accountV.length >= 3
    })
    // if (accountV.length >= 3) {
    //   this.setData({
    //     isGood: true
    //   })
    // } else {
    //   this.setData({
    //     isGood: false
    //   })
    // }
  },
  _handlerSubmit: function(evt) {
    console.log(evt)
    // 是否正确
    // js代码实现页面跳转
    console.log(evt)
    let account = evt.detail.value.accountV
    let pwd = evt.detail.value.passwordV
    if(account === "123" && pwd === "abc") {
      wx.redirectTo({
        url: '/pages/07-swiperDemo/07-swiperDemo?name=sz&age=18',
      })
    }
    wx.request({
      url: 'http://demo.itlike.com/web/xlmc/api/homeApi/categories?itlike=65971618363566927321',
      success: function(resp) {
        console.log(resp)
      }
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    accountV: "",
    passwordV: "",
    isGood: false,
    canLogin: false,
    autoLogin: false,
    rememberPwd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})