
const app = getApp();

// 提示框
function showToast(msg) {
  wx.showToast({
      title: msg,
      icon : 'none',
      duration: 2000
    })
}

//跳转
function  goTo (url) {
  wx.navigateTo({
    url: url,
  })  
}


//请求Promise封装
function getData (url,data,method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.apiUrl + url, 
      data: data,
      method: method || 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data)
      },
      fail (res) {
        console.log(res)
        reject(res)
      },
      complete (res) {
      }
    })
  })
};

//暴露接口
module.exports = {
  getData : getData,
  showToast : showToast,
  goTo : goTo
}