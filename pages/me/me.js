// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**用户图片 */
    sexIamge:'/images/boy.png',
     /*通过绑定获取*/
    name: "",
    birthDate: "",
    sex: "",
    archivesId: "",
    shortTerm: '每日缩唇训练，戒烟,避免接触过敏物',/**长期目标/
    /**通过hidden是否掩藏弹出框的属性，来指定那个弹出框 */
    hiddenmodalput: true,
    /**select组件数据 */
    selectArray: [{
      "id": "01",
      "text": "IPF"
    }, {
      "id": "02",
      "text": "ILD"
    }, {
      "id": "03",
      "text": "DIP"
    }, {
      "id": "04",
      "text": "NSIP"
    }]

  },
  /**
   * 修改短期目标函数
   */
  /**点击按钮弹出指定的hiddenmodalput弹出框*/
  modalInput: function (e) {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  /*输入框内容改变*/
  messageChange: function (e) {
    //let value = e.detail.value;
    //console.log('短期目标：', value);
    this.setData({
      shortTerm: e.detail.value
    });
  },
  //取消按钮 
  cancelM: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认提交
  confirM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
    console.log('短期目标：', this.data.shortTerm)
  },

  /**
   * 下拉刷新处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad(); // 这里写自己要调用的查询方法

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
    var that=this
   wx.getStorage({
     key: 'globaldate',
     success:function(res){
      that.setData({
        name:res.data.name,
        sex:res.data.sex,
        birthDate: res.data.birthDate,
        archivesId: res.data.archivesId,
       })
       console.log('姓名:',that.data.name)
      if(res.data.sex=="女"){
        that.setData({
          sexIamge:'/images/girl.png'
         })
        console.log('性别:女')
       }
      
      
       
     }
   })
   

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