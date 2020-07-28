<template>
  <div class="hello">
    <div class="empty"></div>
    <div class="head">
      <img src="../../static/image/list.png"
           alt="">
    </div>
    <div class="loginInput bot">
      <label><img src="../assets/zh.png" /></label><input class='usrname'
             type="text"
             v-model="userName"
             placeholder="请输入账号" /></div>
    <div class="loginInput bat">
      <label>
        <img src="../assets/mm.png"
             class="twoimg" />
      </label>
      <input :type="psd"
             v-model="passWord"
             class="password"
             placeholder="请输入密码" />
    </div>
    <div class="forget">
      <div>
        <input type="checkbox"
               v-model="sel">
        <span>记住密码</span>
      </div>
      <div @click="bbbb">忘记密码</div>
    </div>
    <div class="loginInput button">
      <button @click="login">立即登录</button>
    </div>

  </div>
</template>

<script>
import qs from 'qs'
import Vuex from 'vuex'
import { Toast } from 'mint-ui';
export default {
  name: 'login',
  data () {
    return {
      sel: '',
      psd: 'password',
      userName: '',
      passWord: '',
      user: [0, 0],
      eventuallylng: '',
      eventuallylat: '',
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem("weChatUsePassword")) {
      this.sel = true;
      this.userName = localStorage.getItem("weChatUsePhone")
      this.passWord = localStorage.getItem("weChatUsePassword")

    } else {

    }
    let that=this
    that.$axios
    .post(
      that.httpUrl + "devices/accurate",
      that.$qs.stringify({
        page:1,
        pageSize:10
      })
    )
    .then(res => {
      console.log(res);
      that.$store.commit('updateallList',res.data.data.total_count)
    })    
  },
  methods: {
    bbbb () {
      this.$router.push({
        path: '/equipment'      })
    },
    login () {
      if (this.userName == '') {
        Toast('您输入的账号为空');
        return;
      }
      if (this.passWord == '') {
        Toast('您输入的密码为空');
        return;
      }
      let data = {
        weChatUsePhone: this.userName,
        weChatUsePassword: this.passWord
      }
      let that = this;
      console.log(data);
      console.log(that.httpUrl);
      that.$axios
        .post(
          that.httpUrl + "wechatUser/login",
          this.$qs.stringify(data)
        )
        .then(res => {
          console.log(res);
          if (res.data.resCode == 0) {
            that.$router.push('/equipitem');

            sessionStorage.setItem("weChatUsePhone", that.userName);
            if (that.sel) {
              localStorage.setItem("weChatUsePhone", that.userName);
              localStorage.setItem("weChatUsePassword", that.passWord);
            }
            that.$axios
              .get(
                that.httpUrl + 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
              )
              .then(function (message) {
                console.log(message.data)
                wx.config({
                  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId: message.data.appid, // 必填，公众号的唯一标识
                  timestamp: message.data.timestamp, // 必填，生成签名的时间戳
                  nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
                  signature: message.data.signature, // 必填，签名，见附录1
                  jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.ready(function () {
                  wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                      that.eventuallylat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                      that.eventuallylng = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                      var speed = res.speed; // 速度，以米/每秒计
                      var accuracy = res.accuracy; // 位置精度
                      sessionStorage.setItem('eventuallylat', that.eventuallylat)
                      sessionStorage.setItem('eventuallylng', that.eventuallylng)
                      var urls = "http://api.map.baidu.com/geoconv/v1/?coords=" + that.eventuallylng + "," + that.eventuallylat + "&from=1&to=5&ak=PWttlCcjWHRXa9YrV7LwVIzlT7qQRlNS";
                      $.ajax({
                        url: urls,
                        type: 'GET',
                        contentType: "application/json",
                        dataType: 'jsonp',//这里要用jsonp的方式不然会报错
                        success: function (data) {
                          let a = data.result[0].x;//经度
                          let b = data.result[0].y;//纬度
                          localStorage.setItem('pointlngright', a)
                          localStorage.setItem('pointlatright', b)
                          // let that=this;
                          //    11111
                        }
                      });

                    }
                  });
                })

              })
          } else {
            Toast('请输入正确的账号密码');
          }
        })

    }

    // }
  }

}
	// $("body").delegate(".button",'click',function(){
    //                 // if($(".usrname").val()==''){
	// 				// 	// this.$toast('您输入的账号为空');
	// 				// 	return;
	// 				// }
	// 				// if($(".password").val()==''){
	// 				// 	// this.$toast('您输入的密码为空');
	// 				// 	return;
	// 				  // }
	// 				  console.log($(".usrname").val())
	// 				  console.log($(".password").val())
	// 				var  data={
	// 					weChatUsePhone:$(".usrname").val(),
	// 					weChatUsePassword:$(".password").val()
	// 				}
	// 				console.log(data)
	// 				$.ajax({
	// 	            url : "http://192.168.2.123:8796/wechatUser/login",
	// 	            data: data,
	// 	            type:'post',
	// 	            //dataType:'json',
	// 	            success:function(d) {
	// 	                console.log(d);
	// 					sessionStorage.setItem("weChatUsePhone",$(".usrname").val());
	// 					this.$router.push('/equipitem');
	// 	            }
	// 	        });

    // });

</script>

<style scoped>
.login {
  background-image: url(../../static/image/bgl.png);
  height: 100%;
  width: 100%;
  background-size: cover;
  cursor: pointer;
}
.loginInput {
  width: 85%;
  line-height: 75px;
  height: 75px;
  display: flex;
  margin-top: 40px;
  margin: 0 7.5%;
}
.loginInput:nth-of-type(1) {
  margin-top: 75px;
}
.loginInput:nth-of-type(2) {
  position: relative;
}
.loginInput:nth-of-type(3) {
  margin-top: 80px;
}
.loginInput > label {
  height: 84px;
  width: 15%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
}
.loginInput > label > img {
  height: 34px;
  margin: 26px 0;
  width: 34px;
}
.twoimg {
  height: 36px !important;
  width: 30px !important;
}
.loginInput > input {
  width: 100%;
  height: 74px;
  border: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
button {
  width: 100%;
  height: 70px;
  border: none;
  color: #ffffff;
  border-radius: 36px;
  font-size: 32px;
  margin: 0 auto;
  background: #ff5907;
  background: -webkit-linear-gradient(left, #ff5907, #ff2a19);
  background: -o-linear-gradient(right, #ff5907, #ff2a19);
  background: -moz-linear-gradient(right, #ff5907, #ff2a19);
  background: linear-gradient(to right, #ff5907, #ff2a19);
}
button:active {
  background-color: #67c23a;
}
*/ h2 {
  font-size: 44px;
  color: #ffffff;
  text-align: center;
  line-height: 96px;
}
h2:nth-of-type(1) {
  padding-top: 200px;
}
*/ .bkj {
  position: absolute;
  top: 15px;
  right: 15%;
  width: 20px;
  height: 12px;
}
.hello {
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 100%;
}
.empty {
  height: 152px;
  width: 100%;
}
.head {
  width: 273px;
  height: 205px;
  margin: 0 auto;
}
.head img {
  width: 100%;
  height: 100%;
}
.bot {
  margin-bottom: 30px;
  border-bottom: 1px solid #e3e3e3;
}
.forget {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 1px 7.5%;
  margin-bottom: 60px;
  border-top: 1px solid #e3e3e3;
  padding-top: 20px;
  height: 20px;
}
.forget input {
  vertical-align: middle;
}
.forget div {
  font-family: 'PingFang-SC-Regular';
  font-size: 26px;
  color: #767676;
}
.mint-toast {
  width: 240px !important;
  height: 66px !important;
}
.mint-toast-text {
  font-size: 24px !important;
}
</style>