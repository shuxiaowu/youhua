// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrls:[
     '/img/banner.png',
     '/img/banner.png',
     '/img/banner.png'
   ],
   product:[
     {
       id:0,
       src:'/img/product.png',
       name:'续鹤贤《敦煌遗梦》',
       price:'7200.00',
       time:'1天12时30分',
       label:'拍卖中',
       ig:1,
       url:'../items/items'
     },
     {
       id:1,
       src: '/img/product.png',
       name: '续鹤贤《敦煌遗梦》',
       price: '7200.00',
       time: '1天12时30分',
       label1: '预展中',
       ig:0,
       url:'../items/items',
     }
   ],
   list:[
     {
       imgSrc:'/img/product1.png',
       label:'新崛起画师2019新作拍卖会',
       label1:'拍卖中',
       label2:'8%',
       label3:'8%',
       time:'距结拍3天16时25分36秒',
       price:'1000.00',
       url:'../activity/activity'
     },
     {
       imgSrc: '/img/product1.png',
       label: '新崛起画师2019新作拍卖会',
       label1: '拍卖中',
       label2: '8%',
       label3: '8%',
       time: '距结拍3天16时25分36秒',
       url:'../activity/activity'
     }
   ],
  btn:true,
  page:false,
  proruct1:false,
  history:false,
  page0:false,
  value:'',
  page:true,
  product1:true,
  },
  cancel(){
    this.setData({
      btn:true,
      value:'',
      history:false,
      page:true,
      product1:true,
    })
  },
  inp(){
    this.setData({
      btn:false,
    })
  },
  inp1(){
    this.setData({
      history: true,
      page:false,
      product1:false
    })
  },
  cancel1(){
    this.setData({
      history:false
    })
  },
  search(){
    this.setData({
      page0:true,/*未搜索到*/
      history:false,
      // product1:true,/*有搜索到*/
    })
  },
  sc_click(e){
    for(var i = 0; i < this.data.product.length; i++){
      if (this.data.product[i].id == e.currentTarget.dataset.on){
        if (this.data.product[i].ig==0){
          this.setData({
            ["product[" + i + "].ig"]: 1,
          })
        }else{
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