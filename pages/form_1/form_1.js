// pages/form_1/form_1.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
   
    result: {}, // 答案结果存入处
    questions: [
      // 生活饮食
      {
        title: "1.你的居住环境是否舒适？",
        value: '',
        id: 1,
        ans: 'lifeOne', // 接口所需字段名
        content: [{
            name: '一般',
            value: '一般'
          },
          {
            name: '差不多',
            value: '差不多'
          },
          {
            name: '不错',
            value: '不错'
          },
          {
            name: '很好',
            value: '很好'
          },
        ]
      },
      {
        title: "2. 你是否发生过敏反应？",
        value: '',
        id: 2,
        ans: 'lifeTwo',
        content: [{
            name: '021',
            value: '是'
          },
          {
            name: '022',
            value: '否'
          }
        ]
      },
      {
        title: "3. 你是否戒烟戒酒？",
        value: '',
        id: 3,
        ans: 'lifeThree',
        content: [{
            name: '031',
            value: '是'
          },
          {
            name: '032',
            value: '否'
          }
        ]
      },
      {
        title: "4. 你是否发生感染现象？",
        value: '',
        id: 4,
        ans: 'lifeFour',
        content: [{
            name: '041',
            value: '是'
          },
          {
            name: '042',
            value: '否'
          }
        ]
      },
      {
        title: "5.你的睡眠和饮食怎么样？",
        id: 5,
        value: '',
        ans: 'lifeFive',
        content: [{
            name: '051',
            value: '一般'
          },
          {
            name: '052',
            value: '差不多'
          },
          {
            name: '053',
            value: '不错'
          },
          {
            name: '054',
            value: '很好'
          },
        ]
      },
      // 情志管理
      {
        title: "6. 你是否感到焦虑或者压抑？",
        value: '',
        id: 6,
        ans: 'moodOne',
        content: [{
            name: '061',
            value: '基本不'
          },
          {
            name: '062',
            value: '偶尔'
          },
          {
            name: '063',
            value: '经常'
          },
          {
            name: '064',
            value: '总是'
          },
        ]
      },
      {
        title: "7.产生焦虑或者抑郁现状，你是否有通过以下方式缓解？",
        value: [], // 获取的值（多选）
        id: 7,
        ans: 'moodTwo',
        content: [{
            name: '071',
            value: '没有'
          },
          {
            name: '072',
            value: '情志相胜法'
          },
          {
            name: '073',
            value: '移情易性法'
          },
          {
            name: '074',
            value: '吐纳导引法'
          },
          {
            name: '075',
            value: '五音疗法'
          },
          {
            name: '076',
            value: '其他缓解方式'
          },
        ]
      },
      // 运动训练
      {
        title: "8. 你是否遵从医嘱按时做常规运动？",
        value: '',
        id: 8,
        ans: 'sportOne',
        content: [{
            name: '081',
            value: '基本不'
          },
          {
            name: '082',
            value: '偶尔'
          },
          {
            name: '083',
            value: '经常'
          },
          {
            name: '084',
            value: '总是'
          },
        ]
      },
      {
        title: "9.你做了以下哪些运动？",
        value: [], // 获取的值（多选）
        ans: 'sportTwo',
        id: 9,
        content: [{
            name: '091',
            value: '没有'
          },
          {
            name: '092',
            value: '杨氏太极拳'
          },
          {
            name: '093',
            value: '吴氏太极拳'
          },
          {
            name: '094',
            value: '八段锦'
          },
          {
            name: '095',
            value: '五禽戏'
          },
          {
            name: '086',
            value: '其他有氧运动'
          },
        ]
      },
      {
        title: "10.你总计运动时长大约为？",
        value: '',
        id: 10,
        ans: 'sportThree',
        content: [{
            name: '101',
            value: '0~2h'
          },
          {
            name: '102',
            value: '2~4h'
          },
          {
            name: '103',
            value: '4~6h'
          },
          {
            name: '104',
            value: '6~8h'
          },
        ]
      },
      {
        title: "11. 你做运动时是否感到吃力和困难？",
        value: '',
        id: 11,
        ans: 'sportFour',
        content: [{
            name: '111',
            value: '基本不'
          },
          {
            name: '112',
            value: '偶尔'
          },
          {
            name: '113',
            value: '经常'
          },
          {
            name: '114',
            value: '总是'
          },
        ]
      },
      {
        title: "12.你认为你做的运动训练项目是否需要调整？",
        value: '',
        id: 12,
        ans: 'sportFive',
        content: [{
            name: '121',
            value: '是'
          },
          {
            name: '122',
            value: '否'
          }
        ]
      },
      //呼吸训练
      {
        title: "13. 你是否遵从医嘱按时做常规运动？",
        value: '',
        id: 13,
        ans: 'breathOne',
        content: [{
            name: '131',
            value: '基本不'
          },
          {
            name: '132',
            value: '偶尔'
          },
          {
            name: '133',
            value: '经常'
          },
          {
            name: '134',
            value: '总是'
          },
        ]
      },
      {
        title: "14.你做了以下哪种呼吸训练？ ",
        value: [], // 获取的值（多选）
        ans: 'breathTwo',
        id: 14,
        content: [{
            name: '141',
            value: '没有'
          },
          {
            name: '142',
            value: '深呼吸'
          },
          {
            name: '143',
            value: '腹式呼吸'
          },
          {
            name: '144',
            value: '缩唇呼吸'
          },
          {
            name: '145',
            value: '胸廓放松'
          },
          {
            name: '146',
            value: '吹蜡烛'
          },
          {
            name: '147',
            value: '吹气球'
          },
        ]
      },
      {
        title: "15. 进行呼吸训练时是否感到吃力和困难？",
        value: '',
        id: 15,
        ans: 'breathThree',
        content: [{
            name: '151',
            value: '基本不'
          },
          {
            name: '152',
            value: '偶尔'
          },
          {
            name: '153',
            value: '经常'
          },
          {
            name: '154',
            value: '总是'
          },
        ]
      },
      {
        title: "16.你总计呼吸训练时长大约为？",
        value: '',
        id: 16,
        ans: 'breathFour',
        content: [{
            name: '161',
            value: '0~2h'
          },
          {
            name: '162',
            value: '2~4h'
          },
          {
            name: '163',
            value: '4~6h'
          },
          {
            name: '164',
            value: '6~8h'
          },
        ]
      },
      {
        title: "17.你认为你的呼吸训练项目是否需要调整？",
        value: '',
        id: 17,
        ans: 'breathFive',
        content: [{
            name: '171',
            value: '是'
          },
          {
            name: '172',
            value: '否'
          }
        ]
      },
      // 医疗护理
      {
        title: "18.你是否遵从医嘱按时做了护理活动？ ",
        value: '',
        id: 18,
        ans: 'nursingOne',
        content: [{
            name: '181',
            value: '基本不'
          },
          {
            name: '182',
            value: '偶尔'
          },
          {
            name: '183',
            value: '经常'
          },
          {
            name: '184',
            value: '总是'
          },
        ]
      },
      {
        title: "19.你做了以下护理活动？  ",
        value: [], // 获取的值（多选）
        ans: 'nursingTwo',
        content: [{
            name: '191',
            value: '没有'
          },
          {
            name: '192',
            value: '中医护理'
          },
          {
            name: '193',
            value: '家庭氧疗'
          },
          {
            name: '194',
            value: '排痰训练'
          },
          {
            name: '195',
            value: '雾化吸入'
          },
          {
            name: '196',
            value: '自我管理'
          }
        ]
      },
      {
        title: "20.你认为你做的护理项目是否需要调整？",
        value: '',
        ans: 'nursingThree',
        content: [{
            name: '201',
            value: '是'
          },
          {
            name: '202',
            value: '否'
          }
        ]
      },
      // 用药服药
      {
        title: "21.你是否按时按量服药？",
        value: '',
        ans: 'medicineOne',
        content: [{
            name: '211',
            value: '基本不'
          },
          {
            name: '212',
            value: '偶尔'
          },
          {
            name: '213',
            value: '经常'
          },
          {
            name: '214',
            value: '总是'
          },
        ]
      },
      {
        title: "22.你是否觉得要坚持治疗计划有困难？",
        value: '',
        ans: 'medicineTwo',
        content: [{
            name: '221',
            value: '是'
          },
          {
            name: '222',
            value: '否'
          }
        ]
      },
      {
        title: "23.你是否感受到呼吸困难？",
        value: '',
        ans: 'medicineThree',
        content: [{
            name: '231',
            value: '基本不'
          },
          {
            name: '232',
            value: '偶尔'
          },
          {
            name: '233',
            value: '经常'
          },
          {
            name: '234',
            value: '总是'
          },
        ]
      },
      {
        title: "24.你认为你做的治疗项目是否需要调整？",
        value: '',
        ans: 'medicineFour',
        content: [{
            name: '241',
            value: '是'
          },
          {
            name: '242',
            value: '否'
          }
        ]
      },
    ],
    otherChat: "",
    openId: ""
  },
  /**
   * 25题文本框输入内容
   */
  textInput: function (e) {
    let value = e.detail.value;
    this.setData({
      otherChat: value
    })
    console.log("25题输入内容是 " + value)
  },
  dataChange: function (e) {
    // console.log(e)
    let ans = e.currentTarget.dataset.ans;
    let value = e.detail.value;
    let result = this.data.result;
    result[ans] = value;
    this.setData({
      result: result,
    })
    console.log(result)
    //console.log(this.data.otherChat)
  },
  formSubmit: function () {
    //获取用户openid,未登录先去登录
    var that=this;
    var app = getApp();
    var openID = app.globalData.openId;
    if(openID==null){
      wx.showModal({
        title:'未登录',
        content:'您还未登录，请登录后提交',
        cancelColor: 'cancelColor',
      })
      console.log('提交问卷错误：用户未登录')
    }
    else{
      this.setData({
        openId:openID
      })
      //console.log(this.data.openId)
    }
    var result = this.data.result
    //判断是否全部选项都已经选择了,未选择则提示
    if (result["lifeOne"]  && result["lifeTwo"]&&result["lifeThree"] && result["lifeFour"]&& result["lifeFive"] && result["moodOne"]&& result["moodTwo"]  && result["sportOne"] && result["sportTwo"]  &&  result["sportThree"] && result["sportFour"]  && result["sportFive"] && result["breathOne"] &&  result["breathTwo"] && result["breathThree"]  && result["breathFour"] && result["breathFive"] && result["nursingOne"]  && result["nursingTwo"] && result["nursingThree"]  && result["medicineOne"]&& result["medicineTwo"] && result["medicineThree"]  && result["medicineFour"]) {
      //全选，对多选题答案转成字符串
      var checkbox1=result["moodTwo"]
      var checkbox2=result["sportTwo"]
      var checkbox3=result["breathTwo"]
      var checkbox4=result["nursingTwo"]
      //将数组转成字符串
      var checkbox7 =checkbox1.join(',')
      var checkbox9 =checkbox2.join(',')
      var checkbox14 =checkbox3.join(',')
      var checkbox19 =checkbox4.join(',')
      //将字符串存入result数组
      result["moodTwo"]=checkbox7
      result["sportTwo"]=checkbox9
      result["breathTwo"]=checkbox14
      result["nursingTwo"]=checkbox19
     
      //将答案提交，调用submit函数
      wx.showLoading({
        title: '提交中',
      })
      setTimeout(function () {
        wx.hideLoading({
          success(res) {
            that.submit();
            wx.navigateBack({
              delta: 1
            })
            console.log(res)
          }
        })
      }, 2000)
      console.log('全选了')
    }else{
      //未全选，提示无法提交
      wx.showModal({
        title: '无法提交',
        content: '您还有部分题目未完成，请检查后重新提交',
        showCancel: false,
        confirmText: "好的",
      })
      console.log('有未填')
    }
   
  },
  submit: function (e) {
    //console.log(e.detail.value); // 看输出的结果了解表单提交是如何收集数据的
    var answer = this.data.result;
    //answer = answer.join(',');
    var that = this
    wx.request({
      method: 'POST', //表示请求方式
      url: 'http://47.108.215.55:10001/selfManage/submit', //url表示请求的服务器接口地址
      headers: {
        'Content-Type': 'application/json'
      },
      //data表示请求参数，即发给服务器的数据
      data: {
        openId: that.data.openId,
        selfManageSurvey: answer,
        otherChat: that.data.otherChat, //第25题单独传，作为医患沟通，患者发送的内容，不包含在 selfManageSurvey这个JSON对象中
      },
      success: function (res) { //success表示请求成功的回调函数，其中res表示服务器响应信息
        console.log(res); //看输出结果，了解res中的内容
      }
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