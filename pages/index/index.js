// index.js
import lottie from 'lottie-miniprogram'
import { loginCheck } from '../../utils/util'
Page({
  data: {
    ani: null,
  },
  onReady() {
    // this.lottieInit()
  },
  onUnload() {
    this.ani && this.ani.destroy()
  },
  onShow() {
    
  },
  lottieInit() {
    wx.createSelectorQuery().select('#c1').fields({ node: true, size: true })
    .exec(res => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      context.scale(dpr, dpr)
      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require('./girl'),
        rendererSettings: {
          context,
        },
      })
      // this.ani.addEventListener('complete', () => {
      //   this.ani.goToAndStop(0, true)
      // })
    })
  },

  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        console.log('tempFilePaths', tempFilePaths)
      }
    })
  },
  startUpload() {
    loginCheck().then(() => {
      this.chooseImage()
    }).catch(() => {
      wx.navigateTo({
        url: '/pages/common/login/index',
      })
    })
  }
})
