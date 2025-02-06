// index.js
Component({
  data: {
    showLoading: false,
    listData: [],
    // 全屋
    wholeHouse: [
      {
        title: '电视背景墙柜体',
        desc: '电视背景墙柜体',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/1%E7%94%B5%E8%A7%86%E8%83%8C%E6%99%AF%E5%A2%99%E6%9F%9C%E4%BD%93.pdf',
      },
      {
        title: '北阳台两组柜体',
        desc: '北阳台两组柜体',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/2%E5%8C%97%E9%98%B3%E5%8F%B0%E4%B8%A4%E7%BB%84%E6%9F%9C%E4%BD%93.pdf',
      },
      {
        title: '鞋柜+阳台洗衣操作柜',
        desc: '鞋柜+阳台洗衣操作柜',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/3%E9%9E%8B%E6%9F%9C%2B%E5%8D%97%E9%98%B3%E5%8F%B0%E6%B4%97%E8%A1%A3%E6%93%8D%E4%BD%9C%E6%9F%9C.pdf',
      },
      {
        title: '主卫台盆柜',
        desc: '主卫台盆柜',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/4%E4%B8%BB%E5%8D%AB%E5%8F%B0%E7%9B%86%E6%9F%9C.pdf',
      },
      {
        title: '主卧衣柜内胆结构图',
        desc: '主卧衣柜内胆结构图',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%E8%AE%BE%E8%AE%A1%26%E6%8A%A5%E4%BB%B7/5%E4%B8%BB%E5%8D%A7%E8%A1%A3%E6%9F%9C%E5%86%85%E8%83%86%E7%BB%93%E6%9E%84%E5%9B%BE.pdf',
      },
      {
        title: '主卧衣柜门板',
        desc: '主卧衣柜门板',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/全屋定制设计&报价/6主卧衣柜门板.pdf',
      },
      {
        title: '金融家82号101新居柜体定制-报价单',
        desc: '金融家82号101新居柜体定制-报价单',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/全屋定制设计&报价/金融家82号101新居柜体定制-报价单.pdf',
      },
      {
        title: '金融家82号101柜体定制图纸',
        desc: '金融家82号101柜体定制图纸',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/全屋定制设计&报价/金融家82号101柜体定制图纸.pdf',
      }
    ],
    // 橱柜
    cupboard: [{
      title: '右侧效果图',
      desc: '右侧效果图',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/右侧效果图.jpg',
    }, {
      title: '尺寸示意',
      desc: '尺寸示意',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/尺寸示意.jpg',
    }, {
      title: '左侧效果',
      desc: '左侧效果',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/左侧效果图.jpg'
    },
    {
      title: '柜体报价 - 前10家9折',
      desc: '柜体报价 - 前10家9折',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/柜体报价 - 前10家9折.jpg',
    },
    {
      title: '橱柜设计_82号101',
      desc: '橱柜设计_82号101',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/橱柜设计_82号101.pdf',
    },
    {
      title: '正面效果图',
      desc: '正面效果图',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/正面效果图.jpg',
    },
    {
      title: '顶面图',
      desc: '顶面图',
      url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/橱柜设计&报价/顶面图.jpg',
    }
    ],
    // supervision
    supervision: [
      /**
       * https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告10油漆验收.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告11验收.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告1首次检查.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告2水电交底.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告3水电验收.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告4吊顶龙骨.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告5石膏板验收.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告6地暖铺设.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告7瓷砖初期.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告8瓷砖完工.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/验收报告9油漆基础.pdf
       */
      {
        title: '油漆验收',
        desc: '油漆验收',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告10油漆验收.pdf',
      },
      {
        title: '验收',
        desc: '验收',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告11验收.pdf',
      },
      {
        title: '首次检查',
        desc: '首次检查',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告1首次检查.pdf',
      },
      {
        title: '水电交底',
        desc: '水电交底',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告2水电交底.pdf',
      },
      {
        title: '水电验收',
        desc: '水电验收',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告3水电验收.pdf',
      },
      {
        title: '吊顶龙骨',
        desc: '吊顶龙骨',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告4吊顶龙骨.pdf',
      },
      {
        title: '石膏板验收',
        desc: '石膏板验收',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告5石膏板验收.pdf',
      },
      {
        title: '地暖铺设',
        desc: '地暖铺设',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告6地暖铺设.pdf',
      },
      {
        title: '瓷砖初期',
        desc: '瓷砖初期',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告7瓷砖初期.pdf',
      },
      {
        title: '瓷砖完工',
        desc: '瓷砖完工',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告8瓷砖完工.pdf',
      },
      {
        title: '油漆基础',
        desc: '油漆基础',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/监理验收报告/验收报告9油漆基础.pdf',
      },
    ],
    // cad
    cad: [
      /**
       * https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/10强弱电位.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/1原始尺寸.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/2拆除位置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/3新建墙体.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/4平面布置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/5地面布置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/6吊顶布置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/7灯具布置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/8开关控制.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/9冷热水位置.pdf
https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/客餐厅吊顶剖面图.pdf
       */
      {
        title: '强弱电位',
        desc: '强弱电位',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/10强弱电位.pdf',
      },
      {
        title: '原始尺寸',
        desc: '原始尺寸',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/1原始尺寸.pdf',
      },
      {
        title: '拆除位置',
        desc: '拆除位置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/2拆除位置.pdf',
      },
      {
        title: '新建墙体',
        desc: '新建墙体',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/3新建墙体.pdf',
      },
      {
        title: '平面布置',
        desc: '平面布置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/4平面布置.pdf',
      },
      {
        title: '地面布置',
        desc: '地面布置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/5地面布置.pdf',
      },
      {
        title: '吊顶布置',
        desc: '吊顶布置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/6吊顶布置.pdf',
      },
      {
        title: '灯具布置',
        desc: '灯具布置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/7灯具布置.pdf',
      },
      {
        title: '开关控制',
        desc: '开关控制',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/8开关控制.pdf',
      },
      {
        title: '冷热水位置',
        desc: '冷热水位置',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/9冷热水位置.pdf',
      },
      {
        title: '客餐厅吊顶剖面图',
        desc: '客餐厅吊顶剖面图',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修平面设计图/客餐厅吊顶剖面图.pdf',
      },
    ],
    // quotation
    quotation: [
      // https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/82号101新居 装修预算（半包预算表）.pdf
      {
        title: '82号101新居 装修预算（半包预算表）',
        desc: '82号101新居 装修预算（半包预算表）',
        url: 'https://pub-af92a95c8fa548e9ba1d0af90192aab9.r2.dev/装修报价单/82号101新居 装修预算（半包预算表）.pdf',
      },
    ]
  },
  pageLifetimes: {
    show: function () {
      // 获取路由参数
      const pages = getCurrentPages(); // 获取当前页面栈
      const currentPage = pages[pages.length - 1]; // 获取当前页面对象
      const options = currentPage.options; // 获取页面参数（URL 参数）
      // 你可以将参数保存到data中
      this.setData({
        listData: this.data[options.key],
      });
    }
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
