var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200
    },

    onLoad: function(options) {
      if (options.id == 1) {
        this.setData({
          shopppingDetails: {
            'title': '广东话课程', 'reason': '开班后一次性发课，同学可以根据自身需要在班级有效期内学习课件；有效期内可以反复无限次学习课件。可使用电脑在线学习；同时支持苹果、安卓等移动设备，进行离线学习。' },
          goodsPicsInfo: [{ 'picurl': '../../images/index-slide/20170726143333_35976.jpg' }, { 'picurl': '../../images/index-slide/20170726152722_37320.jpg' }]
        });
        }else{
        this.setData({
          shopppingDetails: {
            'title': '初级法语课程', 'reason': '法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程' },
          goodsPicsInfo: [{ 'picurl': '../../images/index-slide/20170726143333_35976.jpg' }, { 'picurl': '../../images/index-slide/20170726152722_37320.jpg' }]
        });
        }
      

        // var that = this
        
        // 商品详情
        // wx.request({
        //     //url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
        //     url:'',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         //console.log(res.data.data);
        //         that.data.shopppingDetails = res.data.data;

        //         //var goodsPicsInfo = [{ 'picurl': '../../images/index-slide/IMG_3525.jpg' }, { 'picurl':'../../images/index-slide/IMG_3525.jpg'}];
        //         var goodsPicsInfo = [];
        //         var goodsPicsObj = {};
        //         var goodspic = res.data.data.goodspics;
        //         var goodspics = goodspic.substring(0, goodspic.length - 1);
        //         var goodspicsArr = goodspics.split("#");
        //         for (var i = 0; i < goodspicsArr.length; i++) {
        //             goodsPicsInfo.push({
        //                 "picurl": goodspicsArr[i]
        //             });
        //         }
        //         that.setData({
        //             goodsPicsInfo: goodsPicsInfo
        //         })
        //     }
        // })

    }
})
