import {
  getData,
  goTo,
  showToast
} from '../../utils/http.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    creator : {   //歌单详情
      backgroundUrl: '',
      nickname : '',
      name : ''
    },
    list: [
      {
        name : '',
        id : 0,
        alia_name : '',  //版本
        ar_name : '',   //歌手
        al_name : '',   //专辑
        picUrl : ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.id)
  },
  getData (id) {
    getData('/playlist/detail',{
      id
    }).then((res) => {
      let arr = [];
      res.playlist.tracks.map((val,index) => {
        //遍历需要用到的歌曲详情，重新追加到list数组
        let obj ={   //歌曲详情
          p_name : val.name,
          p_id : val.id,
          // alia_name : val.alia[0].name || '',  //版本
          ar_name : val.ar[0].name,   //歌手
          al_name : val.al.name || '',   //专辑
          picUrl : val.al.picUrl,
        }
        arr.push(obj);
      })

      this.setData({
        creator : {   //歌单详情
          backgroundUrl: res.playlist.creator.backgroundUrl,
          nickname : res.playlist.creator.nickname,
          name : res.playlist.creatorname
        },
        list: arr
      })
    })  
  },

  info (e) {
    let id = e.currentTarget.dataset.id,
        idx = e.currentTarget.dataset.idx;
    let obj = {
      playList : this.data.list[idx]
    }
    app.updateAppData(obj)
    goTo('../play/play?id=' + id)
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