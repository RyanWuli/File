// components/x-segmentPane/x-segmentPane.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ["segment-cls"],
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerChange: function(evt) {
      console.log(evt.detail.current)
    // 1. 获取分选选择器组件对象本身
      let segBar = this.selectComponent("#x-sp-sb")

    // 2. 调用对应的方法
      segBar._setCurrentIdx(evt.detail.current)


    },
    _handlerSelectChange: function(evt) {
      // console.log(evt)
      
      let idx = parseInt(evt.detail.currentIdx)
      this.setData({
        currentIdx: idx
      })
    }
  }
})
