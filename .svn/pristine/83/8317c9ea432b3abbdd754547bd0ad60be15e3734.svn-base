<template>
  <div class="su">
    <ul class="top">
      <li>
        <div @click="tables"><img src="../../static/image/libi.png"
               alt=""></div>
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
      <!-- <div @click="nextClick('mapshow')">
         <span class="c four"><img src="../../static/image/app.png" alt=""></span>
        <span class="lastpos">周边设备</span>
      </div> -->
      <div @click.stop="nextClick('homepage')">
        <span class="lasts"><img src="../../static/image/tongji.png"
               alt=""></span>
        <span class="lastpos">地图展示</span>
      </div>
      <!-- <div class="last" @click="nextClick('historynum')">
         <span class="two"><img src="../../static/image/lishi.png" alt=""></span>
        <span class="lastpos">历史记录</span>
      </div> -->
    </div>
    <div id="allmap"></div>
    <div class="photo"
         v-if="photo">
      <p class="head"
         @click="head"></p>
      <div class="first">
        <span class="frsh">设备编号：</span>
        <span class="marginleft frs hao">{{auth_info}}</span>
        <!-- <span class="marginleft frs hao">53998641</span> -->
        <p class="flotri">
          <span class="statu">网络状态：</span>
          <span class="status coll fr sss"
                v-if='!onlinenew'>离线</span>
          <span class="status imop"
                v-if='onlinenew'>在线</span>
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
        <span class="niles">{{last_login==''?'暂无':last_login}}</span>
        <!-- <span class="niles">2018年10月21号</span> -->
      </div>
      <div>
        <span>地址备注：</span>
        <span class="niles nileaddress">{{mark}}</span>
        <!-- <span>浙江省杭州市江干区越秀维多利中心</span> -->
      </div>
      <div>
        <span>安装地址：</span>
        <span class="niles nileaddress">{{changaddress}}</span>
        <!-- <span>浙江省杭州市江干区越秀维多利中心</span> -->
      </div>

      <p class="active"
         @click="nextClick('hourstate')">查看更多</p>
    </div>

  </div>
</template>
  <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=PWttlCcjWHRXa9YrV7LwVIzlT7qQRlNS"></script>

<script>
import Qs from 'qs'
import axios from 'axios'
import { BaiduMap } from 'vue-baidu-map'
import BMap from 'BMap'
import iconCar from '../../static/image/xxx.png'; //以import的方式导入图片文件
import newiconCar from '../../static/image/ccc.png'; //以import的方式导入图片文件

export default {
  name: 'mapshow',
  inject: ['reload'],
  data () {
    return {
      changaddress: '',
      last_login: '',
      mark: '',
      datemg: false,
      undatemg: true,
      bg: '',
      firelng: '',
      firelat: '',
      obj: { lng: "", lat: "" },
      center: { lng: "", lat: "" },
      con: {
        devVOL: '',
        waterMeter: '',
        waterPressure: '',
        waterTemperature: '',
        devDefence: '',
        devUnlockWay: '',
        devLockState: '',
        waterMeterTotal: '',
        waterMeterTemp: '',
        devHardVerison: '',
        waterPressure: '',
        devSoftVerison: '',
        waterTemperature: '',
        devParaSn: '',
        devWarning: '',
        devIccid: '',
        devLongitude: '',
        devStatus: '',
        devLatitude: '',
        devUnlockTime: ''
      },
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
      photo: false,
      show: false,
      postionPoint: {},
      psya: '',
      idvals: '',
      col: '',
      cols: '',
      newdirectory: '',
      packpoint: [],
      newchi: '',
      auth_info: '',
      newpotin: [],
      poinDevice: [],
      onlinenew: '',
      rotDiv:''
    }
  },
  mounted: function () {
    let that = this;

    that.rotDiv=that.$route.query.id

    this.$axios
      .post(
        that.httpUrl + "wechatUser/findDevbyUser", Qs.stringify({ weChatUsePhone: sessionStorage.getItem("weChatUsePhone") }))
      .then(message => {
        console.log(message);
        let pointsj = message.data.s;
        // let arrnew = []
        // console.log(pointsj.length);
        that.poinDevice = pointsj
        for (var i = 0; i < pointsj.length; i++) {
          // console.log(pointsj[i].deviceId);


          // if (points[l].amendLongitude == 0 || points[l].amendLatitude == 0) {
          //   points[l].amendLongitude = 120.2282128307
          //   points[l].amendLatitude = 30.2693046269
          // }
          // arrnew.push(new BMap.Point((points[l].amendLongitude), (points[l].amendLatitude)))

          this.$axios
            .post(
              that.httpUrl + "devices/accurate",
              this.$qs.stringify({
                devId: pointsj[i].deviceId,
                page:1,
                pageSize:that.$store.state.allList
              })
            )
            .then(res => {
              // console.log(that.poinDevice)
              that.poinDevice.forEach(a => {
                if (res.data.data.devices[0].id == a.deviceId) {
                  // console.log(a.deviceId)
                  a = Object.assign(a, res.data.data.devices[0])

                }
              })

              var map = new BMap.Map("allmap");
              var new_point = new BMap.Point(localStorage.getItem('pointlngright'), localStorage.getItem('pointlatright'));
              // var new_point = new BMap.Point(120.2282128307, 30.2693046269);
              map.centerAndZoom(new_point, 15);
              var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
              });
              map.addControl(navigationControl);
              var marker = new BMap.Marker(new_point); // 创建标注

              // map.addOverlay(marker); // 将标注添加到地图中
              // map.panTo(new_point); //转到该点位置    
              map.clearOverlays();
              // console.log(that.poinDevice)

              for (let i = 0; i < that.poinDevice.length; i++) {
                // console.log('2222222222222222222222222')

                // console.log(that.poinDevice[i])
                var new_point; var marker; var devmark;
                var p0 = that.poinDevice[i].amendLongitude
                var p1 = that.poinDevice[i].amendLatitude
                new_point[i] = new BMap.Point(p0, p1);
                marker[i] = new BMap.Marker(new_point[i]);

                // console.log(new_point);
                // var marker = new BMap.Marker(new_point);  // 创建标注
                const deviceSize = new BMap.Size(16, 26);

                if (that.poinDevice[i].online) {
                  const deviceIcon = new window.BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
                    imageSize: deviceSize
                  });
                  marker[i] = new BMap.Marker(new_point[i], {
                    icon: deviceIcon
                  });
                } else {
                  const deviceIcon = new window.BMap.Icon(newiconCar, deviceSize, { //会以base64的方式传参iconCar
                    imageSize: deviceSize
                  });
                  marker[i] = new BMap.Marker(new_point[i], {
                    icon: deviceIcon
                  });
                }
                map.addOverlay(marker[i]);  //将标注点添加到地图上
                that.addMarker(marker[i], new_point[i])



                // 添加带有定位的导航控件



                map.addOverlay(marker);              // 将标注添加到地图中



              }
            })


        }

        // let points = []
        // points = that.poinDevice;
        // var arrnew = []
        // for (var l = 0; l < points.length; l++) {

        //   if (points[l].amendLongitude == 0 || points[l].amendLatitude == 0) {
        //     points[l].amendLongitude = 120.2282128307
        //     points[l].amendLatitude = 30.2693046269
        //   }
        //   arrnew.push(new BMap.Point((points[l].amendLongitude), (points[l].amendLatitude)))

        // }

        // console




        // var convertor = new BMap.Convertor();
        // var carPoints = arrnew
        // var arr = [], i = 0, newCarPoint = [];
        // console.log(arrnew)
        // for (var a = 0; a < carPoints.length; a = a + 10) {
        //   arr.push(carPoints.slice(a, a + 10));
        // }
        // console.log(arr);
        // function translateCarPoints (i) {
        //   convertor.translate(arr[i], 1, 5, function (res) {
        //     console.table(res.points);
        //     newCarPoint = newCarPoint.concat(res.points);
        //     if (arr[i + 1] && arr[i + 1].length > 0) {
        //       i++;
        //       translateCarPoints(i);
        //     }
        //     if (newCarPoint.length === carPoints.length) {
        //       console.log(newCarPoint);
        //       for (var j = 0; j < newCarPoint.length; j++) {
        //         var point = new BMap.Point(newCarPoint[j].lng, newCarPoint[j].lat);
        //         var marker = new BMap.Marker(point);
        //         const deviceSize = new BMap.Size(16, 26);



        //         that.poinDevice.forEach(a => {
        //           if (a.online == "true") {
        //             const deviceIcon = new BMap.Icon(newiconCar, deviceSize, { //会以base64的方式传参iconCar
        //               imageSize: deviceSize
        //             });
        //             const marker = new BMap.Marker(point, {
        //               icon: deviceIcon
        //             });
        //             map.addOverlay(marker);  //将标注点添加到地图上

        //           } else {
        //             const deviceIcon = new BMap.Icon(newiconCar, deviceSize, { //会以base64的方式传参iconCar
        //               imageSize: deviceSize
        //             });
        //             const marker = new BMap.Marker(point, {
        //               icon: deviceIcon
        //             });
        //             map.addOverlay(marker);  //将标注点添加到地图上
        //           }
        //         })




        //         console.log(points)
        //         function addMarker (points) {
        //           (function () {
        //             var thePoint = points[j];
        //             marker.addEventListener("click",
        //               function (e) {

        //                 showInfo(this, thePoint);
        //               });
        //           })();

        //         }
        //         addMarker(points);
        //       }
        //     }
        //     function showInfo (thisMarker, point) {
        //       console.log(point)
        //       that.photo = !that.photo;
        //       that.postionPoint.lng = (point.devLatitude) / 100000;
        //       that.postionPoint.lat = (point.devLongitude) / 100000;
        //       that.idvals = point.deviceId
        //       that.idpalce(that.idvals)
        //       console.log(that.postionPoint.lng)
        //       console.log(that.postionPoint.lat)
        //       point = new BMap.Point(that.postionPoint.lng, that.postionPoint.lat);
        //       var geoc = new BMap.Geocoder();
        //       var pt = thisMarker.point
        //       geoc.getLocation(pt, function (rs) {
        //         var addComp = rs.addressComponents;
        //         console.log(addComp);
        //         that.newdirectory = addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
        //         console.log(that.newdirectory)

        //       });

        //     }
        //   })
        // }
        // translateCarPoints(i);
        // map.addControl(top_left_navigation);
      })
    // this.$axios
    //   .post(
    //     that.httpUrl + "devices/findsn",
    //     this.$qs.stringify({
    //       devId: this.$route.query.id,
    //       pageNum: 1,
    //       pageSize: 10
    //     })
    //   )
    //   .then(message => {
    //     console.log(message.data.i.devParaSn)
    //     that.newchi = message.data.i.devParaSn
    //     that.infow.devParaSntwo = '20' + message.data.i.devParaSn.slice(2, 4) + '年' + message.data.i.devParaSn.slice(4, 6) + '月' + message.data.i.devParaSn.slice(6, 8) + '日';
    //   })
    // this.$axios
    //   .post(
    //     that.httpUrl + "Datapoints/getData",
    //     this.$qs.stringify({
    //       devId: this.$route.query.id,
    //     })
    //   )
    //   .then(message => {
    //     // console.log(message)
    //     // console.log(JSON.parse((message.data.errMsg).slice(6)))
    //     let messData = JSON.parse((message.data.errMsg).slice(6))
    //     for (let i = 0; i < messData.data.datastreams.length; i++) {
    //       // console.log(messData.data.datastreams[i].id);
    //       switch (messData.data.datastreams[i].id) {
    //         case '2008': that.infow.devLockState = messData.data.datastreams[i].datapoints[0].value
    //           break;
    //         case '2010': that.infow.devDefence = messData.data.datastreams[i].datapoints[0].value;
    //           that.infow.devUnlockTime = messData.data.datastreams[i].datapoints[0].at;
    //           break;
    //         // case '1003':that.infow.devParaSn=messData.data.datastreams[i].datapoints[0].value;
    //         //             that.infow.devParaSntwo='20'+messData.data.datastreams[i].datapoints[0].value.slice(2,4)+'年'+messData.data.datastreams[i].datapoints[0].value.slice(4,6)+'月'+messData.data.datastreams[i].datapoints[0].value.slice(6,8)+'日';
    //         //  break;
    //         case '1001': that.infow.devStatus = messData.data.datastreams[i].datapoints[0].value
    //           break;

    //         // 新家的
    //         case '2003': that.infow.devLongitude = messData.data.datastreams[i].datapoints[0].value;
    //           localStorage.setItem('ln', (messData.data.datastreams[i].datapoints[0].value) / 100000)

    //           break;
    //         case '2002': that.infow.devLatitude = messData.data.datastreams[i].datapoints[0].value;
    //           localStorage.setItem('la', (messData.data.datastreams[i].datapoints[0].value) / 100000)
    //           break;

    //         default: break;
    //       }
    //     }
    //     if (that.infow.devLockState == 17) {
    //       // that.infow.devLockState='关闭';
    //       that.col = 1
    //     } else {
    //       // that.infow.devLockState='开启'
    //       that.col = 0
    //     }

    //   })
  },
  methods: {
    addMarker (bal, val) {
      bal.addEventListener("click", e => {
         console.log(val)
        this.photo = !this.photo;
        this.poinDevice.forEach(a => {
          if (a.amendLongitude == val.lng && a.amendLatitude == val.lat) {
            this.changaddress = a.address
            this.mark = a.mark
            // this.last_login = a.last_login
            this.auth_info = a.auth_info
            this.onlinenew = a.online
            this.idpalce(a.deviceId)
          }
        })
      })
    },
    // address (val) {
    //   axios({
    //     method: 'post',
    //     url: `${this.httpUrl}Amend/findOne`,
    //     data: Qs.stringify({
    //       id: val
    //     })
    //   }).then(res => {
    //     // this.changaddress = res.data.amend.address
    //     // this.mark = res.data.amend.mark
    //   })
    // },
    idpalce (val) {
      console.log(val)
      this.rotDiv=val;
      let that = this;
       axios({
        method: 'post',
        url:  that.httpUrl+'Amend/findOne',
        data: Qs.stringify({
          id: val
        })
      }).then(res => {
        that.postionPoint.lng=res.data.amend.amendLongitude
         that.postionPoint.lat=res.data.amend.amendLatitude
         that.changaddress = res.data.amend.address
      })
      axios({
      method: 'post',
      url:  that.httpUrl+'devices/findsn',
      data: Qs.stringify({
        devId:val,
        pageNum:1,
        pageSize:10
      })
    }).then(res => {
      console.log(res)
       that.newchi = res.data.i.devParaSn
       that.infow.deviceModel = res.data.i.deviceModel
       that.infow.deviceType = res.data.i.deviceType
    })
    that.$axios
      .post(
        that.httpUrl + "Datapoints/getData",
        that.$qs.stringify({
          devId: val
        })
      )
      .then(message => {
        console.log(message)
        let messData = JSON.parse((message.data.errMsg).slice(6))
        for (let i = 0; i < messData.data.datastreams.length; i++) {
          console.log(messData.data.datastreams[i].id);
          switch (messData.data.datastreams[i].id) {
            case '2012': that.last_login = (messData.data.datastreams[i].datapoints[0].at).substring(0,16);
            console.log(that.last_login)
              break;   
            default: break;
          }
        }
    })
    this.time(val);

    },
    gaode () {
      console.log(this.postionPoint.lng, this.postionPoint.lat)
      this.navig(this.postionPoint.lng, this.postionPoint.lat)
    },
    // sn (val) {
    //   this.$axios
    //     .post(
    //       this.httpUrl + "devices/findsn",
    //       this.$qs.stringify({
    //         devId: this.$route.query.id,
    //         pageNum: 1,
    //         pageSize: 10
    //       })
    //     )
    //     .then(message => {
    //       this.newchi = message.data.i.devParaSn
    //       // that.infow.devParaSntwo=
    //       //  that.infow.devParaSntwo = '20' + message.data.i.devParaSn.slice(2, 4) + '年' + message.data.i.devParaSn.slice(4, 6) + '月' + message.data.i.devParaSn.slice(6, 8) + '日';
    //     })
    // },
    time (val) {
      this.$axios
        .post(
          this.httpUrl + "devices/accurate",
          this.$qs.stringify({
            devId: val,
            page:1,
            pageSize:this.$store.state.allList
          })
        )
        .then(message => {
          console.log(message)
          this.auth_info = message.data.data.devices[0].auth_info
          // this.last_login = message.data.data.devices[0].last_login
          this.onlinenew = message.data.data.devices[0].online
        })
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
    head () {
      this.photo = !this.photo;
    },
    tables () {
      this.datemg = true;
      this.undatemg = false;
      this.bg = true;
    },
    routerback: function () {
      this.$router.back(-1)
    },
    nextClick (next) {
      console.log(this.rotDiv);
      this.$router.push({ path: '/' + next, query: { id: this.rotDiv} });
      // this.$router.push({ path: '/' + next, query: { id: this.$route.query.id } });
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
    }

  }
}
</script>
<style>
/* #allmap{width:100%;height:100%;} */
p {
  margin-left: 5px;
  font-size: 14px;
}
.su {
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  height: 92px !important;
  background: #fff;
}
.top li {
  height: 100px;
  background: #fff;
  line-height: 100px;
  text-align: left;
  margin-left: 38px;
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  color: #303030;
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
/* ul{height:712px;background: #fff;}
    ul li{height: 100px;background:#fff;line-height:100px;text-align: left;margin-left:38px;font-size: 30px;font-family:'PingFang-SC-regular';color:#303030} */
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
  margin-bottom: 35px;
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
  margin-top: 20px;
  font-size: 30px;
  font-family: '微软雅黑';
  color: #929293;
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
/* .two{width: 32px!important;height: 46px!important;display: inline-block;} */
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
  margin-right: 0% !important;
  margin-left: 10%;
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
.status {
  margin-right: 10px;
}
.flexBoxBG {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
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
</style>
