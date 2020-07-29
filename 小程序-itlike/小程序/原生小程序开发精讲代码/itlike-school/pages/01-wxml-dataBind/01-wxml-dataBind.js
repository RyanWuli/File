// pages/01-wxml-dataBind/01-wxml-dataBind.js
Page({

  

  _handlerTap:  function() {
    console.log("xxxx")
    // 动态修改数据源 testKeyData
    // this.data.testKeyData.push("d")
    this.data.testKeyData.unshift("d")
    console.log(this.data.testKeyData)
    this.setData({
      testKeyData: this.data.testKeyData
    })

    // let arr = [1, 2, 3]
    // arr.unshift(4)
    // console.log(arr)


  },
  /**
   * 页面的初始数据
   */
  data: {
    test: function () {
      console.log("test")
      return "test"
    },
    testKeyData: [
      "a",
      "b",
      "c"
    ],
    index: 10,
    courseItems: [
      {
        id: "0",
        courseImg: "/assets/images/fm1.jpg",
        courseTitle: "标题测试",
        courseTeacher: "撩课-Sz",
        courseStudyCount: 22001,
        isStar: true,
        // score: 66
      }, {
        id: "1",
        courseImg: "/assets/images/fm2.jpg",
        courseTitle: "前端",
        courseTeacher: "撩课-jh",
        courseStudyCount: 3200,
        isStar: false,
        // score: 66
      }
    ]
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
    let a = 10;
    console.log("页面第一次渲染完成----", this)
    setTimeout(() => {
  
      console.log("3秒钟到了", this)
      this.data.courseItems.push({
        id: "2",
        courseImg: "/assets/images/fm1.jpg",
        courseTitle: "撩课-Python全栈",
        courseTeacher: "撩课-王顺子",
        courseStudyCount: 6200,
        isStar: false
      })
      this.setData({
        courseItems: this.data.courseItems
      })
    }, 3000)
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