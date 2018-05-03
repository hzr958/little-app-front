var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: {},
    user_id: {},
    userInfo: {},
    cartImg: '../../images/empty-audios.png',
    tipWords: '打卡录音作业为空',
    radioRecords: [{ "audioId": "1", "courseId": "10001", "courseTitle": "法语初级1", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "upLoadTime": "2018-04-12" }, { "audioId": "2", "courseId": "10002", "courseTitle": "法语初级2", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程", "upLoadTime": "2018-04-12" }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
