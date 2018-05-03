var app = getApp()
Page( {
  data: {
    userInfo: {},
    angle: 0,
    myCourses: [{ "courseId": "10001", "courseTitle": "法语初级1", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "courseTime": "从 2018-04-12 至 2018-06-22" }, { "courseId": "10002", "courseTitle": "法语初级2", "coursePic": "", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "courseTime": "从 2018-04-12 至 2018-06-22" }, { "courseId": "10003", "courseTitle": "法语初级3", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "courseTime": "从 2018-04-12 至 2018-06-22" }, { "courseId": "10004", "courseTitle": "法语初级3", "coursePic": "", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "courseTime": "从 2018-04-12 至 2018-06-22" }],
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
     userListInfo: [ 
       //{
    //   icon: '../../images/iconfont-dingdan.png',
    //   text: '我的订单',
    //   isunread: true,
    //   unreadNum: 2
    // }, 
    {
         icon: '../../images/iconfont-kefu-2.png',
        text: '我的打卡作业记录',
        isunread: false,
        unreadNum: 2
       }
      //  , {
      //    icon: '../../images/iconfont-dingdan.png',
      //    text: '我的课程',
      //    isunread: true,
      //    unreadNum: 2
      //  }
       ,{
         icon: '../../images/iconfont-about-us.png',
        text: '关于合略新桥'
      }],
      courseList:[{"csTitle":"法语课程1"}]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  signInDetail: function (event) {
    let text = event.currentTarget.dataset.text;
    let userId = event.currentTarget.dataset.userid;
    let courseId = event.currentTarget.dataset.courseid
    if (text == '我的课程' || courseId!=null){
      wx.navigateTo({
        url: `../dailyassignment/dailyassignment?text=${text}&user_id=${userId}`
      })
    }else {
      wx.navigateTo({
        url: `../myAudio/index?text=${text}&user_id=${userId}`
      })
    }
    
  }
})