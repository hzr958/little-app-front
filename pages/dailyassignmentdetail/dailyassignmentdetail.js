var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cs_id:0,
    sub_cs_id:0,
    index:1,//此课程下的日常打卡作业id
    recording:false,
    JFAudio: {
    'recording': null,
    'playing': null,
    'hasRecord': false,
    'tempFilePath': ''
  },
    item: { "sub_cs_id": "1", "relate_record_id": "2", "status": 5, "plan_date": "Apr. 14th, 2018", "title": "法语培训", "desc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程"},
    readingInfo: [{ "sub_cs_id": "1", "relate_record_id": "2", "status": 5, "plan_date": "Apr. 14th, 2018", "desc": "法语培训" },
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
    currentProgress: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options && options.sub_cs_id) {
      this.setData({
        cs_id: options.cs_id,
        sub_cs_id: options.sub_cs_id
      })
    }
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
  emptyAudio: {
    'recording': null,
    'playing': null,
    'hasRecord': false,
    'tempFilePath': ''
  },
  //录音
  tapCompleteUserAudio: function (e, itemIndex) {
    var that = this;
    var readingItem;
    if (itemIndex) {
      readingItem = itemIndex;
    } else {
      readingItem = e.currentTarget.dataset.reading_item;
    }
    wx.stopRecord();
    that.updateJFAudio('recording', false);
    that.setData({
      recording: false
    });
    clearInterval(that.progressTimer);
  },
  tapRecordUserAudio: function (e) {
    var that = this;
    var readingItem = e.currentTarget.dataset.reading_item;
    //当前所在页面
    var jfAudio = that.data.JFAudio;
    var curAudioModel = that.updateJFAudioModel(jfAudio);
    //
    wx.showToast({
      title: '开始录音',
      icon: 'success',
      duration: 500
    });

    that.updateJFAudio('recording', true);
    that.setData({
      recording: true
    });
    //更新进度条
    var size = 100;
    that.setData({
      currentProgress: 0
    });
    that.progressTimer = setInterval(function () {
      //var num = Math.ceil(parseFloat(that.data.readingInfo[readingItem]['audio_duration']) * 1000);
      var num = Math.ceil(60.0 * 1000);
      var newPro = that.data.currentProgress;
      newPro += size / num * 100;
      if (newPro >= 100) {
        that.setData({
          currentProgress: 100
        });
        that.tapCompleteUserAudio(null, readingItem);
      } else {
        that.setData({
          currentProgress: newPro
        });
      }

    }, size);
    //
    wx.startRecord({
      success: function (res) {
        that.updateJFAudio('tempFilePath', res.tempFilePath);
        that.updateJFAudio('hasRecord', true);
        //
        that.setData({
          recording: false
        });
      },
      complete: function () {
        that.updateJFAudio('recording', false);
        that.setData({
          recording: false
        });
        clearInterval(that.progressTimer);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  //回放
  tapRePlayUserAudio: function (e) {
    var that = this;
    var readingItem = e.currentTarget.dataset.reading_item;
    //当前所在页面
    var jfAudio = that.data.JFAudio;
    wx.playVoice({
      filePath: jfAudio.tempFilePath,
      success: function () {
        that.updateJFAudio('playing', false);
      }
    })
  },

  //****封装一下**** start
  updateJFAudio: function (key, value) {
    var that = this;
    var jfAudio = that.data.JFAudio;
    jfAudio[key] = value;
    that.setData({
      JFAudio: jfAudio
    });
    return jfAudio;
  },
  updateJFAudioModel: function (model) {
    var that = this;
    var _model = model || that.emptyAudio;
    that.setData({
      JFAudio: _model
    });

    return _model;
  }
    //****封装一下**** end
})