// pages/home/home.js
//获取应用实例
const app = getApp()
let store = app.store
let url = "http://47.108.215.55:10001"
Page({
  data: {
    userInfo: {},
    url: '',
    // hasUserInfo: false,
    //userInfo:'',
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // //isLogin:false,
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad() {
    let user = wx.getStorageSync('user')
    //console.log('进入小程序就会取缓存',user)
    this.setData({
      userInfo: user
    })
  },
  /**
   * 退出登录——弹窗确定退出登录
   */
  loginOut() {
    wx.showModal({
      title: '退出登录',
      content: '退出后会保留您的账号信息',
      confirmColor: '#4c8651',
      cancelColor: 'cancelColor',
      //'cancelColor'
      success: res => {
        if (res.confirm) {
          console.log('用户确定退出登录'),
            this.setData({
              userInfo: ''
            })
          wx.setStorageSync('user', null)
        } else if (res.cancel) {
          console.log('用户取消退出登录')
        }
      }
    })

  },

  /**
   * 授权登录
   */
  doLogin() {
    //console.log('外部的this',this)
    //var that=this;
    var app = getApp();
    wx.getUserProfile({
      title:'中医慢性肺病自我管理小程序',
      desc: '用户需授权才能继续使用', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        app.globalData.userInfo = res.userInfo
        let user = res.userInfo
        console.log(app.globalData);
        //用户信息存在本地缓存中
        wx.setStorageSync('user', user)
        console.log('用户信息', user)
        this.setData({
          userInfo: user
        })
        wx.login({
          success: function (res) {
            console.log(res)
            //获取登录临时凭证
            var code = res.code;
            console.log(code);
            //调用后端接口 获取微信的session_key 和 openID
            wx.request({
              url: url + '/user/wxLogin',
              data: {
                "code": code,
                "nickName": getApp().globalData.userInfo.nickName,
                "avatar": getApp().globalData.userInfo.avatarUrl,
                "birthDate": getApp().globalData.userInfo.birthDate,
                "name": getApp().globalData.userInfo.name,
                "sex": getApp().globalData.userInfo.sex,
                "archivesId": getApp().globalData.userInfo.archivesId,
              },
              headers: {
                'Content-Type': 'application/json'
              },
              method: "POST",
              success: function (result) {
                console.log(result);
                /**
                 * 将获取的用户个人信息保存到本地存储中
                 */
                var globaldate = result.data.data;
                wx.setStorageSync('globaldate', globaldate);
                /**测试存储的数据 */
                wx.getStorage({
                  key: 'globaldate',
                  success: function (res) {
                    var test = res.data;
                    console.log(test);
                  }
                })
                if (result.data.message == "success") {
                  console.log('登录成功');

                } else {
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '登录失败',
                  })
                }
              }
            })
          }
        })
      },
      fail(res) {
        console.log('授权失败', res)
      }
    })
  },

})