var app = getApp()
Page({
    data: {
    disabled: true,
    account: "",
    password: ""
    },
    accountinput:function(e){
        this.setData({
            account: e.detail.value
        })
        this.checklogininfo()
        // if(this.data.password != "" && this.data.account != ""){
        //     this.setData({disabled: false});
        // }else{
        //     this.setData({disabled: true});
        // }
    },
    passwordinput:function(e){
        this.setData({
            password: e.detail.value
        })
        this.checklogininfo()
        // if(this.data.password != "" && this.data.account != ""){
        //     this.setData({disabled: false});
        // }else{
        //     this.setData({disabled: true});
        // }
    },
    checklogininfo:function(){
        if(this.data.password != "" && this.data.account != ""){
            this.setData({disabled: false});
        }else{
            this.setData({disabled: true});
        }
    },
    login:function(){
        wx.request({
          url: 'https://'+ app.globalData.base_url +'/auth/login',
          data: {
              username:this.data.account,
              password:this.data.password,
              audience:"Android",
              createdFrom:"217"
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            wx.showToast({
                title:"登录成功"
            })
          },
          fail: function() {
            // fail
            wx.showToast({
                title:"登录失败"
            })
          },
          complete: function() {
            // complete
            wx.showToast({
                title:"请求完成"
            })
          }
        })
    }

})