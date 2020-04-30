const apiUrl = "http://192.168.61.247:3000";
import './miniprogram_npm/weapp-cookie/index'

App({
    onLaunch: function() {
        try {
            this.globalData.uid = wx.getStorageSync('uid');
        } catch (e) {

        }

    },
  // 关闭小程序 清除本次定位 ，删除暂时不授权定位标记
  onHide: function() {
      
  },
  // 全局变量
  globalData: {
      version: "0.0.1", //版本号
      uid: 297657459, //用户id 默认是我自己用户id
      apiUrl:  apiUrl, //api接口地址
      playList: [   //播放列表
        {
            p_name : '',     //歌曲名
            p_id : '',       //歌曲id
            ar_name : '',    //歌手
            al_name :  '',   //专辑
            picUrl : '',     //专辑图片
        }
      ],
      sys_info: null,  //用户系统信息
      latitude: null,  //经纬度
      longitude: null //经纬度
  },
  // 更新globalData数据
  updateAppData(obj) {
      let keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          this.globalData[key] = obj[key]
      }
  },
  
})  