// pages/site2/site2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['江西省', '南昌市', '青山湖区'],
    on:0,
    ig:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  default_click() {
    if (this.data.on == 0) {
      this.setData({
        on: 1
      })
    } else {
      this.setData({
        on: 0
      })
    }
  },
  
  focus() {
    this.setData({
      ig: 1
    })
  },

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