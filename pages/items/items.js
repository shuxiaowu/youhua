// pages/items/items.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/img/banner1.png',
      '/img/banner1.png',
      '/img/banner1.png',
    ],
    record:true,
    on:0,
    on1:0,
    product: [
      {
        id: 0,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        ig: 1,
        label:'当前价',
        url: '',
      },
      {
        id: 1,
        src: '/img/product.png',
        name: '续鹤贤《敦煌遗梦》',
        price: '7200.00',
        time: '1天12时30分',
        ig: 0,
        label:'起拍价',
        url: '',
      }
    ],
    record_list:[
      {
        phone:'18100000000',
        price:'7000.00',
        label:'【起拍】',
        label1:'我',
        time:'2019.09.19 14:25:36',
      },
      {
        phone: '18100000000',
        price: '7000.00',
        time: '2019.09.19 14:25:36',
      },
      {
        phone: '18100000000',
        price: '7000.00',
        label: '【起拍】',
        label1: '我',
        time: '2019.09.19 14:25:36',
      },
    ],
    shade:false,
    share:false,
    poster:false,
    pop:false,
    num:400,
    pop1:false,
    shade1:false,
    pop2:false,
    pay_pop:false,
    pay_pop1:false,
    pop3:false,
    getInput: null,
    explain:false,
    con5:true,
    btn_box:true,
    finish:false,
    login:false,
    record0:false,
    record_title:true,
  },
  login_cancel(){
     this.setData({
       login:false
     })
  },
  go_login(){
    wx.reLaunch({
      url: '../about/about'
    })
  },
  explain(){
     this.setData({
       explain:true,
     })
  },
  know(){
    this.setData({
      explain:false,
    })
  },
  getInput: function (e) {
    this.data.getInput = e.detail.value;
  },
  pop3_click(){
    this.setData({
      pop3:true,
      shade:true,
    })
  },
  pay_cancel(){
    this.setData({
      pay_pop: false,
      pop1: true
    })
  },
  pay1_cancel() {
    this.setData({
      pay_pop1:false,
      pop3: true,
      getInput:0,
    });
    
  },
  pay_click(){
    this.setData({
      pay_pop:true,
      pop1:false
    })
  },
  pay1_click(){
    if(this.data.getInput>1000){
      this.setData({
        pay_pop1: true,
        pop3: false
      })
    }else{
      this.setData({
        pop4:true,
        shade1:true,
      })
    }
  },
  pop1_click(){
    this.setData({
       shade:true,
       pop1:true,
    })
  },
  pop1_cancel(){
    this.setData({
        shade:false,
        pop1:false,
    })
  },
  add(){
    this.setData({
      num:this.data.num+100,
    })
  },
  sub(){
    if(this.data.num>200){
      this.setData({
        num: this.data.num - 100,
      })
    }else{
      this.setData({
        shade1:true,
        pop2:true,
      })
    }
  },
  pop2_cancel(){
     this.setData({
       shade1:false,
       pop2:false,
     })
  },
  pop21_cancel() {
    this.setData({
      shade1: false,
      pop4: false,
    })
  },
  pop3_cancel() {
    this.setData({
      shade: false,
      pop3: false,
    })
  },
  pop_cancel(){
     this.setData({
       shade:false,
       pop:false,
     })
  },
  hb_click(){
    this.setData({
        poster:true
    })
  },
  hb_cancel(){
    this.setData({
      poster:false
    })
  },
  share(){
    this.setData({
       share:true,
       shade:true
    })
  },
  cancel(){
    this.setData({
      share:false,
      shade:false
    })
  },
  show_click(){
    if(this.data.on1==0){
      this.setData({
        on1:1,
        record: !this.data.record
      })
    }else{
      this.setData({
        on1:0,
        record: !this.data.record
      })
    }
     
  },
switcher(){
  if(this.data.on==1){
    this.setData({
       on:0
    })
  }else{
    this.setData({
      on:1
    })
  }
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