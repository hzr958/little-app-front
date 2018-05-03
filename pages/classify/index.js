var app = getApp()
Page({
    data: {
        //navLeftItems: [],
      navLeftItems:[{ "id": "1", "desc": "法语培训" },
      { "id": "2", "desc": "粤语培训" },
      { "id": "3", "desc": "日语培训" },
      { "id": "4", "desc": "韩语培训" },
      { "id": "5", "desc": "俄语培训" },
      { "id": "6", "desc": "幼儿小语种" }],
        //navRightItems: [],
      navRightItems: [{ "id": "1", "desc": "法语培训", "courseList": [{ "courseId": "10001", "courseTitle": "法语初级1", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程" }, { "courseId": "10002", "courseTitle": "法语初级2", "coursePic": "", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程" }, { "courseId": "10003", "courseTitle": "法语初级3", "coursePic": "../../images/coursepic/France.jpg", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程" }, { "courseId": "10004", "courseTitle": "法语初级3", "coursePic": "", "courseDesc": "法语具有全世界最优美的语言之称，如果你想听懂好听的法语歌，想去巴黎感受浪漫，想去法国旅游、游学或是留学工作，都可以选择我们的课程" }] }, { "id": "2", "desc": "粤语培训", "courseList": [{ "courseId": "20001", "courseTitle": "粤语初级1", "coursePic": "", "courseDesc": "courseDescription1" }, { "courseId": "20002", "courseTitle": "粤语初级2", "coursePic": "", "courseDesc": "courseDescription1" }, { "courseId": "20003", "courseTitle": "粤语初级3", "coursePic": "", "courseDesc": "courseDescription3" }] }, { "id": "3", "desc": "日语培训", "courseList": [{ "courseId": "30001", "courseTitle": "法语初级1", "coursePic": "", "courseDesc": "courseDescription1" }] }, { "id": "4", "desc": "韩语培训", "courseList": [{ "courseId": "40001", "courseTitle": "韩语初级1", "coursePic": "", "courseDesc": "courseDescription1" }] }, { "id": "5", "desc": "俄语培训", "courseList": [{ "courseId": "50001", "courseTitle": "俄语初级1", "coursePic": "", "courseDesc": "courseDescription1" }] }, { "id": "6", "desc": "幼儿小语种", "courseList": [{ "courseId": "60001", "courseTitle": "幼儿小语种初级1", "coursePic": "", "courseDesc":"courseDescription1"}]}],
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        wx.request({
            //url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
            url:'',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    navLeftItems: res.data,
                    navRightItems: res.data
                })
            }
        })
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})