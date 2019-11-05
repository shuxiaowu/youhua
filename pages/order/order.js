// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   onpage:0,
   order0:false,
   order_list:[
     {
       id:1,
       title1:'竞拍成功',
       title2:'待付款',
       src:'../../img/ico17.png',
       label:'古代石器 高古石雕 隋唐 老古董古玩高古 石头 收藏 宋元 石兽',
       price:'7200.00',
       num:'1',
       total:'7200.00',
       ico:'',
       contact:'联系商家',
       pay:'去支付',
       lose:0,
       moreUrl:'../order1/order1',
       
     },
     { 
       id:0,
       title1: '竞拍失败',
       title2: '未付款',
       src: '../../img/ico17.png',
       label: '古代石器 高古石雕 隋唐 老古董古玩高古 石头 收藏 宋元 石兽',
       price: '7200.00',
       num: '1',
       total: '7200.00',
       contact: '联系商家',
       del: '删除订单',
       ico: '../../img/ico16.png',
       lose:1,
       moreUrl: '../order5/order5'
     },
     {
       id:2,
       title1: '竞拍成功',
       title2: '待发货',
       src: '../../img/ico17.png',
       label: '古代石器 高古石雕 隋唐 老古董古玩高古 石头 收藏 宋元 石兽',
       price: '7200.00',
       num: '1',
       total: '7200.00',
       contact: '联系商家',
       look: '查看物流',
       ico: '',
       lose: 0,
       moreUrl: '../order2/order2',
       lookUrl:'../logistics/logistics'
     },
     {
       id:3,
       title1: '竞拍成功',
       title2: '待收货',
       src: '../../img/ico17.png',
       label: '古代石器 高古石雕 隋唐 老古董古玩高古 石头 收藏 宋元 石兽',
       price: '7200.00',
       num: '1',
       total: '7200.00',
       contact: '联系商家',
       look: '查看物流',
       affirm: '确认收货',
       ico: '',
       lose: 0,
       moreUrl: '../order3/order3',
       lookUrl:'../logistics1/logistics1'
     },
     {
       id:4,
       title1: '竞拍成功',
       title2: '已完成',
       src: '../../img/ico17.png',
       label: '古代石器 高古石雕 隋唐 老古董古玩高古 石头 收藏 宋元 石兽',
       price: '7200.00',
       num: '1',
       total: '7200.00',
       contact: '联系商家',
       del: '删除订单',
       ico: '',
       lose: 0,
       moreUrl: '../order4/order4',
     }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  nav_click(e){
    this.setData({
      onpage: e.currentTarget.dataset.on,
    })
  },
  
  onLoad: function (options) {
    this.setData({
      onpage: options.onpage
    })
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