// components/x-segmnentBar/x-segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // segmentItems: Array
    segmentItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setCurrentIdx: function(index) {
      this.setData({
        currentIndex: index
      })
    },
    _handlerTap: function(evt) {
      // console.log(evt.currentTarget.id)
      let cid = evt.currentTarget.id
      this.setData({
        currentIndex: cid
      })

      // 触发一个自定义事件, 并且把数据传递出去
      this.triggerEvent("selectChange", { currentIdx: cid }, {})

    }
  }
})
