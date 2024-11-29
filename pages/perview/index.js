// index.js
Page({
  data: {
    ani: null,
  },
  onReady() {
    // this.lottieInit()
  },
  onUnload() {
  },
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
})
