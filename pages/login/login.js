import {
  getData,
  showToast,
  goTo
} from '../../utils/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password : ''
  },
  phone (e) {
    this.setData({
      phone : e.detail
    })
  },
  password (e) {
    this.setData({
      password : e.detail
    })
  },
  login () {
    let data ={
      phone : this.data.phone,
      password : this.data.password
    }
    if (!data.phone) {
      showToast('请输入手机号');
      return false;
    }
    if (!data.password) {
      showToast('请输入密码');
      return false;
    }
    getData('/login/cellphone',data).then((res)=> {
      if (res.code != 200) {
        showToast("登录失败");
        return false;
      }
      goTo('../index/index')
    })
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

  }
})