<template>
  <div>
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
      <!-- <div @click.stop="nextClick('hourstate')">
						<span class="three"><img src="../../static/image/xiang.png" alt=""></span>
						<span class="lastpos">设备详情</span>
					</div>
					<div @click.stop="nextClick('water')">
						<span><img src="../../static/image/white.png" alt=""></span>
						<span class="lastpos">用水统计</span>
					</div>
					<div @click.stop="nextClick('mapshow')">
						<span class="c four"><img src="../../static/image/app.png" alt=""></span>
						<span class="lastpos">周边设备</span>
					</div>
					<div @click.stop="nextClick('homepage')">
						<span class="three"><img src="../../static/image/tongji.png" alt=""></span>
						<span class="lastpos">地图展示</span>
					</div> -->
      <div @click.stop="nextClick2('hourstate')">
        <span class="three"><img src="../../static/image/xiang.png"
               alt=""></span>
        <span class="lastpos">设备详情</span>
      </div>
      <div @click.stop="nextClick('homepage')">
        <span class="three"><img src="../../static/image/tongji.png"
               alt=""></span>
        <span class="lastpos">地图展示</span>
      </div>
      <div @click.stop="nextClick('water')">
        <span><img src="../../static/image/white.png"
               alt=""></span>
        <span class="lastpos">用水统计</span>
      </div>
      <div @click.stop="nextClick('mapshow')"
           class="lone">
        <span class="c four"><img src="../../static/image/app.png"
               alt=""></span>
        <span class="lastpost">周边设备</span>
      </div>
    </div>
    <div class="inputBorder">
      <!-- <div class="li">
				<p>
					<img src="../../static/image/fang.png" alt="">
				</p>
				<input type="text"  @keypress="searchGoods" style="font-size:12px" v-model="value" @input="changeList" placeholder="输入条件进行搜索"/>
			</div> -->
    </div>
    <div class="main-body"
         v-if="ifom"
         ref="wrapper"
         :style="{ height: (wrapperHeight) + 'px' }">
      <!-- <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore"
                   :auto-fill="false"> -->
      <ul class="huancoloe"
          style="    height: 9.1rem;
    overflow: hidden;">
        <li>
          <div class="first">
            <!-- <span class="pl">
              <img src="../../static/image/ti.png"
                   alt="">
            </span> -->
            <span style="color:#000">设备编号：</span>
            <span style="color:#000;font-weight: bold;">{{aaa}}</span>
          </div>
          <div class="new">
            <span>当前设备状态：</span>
            <span style="color:red">设备异常</span>
          <!--   <span style="color:green"
                  v-else>设备正常</span> -->
          </div>
          <div class="new newcolor" v-if="typeTwo">
            <span>电机限位开关：</span>
            <span :class="{'red':fault_abnormal=='0'}">{{fault_abnormal|afilter}}</span>
          </div>
          <div class="new newcolor">
            <span>设备倾倒报警：</span>
            <span :class="{'red':fault_destruction=='0'}">{{fault_destruction | afilter}}</span>
          </div>
          <div class="new newcolor">
            <span>压力异常报警：</span>
            <span :class="{'red':fauCode=='0'}">{{fauCode|afilter}}</span>
          </div>
          <div class="new newcolor">
            <span>设备受到撞击：</span>
            <span :class="{'red':fault_opening=='0'}">{{fault_opening|afilter}}</span>
          </div>
          <div class="new newcolor" v-if="typeTwo">
            <span>电机控制功能：</span>
            <span :class="{'red':fault_leakage=='0'}">{{fault_leakage|afilter}}</span>
          </div>
          <div class="new newcolor" v-if="typeTwo">
            <span>智能卡感应功能：</span>
            <span :class="{'red':fault_pressure=='0'}">{{fault_pressure|afilter}}</span>
          </div>
          <div class="new newcolor">
            <span>设备漏水报警：</span>
            <span :class="{'red':fault_temperature=='0'}">{{fault_temperature|afilter}}</span>
          </div>
          <!-- <div class="new newcolor">
            <span>水温：</span>
            <span :class="{'red':fault_pay=='0'}">{{fault_pay|afilter}}</span>
          </div> -->
          <div class="new newcolor">
            <span>{{nameSn}}</span>
            <span :class="{'red':fault_hit=='0'}">{{fault_hit|afilter}}</span>
          </div>
        </li>
      </ul>

      <!-- </mt-loadmore> -->
    </div>
    <div class="infrom huancoloe"
         style="    margin-top: 0.4rem;background:#fff;heigth:11.7rem;"
         v-if="infrom==0" ref="wrapper">
      <div style="line-height: 1.333333rem;
    text-align: left;
    margin-left: 0.506667rem;
    font-size: 0.4rem;
    font-family: 'PingFang-SC-regular';
        height: auto;
    background: #fff;"
           class="li pllist">
        <div class="">
          <!-- <span style="width: 100%;
    height: 100%;
    vertical-align: middle;
    margin-bottom: 0.133333rem;">
            <img src="../../static/image/ti.png"
                 style="width:0.4rem;height:0.4rem"
                 alt="">
          </span> -->
          <span>设备编号：</span>
          <span style="color:#000;font-weight: bold;">{{aaa}}</span>
        </div>
        <div class="new">
          <span>当前设备状态</span>
          <span>设备正常</span>
        </div>
        <div class="new newcolor" v-if="typeTwo">
          <span>电机控制报警：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor" v-if="typeTwo">
          <span>电机限位开关：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>{{nameSn}}</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>设备倾倒报警：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>非法开启报警：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>设备漏水报警：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>压力传感器状态：</span>
          <span v-if="nb">正常</span>
        </div>
      <!--   <div class="new newcolor">
          <span>温度传感器状态：</span>
          <span v-if="nb">正常</span>
        </div> -->
        <div class="new newcolor" v-if="typeTwo">
          <span>智能卡传感器状态：</span>
          <span v-if="nb">正常</span>
        </div>
        <div class="new newcolor">
          <span>设备受到撞击：</span>
          <span v-if="nb">正常</span>
        </div>
      </div>
    </div>

    <div class="infrom huancoloe"
         style="    margin-top: 0.4rem;background:#fff;heigth:11.7rem;"
         v-if="infromNn" ref="wrapper">
      <div style="line-height: 1.333333rem;
    text-align: left;
    margin-left: 0.506667rem;
    font-size: 0.4rem;
    font-family: 'PingFang-SC-regular';
        height: auto;
    background: #fff;"
           class="li">
        <div class="">
          <span style="width: 100%;
    height: 100%;
    vertical-align: middle;
    margin-bottom: 0.133333rem;">
            <img src="../../static/image/ti.png"
                 style="width:0.4rem;height:0.4rem"
                 alt="">
          </span>
          <span>设备编号：</span>
          <span style="color:#000;font-weight: bold;">{{aaa}}</span>
        </div>
        <div class="new">
          <span>当前设备状态</span>
          <span style="color:red">设备异常</span>
        </div>
        <div class="new newcolor" >
          <span>电机控制报警：</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>电机限位开关：</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>{{nameSn}}</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>设备倾倒报警：</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>非法开启报警：</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>设备漏水报警：</span>
          <span >无数据</span>
        </div>
        <div class="new newcolor">
          <span>压力传感器状态：</span>
          <span >无数据</span>
        </div>
       <!--  <div class="new newcolor">
          <span>温度传感器状态：</span>
          <span >无数据</span>
        </div> -->
        <div class="new newcolor">
          <span>智能卡传感器状态：</span>
          <span>无数据</span>
        </div>
        <div class="new newcolor">
          <span>设备受到撞击：</span>
          <span >无数据</span>
        </div>
      </div>
    </div>
    <!-- <div class="load" v-if="load">
			<img  src="../../static/image/loading.gif" alt="">
		</div> -->
    <div id="allmap"></div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=PWttlCcjWHRXa9YrV7LwVIzlT7qQRlNS"></script>
<script>
import Qs from 'qs'
import axios from 'axios'
import Picker from 'better-picker'
import { Indicator } from 'mint-ui';
import { afilter,temperature } from '../api/api.js'
import { Toast } from 'mint-ui';
import { Loadmore } from 'mint-ui';
export default {
  name: 'historynum',
  data () {
    return {
      nameSn:'应急开关状态：',
      Page: 1,//分页
      PageSize: 10, //每次请求的个数
      allLoaded: false,//是否加载完毕
      haveMore: true, //是否有更多数据
      wrapperHeight: 0,
      infromNn:false,
      more: '',
      fault_destruction: '',
      fault_hit: '',
      fault_opening: '',
      fault_abnormal: '',
      fault_leakage: '',
      fault_temperature: '',
      fault_pay: '',
      fault_pressure: '',
      fauCode: '',
      ab: '',
      obj: [],
      objs: [],
      infrom: 1,
      ifom: true,
      searchVal: "",
      value: '',
      sus: '',
      wtime: ['', '', '', '', ''],
      htime: ['', '', ''],
      jointime: '',
      joinhtime: '',
      devvol: [],
      devVOL: [],
      devWarning: [],
      devWarnings: [],
      devStatus: [],
      block: true,
      numw: [],
      none: 1,
      photo: true,
      show: false,
      datemg: false,
      undatemg: true,
      typeTwo:true,
      bg: '',
      col: '',
      cols: '',
      nb: '',
      numtime: [],
      infow: {
        devLockState: '',
        devStatus: '',
        deviceId: '',
        deviceModel: '',
        deviceType: '',
        devLongitude: '',
        devLatitude: '',
        devParaSn: '',
        devParaSntwo: ''
      },
      aaa: '',
      offset: '',
      bone: 0,
      numvalue: [],
      numvalues: '',
      newdirectory: '',
      psya: '',
      numnewvalue: [],
      griddata: [],
      kong: '',
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
        devWarningtime: ''
      }
    }
  },
  created () {　　//打开页面首先自动获取一次数据
    let that = this;
    console.log(that.$route.query.sn)
    if((that.$route.query.sn).substr(0,2)=='03'){
      that.typeTwo=false;
      that.nameSn="非法开启："
    }else{
      that.typeTwo=true;
      that.nameSn="应急开关状态："
    }
    if (that.$route.query.lab == 1) {
      that.nb = true

      that.infrom = 0
      that.ifom = false

    } else {
      that.nb = false
      let data={
        devId:that.$route.query.id
      }
      // Indicator.open('Loading...');
      axios({
          method: 'post',
          url: that.httpUrl + '/Datapoints/getBatData',
          data: Qs.stringify(data)
        }).then(function (message) {
          let messData = message.data.errMsg
          messData=messData.data.devices[0].datastreams
          let powNoce='';
          console.log(messData)
          if(messData==undefined){
            that.infrom = 1
            that.ifom = false
            that.infromNn=true
            return false
          }
          for (let i = 0; i < messData.length; i++) {
            switch (messData[i].id) {
              case '2011': powNoce =parseInt(messData[i].value,10).toString(2);
                break;
              default: break;
            }
          }
          console.log(powNoce)
          let powNoceLength=10-powNoce.length;
          console.log(powNoceLength);
          if(powNoceLength<10){
            for(let i=0;i<powNoceLength;i++){
              // console.log(i)
              // console.log(powNoceLength);
              powNoce="0"+powNoce
            }
          }
          console.log(powNoce);
          that.fault_destruction=powNoce.substring(9,10)
          that.fault_hit=powNoce.substring(8,9)
          console.log(that.fault_hit)
          that.fault_opening=powNoce.substring(7,8)
          that.fault_abnormal=powNoce.substring(6,7)
          that.fault_leakage=powNoce.substring(5,6)
          that.fault_temperature=powNoce.substring(4,5)
          that.fault_pay=powNoce.substring(3,4)
          that.fault_pressure=powNoce.substring(2,3)
          that.fauCode=powNoce.substring(1,2)
        })
    }

  },
  methods: {
    loaddata () {//加载数据从vuex中拿数据
      let that = this;
      this.$axios
        .post(
          that.httpUrl + "equipment/list",
          this.$qs.stringify({
            page: that.Page,
            pageSize: that.PageSize,
            devId: that.$route.query.id,
            userId: '331fa66faa314260a2d557c65e3e884b',
            dealer: 123,
          })
        )
        .then(message => {
          console.log(message);
          if (message.data.resCode == 0) {
            that.devWarning = message.data.results[0]
          } else {
            that.infrom = 0
          }
        })
    },








    nextClick (next) {
      this.$router.push({ path: '/' + next, query: { id: this.$route.query.id, sn: this.$route.query.sn, mark: this.$route.query.mark, address: this.$route.query.address,type:true} });
    },
    nextClick2 (next) {

      if((this.$route.query.sn).substr(0,2)=='03'){
        this.$router.push({ path: '/hourstate3', query: { id: this.$route.query.id, sn: this.$route.query.sn, mark: this.$route.query.mark, address: this.$route.query.address,type:true} })
      }else{
        this.$router.push({ path: '/hourstate', query: { id: this.$route.query.id, sn: this.$route.query.sn, mark: this.$route.query.mark, address: this.$route.query.address,type:true} })
      }
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
    changeList () {
      console.log(this.value)
    },
    place () {
      let that = this;
      this.$axios
        .post(
          that.httpUrl + "Datapoints/findDetails",
          this.$qs.stringify({
            devId: that.$route.query.id
          })
        )
        .then(message => {
          console.log(message);
          for (var s = 0; s < message.data.details.length; s++) {
            if (message.data.details[s].deviceId == that.$route.query.id) {
              that.infow.deviceId = message.data.details[s].deviceId
              that.infow.deviceModel = message.data.details[s].deviceModel
              that.infow.deviceType = message.data.details[s].deviceType
              that.infow.devLatitude = message.data.details[s].devLatitude
              that.infow.devLongitude = message.data.details[s].devLongitude
              that.infow.address = message.data.details[s].address
              that.infow.number = message.data.details[s].number
            }

          }
          var map = new BMap.Map("allmap");
          var point = new BMap.Point(120, 30);
          map.centerAndZoom(new BMap.Point(that.infow.devLatitude, that.infow.devLongitude), 16);
          map.enableScrollWheelZoom(true);
          var geoc = new BMap.Geocoder();
          geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            that.newdirectory = addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
            console.log(that.newdirectory)
            console.log(that.infow.number)
            if (that.infow.number == 1) {
              that.psya = that.infow.address
            } else if (that.infow.number == 0 || that.infow.number == '') {
              that.psya = that.newdirectory
            }
          })
        });
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title
    console.log(this.$route.query.id)
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    this.aaa=this.$route.query.sn;
    let that = this;
    // that.$axios
    //   .post(
    //     that.httpUrl+"Snclass/find",
    //     that.$qs.stringify({
    //       pageNum: 1,
    //       pageSize: 10,
    //       userId: '331fa66faa314260a2d557c65e3e884b',
    //       dealer: 123,
    //       devId: that.$route.query.id,
    //     })
    //   )
    //   .then(message => {
    //     console.log(message);
    //     if (message.data.resCode == 0) {
    //       that.aaa = message.data.result[0].devParaSn
    //     }
    //   })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello{background: #f2f2f2;}
    .hello .time{font-size: 14px;font-family:'PingFang-SC-regular';padding-top:18px;margin-left:30px;margin-bottom:28px;color: #787878}
    .hello .flee{display: flex;justify-content: space-between;}
    .flee div{margin:0 90px;height: 28px;line-height: 28px;font-size: 32px;color: #303030;width: 188px;height: 28px;}
    .hello .item{height: 120px;width: 100%;background: #fff;margin-bottom: 30px;}
    .li{display: flex;background-color: #fff;height: 120px;border-bottom: 1px solid #f2f2f2;font-size: 16px;width: 100%;}
    .li div:nth-child(1){width: 8%;height: 60px;margin:30px 26px 30px 30px}
    .li div img:nth-child(1){width: 100%;height: 100%;}
    .li div:nth-child(2){height: 120px;line-height: 120px;font-size: 32px;font-family:'PingFang-SC-regular';width:44%;}
    .li div:nth-child(3){width: 44%;height: 120px;line-height: 120px;font-size: 26px;font-family:'PingFang-SC-regular';color: #787878;}
    #popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.5);position: absolute;left: 0;top: 0;}
    .popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:5px ;}
    .popupBox p{height: 0.6rem;line-height: 0.6rem;font-size: 0.28rem;color: #4ad8da;}
    .record{width: 100%;text-align: center;color: #787878;padding-top: 100px;} */
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
}
.pos {
  width: 227px;
  /*height: 330px;*/
  border-radius: 10px;
  position: fixed;
  left: 20px;
  z-index: 99999;
  top: 90px;
  overflow: hidden;
  background: rgba(40, 40, 41, 0.9);
}
.pos div {
  width: 210px;
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
.four {
  width: 32px !important;
  height: 46px !important;
  display: inline-block;
}
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
  margin-right: 0% !important;
  margin-left: 105px;
}

/* .inputBorder{width: 100%;background:#fff;position: relative;height: 100px;font-size: 30px;font-family:'PingFang-SC-regular';z-index: 66;} */
.li {
  height: 64px;
  width: 690px;
  line-height: 64px;
  position: absolute;
  /* top: 18px; */
  left: 4%;
  background: #f8f8f8;
  border-radius: 10px;
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  color: #d8d8d8;
  position: relative;
}
input {
  border: none;
  outline: none;
  text-indent: 9%;
  height: 64px;
  width: 690px;
  background: #e7e7e7;
  border-radius: 10px;
}
input[type='text'] {
  border-radius: 10px;
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
  left: 3%;
}
.huancoloe {
  margin-top: 30px;
}
.huancoloe li {
  height: auto;
  background: #fff;
}
.twos {
  height: auto !important;
}
.huancoloe li div {
  height: 58px;
  line-height: 58px;
}
.new {
  width: 94%;
  display: flex;
  justify-content: space-between;
}

.huancoloe li div span:nth-child(1) {
  font-size: 26px;
  color: #767676;
  font-family: 'PingFang-SC-regular';
}
.huancoloe li div span:nth-child(2) {
  font-size: 26px;

  font-family: 'PingFang-SC-regular';
}
.huancoloe li div .res {
  color: #ff0c00;
}
.huancoloe li .first {
  height: 100px;
  line-height: 100px !important;
  font-size: 30px;

  font-family: 'PingFang-SC-regular';
  /* border-top: 1px solid #ebebeb; */
}
.huancoloe li .first .pl {
  width: 42px;
  height: 42px;
  display: inline-block;
}
.first .pl img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  margin-bottom: 10px;
}
.first span:nth-child(2) {
  /* padding-left: 16px; */
}
.flexBoxBG {
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
.lastpos {
  font-size: 30px;
}
.lone {
  border-bottom: none !important;
}
.lastpost {
  margin-left: 13px;
  font-size: 30px;
}
.infrom p {
  font-size: 20px;
  text-align: center;
  color: #767676;
  font-family: 'PingFang-SC-regular';
}
.load {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: rgba(108, 108, 108, 0.3);
  z-index: 9999;
}
.load img {
  width: 32px;
  height: 32px;
  margin: 40% auto;
  z-index: 999;
  margin-left: 50%;
  margin-top: 40%;
}
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}

.newcolor span:nth-child(2) {
  color: red;
}
.red {
  color: green !important;
}
.li {
  height: 1.04rem;
  line-height: 1.04rem;
}
.li div {
  height: 58px;
  line-height: 58px;
}
.li div span {
  font-size: 0.346667rem;
  color: #767676;
  font-family: 'PingFang-SC-regular';
}
.li div span:nth-child(1) {
  color: #767676;
}
.pllist div span:nth-child(2) {
  color: green;
}
</style>
