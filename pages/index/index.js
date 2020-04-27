import {
  getData,
  showToast,
  goTo
} from '../../utils/http.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,    //tab默认下标
    list : [],      //首页数据
    userInfo : {
      backgroundUrl: '',    //用户背景图
      avatarUrl: '',        //头像
      nickname: '',         //昵称
      userId: '',           //uid
      level: ''             //等级
    },
    playlist: [
      {
        name : '',
        id : 0,
        coverImgUrl : 0,
        trackCount : 0    //歌曲数量
      }
    ],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userInfo();
    this.playlist();
  },
  /**
   * 获取用户信息
   * uid
   */
  userInfo () {
    let data = {
      uid: app.globalData.userInfo.uId
    };
    getData('/user/detail',data).then((res) => {
      if (res.code == 200) {
        this.setData({
          loading: false,
          userInfo : {
            backgroundUrl: res.profile.backgroundUrl,
            avatarUrl: res.profile.avatarUrl,
            nickname: res.profile.nickname,
            userId: res.profile.userId,
            level: res.level
          }
        });
      }

    })
  },
  
  /**
   * 获取用户歌单
   * uid
   */
  playlist () {
    let data = {
      uid: app.globalData.userInfo.uId
    };
    getData('/user/playlist',data).then((res) => {
      
      if (res.code == 200) {
        this.setData({
          playlist: [{
            name : res.playlist.name,
            id : res.playlist.id,
            coverImgUrl : res.playlist.coverImgUrl,
            trackCount : res.playlist.trackCount
          }]
        });
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      loading: false
    });
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

  }

})