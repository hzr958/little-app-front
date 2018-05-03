//获取应用实例
var app = getApp()
Page({
    data: {
        images: [{ picurl: '../../images/index-slide/IMG_3525.jpg' }, 
                  { picurl: '../../images/index-slide/IMG_3526.jpg' }, 
                  { picurl: '../../images/index-slide/IMG_3527.jpg' }],
        choiceItems_1: [{ coursePics: '../../images/coursepic/cantonese_1.png', studentNum: '3000',praisenum:'3000',teacher: '小新老师', title: '广东话课程', courseCategory: '粤语培训', id: '1' ,summary: '场景化教学，小班课，周末白天班或周中晚上班，一周一次课，一次两课时（90分钟），共20课时'},
          { coursePics: '../../images/coursepic/french_1.jpg', studentNum:'3000' ,praisenum: '3000',teacher: '小新老师', title: '初级法语课程', courseCategory: '法语培训', id: '2',summary:'场景化教学，小班课，周末白天班或周中晚上班，一周一次课，一次两课时（90分钟），共20课时'},
          { coursePics: '../../images/coursepic/french_culture.jpg', studentNum: '3000',praisenum: '3000',teacher: '小新老师', title: '走进法兰西文化', courseCategory: '法语培训', id: '3',summary: '场景化教学，小班课，周末白天班或周中晚上班，一周一次课，一次两课时（90分钟），共20课时' },
          { coursePics: '../../images/coursepic/japanese_1.jpg', studentNum: '3000',praisenum: '3000',teacher: '小新老师', title: '初级日语课程', courseCategory: '日语培训', id: '4',summary: '场景化教学，小班课，周末白天班或周中晚上班，一周一次课，一次两课时（90分钟），共20课时' },
          { coursePics: '../../images/coursepic/japanese_2.jpg', studentNum: '3000',praisenum: '3000',teacher: '小新老师', title: '中级日语课程', courseCategory: '日语培训', id: '5',summary: '场景化教学，小班课，周末白天班或周中晚上班，一周一次课，一次两课时（90分钟），共20课时' }],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  // loading
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        wx.request({
            //url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            url:'',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })

        //venuesList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    venuesItems: res.data.data
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

        //choiceList
        wx.request({
            //url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
            url:'',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    choiceItems: res.data.data.dataList
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

    },

     viewStoryDetail: function (event) {
      let id = event.currentTarget.dataset.id;
      let userId = event.currentTarget.dataset.userId;

      wx.navigateTo({
        url: `../details/index?id=${id}&user_id=${userId}`
      });
    }
})
