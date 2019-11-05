// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
       {
        id:1,
        src:'../../img/ico21.png',
        name:'续鹤贤《敦煌遗梦》',
        price:'￥7200.00',
        label:'拍卖中',
        time:'3天11时26分结拍',
        onpage:1,
        pop:false,
        label_show:1
       },
       {
        id: 2,
        src: '../../img/ico21.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '￥7200.00',
        label: '拍卖中',
        time: '3天11时26分结拍',
        onpage: 1,
        pop: false,
        label_show:2
      },
      {
        id: 3,
        src: '../../img/ico21.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '￥7200.00',
        label: '拍卖中',
        time: '3天11时26分结拍',
        onpage: 1,
        pop: false,
        label_show: 1
      },
      {
        id: 4,
        src: '../../img/ico21.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '￥7200.00',
        label: '拍卖中',
        time: '3天11时26分结拍',
        onpage:1,
        pop: false
      }
    ], 
  },

on_click(e){
    for (var n = 0; n < this.data.list.length; n++) {
      if (this.data.list[n].id == e.currentTarget.dataset.on && this.data.list[n].onpage == 1) {
        this.setData({
          ["list[" + n + "].pop"]: true,
        })
      }else{
        this.setData({
          ["list[" + n + "].onpage"]: 1,
        })
      }
    }
},
cancel(e){
  for (var n = 0; n < this.data.list.length; n++) {
    if (this.data.list[n].id == e.currentTarget.dataset.on) {
      this.setData({
        ["list[" + n + "].pop"]: false,
      })
    }
  }
},

sc_click(e){
  for(var i=0; i < this.data.list.length; i++){
    if (this.data.list[i].id == e.currentTarget.dataset.on){
     
      if (this.data.list[i].onpage == 1) {
        this.setData({
           ["list[" + i + "].onpage"]:0,
           ["list[" + i + "].pop"]:false,
        })
      }
    }
  }
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