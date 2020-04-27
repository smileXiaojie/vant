const apiUrl = "http://192.168.61.247:3000";
import './miniprogram_npm/weapp-cookie/index'

App({
    onLaunch: function() {
        try {
            this.globalData.userInfo = wx.getStorageSync('userInfo');
        } catch (e) {

        }

    },
  // 关闭小程序 清除本次定位 ，删除暂时不授权定位标记
  onHide: function() {
      
  },
  // 全局变量
  globalData: {
      version: "0.0.1", //版本号
      userInfo: null, //用户信息
      apiUrl: apiUrl,
      keyword: '', //搜索商品关键字
      sys_info: null, //用户系统信息
      latitude: null, //经纬度
      longitude: null, //经纬度
  },
  // 更新globalData数据
  updateAppData(obj) {
      let keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          this.globalData[key] = obj[key]
      }
  }
})  