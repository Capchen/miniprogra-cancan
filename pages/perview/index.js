// index.js
Component({
  data: {
    ani: null,
  },
  attached: function () {
    // 获取图库数据
  },
  methods: { 
    scrollToLower() {
    },
    previewMedia() {
      wx.previewMedia({
        sources: [
          {
            url: 'https://gyenno.oss-cn-beijing.aliyuncs.com/pub/miniprogram/ydl-mini-parkinson-specialty-center-map/image/const-banner.png'
          },
        ],
      })
    },
  },
})
