import {
  getData,
  goTo
} from '../../utils/http.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backImg : '../../image/play-back.png',
    playList:[  //播放列表
      {
        p_name : '',  //歌名
        p_id : '',    //歌曲id
        al_name : '', //专辑
        ar_name : '', //歌手
        picUrl : ''   //封面
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.playMusic(options.id)
    this.setData({
      playList: app.globalData.playList
    })
  },

  //播放音乐
  playMusic (id) {
    getData('/song/url',{
      id
    }).then((res) => {
      let data = this.data.playList;
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      backgroundAudioManager.title = data.p_name;
      backgroundAudioManager.epname = data.al_name;
      backgroundAudioManager.singer = data.ar_name;
      backgroundAudioManager.coverImgUrl = data.picUrl;
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = res.data[0].url
      // BackgroundAudioManager.play()
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