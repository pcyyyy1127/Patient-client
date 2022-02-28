// pages/binding/binding.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: "",
    archivesId: "",
    name: "",
    birthDate: "",
    sex: "",
    archivesId: "",
    errorCode: "",
    errorMsg: ""

  },
  nameInput: function (e) {
    console.log(e)
    this.setData({
      "name": e.detail.value
    })
    //console.info(this.data.name)
  },
  idInput: function (e) {
    console.log(e)
    this.setData({
      "archivesId": e.detail.value
    })
    //console.info(this.data.archivesId)
  },
  /**
   * 绑定档案号
   */
  formSubmit: function (e) {
    //获取用户openid,未登录先去登录
    var that = this;
    var name = this.data.name;
    var archivesId = this.data.archivesId;
    //本地获取
    var openID = app.globalData.openId;
    if (openID == null) {
      wx.showModal({
        title: '未登录',
        content: '您还未登录，请登录后绑定',
        cancelColor: 'cancelColor',
      })
      console.log('绑定失败：用户未登录')
    } else {
      this.setData({
        openId: openID
      })
      console.log(this.data.openId)
    }
    //判断姓名和档案号是否为空
    if (!name || !archivesId) {
      wx.showModal({
        title: '错误',
        content: '姓名或档案号为空！',
        cancelColor: 'cancelColor',
      })
      console.log('姓名或档案号为空！')
    }
    wx.request({
      url: 'http://47.108.215.55:10001/user/bindArchives',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //data表示请求参数，即发给服务器的数据
      data: {
        openId: that.data.openId, // 微信的oppenId
        name: name, //// 该档案号 患者的名称
        archivesId: archivesId, // 档案号 
      },
      //请求成功，将返回参数放到data中
      success: function (res) { //success表示请求成功的回调函数，其中res表示服务器响应信息
        //看输出结果，了解res中的内容
        console.log(res.data);
        that.setData({
          message:res.data
        })
        //成功返回的参数赋值到全局变量
        app.globalData.birthDate = res.data.data.birthDate;
        app.globalData.name = res.data.data.name;
        app.globalData.sex = res.data.data.sex;
        app.globalData.archivesId = res.data.data.archivesId;
       //错误返回的信息赋值到全局变量
        app.globalData.errorMsg=res.data.data.errorMsg;
        //app.globalData=res.data.data;
        console.log(app.globalData);
        //判断是否成功，成功则提示并返回上一页
        if (res.data.message == 'success') {
          //成功
          //将获取的数据返回到上一个页面里面
          wx.showLoading({
            title: '提交中',
          })
          setTimeout(function () {
            wx.hideLoading({
              success(res) {
                wx.navigateBack({
                  delta: 1
                })
                console.log('提交成功')
              }
            })
          }, 2000)
        } else { //未成功，则提示错误信息

          //这里不能提示出报错信息，暂时获取不到，其他都可以
           var content=app.globalData.errorMsg;
          wx.showModal({
            title: '绑定失败',
            content:  content,
            showCancel: false,
            confirmText: "确定",
          })

          console.log(app.globalData.errorMsg)
        }
      },

    })
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

  }
})