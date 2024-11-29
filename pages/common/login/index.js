import lottie from 'lottie-miniprogram'
Page({
    data: {
        textAccount: '',
        textPassword: '',
    },
    onReady() {
        this.lottieInit()
    },
    onUnload() {
    },
    onInputAccount(e) {
        this.setData({
            textAccount: e.detail.value,
        })
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
            animationData: require('../../../assets/lottie/laugh_bear.js'),
            rendererSettings: {
              context,
            },
          })
          // this.ani.addEventListener('complete', () => {
          //   this.ani.goToAndStop(0, true)
          // })
        })
      },
})
