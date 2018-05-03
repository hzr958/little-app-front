var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cs_id: 0,
    navTitle: '',
    courseList: {
      courseList: [{ "sub_cs_id": "1", "relate_record_id": "2", "status": 5, "plan_date": "Apr. 14th, 2018","desc": "法语培训" },
        { "sub_cs_id": "2", "relate_record_id": "2", "status": 5, "plan_date": "Apr. 15th, 2018", "desc": "粤语培训" },
        { "sub_cs_id": "3", "relate_record_id": "2", "status": 6, "plan_date": "Apr. 16th, 2018", "desc": "日语培训" },
        { "sub_cs_id": "4", "relate_record_id": "2", "status": 3, "plan_date": "Apr. 17th, 2018", "desc": "韩语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 18th, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 19th, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 20th, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 21st, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 22nd, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 23rd, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 24th, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "5", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 25th, 2018", "desc": "俄语培训" },
        { "sub_cs_id": "6", "relate_record_id": "2", "status": 1, "plan_date": "Apr. 26th, 2018", "desc": "幼儿小语种" }],
      todayTask: { "sub_cs_name": "法语课程1", "finished_num": "4", course_img:""}

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  tapCsPlanItem: function (e) {
    var that = this;
    var status = e.currentTarget.dataset.status;
    var sub_cs_id = e.currentTarget.dataset.sub_cs_id;
    var record_id = e.currentTarget.dataset.relate_record_id;
    if (status == 1) {
      wx.showToast({
        title: '该天暂时无法跟读',
        icon: 'success',
        duration: 500
      });
      return false;
    }
    //已经跟读过的，跳转到结果页
    if (status == 4 || status == 5) {
      wx.navigateTo({
        url: '../result/result?record_id=' + record_id
      })
    } else {
      wx.navigateTo({
        url: '../dailyassignmentdetail/dailyassignmentdetail?sub_cs_id=' + sub_cs_id + '&cs_id=' + that.data.cs_id + '&status=' + status
      })
    }
  }
})