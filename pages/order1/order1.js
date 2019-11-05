// pages/order1/order1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  addSite:true,
  box:0,
  pay_pop:false,
  content:false
  },
  addSite(){
   this.setData({
      addSite:false,
      content:true
   })
  },
box_click(){
 if(this.data.box==0){
   this.setData({
     box:1
   })
 }else{
   this.setData({
     box:0
   })
 }
},
pay(){
this.setData({
   pay_pop:true
})
},
cancel(){
this.setData({
  pay_pop:false
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