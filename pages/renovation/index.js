// index.js
Component({
  data: {
    showLoading: false,
  },
  attached: function () {
  },
  methods: {
    downPdf() {
      this.setData({
        showLoading: true,
      })
      wx.downloadFile({
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E8%A3%85%E4%BF%AE%E5%8F%82%E8%80%83.pdf',
        success: function (res) {
          const filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
            },
            fail: function (err) {
              console.log('打开文档失败', err)
            },
          })
        },
        fail: function (err) {
          console.log('下载失败', err)
        },
        complete: () => {
          this.setData({
            showLoading: false,
          })
        },
      })
    },
    navigatorPdfList(e) {
      const key = e.currentTarget.dataset.key
      wx.navigateTo({
        url: '/pages/renovation/components/pdf-file-list/index?key=' + key,
      })
    }
  },
})
