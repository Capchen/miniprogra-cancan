import Message from 'tdesign-miniprogram/message/index';
import { loginCheck } from '../../utils/util'
import { uplaodFile } from '../../apis/index'
Component({
  data: {
    showLoading: false,
  },
  methods: {
    chooseImage() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.setData({
            showLoading: true,
          })
          const tempFilePaths = res.tempFilePaths
          console.log('tempFilePaths', tempFilePaths)
          const params = {
            filePath: tempFilePaths[0],
            name: 'file',
          }
          uplaodFile(params).then(res => {
            console.log('uplaodFile', res)
            Message.success({
              duration: 3000,
              content: '图片上传成功🎉',
            });
          }).catch(err => {
            console.log('uplaodFile err', err)
            Message.success({
              duration: 3000,
              content: '图片上传失败😭',
            });
          }).finally(() => {
            this.setData({
              showLoading: false,
            })
          })
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
  },
})
