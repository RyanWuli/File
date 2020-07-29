// components/x-courseItem/x-courseItem.js
Component({
  pageLifetimes: {
    show: function () {
      // 页面被展示
      console.log("-----页面被展示")
    },
    hide: function () {
      // 页面被隐藏
      console.log("-----页面被隐藏")
    },
    resize: function (size) {
      // 页面尺寸变化
      console.log("-----尺寸变化")
    }
  },
  lifetimes: {
    created: function () {
      console.log("组件被创建---new")
    },
    attached: function() {
      console.log("组件被添加到了界面当中-new")
    },
    detached: function() {
      console.log("组件界面当中移除-new")
    }
  },
  created: function() {
    console.log("组件被创建")
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
