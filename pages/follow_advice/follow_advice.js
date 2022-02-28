// pages/follow_advice/follow_advice.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "",
    openId: app.globalData.openId,
    followTime: "暂无",
    sequence: "暂无", //第几次随访
    type: "暂无", //随访状态
    id: "暂无", //随访计划的id
    sourcess: "/images/image.png",
    //医生长期医嘱
    longTerm:[
      {doctorName:"暂无",
      createTime: "2022-01-01",
      lifeEnvironment: "（生活环境）",
      breathTrain: "（呼吸训练）",
      sportsAdvice:"（运动指导）", 
      emotionManagement:"（心情调节）",
      medicalCare:"（用药指导）"
      },
    ],
    //医生临时医嘱
    temp:[
      {
      doctorName:"暂无",
      createTime: "2022-01-01",
      detail:"暂无",  //临时医嘱内容
      }
    ]
  },


  /**
   * 自定义函数--查看近期随访计划
   */
  search: function () {
    var that = this
    wx.request({
      url: 'http://47.108.215.55:10001/follow/getFollowPlan',
      data: {
        "openId": that.data.openId
      },
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log(res);
        //将获取的数据保存到全局变量中
        app.globalData.followTime = res.data.data.followTime;
        app.globalData.id = res.data.data.id;
        app.globalData.sequence = res.data.data.sequence;
        app.globalData.type = res.data.data.type;
        //将全局变量的数据赋值给本页展示的数据
        that.setData({
          followTime: app.globalData.followTime,
          sequence: app.globalData.sequence,
          type: app.globalData.type,
          id: app.globalData.id
        })

      }
    })
  },
  /**
   * 自定义函数--判断能否上传
   */
  ifUponload: function () {
    //判断是否满足上传条件：id不为空，并且type为已超时,负责提示
    var type = app.globalData.type;
    var id = app.globalData.id;
    if ((id == "") || (id == null)) {
      wx.showModal({
        title: '提示',
        content: '不能上传，没有找到您的随访计划',
        cancelColor: 'cancelColor',
      })
      console.log('没有找到您的随访计划')
    } else if (type == "待随访") {
      wx.showModal({
        title: '提示',
        content: '不能上传，还未到您的随访日期',
        cancelColor: 'cancelColor',
      })
      console.log('还未到您的随访日期')
    } else { //满足则运行shexiangPhoto函数
      this.shexiangPhoto();
      console.log('满足上传图片条件')

    }

  },

  /**
   * 自定义函数--点击上传舌相照片
   */
  shexiangPhoto: function () {
    var that = this;
    //选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {


        var tempFilePaths = res.tempFilePaths
        wx.setStorageSync('tempFilePaths', res.tempFilePaths)
        that.setData({
          image: "",
          sourcess: res.tempFilePaths //这个用于展示添加的图片，并非服务器图片地址
        })


        var tempFilePaths = wx.getStorageSync('tempFilePaths')
        //图片加载编码
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            console.log('data:image/png;base64,' + res.data)
            that.setData({
              image: 'data:image/png;base64,' + res.data,
            })
            app.globalData.image = that.data.image;
            //console.log(app.globalData.image)
          }
        })
        //上传图片
        wx.request({
          url: 'http://47.108.215.55:10001/follow/submit',
          data: {
            "id": that.data.id,
            "imageUrlOne": that.data.image,
          },
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          success: function (res) {
            console.log(res);
            //提示提交成功
            wx.showModal({
              title: '提示',
              content: '上传舌相图片成功',
              cancelColor: 'cancelColor',
            })

          }
        })


      }

    })



  },


  /**
   * 自定义函数--查看长期医嘱
   */
  seeLongTerm: function () {
    /**在本地存储中取openId */
    var that = this
    wx.getStorage({
      key: 'globaldate',
      success: function (res) {
        that.setData({
          openId: res.data.openId,
        })
        // console.log('openId:',that.data.openId)
        wx.request({
          url: 'http://47.108.215.55:10001/medicalAdvice/getLongTerm',
          data: {
            "openId": that.data.openId
          },
          headers: {
            'Content-Type': 'application/json'
          },
          method: "GET",
          success: function (res) {
            console.log(res);
            //将获取的长期医嘱的数据放到本地存储里面，以防止每次进入就要调用
           var longTerm=res.data.data;
            wx.setStorageSync('longTerm', longTerm)
            console.log('长期医嘱', longTerm)
            that.setData({
              longTerm: longTerm
            })
           
          }
        })
      }
    })
  },


/**
   * 自定义函数--查看临时医嘱
   */
  seeTemp:function(){
 /**在本地存储中取openId */
 var that = this
 wx.getStorage({
   key: 'globaldate',
   success: function (res) {
     that.setData({
       openId: res.data.openId,
     })
     // console.log('openId:',that.data.openId)
     wx.request({
       url: 'http://47.108.215.55:10001/medicalAdvice/getTemp',
       data: {
         "openId": that.data.openId
       },
       headers: {
         'Content-Type': 'application/json'
       },
       method: "GET",
       success: function (res) {
         console.log(res);
         //将获取的长期医嘱的数据放到本地存储里面，以防止每次进入就要调用
        var temp=res.data.data;
         wx.setStorageSync('longTerm', temp)
         console.log('临时医嘱', temp)
         that.setData({
          temp: temp
         })
        
       }
     })
   }
 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);
   
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
 /**每次进入这个页面就调用医嘱数据 */
//  wx.getStorage({
//   longTerm: 'longTerm',
//  })
 
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