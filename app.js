// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: "",
    openId:"",
    age:'',
    archivesId:'',
    name:'',
    sex:'',
    errorMsg:'',
    test:"123",
    followTime:"",//随访时间
    sequence:"",//第几次随访
    type:"",//随访状态
    id:"",//随访计划的id

  }
})
