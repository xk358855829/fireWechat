<template>
  <div class="su">
    <ul class="top">
      <li>
        <div @click="tables"><img src="../../static/image/libi.png"
               alt=""></div>
        <!-- v-if='show' -->
        <div @click="routerback"></div>
        <div @click="nextClick('equipitem')"><img src="../../static/image/homs.png"
               alt=""></div>

      </li>
    </ul>
    <div class="flexBoxBG cube"
         v-show="bg"
         v-bind:class="{csip:datemg,uncsip:undatemg}"
         @click.stop="hideClick"></div>
    <div class="trans"
         v-bind:class="{csip:datemg,uncsip:undatemg}"></div>
    <div class="pos"
         v-bind:class="{csip:datemg,uncsip:undatemg}">
      <div @click.stop="nextClick('hourstate')">
        <span class="three"><img src="../../static/image/xiang.png"
               alt=""></span>
        <span class="lastpos">设备详情</span>
      </div>
      <div @click.stop="nextClick('water')">
        <span><img src="../../static/image/white.png"
               alt=""></span>
        <span class="lastpos">用水统计</span>
      </div>
      <div @click.stop="nextClick('mapshow')">
        <span class="c four"><img src="../../static/image/app.png"
               alt=""></span>
        <span class="lastpos">周边设备</span>
      </div>
      <!-- <div @click="nextClick('bian')">
         <span class="lasts"><img src="../../static/image/tongji.png" alt=""></span>
          <span>地图展示</span>
      </div> -->
      <!-- <div class="last" @click="nextClick('historynum')">
         <span class="two"><img src="../../static/image/lishi.png" alt=""></span>
        <span class="lastpos">历史记录</span>
      </div> -->
    </div>
    <!-- <div class="hidesqu" @click="allmaphide"></div> -->
    <div id="allmap"></div>
    <div class="photo"
         v-if="photo">
      <p class="head"
         @click="head"></p>
      <div class="first">
        <span class="frsh">设备编号：</span>
        <span class="marginleft frs hao">{{newchi}}</span>
        <!-- <span class="marginleft frs hao">53998641</span> -->
        <p class="flotri">
          <span class="statu">网络状态：</span>
          <span class="status coll fr sss"
                v-if='cols==1'>离线</span>
          <span class="status imop"
                v-if='cols==0'>在线</span>
        </p>
      </div>
      <div>
        <!-- <span class="frsh">设备类型：</span>
        <span class="frs hao">{{infow.deviceType}}</span> -->
        <!-- <span class="frs hao">消防栓</span> -->
        <p class="flotri">
          <span class="statu statuid">栓锁状态：</span>
          <span class="status statusids coll"
                v-if='col==1'>开启</span>
          <span class="status coll imop sss"
                v-if='col==0'>关闭</span>
          <span class="status coll imop"
                v-if='col==3'>未激活</span>
        </p>
      </div>
      <div>
        <span>设备型号：</span>
        <span class="niles">{{infow.deviceModel}}</span>
        <!-- <span class="niles">消防栓I型</span> -->
      </div>
      <p class="dang"
         @click="gaode">
        <img src="../../static/image/dang.png"
             alt="">
      </p>
      <div>
        <span>激活时间：</span>
        <span class="niles">{{last_login?last_login:'暂无'}}</span>
        <!-- <span class="niles">2018年10月21号</span> -->
      </div>
      <div>
        <span>地址备注：</span>
        <span class="niles">{{mark?mark:'暂无'}}</span>
        <!-- <span class="niles">2018年10月21号</span> -->
      </div>
      <div>
        <span>安装地址：</span>
        <span class="niles nileaddress">{{changaddress}}</span>
        <!-- <span>浙江省杭州市江干区越秀维多利中心</span> -->
      </div>

      <p class="active"
         @click="nextClick('hourstate')">查看更多</p>
    </div>
    <!-- <div class="flexBoxBGxBG cube" v-if="bgs" v-bind:class="{animaBg:isAnima,unAnimaBg:isUnAnima}" @click.stop="mapbaidu"></div>  -->
    <!-- <div class="flexBoxCT" v-bind:class="{anima:isAnima,unAnima:isUnAnima}"> -->
    <!-- <router-link :to="{path:'/select',query:{id:item}}"><p class="Feat">功能界面</p></router-link> -->
    <!-- <p class="Feat dele" @click.stop="gaode">高德地图</p>
        <p class="Feat" @click.stop="baidu">百度地图</p> -->
    <!-- </div>  -->
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=PWttlCcjWHRXa9YrV7LwVIzlT7qQRlNS"></script>
<script>
import Qs from 'qs'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import { address,wgs84togcj02} from '../api/api.js';
import iconCar from '../../static/image/xxx.png'; //以import的方式导入图片文件
import newiconCar from '../../static/image/ccc.png'; //以import的方式导入图片文件
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datemg: false,
      undatemg: true,
      bg: '',
      bgs: false,
      photo: true,
      show: false,
      infow: {
        devLockState: '',
        devStatus: '',
        deviceId: '',
        deviceModel: '',
        deviceType: '',
        devLongitude: '',
        devLatitude: '',
        devParaSn: '',
        devParaSntwo: '',
        isAnima: false,
        isUnAnima: false,
        devDefence: ''
      },
      mapchangelist:[],
      last_login: "",
      obj: { lng: "", lat: "" },
      isAnima: false,
      isUnAnima: false,
      col: '',
      cols: '',
      newdirectory: '',
      psya: '',
      replace1: '',
      replace2: '',
      newchi: '',
      changelng: String,
      changelat: String,
      changaddress: String,
      mark: String,
      changgedate: String
    }
  },
  // watch:{
  //   '$route.path':function(a,b){
  //     if(a=='/equipitem'){
  //       localStorage.clear('ppp')
  //       localStorage.clear('lll')
  //     }
  //   }
  // },
  computed: {
    ...mapState(['lat'])
  },
  created () {

    let that = this;
    this.$axios
      .post(
        that.httpUrl + "Datapoints/getData",
        this.$qs.stringify({
          devId: this.$route.query.id,
        })
      )
      .then(message => {

        console.log(JSON.parse((message.data.errMsg).slice(6)))
        let messData = JSON.parse((message.data.errMsg).slice(6))
        for (let i = 0; i < messData.data.datastreams.length; i++) {
          // console.log(messData.data.datastreams[i].id);
          switch (messData.data.datastreams[i].id) {
            case '2008': that.infow.devLockState = messData.data.datastreams[i].datapoints[0].value
              break;
            case '2010': that.infow.devDefence = messData.data.datastreams[i].datapoints[0].value;
              that.infow.devUnlockTime = messData.data.datastreams[i].datapoints[0].at;
              break;
            case '2012': that.last_login = (messData.data.datastreams[i].datapoints[0].at).substring(0,16);
            console.log(that.last_login)
              break;
            // case '1003':that.infow.devParaSn=messData.data.datastreams[i].datapoints[0].value;
            //             that.infow.devParaSntwo='20'+messData.data.datastreams[i].datapoints[0].value.slice(2,4)+'年'+messData.data.datastreams[i].datapoints[0].value.slice(4,6)+'月'+messData.data.datastreams[i].datapoints[0].value.slice(6,8)+'日';
            //  break;
            case '1001': that.infow.devStatus = messData.data.datastreams[i].datapoints[0].value
              break;

            // 新家的
            case '2003': that.infow.devLongitude = messData.data.datastreams[i].datapoints[0].value;
              break;
            case '2002': that.infow.devLatitude = messData.data.datastreams[i].datapoints[0].value;
              break;

            default: break;
          }
        }
        console.log(that.infow.devLongitude)
          if (that.infow.devLongitude == 0 || that.infow.devLatitude == 0) {
            that.mapchangelist[0] = 120.2282128307
            that.mapchangelist[1] = 30.2693046269
          } else {
            that.mapchangelist =wgs84togcj02((that.infow.devLongitude) / 100000, (that.infow.devLatitude) / 100000)
          }
          that.infow.devLongitude = that.mapchangelist[0]
          that.infow.devLatitude = that.mapchangelist[1]
        if (that.infow.devLockState == 17) {
          // that.infow.devLockState='关闭';
          that.col = 1
        } else {
          // that.infow.devLockState='开启'
          that.col = 0
        }
        axios({
      method: 'post',
      url: `${that.httpUrl}Amend/findOne`,
      data: Qs.stringify({
        id: that.$route.query.id,
      })
    }).then(res => {
      console.log(res)
      that.changelng = res.data.amend.amendLongitude
      that.changlat = res.data.amend.amendLatitude
      // that.changaddress = res.data.amend.address
      that.mark = res.data.amend.mark
      // setTimeout(function () {
        console.log(res.data.amend.number)
      if(res.data.amend.number=='0'){
        that.replace1=that.infow.devLongitude;
        that.replace2=that.infow.devLatitude
      }else{
        if (String(that.changelng) == 0 || String(that.changlat) == 0) {
          that.replace1 = 120.2282128307
          that.replace2 = 30.2693046269
        } else {
          that.replace1 = that.changelng
          that.replace2 = that.changlat
        }
      }
      console.log(that.replace1)
      var map = new BMap.Map("allmap");
      var ggPoint = new BMap.Point(that.replace1, that.replace2);
      if(res.data.amend.number=='0'){
        var geoc = new BMap.Geocoder();

        geoc.getLocation(ggPoint, function (rs) {
          var addComp = rs.addressComponents;
          that.changaddress = addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
        });
      }else{
        that.changaddress = res.data.amend.address
      }
      map.centerAndZoom(ggPoint, 15);
      // console.log(that.cols)
      var marker;
      // console.log(localStorage.getItem('online'))
      if (localStorage.getItem('online') != 0) {
        const deviceSize = new BMap.Size(16, 26);
        const deviceIcon = new BMap.Icon(newiconCar, deviceSize, {
          imageSize: deviceSize
        });

         marker = new BMap.Marker(ggPoint, {
          icon: deviceIcon
        })
      } else {
        const deviceSize = new BMap.Size(16, 26);
        const deviceIcon = new BMap.Icon(iconCar, deviceSize, {
          imageSize: deviceSize
        });

         marker = new BMap.Marker(ggPoint, {
          icon: deviceIcon
        })

      }       
       marker.addEventListener("click", function (e) {
        // console.log(that.photo)
        that.photo = !that.photo;
      });
      map.addOverlay(marker);



      // map.panTo(new_point); 
      // var label = new BMap.Label("", { offset: new BMap.Size(20, -10) });
      // marker.setLabel(label); //添加百度label
      // map.setCenter(data.points[0]);
      // console.log(data.points[0])
      that.menga = res.data.amend.amendLongitude
      that.mengb = res.data.amend.amendLatitude
      // that.$axios
      //   .post(
      //     that.httpUrl + "Datapoints/findByDevId",
      //     that.$qs.stringify({
      //       devId: that.$route.query.id
      //     })
      //   )
      //   .then(message => {
      //     console.log(message);

      //     that.infow.devLockState = message.data.detail.devLockState
      //     that.infow.deviceId = message.data.detail.deviceId
      //     that.infow.deviceModel = message.data.detail.deviceModel
      //     that.infow.deviceType = message.data.detail.deviceType
      //     that.infow.address = message.data.detail.address
      //     that.infow.number = message.data.detail.number
      //     that.changgedate = message.data.detail.date
      //     if (String(that.infow.deviceId) == '') {
      //       that.infow.deviceId = '无'
      //     }
      //     if (String(that.infow.deviceModel) == '') {
      //       that.infow.deviceModel = '无'
      //     }
      //     if (String(that.infow.deviceType) == '') {
      //       that.infow.deviceType = '无'
      //     }
          // var point = new BMap.Point(that.menga, that.mengb)
          // map.centerAndZoom(point, 16);
          // var geoc = new BMap.Geocoder();
          // geoc.getLocation(point, function (rs) {
          //   var addComp = rs.addressComponents;
          //   console.log(addComp)
          //   that.newdirectory = addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
          //   console.log(that.newdirectory)
          //   console.log(that.infow.number)
          //   if (that.infow.number == "1") {
          //     that.psya = that.infow.address
          //   } else if (that.infow.number == 0 || that.infow.number == '') {
          //     that.psya = that.newdirectory
          //   }
          // });
          // var geolocation = new BMap.Geolocation();
          // var navigationControl = new BMap.NavigationControl({
          //   anchor: BMAP_ANCHOR_TOP_LEFT,
          //   type: BMAP_NAVIGATION_CONTROL_LARGE,
          // });
          // map.addControl(navigationControl);
          // var geolocationControl = new BMap.GeolocationControl();
          // geolocationControl.addEventListener("locationError", function (e) {
          //   // 定位失败事件
          //   alert(e.message);
          // });
          // map.addControl(geolocationControl);

          that.$axios
            .get(
              that.httpUrl + 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
            )
            .then(function (message) {
              // console.log(message.data)
              wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: message.data.appid, // 必填，公众号的唯一标识
                timestamp: message.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
                signature: message.data.signature, // 必填，签名，见附录1
                jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
            })
          // var new_point = new BMap.Point((localStorage.getItem('ppp'),localStorage.getItem('lll')));


          //  var new_point = new BMap.Point((localStorage.getItem('ppp'),localStorage.getItem('lll')))
          // var new_point = new BMap.Point(localStorage.getItem('b').slice(0,localStorage.getItem('b').length-1),localStorage.getItem('a').slice(0,localStorage.getItem('a').length-1));
          // var marker = new BMap.Marker(new_point);  // 创建标注
          // const deviceSize = new BMap.Size(16,26);
          // const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
          //     imageSize: deviceSize
          // });

          // marker = new BMap.Marker(new_point, {
          //     icon: deviceIcon
          // })
          // map.addOverlay(marker);              // 将标注添加到地图中

          // cr.addCopyright({ id: 1, content: "<a onclick='OpenApp()' href='#' style='font-size: 16px;background: #ebedf0;border: solid 1px #606366;border-radius: 4px;padding: 2px;color: #606366;text-decoration: none;'>打开百度地图</a>" });

        })
    // })



    // that.SET({a:data.points[0].lng,b:data.points[0].lat})

    // localStorage.setItem('ppp',data.points[0].lng)
    // localStorage.setItem('lll',data.points[0].lat)
    // }
    // })
    // }, 1000);
    //  console.log(localStorage.getItem('ppp'))
    // console.log(localStorage.getItem('lll'))
    // map.clearOverlays();
    that.$axios
      .post(
        that.httpUrl + "devices/findsn",
        that.$qs.stringify({
          devId: that.$route.query.id,
          pageNum: 1,
          pageSize: 10
        })
      )
      .then(message => {
        console.log(message.data.i.devParaSn)
        that.newchi = message.data.i.devParaSn
        that.infow.deviceModel = message.data.i.deviceModel
        that.infow.deviceType = message.data.i.deviceType
        // that.infow.devParaSntwo=
        //  that.infow.devParaSntwo = '20' + message.data.i.devParaSn.slice(2, 4) + '年' + message.data.i.devParaSn.slice(4, 6) + '月' + message.data.i.devParaSn.slice(6, 8) + '日';
      })
      that.init();
      })

  },
  mounted: function () {

    document.title = this.$route.meta.title;


    let that = this;
    // that.init();
  },
  methods: {
    ...mapMutations(['SET']),
    async init () {
      let res = await address({ devId: this.$route.query.id,page:1,pageSize:1 })
      console.log(res)
      // this.last_login = res.data.data.devices[0].last_login
      if (res.data.data.devices[0].online) {
        // this.last_login = res.data.data.devices[0].last_login
        this.cols = 0
      } else {
        this.cols = 1
      }
      let that = this;
      var map = new BMap.Map("allmap");
      var ggPoint = new BMap.Point(that.replace1, that.replace2);
      map.centerAndZoom(ggPoint, 15);
      console.log(that.cols)
      if (this.cols != 0) {
        const deviceSize = new BMap.Size(16, 26);
        const deviceIcon = new BMap.Icon(newiconCar, deviceSize, {
          imageSize: deviceSize
        });

        var marker = new BMap.Marker(ggPoint, {
          icon: deviceIcon
        })
      } else {
        const deviceSize = new BMap.Size(16, 26);
        const deviceIcon = new BMap.Icon(iconCar, deviceSize, {
          imageSize: deviceSize
        });

        var marker = new BMap.Marker(ggPoint, {
          icon: deviceIcon
        })

      }
      marker.addEventListener("click", function (e) {
        that.photo = !that.photo;
      });
      map.addOverlay(marker);
    },
    mapbaidu () {
      let that = this;
      this.isAnima = false;
      this.isUnAnima = true;
      let t = setTimeout(function () {
        that.bgs = false;
        clearTimeout(t)
      }, 250)
    },
    nextClick (next) {
      console.log(next)
      // if(next=='equipitem'){
      //   localStorage.removeItem('ppp')
      //   localStorage.removeItem('lll')
      // }
      this.$router.push({ path: '/' + next, query: { id: this.$route.query.id, sn: this.newchi } });
    },
    head () {
      this.photo = !this.photo
    },
    tables () {
      // this.show = !this.show;
      this.datemg = true;
      this.undatemg = false;
      this.bg = true;
    },
    routerback: function () {
      this.$router.back(-1)
    },
    hideClick () {
      this.po = false
      let that = this;
      that.datemg = false;
      that.undatemg = true;
      let t = setTimeout(function () {
        that.bg = false;
        clearTimeout(t)
      }, 250)
    },
    navig (bd_lon, bd_lat) {
      //百度坐标转火星坐标GCJ02
      var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
      var x = bd_lon - 0.0065;
      var y = bd_lat - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var lng = z * Math.cos(theta);
      var lat = z * Math.sin(theta);

      //GCJ02 转换为 WGS84
      wx.openLocation({
        // latitude: this.infow.devLatitude, // 纬度，浮点数，范围为90 ~ -90
        // longitude: this.infow.devLongitude, // 经度，浮点数，范围为180 ~ -180。
        latitude: lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: lng,
        name: this.infow.deviceId + this.infow.deviceType, // 位置名
        address: '消防栓', // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
    gaode () {
      console.log(this.menga, this.mengb)
      this.navig(this.menga, this.mengb)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .square{width: 100%;color:#fff;font-size: 30px;font-family:'PingFang-SC-regular';height: 100%;text-align: center}
    .square li{height: 222px;display: flex;justify-content: space-between;margin:30px 0}
    .square div{width: 44%;border-radius: 10px;margin:0 4%}
    .a div:nth-child(1){background: #ffa146;margin-right:0}
    .a div:nth-child(2){background: #9580ff}
    .b div:nth-child(1){background: #80c2ff;margin-right:0}
    .b div:nth-child(2){background: #ff8c80}
    .c div:nth-child(1){background: #88e0a3;margin-right:0}
    .c div:nth-child(2){background: #4373fc}
    .square .gong1 img{width: 88px;height:88px;margin:0 auto;margin-top:40px;}
    .square .gong2 img{width: 90px;height:84px;margin:0 auto;margin-top:42px;}
    .square .gong3 img{width: 86px;height:86px;margin:0 auto;margin-top:42px;}
    .square .gong4 img{width: 80px;height:120px;margin:0 auto;margin-top:20px;}
    .square .gong5 img{width: 74px;height:110px;margin:0 auto;margin-top:28px;}
    .square .gong6 img{width: 88px;height:88px;margin:0 auto;margin-top:40px;}
    .square .t1{margin-top:40px;}
    .square .t2{margin-top:42px;}
    .square .t3{margin-top:20px;}
    .square .t4{margin-top:28px;} */

.su {
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  height: 92px !important;
}
.top li {
  display: flex;
  justify-content: space-between;
  border-bottom: none !important;
}
.top li div:nth-child(1) {
  width: 36px;
  height: 28px;
}
.top li div:nth-child(2) {
  width: 1px;
  height: 1px;
  margin-right: 30px;
  z-index: -20;
}
.top li div:nth-child(3) {
  width: 49px;
  height: 40px;
  margin-right: 30px;
}
.top li div img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.top li {
  height: 89px;
}
ul {
  height: 687px;
  background: #fff;
}
ul li {
  height: 100px;
  background: #fff;
  line-height: 100px;
  text-align: left;
  margin-left: 38px;
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  color: #303030;
}
#allmap {
  width: 100%;
  height: 93% !important;
}
.photo {
  position: fixed;
  width: 93%;
  margin: 0 4%;
  bottom: 0;
  background: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0 0 10px #999;
  height: 450px;
}
.photo .head {
  width: 80px;
  height: 10px;
  margin: 20px auto;
  border-radius: 5px;
  background: #cecece;
}
.photo div {
  margin: 0 auto;
  font-size: 28px;
  font-family: 'PingFang-SC-Regular';
  margin-bottom: 0.3rem;
  margin-left: 20px;
}
.photo div span:nth-child(2),
.status {
  color: #303030;
}
.photo .first {
  display: block;
}
.photo .first span:nth-child(3) {
  margin-right: 10%;
}
.photo div span:nth-child(1) {
  color: #767676;
}
.statu {
  color: #929293;
}
.active {
  text-align: center;
  margin-top: 80px;
  font-size: 24px;
  font-family: '微软雅黑';
  color: #929293;
  margin-bottom: 20px;
}
.pos {
  width: 227px;
  border-radius: 10px;
  position: absolute;
  left: 20px;
  z-index: 99999;
  top: 90px;
  background: rgba(40, 40, 41, 0.9);
}
.pos div {
  width: 210px;
  height: 80px;
  line-height: 86px;
  border-bottom: 1px solid #5b5a5d;
  margin: 0 auto;
  color: #fff;
  font-size: 20px;
  margin-left: 16px;
}
.pos div span:nth-child(1) {
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 30px;
}
.pos div span img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  margin-bottom: 10px;
  margin-left: 2px;
}
.last {
  border-bottom: none !important;
}
/* .four{width: 32px!important;height: 46px!important;display: inline-block;} */
.three {
  width: 37px !important;
  height: 37px !important;
  display: inline-block;
}

.lasts {
  width: 36px !important;
  height: 35px !important;
  display: inline-block;
}
.trans {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 12px solid #282829;
  position: absolute;
  top: 78px;
  left: 48px;
}
.statu {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.hello .bottomchild span:nth-child(1) {
  width: 40px;
  height: 40px;
  display: inline-block;
}
.hello .bottomchild span:nth-child(1) img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  margin-bottom: 10px;
}
.hello .bottomchild span:nth-child(2) {
  display: inline-block;
  line-height: 60px;
  font-weight: bold;
  padding-left: 8px;
}
/* .hidesqu{position: absolute;top:92px;left: 0;right: 0;bottom: 0;z-index: 22;} */
.first span:nth-child(2) {
  margin-left: 25px;
}
.coll {
  color: #54a92f !important;
}
.four {
  width: 37px !important;
  display: inline-block;
  height: 46px !important;
}
.dang {
  width: 130px;
  height: 130px;
  float: right;
  /* margin-top: 30px; */
  margin-right: 30px;
  cursor: pointer;
}
.dang img {
  width: 100%;
  height: 100%;
}
.marginleft {
  margin-left: 0 !important;
}
.frs {
  display: inline-block;
  width: 200px;
}
.frsh {
  display: inline-block;
  width: 21%;
}
.statuid {
  margin-left: 30px;
}
/* .anima{
		animation:mymove1 0.25s infinite;
		-webkit-animation:mymove1 0.25s 1; /*Safari and Chrome*/
/* bottom: -600px;
	}
  @keyframes mymove1{
		from {bottom:0;}
		to {bottom:-28%;}
	}
		
	@-webkit-keyframes mymove1{
		from {bottom:0;}
		to {bottom:-28%;}
	} */

/* .unAnima{
		animation:mymove2 0.25s infinite;
		-webkit-animation:mymove2 0.25s 1; /*Safari and Chrome*/
/* bottom: 0;
	} 
	 @keyframes mymove2{
		from {bottom:-28%;}
		to {bottom:0;}
	}
		
	@-webkit-keyframes mymove2{
		from {bottom:-28%;}
		to {bottom:0;}
	}   */
.flexBoxBG {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.flexBoxBGxBG {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.csip {
  /* animation:mymove3 0.25s infinite;
      -webkit-animation:mymove3 0.25s 1; /*Safari and Chrome*/
  /* opacity: 1; */
  display: block;
}
/* @keyframes mymove3{
      from {opacity:0;}
      to {opacity:1;}
    }
      
    @-webkit-keyframes mymove3{
      from {opacity:0;}
      to {opacity:1;}
    } */
.uncsip {
  /* animation:mymove4 0.25s infinite;
      -webkit-animation:mymove4 0.25s 1; /*Safari and Chrome*/
  /* opacity: 0;  */
  display: none;
}
/* @keyframes mymove4{
		from {opacity:1;}
		to {opacity:0;}
	}
		
	@-webkit-keyframes mymove4{
		from {opacity:1;}
		to {opacity:0;}
	} */
.lastpos {
  font-size: 30px;
}
.lone {
  border-bottom: none !important;
}
.flotri {
  float: right;
  width: 39%;
  font-size: 28px;
  font-family: 'PingFang-SC-Regular';
}
.hao {
  margin-left: -12px !important;
}
.status {
  margin-left: -10px !important;
}
.niles {
  margin-left: -10px !important;
}
.statusids {
  color: #54a92f !important;
}
.imop {
  color: #54a92f !important;
}
.sss {
  color: red !important;
}
.nileaddress {
}
</style>
