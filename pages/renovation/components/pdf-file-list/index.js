// index.js
Component({
  data: {
    showLoading: false,
    wholeHouse: [
      {
        title: '电视背景墙柜体',
        desc: '电视背景墙柜体',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/1%E7%94%B5%E8%A7%86%E8%83%8C%E6%99%AF%E5%A2%99%E6%9F%9C%E4%BD%93.pdf',
      },
    ],
  },
  attached: function () {
  },
  methods: {
    downPdf(e) {
      this.setData({
        showLoading: true,
      })
      const item = e.currentTarget.dataset.item
      wx.downloadFile({
        url: item.url,
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
    }
  },
})
