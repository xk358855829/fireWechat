<template>
  <div class="hellohead">
    <div style="width:100%;display:flex;
    width: 100%;
    height: 2.8rem;
    position: relative;
    padding-top: 0.8rem;
    background: #ff5907;">
      <div class="hello losters">
        <p class="png zg">
          <!-- <img src="../../static/image/picu.png" alt=""> -->
          <img :src="urll" />
        </p>
        <p class="mor"></p>
        <p @click="saoyisao">
          <img src="../../static/image/ma.png"
               alt="">
        </p>
        <span class="sapan">扫码查看</span>
      </div>
      <div style="line-height:1.5rem;">
        <p class="mor"
           style="font-size:15px;color:#fff;">{{names}},您好！</p>
      </div>
      <div style="width:40%;color:#000;line-height:.8rem;position:absolute;right:0;display:flex;margin-top:2rem;">
        <p style="font-size:13px;color:#fff;">在线:{{newtrue?newtrue:listnum}}台&nbsp;&nbsp;&nbsp;</p>
        <p style="font-size:13px;color:#fff;">离线:{{newfalse?newfalse:num}}台</p>
        <!-- <p style="font-size:15px;color:#fff;"
           >
          <span style=""
                v-if="changmap">地图</span>
          <span v-if="!changmap">列表</span>
        </p> -->
      </div>
    </div>
    <div v-show="changmap">
      <div class="inputBorder">
        <div class="li">
          <p>
            <img src="../../static/image/fang.png"
                 alt="">
          </p>
          <input type="text" style="position: absolute;left: 0" 
                 v-model="valc"
                 placeholder="请输入设备编号" />
          <span style="position: absolute;right:70px;color:#515151"  @click="mapmodul">地图<img src="../../static/image/ditu.png"
                 alt=""
                 @click="mapmodul"
                 style="width:18px;height:18px;vertical-align: middle;margin-left: 3px;margin-top: -4px"
                 v-if="changmap"></span>
          <span style="position: absolute;right:60px">|</span>
          <span style="position: absolute;right:5px;color:#515151"  @click="saixuan">筛选<img src="../../static/image/saixuan.png"
                 alt=""
                 @click="saixuan"
                 style="width:16px;height:16px;vertical-align: middle;margin-left: 3px;margin-top: -2px"">
          </span>

        </div>
        <div class="lineSaixuan"
             v-if="saiData">
          <span></span>
          <div class="saiBox"
               @click="all">全部</div>
          <div class="saiBox"
               @click="online">在线</div>
          <div class="saiBox"
               @click="outline">离线</div>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in deviceListnew"
            :key='index'
            @click="abc(item,index)">
          <div><img src="../../static/image/jing.png"
                 alt=""
                 class="innerimg"></div>
          <div>

            <p style="font-size:16px;width:100%;text-align:left;">
              <span style="display:block">{{item.emptys}}</span>
              <span style="overflow: hidden;width:100%;display:block;text-overflow:ellipsis;white-space: nowrap;font-size:13px;color:#999;">
                {{item.mark}}</span>

            </p>
          </div>
          <div v-if="pro==0"
               class="api">{{item.empty}}</div>
          <div v-if="pro==1"
               class="no api">{{item.empty}}</div>
          <div v-if="pro==2"
               class="api">{{item.empty}}</div>

          <div @click.stop="showClick(item)"><!-- <img src="../../static/image/deng.png"
                 alt=""
                 class="deleteimg"> --></div>
          <div class="flexBoxBG cube"
               v-show="bg"
               v-bind:class="{animaBg:isAnima,unAnimaBg:isUnAnima}"
               @click.stop="hideClick"></div>
          <div class="flexBoxCT cube"
               v-bind:class="{anima:isAnima,unAnima:isUnAnima}">
            <p class="Feat dele"
               @click.stop="dell(index)">删除</p>
            <p class="Feat"
               @click.stop="hideClick">取消</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="positions"
         v-show='po'>
      <div class="box">
        <p>确定要删除吗？</p>
        <p>
          <span @click="hideClickno">取消</span>
          <span class="querenB"
                @click="delec">确定</span>
        </p>
      </div>
    </div>
    <div v-show="!changmap">
      <search @serchid="serch"
              :deviceList="deviceList"
              :maindeviceList="maindeviceList"
              @chools="chools"
              @all="mapmodulTemp"
              @online="mapmodulTemp"
              @outline="mapmodulTemp"></search>
      <div id="allmapMain"
           style="width:100%;height:500px;z-index:10"
           ref="box"></div>

    </div>

  </div>

</template>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
<script>
import Qs from 'qs'
import axios from 'axios'
// import wx from 'weixin-js-sdk'
import { mapState, mapActions, mapGetters } from 'vuex'
import search from '../page/search.vue'
import { Loadmore, MessageBox } from 'mint-ui';
import iconCar from '../../static/image/xxx.png';
import newiconCar from '../../static/image/ccc.png'; //以import的方式导入图片文件
export default {
  name: 'equipitem',
  data () {
    return {
      changmap: true,
      saiData: false,
      pro: '',
      po: false,
      bg: false,
      urll: '',
      isAnima: false,
      isUnAnima: false,
      names: '',
      item: '',
      valc: '',
      imgMy: './static/image/my.png',
      deviceList: [],
      wtime: ['', '', '', '', ''],
      zong: [],
      devol: [],
      deviceLists: [],
      math: '',
      trueys: [],
      site: '',
      infow: {
        devLongitude: '',
        devLatitude: '',

      },
      replace1: '',
      replace2: '',
      menga: '',
      mengb: '',
      infows: {
        address: '',
        number: ''
      },
      newdirectory: '',
      maindeviceList: '',
      psya: '',
      list: [],
      lnging: '',
      laging: '',
      arrs: [],
      newfalse: 0,
      newtrue: 0,
      coolarr: [],
      num: 0,
      listnum: 0,
    }
  },
  computed: {
    deviceListnew () {
      if (this.valc) {
        return this.deviceList.filter(a => {
          return a.emptys.includes(this.valc)
        })
        // console.log()
      } else {
        return this.deviceList
      }
    }
  },
  components: {
    search
  },
  created () {
  },

  mounted: function () {
    console.log(this.$store.state.allList)
    document.title = this.$route.meta.title;
    this.searchclick()

    let that = this;
    that.wtime = [String(new Date().getFullYear()), String((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes()))];

    that.$axios
      .post(
        that.httpUrl + "users/find",
        that.$qs.stringify({
          openid: localStorage.getItem('openid')
        })
      )
      .then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          that.urll = res.data.result.headimgurl
          that.names = res.data.result.nickname
        }
      })
  },
  methods: {
    chools () {
      this.changmap = !this.changmap;
    },
    saixuan () {
      this.saiData = !this.saiData;
    },
    serch (val) {

      console.log(val)
      setTimeout(() => {
        var map = new BMap.Map("allmapMain");
        var point = new BMap.Point(val.a ? val.a : 120.2282128307, val.b ? val.b : 30.2693046269);
        map.centerAndZoom(point, 15);
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        var i = 0;
        var opts = {
          width: 30,     // 信息窗口宽度
          height: 5,     // 信息窗口高度
          enableMessage: false//设置允许信息窗发送短息
        };
        // 函数 创建多个标注
        var pointArray = new Array();
        for (; i < val.length; i++) {
          if (val[i].amendLongitude == '') {
            val[i].amendLongitude = 120
          }
          if (val[i].amendLatitude == '') {
            val[i].amendLatitude = 30
          }
          var points = new BMap.Point(val[i].amendLongitude, val[i].amendLatitude);//创建坐标点
          var content = `设备编号：${val[i].emptys}<br/>详细信息：<a href="#/hourstate?id=${val[i].deviceId}&sn=${val[i].emptys}&mark=${val[i].mark}&address=${val[i].address}&type=true">查看</a>`;
          console.log(val[i])
          if (val[i].empty =='离线') {
            const deviceSize = new BMap.Size(16, 26);
            const deviceIcon = new BMap.Icon(newiconCar, deviceSize, {
              imageSize: deviceSize
            });

            var marker = new BMap.Marker(points, {
              icon: deviceIcon
            })
          } else {
            const deviceSize = new BMap.Size(16, 26);
            const deviceIcon = new BMap.Icon(iconCar, deviceSize, {
              imageSize: deviceSize
            });

            var marker = new BMap.Marker(points, {
              icon: deviceIcon
            })

          }
          marker.addEventListener('click', e => {
            console.log(this.deviceList)
            val.forEach(a => {
              if (a.amendLongitude == e.target.point.lng && a.amendLatitude == e.target.point.lat) {
                this.$router.push({ path: '/hourstate', query: { id: a.deviceId, sn: a.emptys, mark: a.mark, address: a.address,type:true} })
              }
            })
          })
          map.addOverlay(marker);
          // pointArray[i] = new BMap.Point(this.deviceList[i].amendLongitude, this.deviceList[i].amendLatitude);
          var infoWindow = new BMap.InfoWindow(content, opts);
          map.openInfoWindow(infoWindow, points);
        }

      }, 500)




      // map.setViewport(pointArray);
    },
    mapmodul () {
      // console.log(this.deviceListnew)
      this.$router.push({ path: '/mapshow',query: { id: this.deviceListnew[0].deviceId}});
      // this.changmap = !this.changmap;

      // setTimeout(() => {
      //   var map = new BMap.Map("allmapMain");

      //   var point = new BMap.Point(localStorage.getItem('pointlngright'), localStorage.getItem('pointlatright'));

      //   map.centerAndZoom(point, 15);
      //   var navigationControl = new BMap.NavigationControl({
      //     // 靠左上角位置
      //     anchor: BMAP_ANCHOR_TOP_LEFT,
      //     // LARGE类型
      //     type: BMAP_NAVIGATION_CONTROL_LARGE,
      //     // 启用显示定位
      //     enableGeolocation: true
      //   });
      //   map.addControl(navigationControl);
      //   var i = 0;
      //   var opts = {
      //     width: 30,     // 信息窗口宽度
      //     height: 5,     // 信息窗口高度
      //     enableMessage: false//设置允许信息窗发送短息
      //   };
      //   // 函数 创建多个标注
      //   // console.log(this.deviceList);
      //   var pointArray = new Array();
      //   for (; i < this.deviceList.length; i++) {
      //     if (this.deviceList[i].amendLongitude == '') {
      //       this.deviceList[i].amendLongitude = 120
      //     }
      //     if (this.deviceList[i].amendLatitude == '') {
      //       this.deviceList[i].amendLatitude = 30
      //     }
      //     // console.log(this.deviceList[i].amendLongitude);
      //     var points = new BMap.Point(this.deviceList[i].amendLongitude, this.deviceList[i].amendLatitude);//创建坐标点
      //     var content = `设备编号：${this.deviceList[i].emptys}<br/>详细信息：<a href="#/hourstate?id=${this.deviceList[i].deviceId}&sn=${this.deviceList[i].emptys}&mark=${this.deviceList[i].mark}&address=${this.deviceList[i].address}&type=true">查看</a>`;
      //     console.log(this.deviceList[i])
      //     if (this.deviceList[i].empty =='离线') {
      //       const deviceSize = new BMap.Size(16, 26);
      //       const deviceIcon = new BMap.Icon(newiconCar, deviceSize, {
      //         imageSize: deviceSize
      //       });

      //       var marker = new BMap.Marker(points, {
      //         icon: deviceIcon
      //       })
      //     } else {
      //       const deviceSize = new BMap.Size(16, 26);
      //       const deviceIcon = new BMap.Icon(iconCar, deviceSize, {
      //         imageSize: deviceSize
      //       });

      //       var marker = new BMap.Marker(points, {
      //         icon: deviceIcon
      //       })

      //     }
      //     map.addOverlay(marker);
      //     addClickHandler(content, marker);
      //     function addClickHandler (content, marker) {
      //       marker.addEventListener('click', e => {
      //         // console.log(this.deviceList)
      //         // this.deviceList.forEach(a => {
      //         //   if (a.amendLongitude == e.target.point.lng && a.amendLatitude == e.target.point.lat) {
      //         //     this.$router.push({ path: '/hourstate', query: { id: a.deviceId, sn: a.emptys, mark: a.mark, address: a.address } })
      //         //   }
      //         // })
      //         openInfo(content, e)
      //       })
      //     }
      //     function openInfo (content, e) {
      //       var p = e.target;
      //       var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      //       var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
      //       map.openInfoWindow(infoWindow, point); //开启信息窗口
      //     }

      //     // pointArray[i] = new BMap.Point(this.deviceList[i].amendLongitude, this.deviceList[i].amendLatitude);
      //   }
      //   // map.setViewport(pointArray);
      // }, 500);


    },
    mapmodulTemp (res) {
      console.log(res)
      this.changmap = false;
      // console.log(this.changmap)
      setTimeout(() => {
        var map = new BMap.Map("allmapMain");

        var point = new BMap.Point(localStorage.getItem('pointlngright'), localStorage.getItem('pointlatright'));

        map.centerAndZoom(point, 15);
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        var i = 0;
        var opts = {
          width: 30,     // 信息窗口宽度
          height: 5,     // 信息窗口高度
          enableMessage: false//设置允许信息窗发送短息
        };
        // 函数 创建多个标注
        // console.log(this.deviceList);
        var pointArray = new Array();
        for (; i < res.length; i++) {
          if (res[i].amendLongitude == '') {
            res[i].amendLongitude = 120
          }
          if (res[i].amendLatitude == '') {
            res[i].amendLatitude = 30
          }
          // console.log(res[i].amendLongitude);
          var points = new BMap.Point(res[i].amendLongitude, res[i].amendLatitude);//创建坐标点
          var content = `设备编号：${res[i].emptys}<br/>详细信息：<a href="#/hourstate?id=${res[i].deviceId}&sn=${res[i].emptys}&mark=${res[i].mark}&address=${res[i].address}&type=true">查看</a>`;
          console.log(res[i])
          if (res[i].empty =='离线') {
            const deviceSize = new BMap.Size(16, 26);
            const deviceIcon = new BMap.Icon(newiconCar, deviceSize, {
              imageSize: deviceSize
            });

            var marker = new BMap.Marker(points, {
              icon: deviceIcon
            })
          } else {
            const deviceSize = new BMap.Size(16, 26);
            const deviceIcon = new BMap.Icon(iconCar, deviceSize, {
              imageSize: deviceSize
            });

            var marker = new BMap.Marker(points, {
              icon: deviceIcon
            })

          }


          map.addOverlay(marker);
          addClickHandler(content, marker);
          function addClickHandler (content, marker) {
            marker.addEventListener('click', e => {
              // console.log(this.deviceList)
              // this.deviceList.forEach(a => {
              //   if (a.amendLongitude == e.target.point.lng && a.amendLatitude == e.target.point.lat) {
              //     this.$router.push({ path: '/hourstate', query: { id: a.deviceId, sn: a.emptys, mark: a.mark, address: a.address } })
              //   }
              // })
              openInfo(content, e)
            })
          }
          function openInfo (content, e) {
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
            map.openInfoWindow(infoWindow, point); //开启信息窗口
          }

          // pointArray[i] = new BMap.Point(this.deviceList[i].amendLongitude, this.deviceList[i].amendLatitude);
        }
        // map.setViewport(pointArray);
      }, 500);


    },
    // ...mapActions(['again']),
    // changezhi(val){
    //   console.log(val)
    //   let that=this;

    //     this.$axios
    //     .post(
    //     that.httpUrl+"Datapoints/getData",
    //     this.$qs.stringify({
    //         devId:val
    //       })
    //     )
    //     .then(message => {

    //       let messData=JSON.parse((message.data.errMsg).slice(6))
    //       console.log(messData)
    //       if(messData.errno==0){
    //           for(let i=0;i<messData.data.datastreams.length;i++){
    //             console.log(i)
    //             if(messData.data.datastreams[i].id=='2003'){
    //                that.lnging=(messData.data.datastreams[i].datapoints[0].value)/100000
    //                if(that.lnging==0){
    //                  that.lnging=120.2282128307
    //                }
    //             }
    //             if(messData.data.datastreams[i].id=='2002'){
    //                that.laging=(messData.data.datastreams[i].datapoints[0].value)/100000
    //                if(that.laging==0){
    //                  that.laging=30.2693046269
    //                }

    //             }
    //           }
    //       }else{
    //           that.lnging=120.2282128307
    //           that.laging=30.2693046269
    //       }
    //       var obj={
    //           ab:that.lnging,
    //           bc:that.laging
    //       }
    //       that.arrs.push(obj)
    //       console.log(that.arrs)
    //       that.arrs.forEach((a,b)=>{
    //          var map = new BMap.Map("allmapMain");
    //         setTimeout(function(){

    //               // that.replace1=that.lnging
    //               // that.replace2=that.laging

    //             var ggPoint = new BMap.Point(a.ab,a.bc); 
    //             var convertor = new BMap.Convertor();

    //             var pointArr = [];
    //             pointArr.push(ggPoint);

    //             convertor.translate(pointArr, 1, 5, function (data){
    //             if(data.status === 0) {
    //               var marker = new BMap.Marker(data.points[0]);
    //               var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
    //               map.setCenter(data.points[0]);
    //               console.log(data.points[0])
    //               that.menga=data.points[0].lng
    //               that.mengb=data.points[0].lat
    //               console.log(that.menga)
    //               console.log(that.mengb)
    //                var point = new BMap.Point(that.menga,that.mengb)
    //                 map.centerAndZoom(point, 16);
    //                 var geoc = new BMap.Geocoder(); 
    //                 geoc.getLocation(point, function(rs){
    //                   var addComp = rs.addressComponents;
    //                   console.log(addComp)
    //             //  that.newdirectory=addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber

    //             //       if(that.infows.number=="1"){
    //             //         that.psya=that.infows.address
    //             //       }else if(that.infows.number==0||that.infows.number==''){
    //             //         that.psya=that.newdirectory
    //             //         console.log(that.psya)
    //             //       }
    //             //         }); 
    //                 // that.$axios
    //                 // .post(
    //                 // that.httpUrl+"Datapoints/findByDevId",
    //                 // that.$qs.stringify({
    //                 //         devId:val
    //                 //     })
    //                 // )
    //                 // .then(message => {
    //                 //   console.log(message)
    //                 //   that.infows.address=message.data.detail.address
    //                 //   that.infows.number=message.data.detail.number
    //                 //   console.log(that.infows.address)

    //                 })
    //             }
    //             })
    //         })
    //       })

    //   })


    // },
    // refresh(done) { 	
    // 	this.timeout = setTimeout(()=>{
    // 		this.searchclick()
    // 		this.$refs.my_scroller.finishPullToRefresh()
    // 	}, 1500)
    // },
    // nextPage(index){
    //   console.log(index)
    //   this.$router.push({path:'/',query:{id:this.deviceList[index]}})
    // },
    // login(){
    // 	let that=this
    // 	this.$http({
    // 		methods:'post',
    // 		url:this.httpUrl+'',
    // 		data:Qs.stringify({
    // 			userName:this.userName,
    // 			passWord:this.passWord
    // 		})
    // 	}).then(function(res){
    // 		console.log(res)
    // 	})
    // },
    changvalue () {
      console.log(1)
    },
    searchclick () {
      let that = this
      this.$axios
        .post(
          that.httpUrl + "wechatUser/findDevbyUser",
          this.$qs.stringify({
            weChatUsePhone: sessionStorage.getItem("weChatUsePhone")
          })
        )
        .then(res => {
          console.log(res);
          if (res.data.resCode == 0) {
            that.deviceList = [];
            that.deviceLists = [];
            that.devol = [];
            for (var i = 0; i < res.data.s.length; i++) {
              that.zong.push(res.data.s[i])
              that.deviceList.push(res.data.s[i])
              that.deviceLists.push(res.data.s[i])

            }






            for (var s = 0; s < that.deviceList.length; s++) {
              that.trueys.push(that.deviceList[s].deviceId)
              let dataC = {
                devId: that.trueys,
                page:1,
                pageSize:that.$store.state.allList
              }

              this.$axios
                .post(
                  that.httpUrl + "devices/accurate",
                  this.$qs.stringify(dataC)
              )
                .then(message => {
                  if (message.data.errno == 0) {
                    that.newfalse = 0;
                    that.newtrue = 0
                    for (var a = 0; a < message.data.data.devices.length; a++) {
                      for (var n = 0; n < that.deviceList.length; n++) {
                        if (message.data.data.devices[a].id == that.deviceList[n].deviceId) {
                          // console.log(message.data.data.devices[a].online)
                          that.deviceList[n].empty = message.data.data.devices[a].online
                          that.deviceList[n].emptys = message.data.data.devices[a].title
                          if (that.deviceList[n].empty) {
                            that.newtrue++
                            that.deviceList[n].empty = '在线'
                            that.pro = 1
                          } else {
                            that.newfalse++
                            that.deviceList[n].empty = '离线'
                            that.pro = 0
                          }
                          if (that.deviceList[n].empty == undefined) {
                            that.deviceList[n].empty = '设备异常'
                            that.pro = 2
                          }
                        }
                      }
                      that.maindeviceList = that.deviceList;
                    }
                  } else {
                    //  that.pro=2
                  }

                })
            }
            let foolList = sessionStorage.getItem('arrList')
            if (JSON.parse(foolList).length == that.deviceList.length) {
              that.deviceList = JSON.parse(foolList)
              that.num = 0;
              that.listnum = 0
              that.deviceList.forEach(a => {
                if (a.empty == '离线') {
                  that.num++
                } else {
                  that.listnum++
                }
              })
            } else {
              that.deviceList = that.deviceLists
            }

          }
        })


    },
    delec () {
      // alert('99999')
      // let that=this;
      // that.$axios
      //   .post(
      //   that.httpUrl+"wechatUser/removeWechatDev",
      //   this.$qs.stringify({
      //       weChatUsePhone:sessionStorage.getItem("weChatUsePhone"),
      //       id:that.math
      //   })
      //   )
      //   .then(res => {
      //   console.log(res);
      //     if(res.data.resCode==0){
      //       alert('成功')

      //     }
      //   })
      let that = this;
      this.$axios
        .post(
          that.httpUrl + "wechatUser/removeWechatDev",
          this.$qs.stringify({
            weChatUsePhone: sessionStorage.getItem("weChatUsePhone"),
            id: that.math
          })
        )
        .then(res => {
          console.log(res);
          that.bg = false;
          that.po = false;
          sessionStorage.removeItem('arrList')
          that.searchclick()

        })
    },
    abc (val, index) {
      console.log(index)
      console.log(val)
      var newarr = [];
      for(let i=0;i<this.deviceList.length;i++){
        if(this.deviceList[i].emptys==val.emptys){
          newarr=this.deviceList.splice(i,1)
        }
      }
      console.log(newarr);
      console.log(this.deviceList)
      this.coolarr = newarr.concat(this.deviceList)
      console.log(this.coolarr)
      // newarr = this.deviceList.splice(index, 1)
      // this.coolarr = newarr.concat(this.deviceList)
      sessionStorage.setItem('arrList', JSON.stringify(this.coolarr))
      this.$router.push({ path: '/hourstate', query: { id: val.deviceId, sn: val.emptys, mark: val.mark, address: val.address,type:true} })
    },
    showClick (item) {
      this.bg = true;
      this.isUnAnima = false;
      this.isAnima = true;
      this.math = item.id;
      // MessageBox.confirm('确定要删除么？').then(action => {
      //   console.log(item)
      // })
    },
    dell (index) {
      // this.mo=0;
      this.po = true;
      this.isAnima = false;
    },
    all () {
      console.log(this.deviceList);
      this.searchclick();
      this.saiData = false;
    },
    online () {
      let dev = [];
      this.deviceList = this.maindeviceList;
      for (let i = 0; i < this.deviceList.length; i++) {
        if (this.deviceList[i].empty == "在线") {
          dev.push(this.deviceList[i]);
        }
      }
      this.deviceList = dev;
      // console.log(dev);
      this.saiData = false;
    },
    outline () {
      let dev = [];
      this.deviceList = this.maindeviceList;
      for (let i = 0; i < this.deviceList.length; i++) {
        if (this.deviceList[i].empty == "离线") {
          dev.push(this.deviceList[i]);
        }
      }
      this.deviceList = dev;
      this.saiData = false;
    },
    hideClickno () {
      this.bg = false;
      this.po = false
      this.isUnAnima = false;
      this.isAnima = false;
    },
    hideClick () {
      this.po = false
      let that = this;
      this.isAnima = false;
      this.isUnAnima = true;
      let t = setTimeout(function () {
        that.bg = false;
        clearTimeout(t)
      }, 250)
    },
    saoyisao () {
      let that = this;
      this.$axios
        .get(
          that.httpUrl + 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
        )
        .then(function (message) {
          console.log(message);
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端弹出出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: message.data.appid, // 必填，公众号的唯一标识
            timestamp: message.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        })
      wx.ready(function () {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            let p1 = result.indexOf("state=");
            let p2 = result.indexOf("#");
            // alert(p2);
            let devid=result.substring(p1 + 6, p2);
              // alert(devid);
              // let devid='0219070022'
              that.$axios.post(
                that.httpUrl+"devices/conditionFind",
                that.$qs.stringify({
                    pageNum:1,
                    pageSize:1,
                    status:0,
                    devParaSn:devid,
                    userId:'331fa66faa314260a2d557c65e3e884b',
                    dealer:'123'
                  })
                ).then(res=>{

               var id=res.data.result[0].deviceId
              that.$axios
                .post(
                  that.httpUrl + "Amend/findOne",
                  that.$qs.stringify({
                    id: id
                  })
                )
                .then(res => {
                  let address=res.data.amend.address;
                  let mark=res.data.amend.mark;
                  that.$axios
                  .post(
                    that.httpUrl + "devices/findsn",
                    that.$qs.stringify({
                      devId: id
                    })
                  )
                  .then(res => {
                    let sn=res.data.i.devParaSn;
                    that.$router.push({ path: '/hourstate', query: { id: id, sn: sn, mark: mark, address: address,type:false } })
                  })
                })
               })
          }
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hellohead {
  height: 100%;
  width: 100%;
  text-align: center;
}
.hello {
  width: 25%;
  /* height: 210px;
  position: relative;
  padding-top: 60px;
  background: #ff5907; */
}
.hello .mor {
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  color: #fff;
}
.hello .png {
  width: 100px;
  height: 100px;
  margin: 4px auto;
}
.hello .png img {
  width: 100%;
  height: 100%;
  z-index: 9999;
  border-radius: 50%;
}
.hello .mor {
  margin-top: 30px;
  text-align: center;
}
.hello .no {
  color: #ff0c00;
}
.hello p:nth-child(3) {
  position: absolute;
  top: 0.5rem;
  right: 32px;
  width: 63px;
  height: 56px;
}
.hello p:nth-child(3) img {
  width: 100%;
  height: 100%;
}
.inputBorder {
  width: 100%;
  background: #f8f8f8;
  position: relative;
  height: 100px;
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  z-index: 55;
}
.lineSaixuan {
  position: absolute;
  top: 120px;
  right: 10px;
  width: 150px;
  height: 210px;
  background: #fff;
  border: 1px solid #eee;
  z-index: 9999;
}
.saiBox {
  width: 100%;
  height: 70px;
  text-align: center;
  font-size: 0.4rem;
  line-height: 70px;
  color: #515151;
}
.saiBox:nth-of-type(1) {
  border-bottom: 1px solid #eee;
}
.saiBox:nth-of-type(2) {
  border-bottom: 1px solid #eee;
}
.lineSaixuan span {
  display: block;
  width: 0;
  height: 0;
  border-width: 0 28px 28px;
  border-style: solid;
  border-color: transparent transparent #fff; /*透明 透明  黄*/
  position: absolute;
  top: -28px;
  right: 15px;
}
.li {
  height: 64px;
  width: 98%;
  line-height: 64px;
  position: absolute;
  top: 18px;
  left: 1%;
  background: #f8f8f8;
  border-radius: 10px;
  font-size: 0.4rem;
  font-family: 'PingFang-SC-regular';
  color: #d8d8d8;
}
input {
  border: none;
  outline: none;
  text-indent: 10%;
  height: 64px;
  width: 6rem;
}
.li p {
  width: 22px;
  height: 24px;
}
.li p img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.li p {
  position: absolute;
  top: 3%;
  left: 1%;
  z-index: 999;
}
input[type='text'] {
  border-radius: 10px;
}
/* li{height: 130px;background: #fff;color: #303030;display: flex;justify-content: center;} */
ul {
  overflow-y: scroll;
}
li {
  height: 130px;
  background-color: #fff;
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  width: 749px;
}
li div {
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
}
li div img {
  width: 100%;
  height: 100%;
}
/* li div:nth-child(1){margin:35px -95px 35px 0px;height: 60px;width: 60px;} */
.innerimg {
  height: 60px;
  width: 60px;
  margin-top: 30px;
}
li div:nth-child(1) {
  height: 100%;
  width: 20%;
}
li div:nth-child(2) {
  height: 130px;
  line-height: 60px;
  width: 60%;
}
li div:nth-child(3) {
  height: 130px;
  line-height: 130px;
}
li div:nth-child(4) {
  height: 130px;
  line-height: 140px;
  width: 10%;
}
.flexBoxBG {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.flexBoxCT {
  position: fixed;
  height: 150px;
  width: 90%;
  background-color: #ffffff;
  bottom: -150px;
  z-index: 9999999;
  border-radius: 20px;
  margin: 0 5%;
}
.Feat {
  width: 100%;
  margin: auto;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 30px;
}
.positions {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(108, 108, 108, 0.4);
}
.box {
  font-size: 30px;
  width: 70%;
  margin: 40% 15%;
  text-align: center;
  height: 260px;
  line-height: 130px;
  z-index: 99;
}
.box > p:nth-of-type(1) {
  border-bottom: 1px solid #cccccc;
  font-size: 32px;
  line-height: 1.733333rem;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.box > p:nth-of-type(2) {
  display: flex;
  justify-content: space-around;
  font-size: 32px;
  line-height: 1.733333rem;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.anima {
  animation: mymove1 0.25s infinite;
  -webkit-animation: mymove1 0.25s 1; /*Safari and Chrome*/
  bottom: 10px;
}
.flexBoxCT p:nth-child(1) {
  border-bottom: 1px solid rgb(248, 246, 246);
}
.Feat {
  width: 100%;
  height: 50%;
  line-height: 75px;
  text-align: center;
}
@keyframes mymove1 {
  from {
    bottom: -100px;
  }
  to {
    bottom: 10px;
  }
}

@-webkit-keyframes mymove1 {
  from {
    bottom: -100px;
  }
  to {
    bottom: 10px;
  }
}

.unAnima {
  animation: mymove2 0.25s infinite;
  -webkit-animation: mymove2 0.25s 1; /*Safari and Chrome*/
  bottom: -300px;
}
@keyframes mymove2 {
  from {
    bottom: 10px;
  }
  to {
    bottom: -100px;
  }
}

@-webkit-keyframes mymove2 {
  from {
    bottom: 10px;
  }
  to {
    bottom: -100px;
  }
}

.animaBg {
  display: block;
}
@keyframes mymove3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes mymove3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.unAnimaBg {
  display: none;
}
@keyframes mymove4 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@-webkit-keyframes mymove4 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
/* .model{position: fixed;top:0;bottom: 0;left: 0;right: 0;background: rgba(108,108,108,0.5)} */
.api {
  width: 65px;
}
.positions {
  z-index: 96;
}
.flexBoxBG {
  z-index: 9;
}
.deleteimg {
  height: 32%;
  width: 14% !important;
}
.sapan{
  width: 130px;
  height: 40px;
  display: block;
  line-height: 40px;
  text-align: center;
  color: #fff;
  position: absolute;
  right: 0.2rem;
  top:1.5rem;
}
</style>