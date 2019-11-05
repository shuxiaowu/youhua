// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/img/banner3.png',
      '/img/banner3.png',
      '/img/banner3.png'
    ],
    product: [
      {
        id: 0,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        label: '拍卖中',
        ig: 1,
        url: '../items/items'
      },
      {
        id: 1,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        label1: '预展中',
        ig: 0,
        url: '../items/items',
      },
       {
        id: 2,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        label: '拍卖中',
        ig: 1,
        url: '../items/items'
      },
      {
        id: 3,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        label1: '预展中',
        ig: 0,
        url: '../items/items',
      }
    ],
  },
  sc_click(e) {
    for (var i = 0; i < this.data.product.length; i++) {
      if (this.data.product[i].id == e.currentTarget.dataset.on) {
        if (this.data.product[i].ig == 0) {
          this.setData({
            ["product[" + i + "].ig"]: 1,
          })
        } else {
          this.setData({
            ["product[" + i + "].ig"]: 0,
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