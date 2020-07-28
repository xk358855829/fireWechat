<template>
  <div class="filre">
    <ul class="top">
      <li class="topli">
        <div @click="tables"><img src="../../static/image/libi.png"
               alt=""></div>
        <div @click="routerback"></div>
        <div @click="nextClick('equipitem')"><img src="../../static/image/homs.png"
               alt=""></div>

      </li>
    </ul>
    <div style="position:relative">
      <mt-loadmore :top-method="loadTop"
                   ref="loadmore">
        <div class="aaaaa">
          <div style="height:0.9rem;line-height:0.9rem;font-size: 0.37rem; font-family: 'PingFang-SC-regular';color: #767676;background:#f8f8f8;">
            <span style="display:inline-block;padding-left:0.4rem;">设备编号：&nbsp;&nbsp;</span>
            <span>{{snone}}</span>
          </div>
          <ul class="hello hellocopy">
            <li class="bottomchild topli"
                @click="start">
              <span><img src="../../static/image/red.png"
                     alt=""></span>
              <div class="helloDiv">实时状态</div>
              <img :class="[rotate?'fa fa-arrow-down bb':'fa fa-arrow-down cc']"
                   src="../../static/image/arr.png"
                   class="lefts"
                   alt="">
            </li>
          </ul>
          <ul class="hello"
              v-if="chosehide">
            <li>
              <span>设备状态：&nbsp;&nbsp;</span>
              <span style="float:right;width:11%;">{{onlineone=="true"?'(在线)':'(离线)'}}</span>
              <span v-if='help==1'
                    class="regular"
                    style="float:right;"
                    @click="abnormal(help)">正常</span>
              <span v-if='help==0'
                    class="low"
                    style="float:right;"
                    @click="abnormal">异常</span>
            </li>

            <li>
              <span>设备电量：&nbsp;&nbsp;</span>

              <span v-if="battery==1"
                    style="color:green">100%
                <img src="../../static/image/one (4).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==2"
                    style="color:green">95%
                <img src="../../static/image/one (4).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==3"
                    style="color:green">90%
                <img src="../../static/image/one (4).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==4"
                    style="color:green">80%
                <img src="../../static/image/one (3).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==5"
                    style="color:green">70%
                <img src="../../static/image/one (3).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==6"
                    style="color:green">60%
                <img src="../../static/image/one (3).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==7"
                    style="color:red">50%
                <img src="../../static/image/one (2).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==8"
                    style="color:red">45%
                <img src="../../static/image/one (2).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==9"
                    style="color:red">40%
                <img src="../../static/image/one (2).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==10">30%
                <img src="../../static/image/one (1).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==11">20%
                <img src="../../static/image/one (1).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==12">10%
                <img src="../../static/image/one (1).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
              <span v-if="battery==13">1%
                <img src="../../static/image/one (1).png"
                     alt=""
                     style="vertical-align: middle;margin-top:-0.05rem">
              </span>
            </li>
            <li>
              <span>修正地址：&nbsp;&nbsp;</span>

              <span class="addSpan">{{$route.query.address?$route.query.address:Address}}</span>
            </li>
            <li>
              <span>地址备注：&nbsp;&nbsp;</span>
              <span>{{$route.query.mark?$route.query.mark:Mark}}</span>

            </li>
            <!-- <li>
              <span>管道水温：&nbsp;&nbsp;</span>
              <span v-if="pipeline==1">{{(con.waterTemperature)/10}}℃</span>
              <span v-if="pipeline==0">{{(con.waterTemperature)/10}}</span>
              <span v-if="pipeline==2">设备水温异常</span>
            </li> -->
            <li>
              <span>管道水压：&nbsp;&nbsp;</span>
              <span v-if="conduit==1">{{(con.waterPressure)}}</span>
              <span v-if="conduit==0">{{(con.waterPressure)}}</span>
              <span v-if="conduit==2">设备水压异常</span>
            </li>
            <li>
              <span>瞬间流量：&nbsp;&nbsp;</span>
              <span v-if="watermetertem==1">{{con.waterMeterTemp}}</span>
              <span v-if="watermetertem==0">{{con.waterMeterTemp}}</span>
            </li>
            <li>
              <span>累计流量：&nbsp;&nbsp;</span>
              <span v-if="accumulated==1">{{con.waterMeterTotal}}</span>
              <span v-if="accumulated==0">{{con.waterMeterTotal}}</span>
            </li>
            <li>
              <span>开锁方式：&nbsp;&nbsp;</span>
              <span>{{con.devUnlockWay}}</span>
            </li>
            <li>
              <span>栓锁状态：&nbsp;&nbsp;</span>
              <span class='sss'
                    v-if="clops==1">关闭</span>
              <span class='imop'
                    v-if="clops==0">开启</span>
            </li>

            <li>
              <span>激活状态：&nbsp;&nbsp;</span>
              <span class='sss'
                    v-if="colsp1==0">未激活</span>
              <span class='imop'
                    v-if="colsp1==1">已激活</span>
            </li>

            <li class="noborder">
              <span>布防状态：&nbsp;&nbsp;</span>
              <!-- <span>{{con.devDefence}}</span> -->
              <span class='sss'
                    v-if="colsp2==0">未布防</span>
              <span class='imop'
                    v-if="colsp2==1">已布防</span>
            </li>
          </ul>
          <ul class="hello hellocopy">
            <li class="bottomchild topli"
                @click="starts">
              <span><img src="../../static/image/red.png"
                     alt=""></span>
              <div class="helloDiv">系统信息</div>
              <img :class="[rotates?'fa fa-arrow-down go':'fa fa-arrow-down aa']"
                   src="../../static/image/acc.png"
                   class="lefts"
                   alt="">
            </li>
          </ul>
          <ul class="hellos"
              v-if="chosehidea">
            <li>
              <span>流量卡号：&nbsp;&nbsp;</span>
              <span>{{con.devIccid}}</span>
            </li>
           <!--  <li>
              <span>厂家代码：&nbsp;&nbsp;</span>
              <span>{{con.devParaSnone}}</span>
            </li>
            <li>
              <span>生产日期：&nbsp;&nbsp;</span>
              <span>{{con.devParaSntwo}}</span>
            </li>
            <li>
              <span>生产批号：&nbsp;&nbsp;</span>
              <span>{{con.devParaSnthree}}</span>
            </li> -->
            <li>
              <span>系统版本：&nbsp;&nbsp;</span>
              <span>{{con.devSoftVerison}}</span>
            </li>
          </ul>
          <ul class="bottom newbottom">
            <li class="bottomchild topchild">
              <span><img src="../../static/image/xiao.png"
                     alt=""></span>
              <div class="helloDiv">设备管理</div>
            </li>
            <li class="bottomoff">
              <span class="fl">激活</span>
              <span class="fr num1">
                <mt-switch v-model="value21"
                           @change="toastqiyong"
                           class="backr"></mt-switch>

              </span>
            </li>
          </ul>
          <ul class="bottom qibottom"
              
              v-show='type'>
            <li class="bottomoff lastlast">
              <span class="fl"
                    v-if="!value86">栓锁已关</span>
              <span class="fl"
                    v-if="value86">栓锁已开</span>
              <span class="fr num1">
                <mt-switch v-model="value86"
                           @change="noself"></mt-switch>
              </span>
              <!-- <div class="hidespan"
                   v-if="numc"></div> -->
            </li>
            <li class="bottomoff lastlast" v-if='!develop'>
              <span class="fl">布防</span>
              <span class="fr num1">
                <mt-switch v-model="value13"
                           @change="tankuang"></mt-switch>
              </span>
            </li>
            <li class="bottomoff lastlast">
              <span class="fl">更新位置</span>

              <button @click="mapchange">更新位置</button>

            </li>
            <li class="bottomoff lastlast">
              <span class="fl">刷新数据</span>

              <button @click="refreshaa"
                      style="background:#f6a839;">刷新数据</button>
            </li>
            <!-- <li class="bottomoff lastlast">
              <span class="fl">关锁</span>
              <span class="fr num1">
                <mt-switch v-model="value42"
                           @change="valveShutoff"></mt-switch>
              </span>
              <div class="hidespans"
                   v-if="numcf"></div>
            </li> -->
            <div v-if="!develop">
            
            
            <li class="bottomoff lastlast">
              <span class="fl">读取定位信息</span>

              <button @click="readmessages"
                      style="background:#4cd964;">读取定位信息</button>
            </li>
            <li class="bottomoff lastlast morenli">
              <div class="moren"
                   @click="moren">恢复出厂设置</div>
            </li>
            </div>
          </ul>
        </div>
      </mt-loadmore>
    </div>
    <div class="flexBoxBG cube"
         v-show="bg"
         v-bind:class="{csip:datemg,uncsip:undatemg}"
         @click.stop="hideClick"></div>
    <div class="trans"
         v-bind:class="{csip:datemg,uncsip:undatemg}"></div>
    <div class="pos"
         v-bind:class="{csip:datemg,uncsip:undatemg}">
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
    <div class="square"
         v-if="ttt">
      <div class="box">

        <p v-if='success==13'>刷新成功</p>
        <p v-if='success==14'>刷新失败</p>
        <p v-if='success==0'>开锁成功</p>
        <p v-if='success==1'>布防成功</p>
        <p v-if='success==2'>激活成功</p>
        <p v-if='success==3'>获取成功</p>
        <p v-if='success==6'>关锁成功</p>
        <p v-if='success==7'>停用成功</p>
        <p v-if='success==8'>撤防成功</p>
        <p v-if='success==9'>更新成功</p>
        <p v-if='success==11'>关锁失败</p>
        <p v-if='success==12'>撤防失败</p>
        <!-- <p v-if='success==99'>设备报警</p> -->
        <p v-if='success==199'>数据异常</p>
        <p @click="ais">确定</p>
      </div>
    </div>
    <div class="square"
         v-if="tit">
      <div class="box">
        <p v-if='loser==0'>关锁失败</p>
        <p v-if='loser==1'>撤防失败</p>
        <p v-if='loser==2'>停用失败</p>
        <p v-if='loser==3'>更新失败</p>
        <p v-if='loser==6'>开锁失败</p>
        <p v-if='loser==7'>布防失败</p>
        <p v-if='loser==8'>激活失败</p>
        <!-- <p v-if='loser==86'>设备不在线</p> -->
        <p v-if='loser==11'>设备未开锁</p>
        <p v-if='loser==13'>设备未布防</p>
        <p v-if='loser==12'>设备未启用</p>
        <p v-if='loser==19'>已恢复出厂设置</p>
        <p v-if='loser==20'>命令发送成功</p>
        <p v-if='loser==18'>恢复出厂设置失败</p>
        <p v-if='loser==21'>命令发送失败</p>
        <p v-if='loser==22'>读取位置信息成功</p>
        <p v-if='loser==23'>读取位置信息失败</p>
        <p v-if='loser==24'>请在平台上操作</p>
        <!-- <p v-if='loser==9'>更新失败</p> -->
        <p>
          <span @click="ai">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='poss'>
      <div class="box">
        <p>确定要激活么？</p>
        <p>
          <span @click.stop="hideClickqu">取消</span>
          <span @click.stop="toast">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='posss'>
      <div class="box">
        <p>确定要停用么？</p>
        <p>
          <span @click.stop="hideClicktingyong">取消</span>
          <span @click.stop="toastguan">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='boss'>
      <div class="box">
        <p>确定要开锁么？</p>
        <p>
          <span @click.stop="bossspa">取消</span>
          <span @click.stop="famen">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='bossabc'>
      <div class="box">
        <p>确定要关锁么？</p>
        <p>
          <span @click.stop="bossspaabc">取消</span>
          <span @click.stop="famenabc">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='boaa'>
      <div class="box">
        <p>确定要布防么？</p>
        <p>
          <span @click.stop="boaaspa">取消</span>
          <span @click.stop="aifa">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='glisp'>
      <div class="box">
        <p>确定要撤防么？</p>
        <p>
          <span @click.stop="glispspa">取消</span>
          <span @click.stop="glisplab">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='morenshow'>
      <div class="box">
        <p>确定要恢复出厂设置？</p>
        <p>
          <span @click.stop="morenno">取消</span>
          <span @click.stop="morenyes">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='mapshowlat'>
      <div class="box">
        <p>发送更新位置命令？</p>
        <p>
          <span @click.stop="mapshowno">取消</span>
          <span @click.stop="mapshowyes">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='readmessage'>
      <div class="box">
        <p>发送读取位置信息命令？</p>
        <p>
          <span @click.stop="readmesno">取消</span>
          <span @click.stop="readmesyes">确定</span>
        </p>
      </div>
    </div>
    <div class="positions"
         v-show='refreshbox'>
      <div class="box">
        <p>发送刷新命令？</p>
        <p>
          <span @click.stop="refreshno">取消</span>
          <span @click.stop="refreshyes">确定</span>
        </p>
      </div>
    </div>
    <!-- <div class="load" v-if="load">
      <img  src="../../static/image/loading.gif" alt="">
    </div> -->

  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
  name: 'hourstate',
  inject: ['reload'],
  data () {
    return {
      onlineone: 'true',
      snone: '',
      numc: '',
      numcf: '',
      oneValue: '',
      twoValue: '',
      threeVlaue: '',
      battery: 1,
      conduit: '',
      pipeline: '',
      accumulated: '',
      watermetertem: '',
      colsp2: '',
      colsp1: '',
      clops: '',
      mapshowlat: false,
      readmessage: false,
      refreshbox: false,
      morenshow: false,
      glisp: false,
      bossabc: false,
      boss: false,
      boaa: false,
      poss: false,
      posss: false,
      // value11:false,
      develop: '',
      rotate: false,
      // value12:false,
      value16: false,
      chosehidea: false,
      chosehide: true,
      loser: '5',
      success: '',
      value21: '',
      value13: '',
      value86: '',
      value42: '',
      rotates: false,
      value9: false,
      value8: false,
      ttt: false,
      tit: false,
      datemg: false,
      wrapperHeight: '',
      undatemg: true,
      Address: '',
      Mark: '',
      follow: '',
      follow1: '',
      follow2: '',
      bg: '',
      help: '',
      backHome: [],
      timer: '',
      type: true,
      ktime: ['', '', '', '', '', ''],
      show: false,
      con: {
        devVOL: '',
        waterMeter: '',
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
        devParaSntwo: '',
        devParaSnone: '',
        devParaSnthree: '',
        devControl: ''
      }
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    // this.type = this.$route.query.type;
    // this.wrapperHeight =
    //   document.documentElement.clientHeight -
    //   60;
    let that=this
    console.log(that.wrapperHeight)
    axios({
      method: 'post',
      url: that.httpUrl +'Amend/findOne',
      data: Qs.stringify({
        id: that.$route.query.id
      })
    }).then(res => {
      that.Address = res.data.amend.address
      that.Mark = res.data.amend.mark
    })
    that.resultdata()
    that.timer = setInterval(() => {
      that.resultdata()
    }, 60000)
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  },
  methods: {

    refreshyes () {
      this.refreshbox = false;
      // this.value16=false
      //  this.resultdata()
      //  this.ttt=true;
      //  this.success=13;
      // this.value12=true
      // this.readmessage=false;
      Indicator.open('Loading...');
      let self = this;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 24,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            // console.log(message)
            let that = this;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsStatus",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  // console.log(9987)
                  // console.log(JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)))
                  if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                    Indicator.close();
                    clearTimeout(t);
                    that.refreshbox = false;
                    that.ttt = true;
                    that.success = 13;
                    // that.value12=false
                  } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                    Indicator.close();
                    clearTimeout(t);
                    that.refreshbox = false;
                    self.ttt = true;
                    self.success = 14
                    // that.value12=false

                  } else {
                    Indicator.close();
                    clearTimeout(t);
                    that.refreshbox = false;
                    self.ttt = true;
                    self.success = 14
                    // that.value12=false
                  }
                }).catch(err => {
                  Indicator.close();
                  clearTimeout(t);
                  console.log(1)
                  that.refreshbox = false;
                  self.ttt = true;
                  self.success = 14
                  //  that.value12=false
                })
            }, 2000)
          } else {
            Indicator.close();
            self.refreshbox = false;
            self.ttt = true;
            self.success = 14
            //  self.value12=false
          }

        }).catch(err => {
          Indicator.close();
          self.refreshbox = false;
          self.ttt = true;
          self.success = 14
          //  self.value12=false
        })
    },
    abnormal (val) {
      console.log(val)
      if (val == 1) {
        this.$router.push({ path: '/historynum', query: { id: this.$route.query.id, lab: val } });
      } else {
        this.$router.push({ path: '/historynum', query: { id: this.$route.query.id } });
      }
      //
    },
    resultdata () {
      let that = this;
      this.$axios
        .post(
          that.httpUrl + "devices/findsn",
          this.$qs.stringify({
            devId: this.$route.query.id,
            pageNum: 1,
            pageSize: 10
          })
        )
        .then(message => {
          that.snone = message.data.i.devParaSn
          that.onlineone = message.data.i.online
          // that.con.devParaSnone = message.data.i.devParaSn.slice(0, 2);
          // that.con.devParaSntwo = '20' + message.data.i.devParaSn.slice(2, 4) + '年' + message.data.i.devParaSn.slice(4, 6) + '月' + message.data.i.devParaSn.slice(6, 8) + '日';
          // that.con.devParaSnthree = message.data.i.devParaSn.slice(8, 12);
        })

      this.$axios
        .post(
          that.httpUrl + "Datapoints/getData",
          // 11111111111111111111111111
          this.$qs.stringify({
            devId: this.$route.query.id,
          })
        )
        .then(message => {

          // console.log(message)
          if (message.data.resCode == 0) {
            // console.log(JSON.parse((message.data.errMsg).slice(6)))
            let messData = JSON.parse((message.data.errMsg).slice(6))
            for (let i = 0; i < messData.data.datastreams.length; i++) {
              // console.log(messData.data.datastreams[i].id);
              switch (messData.data.datastreams[i].id) {
                case '2001': that.con.devVOL = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2011': that.con.devWarning = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value;
                  that.con.devUnlockTime = messData.data.datastreams[i].datapoints[0].at;
                  break;
                case '2012': that.con.devControl = messData.data.datastreams[i].datapoints[0].value;
                  break;
                case '2009': that.con.devUnlockWay = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2008': that.con.devLockState = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2007': that.con.waterMeterTotal = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '1005': that.con.devHardVerison = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2006': that.con.waterMeterTemp = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '1004': that.con.devSoftVerison = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2005': that.con.waterPressure = (messData.data.datastreams[i].datapoints[0].value) / 10
                  break;
                //  case '1003':that.con.devParaSn=messData.data.datastreams[i].datapoints[0].value;
                //               that.con.devParaSnone=messData.data.datastreams[i].datapoints[0].value.slice(0,2);
                //               that.con.devParaSntwo='20'+messData.data.datastreams[i].datapoints[0].value.slice(2,4)+'年'+messData.data.datastreams[i].datapoints[0].value.slice(4,6)+'月'+messData.data.datastreams[i].datapoints[0].value.slice(6,8)+'日';
                //               that.con.devParaSnthree=messData.data.datastreams[i].datapoints[0].value.slice(8,12);
                //  break;
                case '2004': that.con.waterTemperature = (messData.data.datastreams[i].datapoints[0].value)
                  break;
                case '1002': that.con.devIccid = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2003': that.con.devLongitude = messData.data.datastreams[i].datapoints[0].value;
                  localStorage.setItem('lon', messData.data.datastreams[i].datapoints[0].value);
                  break;
                case '1001': that.con.devStatus = messData.data.datastreams[i].datapoints[0].value
                  break;
                case '2002': that.con.devLatitude = messData.data.datastreams[i].datapoints[0].value;
                  localStorage.setItem('lat', messData.data.datastreams[i].datapoints[0].value);
                  break;
                default: break;
              }
            }
            // console.log(888888888888888888888)
            // console.log(that.con.devLatitude)
            // console.log(that.con.devLongitude);
            // if(that.con.devLatitude==0){
            //   that.con.devLatitude='无数据'
            // }
            if (String(that.con.waterMeterTotal) == '' || that.con.waterMeterTotal == '无数据') {
              that.con.waterMeterTotal = '无数据'
              that.accumulated = 0
            } else {
              that.con.waterMeterTotal = that.con.waterMeterTotal + 'm³'
              that.accumulated = 1
            }
            if (String(that.con.devUnlockTime) == '') {
              that.con.devUnlockTime = '无数据'
            }
            if (String(that.con.waterMeterTemp) == '' || that.con.waterMeterTemp == '无数据') {
              that.con.waterMeterTemp = '无数据'
              that.watermetertem = 0
            } else {
              that.con.waterMeterTemp = that.con.waterMeterTemp + 'm³/h'
              that.watermetertem = 1
            }
            if (String(that.con.devHardVerison) == '') {
              that.con.devHardVerison = '无数据'
            }
            // console.log(that.con.devVOL)
            if (String(that.con.devVOL) >= 3600 && String(that.con.devVOL) < 4200) {
              that.battery = 1
            } else if (String(that.con.devVOL) >= 3590 && String(that.con.devVOL) < 3600) {
              that.battery = 2
            } else if (String(that.con.devVOL) >= 3580 && String(that.con.devVOL) < 3590) {
              that.battery = 3
            } else if (String(that.con.devVOL) >= 3560 && String(that.con.devVOL) < 3580) {
              that.battery = 4
            } else if (String(that.con.devVOL) >= 3550 && String(that.con.devVOL) < 3560) {
              that.battery = 5
            } else if (String(that.con.devVOL) >= 3540 && String(that.con.devVOL) < 3550) {
              that.battery = 6
            } else if (String(that.con.devVOL) >= 3520 && String(that.con.devVOL) < 3540) {
              that.battery = 7
            } else if (String(that.con.devVOL) >= 3500 && String(that.con.devVOL) < 3520) {
              that.battery = 8
            } else if (String(that.con.devVOL) >= 3450 && String(that.con.devVOL) < 3500) {
              that.battery = 9
            } else if (String(that.con.devVOL) >= 3400 && String(that.con.devVOL) < 3450) {
              that.battery = 10
            } else if (String(that.con.devVOL) >= 3350 && String(that.con.devVOL) < 3400) {
              that.battery = 11
            }else if (String(that.con.devVOL) >= 3200 && String(that.con.devVOL) < 3350) {
              that.battery = 12
            }else if (String(that.con.devVOL) >= 3000 && String(that.con.devVOL) < 3200) {
              that.battery = 13
            }  else {
              that.battery = 13
            }
            // console.log(that.con.waterPressure)

            if (that.con.waterPressure == '' || that.con.waterPressure == '无数据') {
              that.con.waterPressure = that.con.waterPressure + 'Mpa'
              that.conduit = 1
            } else if (that.con.waterPressure >= 160 || that.con.waterPressure < 0) {
              that.conduit = 2
            } else {
              that.conduit = 0
              if (that.con.waterPressure >= 0 || that.con.waterPressure <= 30) {
                that.con.waterPressure = ((that.con.waterPressure + 8) / 100).toFixed(2) + 'Mpa'
              } else if (that.con.waterPressure > 30 || that.con.waterPressure <= 60) {
                that.con.waterPressure = ((that.con.waterPressure + 10) / 100).toFixed(2) + 'Mpa'
              } else if (that.con.waterPressure > 60 || that.con.waterPressure <= 90) {
                that.con.waterPressure = ((that.con.waterPressure + 12) / 100).toFixed(2) + 'Mpa'
              } else if (that.con.waterPressure > 90 || that.con.waterPressure <= 159) {
                that.con.waterPressure = ((that.con.waterPressure + 15) / 100).toFixed(2) + 'Mpa'
              }



            }





            if (String(that.con.waterTemperature) == '') {
              that.con.waterTemperature = '无数据'
              that.pipeline = 0
            } else if (((that.con.waterTemperature) / 10) > 100 || ((that.con.waterTemperature) / 10) < -30) {
              that.pipeline = 2
            } else {
              that.pipeline = 1
            }
            if (String(that.con.devSoftVerison) == '') {
              that.con.devSoftVerison = '无数据'
            }
            if (String(that.con.devIccid) == '') {
              that.con.devIccid = '无数据'
            }
            if (String(that.con.devParaSn) == '') {
              that.con.devParaSn = '无数据'
            }
            if (String(that.con.devWarning) == '') {
              that.con.devWarning = '无数据'
            }
            if (String(that.con.devLongitude) == '' || String(that.con.devLatitude) == '' || that.con.devLongitude == '定位失败' || that.con.devLatitude == '定位失败') {
              that.con.devLongitude = '定位失败'
              that.con.devLatitude = '定位失败'
            } else if (String(that.con.devLongitude) === "0" || that.con.devLatitude === "0") {
              that.con.devLongitude = '定位失败'
              that.con.devLatitude = '定位失败'
            } else {
              that.con.devLongitude = (that.con.devLongitude) / 100000 + "°"
              localStorage.setItem('b', that.con.devLongitude);
              that.con.devLatitude = (that.con.devLatitude) / 100000 + "°"
              localStorage.setItem('a', that.con.devLatitude);
            }
            // if(String(that.con.devLatitude)==''){
            //   that.con.devLatitude='无数据'
            // }else if(that.con.devLatitude==="0"){
            //   console.log(998)
            //   that.con.devLatitude='定位失败'
            // }else{
            //   that.con.devLatitude=(that.con.devLatitude)/100000+"°"
            //   	localStorage.setItem('a',that.con.devLatitude);
            // }
            if (String(that.con.devParaSnthree) == '') {
              that.con.devParaSnthree = '无数据'
            }
            // if(String(that.con.devParaSnone)==''){
            //   that.con.devParaSnone='无数据'
            // }
            if (String(that.con.devParaSntwo) == '') {
              that.con.devParaSntwo = '无数据'
            }
            console.log(that.con.devWarning)
            if (that.con.devWarning == 0||that.con.devWarning ==64 ) {
              that.help = 1
              // that.ttt=true;
              // that.success=99;
              console.log(that.help)
              console.log(that.tit)
            } else {
              that.help = 0

            }
            if (that.con.devDefence == 17) {
              // that.con.devDefence='已布防'
              that.colsp2 = 0
              that.value13 = false
            } else {
              // that.con.devDefence='未布防' 111111111111111111 
              that.colsp2 = 1
              that.value13 = true
            }
            if (that.con.devUnlockWay == 17) {
              that.con.devUnlockWay = 'IC卡'
            } else if (that.con.devUnlockWay == 18) {
              that.con.devUnlockWay = '手机'
            } else if (that.con.devUnlockWay == 20) {
              that.con.devUnlockWay = '应急开锁'
            } else {
              that.con.devUnlockWay = '无数据'
            }

            if (that.con.devControl != 18) {
              // that.con.devControl='未激活'
              that.colsp1 = 0
              that.value21 = false;
              that.develop = false;
            } else {
              // that.con.devControl='已激活'
              that.colsp1 = 1
              that.value21 = true;
              that.develop = true;
            }

            if (that.con.devLockState == 17) {
              that.clops = 0
              that.numc = true
              that.value86 = true;
              that.value42 = false;
            } else {
              that.numcf = true
              that.clops = 1
              that.value86 = false;
              that.value42 = true;

            }
            console.log(that.con.devLockState)

            console.log(that.con.devParaSnone)
          } else {
            that.ttt = true;
            that.success = 199
          }
        })
      this.ktime = [String(new Date().getFullYear()), String((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes())), String(new Date().getSeconds() <= 9 ? '0' + (new Date().getSeconds()) : (new Date().getSeconds()))];
      console.log(this.ktime)
    },
    loadTop () {
      //这是向下滑动的时候请求最新的数据

      this.timeout = setTimeout(() => {
        this.resultdata()
        this.$refs.loadmore.onTopLoaded();
      }, 1500)
    },
    noself () {
      console.log(this.value86)
      if (this.value86) {
        this.boss = true;
      } else {
        this.bossabc = true;
      }


    },
    // 关阀
    valveShutoff () {

      this.bossabc = true;

    },
    mapchange () {
      this.mapshowlat = true;
    },
    readmessages () {
      this.readmessage = true;
    },
    refreshaa () {
      this.refreshbox = true;
    },
    moren () {
      this.morenshow = true;
    },
    morenno () {
      this.morenshow = false;
    },
    mapshowno () {
      this.mapshowlat = false;
      // this.value11=false;
    },
    readmesno () {
      this.readmessage = false;
      // this.value12=false;
    },
    readmesyes () {
      // this.value12=true
      this.readmessage = false;
      Indicator.open('Loading...');
      let self = this;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 21,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsStatus",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(9987)
                  console.log(JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)))
                  if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                    Indicator.close();
                    clearTimeout(t);
                    that.readmessage = false;
                    that.tit = true;
                    that.loser = 22;
                    // that.value12=false
                  } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                    Indicator.close();
                    clearTimeout(t);
                    that.readmessage = false;
                    that.tit = true;
                    that.loser = 86
                    // that.value12=false

                  } else {
                    Indicator.close();
                    clearTimeout(t);
                    that.readmessage = false;
                    that.tit = true;
                    that.loser = 23
                    // that.value12=false
                  }
                }).catch(err => {
                  Indicator.close();
                  clearTimeout(t);
                  console.log(1)
                  that.readmessage = false;
                  that.tit = true;
                  that.loser = 23
                  //  that.value12=false
                })
            }, 8000)
          } else {
            Indicator.close();
            self.readmessage = false;
            self.tit = true;
            self.loser = 23
            //  self.value12=false
          }

        }).catch(err => {
          Indicator.close();
          self.readmessage = false;
          self.tit = true;
          self.loser = 23
          //  self.value12=false
        })
    },
    unlocking () {
      console.log(98)
      this.value86 = false;
      this.value42 = true
    },
    mapshowyes () {
      // this.value11=true;
      this.mapshowlat = false;
      Indicator.open('Loading...');
      let self = this;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 21,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsStatus",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                    // that.value11=false;
                    Indicator.close();
                    clearTimeout(t);
                    that.mapshowlat = false;
                    that.tit = true;
                    that.loser = 20;
                  } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                    Indicator.close();
                    clearTimeout(t);
                    that.mapshowlat = false;
                    that.tit = true;
                    that.loser = 86
                    // that.value11=false;

                  } else {
                    Indicator.close();
                    clearTimeout(t);
                    that.mapshowlat = false;
                    that.tit = true;
                    that.loser = 21
                    // that.value11=false;
                  }
                }).catch(err => {
                  Indicator.close();
                  clearTimeout(t);
                  that.mapshowlat = false;
                  that.tit = true;
                  that.loser = 21
                  // that.value11=false;
                })
            }, 8000)
          } else {
            Indicator.close();
            self.mapshowlat = false;
            self.tit = true;
            self.loser = 21
            // self.value11=false;
          }

        }).catch(err => {
          self.mapshowlat = false;
          self.tit = true;
          self.loser = 21
          // self.value11=false;
        })
    },
    morenyes () {
      this.morenshow = false;
      Indicator.open('Loading...');
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 22,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsStatus",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                    Indicator.close();
                    clearTimeout(t);
                    that.morenshow = false;
                    that.tit = true;
                    that.loser = 19;
                  } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                    Indicator.close();
                    clearTimeout(t);
                    that.morenshow = false;
                    that.tit = true;
                    that.loser = 86
                  } else {
                    Indicator.close();
                    clearTimeout(t);
                    that.morenshow = false;
                    that.tit = true;
                    that.loser = 18
                  }
                }).catch(err => {
                  Indicator.close();
                  clearTimeout(t);
                  console.log(1)
                  that.morenshow = false;
                  that.tit = true;
                  that.loser = 18
                })
            }, 8000)
          } else {
            Indicator.close();
            that.morenshow = false;
            that.tit = true;
            that.loser = 18
          }

        }).catch(() => {
          Indicator.close();
          this.morenshow = false;
          this.tit = true;
          this.loser = 18
        })
    },
    refreshno () {
      this.value16 = false;
      this.refreshbox = false;
    },
    bossspaabc () {
      this.bossabc = false;
      this.value86 = true
      // if (this.value42) {
      //   this.value42 = false
      // } else {
      //   this.value42 = true
      // }
    },
    boaaspa () {
      this.boaa = false;
      this.value13 = false;
    },
    bossspa () {
      this.boss = false;
      if (this.value86) {
        this.value86 = false
      } else {
        this.numc = true
        this.value86 = true
      }
      // this.value86=false;
    },
    glispspa () {
      this.glisp = false;
      this.value13 = true;
    },
    tankuang () {
      if (this.value13) {
        this.boaa = true;
      } else {
        this.glisp = true;
      }
    },
    famens () {
      console.log(this.value2)
      if (this.value2 == true) {
        console.log(1111111111111111111111112)
        this.bossabc = true;
      } else {
        this.boss = true;
      }

      if (this.value2) {
        console.log(987)

      } else {
        console.log(456)
        this.boss = true;

      }
    },
    aifa () {
      this.boaa = false
      let that = this;
      that.$axios
        .post(
          that.httpUrl + "send/sendCmd",
          that.$qs.stringify({
            devId: that.$route.query.id,
            cmd: 19,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            Indicator.open('Loading...');
            let t = setTimeout(function () {

              that.value13 = true;
              that.boaa = false;
              that.$axios
                .post(
                  that.httpUrl + "Datapoints/getData",
                  that.$qs.stringify({
                    devId: that.$route.query.id
                  })
                )
                .then(message => {
                  if (message.data.resCode == 0) {
                    let messData = JSON.parse((message.data.errMsg).slice(6))
                    console.log(messData)
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    if (that.threeVlaue == 17) {
                      //  that.value13=false;
                      //   Indicator.close();
                      //   that.tit=true;
                      // that.loser=7
                      //   that.colsp2=0
                      clearTimeout(t)
                      //   that.con.devDefence='未布防'
                      let settimea = setTimeout(() => {
                        that.value13 = true;
                        that.boaa = false;
                        that.$axios
                          .post(
                            that.httpUrl + "Datapoints/getData",
                            that.$qs.stringify({
                              devId: that.$route.query.id
                            })
                          )
                          .then(message => {
                            if (message.data.resCode == 0) {
                              let messData = JSON.parse((message.data.errMsg).slice(6))
                              console.log(messData)
                              for (let i = 0; i < messData.data.datastreams.length; i++) {
                                console.log(messData.data.datastreams[i].id);
                                switch (messData.data.datastreams[i].id) {
                                  case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                    break;
                                  default: break;
                                }
                              }
                              if (that.threeVlaue == 17) {
                                //  that.value13=false;
                                //   Indicator.close();
                                //   that.tit=true;
                                // that.loser=7
                                //   that.colsp2=0
                                clearTimeout(settimea)
                                //   that.con.devDefence='未布防'
                                let settimeatwo = setTimeout(() => {
                                  that.value13 = true;
                                  that.boaa = false;
                                  that.$axios
                                    .post(
                                      that.httpUrl + "Datapoints/getData",
                                      that.$qs.stringify({
                                        devId: that.$route.query.id
                                      })
                                    )
                                    .then(message => {
                                      if (message.data.resCode == 0) {
                                        let messData = JSON.parse((message.data.errMsg).slice(6))
                                        console.log(messData)
                                        for (let i = 0; i < messData.data.datastreams.length; i++) {
                                          console.log(messData.data.datastreams[i].id);
                                          switch (messData.data.datastreams[i].id) {
                                            case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                              break;
                                            default: break;
                                          }
                                        }
                                        if (that.threeVlaue == 17) {
                                          //  that.value13=false;
                                          //   Indicator.close();
                                          //   that.tit=true;
                                          //   that.loser=7
                                          //   that.colsp2=0
                                          clearTimeout(settimeatwo)
                                          // that.con.devDefence='未布防'
                                          let settimeathrees = setTimeout(() => {
                                            that.value13 = true;
                                            that.boaa = false;
                                            that.$axios
                                              .post(
                                                that.httpUrl + "Datapoints/getData",
                                                that.$qs.stringify({
                                                  devId: that.$route.query.id
                                                })
                                              )
                                              .then(message => {
                                                if (message.data.resCode == 0) {
                                                  let messData = JSON.parse((message.data.errMsg).slice(6))
                                                  console.log(messData);
                                                  for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                    console.log(messData.data.datastreams[i].id);
                                                    switch (messData.data.datastreams[i].id) {
                                                      case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                                        break;
                                                      default: break;
                                                    }
                                                  }
                                                  if (that.threeVlaue == 17) {
                                                    //  that.value13=false;
                                                    //   Indicator.close();
                                                    //   that.tit=true;
                                                    //   that.loser=7
                                                    //   that.colsp2=0
                                                    clearTimeout(settimeathrees)
                                                    // that.con.devDefence='未布防'
                                                    let settimeafours = setTimeout(() => {
                                                      that.value13 = true;
                                                      that.boaa = false;
                                                      that.$axios
                                                        .post(
                                                          that.httpUrl + "Datapoints/getData",
                                                          that.$qs.stringify({
                                                            devId: that.$route.query.id
                                                          })
                                                        )
                                                        .then(message => {
                                                          if (message.data.resCode == 0) {
                                                            let messData = JSON.parse((message.data.errMsg).slice(6))
                                                            console.log(messData)
                                                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                              console.log(messData.data.datastreams[i].id);
                                                              switch (messData.data.datastreams[i].id) {
                                                                case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                                                  break;
                                                                default: break;
                                                              }
                                                            }
                                                            if (that.threeVlaue == 17) {
                                                              that.value13 = false;
                                                              Indicator.close();
                                                              that.tit = true;
                                                              that.loser = 7
                                                              that.colsp2 = 0
                                                              clearTimeout(settimeafours)
                                                              that.con.devDefence = '未布防'
                                                            } else {
                                                              clearTimeout(settimeafours)
                                                              that.value13 = true;
                                                              that.success = 1;
                                                              that.ttt = true;
                                                              that.follow1 = message.data.result;
                                                              Indicator.close();
                                                              that.colsp2 = 1
                                                              that.con.devDefence = '已布防'
                                                            }
                                                          } else {
                                                            clearTimeout(settimeafours)
                                                            that.value13 = true;
                                                            that.success = 1;
                                                            that.ttt = true;
                                                            that.follow1 = message.data.result;
                                                            Indicator.close();
                                                            that.colsp2 = 1
                                                            that.con.devDefence = '已布防'
                                                          }
                                                        })
                                                    }, 3000)
                                                  } else {
                                                    clearTimeout(settimeathrees)
                                                    that.value13 = true;
                                                    that.success = 1;
                                                    that.ttt = true;
                                                    that.follow1 = message.data.result;
                                                    Indicator.close();
                                                    that.colsp2 = 1
                                                    that.con.devDefence = '已布防'
                                                  }
                                                } else {
                                                  clearTimeout(settimeathrees)
                                                  that.value13 = true;
                                                  that.success = 1;
                                                  that.ttt = true;
                                                  that.follow1 = message.data.result;
                                                  Indicator.close();
                                                  that.colsp2 = 1
                                                  that.con.devDefence = '已布防'
                                                }
                                              })
                                          }, 3000)
                                        } else {
                                          clearTimeout(settimeatwo)
                                          that.value13 = true;
                                          that.success = 1;
                                          that.ttt = true;
                                          that.follow1 = message.data.result;
                                          Indicator.close();
                                          that.colsp2 = 1
                                          that.con.devDefence = '已布防'
                                        }
                                      } else {
                                        clearTimeout(settimeatwo)
                                        that.value13 = true;
                                        that.success = 1;
                                        that.ttt = true;
                                        that.follow1 = message.data.result;
                                        Indicator.close();
                                        that.colsp2 = 1
                                        that.con.devDefence = '已布防'
                                      }
                                    })
                                }, 3000)
                              } else {
                                clearTimeout(settimea)
                                that.value13 = true;
                                that.success = 1;
                                that.ttt = true;
                                that.follow1 = message.data.result;
                                Indicator.close();
                                that.colsp2 = 1
                                that.con.devDefence = '已布防'
                              }
                            } else {
                              clearTimeout(settimea)
                              that.value13 = true;
                              that.success = 1;
                              that.ttt = true;
                              that.follow1 = message.data.result;
                              Indicator.close();
                              that.colsp2 = 1
                              that.con.devDefence = '已布防'
                            }
                          })
                      }, 3000)
                    } else {
                      clearTimeout(t)
                      that.value13 = true;
                      that.success = 1;
                      that.ttt = true;
                      that.follow1 = message.data.result;
                      Indicator.close();
                      that.colsp2 = 1
                      that.con.devDefence = '已布防'
                    }
                  } else {
                    clearTimeout(t)
                    that.value13 = true;
                    that.success = 1;
                    that.ttt = true;
                    that.follow1 = message.data.result;
                    Indicator.close();
                    that.colsp2 = 1
                    that.con.devDefence = '已布防'
                  }
                })
            }, 3000)
          } else {
            clearTimeout(t)
            that.value13 = false;
            that.loser = 7;
            that.tit = true;
            that.follow1 = message.data.result;
            Indicator.close();
            that.colsp2 = 0
            that.con.devDefence = '未布防'
          }

          // let self=this;
          //   this.$axios
          //   .post(
          //   this.httpUrl+"send/sendCmd",
          //   this.$qs.stringify({
          //       devId:this.$route.query.id,
          //       cmd:19,
          //       cmdValue:'11'
          //     })
          //   )
          //   .then(message => {
          //     if(message.data.resCode==0){
          //        console.log(message)
          //       let that=this;
          //        Indicator.open('Loading...');
          //       let t = setTimeout(function(){
          //           that.$axios
          //           .post(
          //           that.httpUrl+"send/QueryCmdsStatus",
          //           that.$qs.stringify({
          //               cmdsId:message.data.cmd_uuid
          //             })
          //           )
          //           .then(res => {
          //               console.log(res)
          //               if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==4){
          //                 that.value13=true;
          //               that.success=1;
          //                that.ttt=true;
          //                  that.follow1=res.data.result;
          //                 clearTimeout(t);
          //                 Indicator.close();
          //                 that.colsp2=1
          //                 that.con.devDefence='已布防'
          //               }else if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==0){
          //                  that.value13=false;
          //                 Indicator.close();
          //                 clearTimeout(t);
          //                 that.tit=true;
          //                that.loser=86
          //                that.colsp2=0
          //                that.con.devDefence='未布防'

          //               }else{
          //                 that.value13=false;
          //                 Indicator.close();
          //                 clearTimeout(t);
          //                 that.tit=true;
          //                that.loser=7
          //                that.colsp2=0
          //                that.con.devDefence='未布防'
          //               }
          //           }).catch(err => {
          //             clearTimeout(t);
          //               that.tit=true;
          //                that.loser=7
          //                 that.value13=false;
          //               Indicator.close();
          //                that.colsp2=0
          //                that.con.devDefence='未布防'
          //          })
          //       },3000)
          //     }else{
          //        self.value13=false;
          //        Indicator.close();
          //         self.tit=true;
          //         self.loser=7
          //         self.colsp2=0
          //         self.con.devDefence='未布防'
          //     }

          //   })


        })

    },
    glisplab () {
      this.glisp = false;
      let that = this;
      that.$axios
        .post(
          that.httpUrl + "send/sendCmd",
          that.$qs.stringify({
            devId: that.$route.query.id,
            cmd: 19,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            Indicator.open('Loading...');
            let t = setTimeout(function () {
              that.value13 = false;
              that.glisp = false;
              that.$axios
                .post(
                  that.httpUrl + "Datapoints/getData",
                  that.$qs.stringify({
                    devId: that.$route.query.id
                  })
                )
                .then(message => {
                  if (message.data.resCode == 0) {
                    let messData = JSON.parse((message.data.errMsg).slice(6))
                    console.log(messData)
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    if (that.threeVlaue == 17) {
                      that.value13 = false;
                      that.ttt = true;
                      that.success = 8;
                      Indicator.close();
                      that.colsp2 = 0
                      that.con.devDefence = '未布防'
                      clearTimeout(t)
                    } else {
                      //  that.value13=true;
                      //   that.tit=true;
                      //   that.loser=1
                      //   Indicator.close(); 
                      //   that.colsp2=1
                      //   that.con.devDefence='已布防'
                      clearTimeout(t)
                      let settimea = setTimeout(() => {
                        that.value13 = false;
                        that.glisp = false;
                        that.$axios
                          .post(
                            that.httpUrl + "Datapoints/getData",
                            that.$qs.stringify({
                              devId: that.$route.query.id
                            })
                          )
                          .then(message => {
                            if (message.data.resCode == 0) {
                              let messData = JSON.parse((message.data.errMsg).slice(6))
                              console.log(messData)
                              for (let i = 0; i < messData.data.datastreams.length; i++) {
                                console.log(messData.data.datastreams[i].id);
                                switch (messData.data.datastreams[i].id) {
                                  case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                    break;
                                  default: break;
                                }
                              }
                              if (that.threeVlaue == 17) {
                                that.value13 = false;
                                that.ttt = true;
                                that.success = 8;
                                Indicator.close();
                                that.colsp2 = 0
                                that.con.devDefence = '未布防'
                                clearTimeout(settimea)
                              } else {
                                //  that.value13=true;
                                //   that.tit=true;
                                //   that.loser=1
                                //   Indicator.close(); 
                                //   that.colsp2=1
                                //   that.con.devDefence='已布防'
                                clearTimeout(settimea)
                                let settimeatwo = setTimeout(() => {
                                  that.value13 = false;
                                  that.glisp = false;
                                  that.$axios
                                    .post(
                                      that.httpUrl + "Datapoints/getData",
                                      that.$qs.stringify({
                                        devId: that.$route.query.id
                                      })
                                    )
                                    .then(message => {
                                      if (message.data.resCode == 0) {
                                        let messData = JSON.parse((message.data.errMsg).slice(6))
                                        console.log(messData)
                                        for (let i = 0; i < messData.data.datastreams.length; i++) {
                                          console.log(messData.data.datastreams[i].id);
                                          switch (messData.data.datastreams[i].id) {
                                            case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                              break;
                                            default: break;
                                          }
                                        }
                                        if (that.threeVlaue == 17) {
                                          that.value13 = false;
                                          that.ttt = true;
                                          that.success = 8;
                                          Indicator.close();
                                          that.colsp2 = 0
                                          that.con.devDefence = '未布防'
                                          clearTimeout(settimeatwo)
                                        } else {
                                          //  that.value13=true;
                                          //   that.tit=true;
                                          //   that.loser=1
                                          //   Indicator.close(); 
                                          //   that.colsp2=1
                                          //   that.con.devDefence='已布防'
                                          clearTimeout(settimeatwo)
                                          let settimeathrees = setTimeout(() => {
                                            that.value13 = false;
                                            that.glisp = false;
                                            that.$axios
                                              .post(
                                                that.httpUrl + "Datapoints/getData",
                                                that.$qs.stringify({
                                                  devId: that.$route.query.id
                                                })
                                              )
                                              .then(message => {
                                                if (message.data.resCode == 0) {
                                                  let messData = JSON.parse((message.data.errMsg).slice(6))
                                                  console.log(messData)
                                                  for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                    console.log(messData.data.datastreams[i].id);
                                                    switch (messData.data.datastreams[i].id) {
                                                      case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                                        break;
                                                      default: break;
                                                    }
                                                  }
                                                  if (that.threeVlaue == 17) {
                                                    that.value13 = false;
                                                    that.ttt = true;
                                                    that.success = 8;
                                                    Indicator.close();
                                                    that.colsp2 = 0
                                                    that.con.devDefence = '未布防'
                                                    clearTimeout(settimeathrees)
                                                  } else {
                                                    //  that.value13=true;
                                                    //   that.tit=true;
                                                    //   that.loser=1
                                                    //   Indicator.close(); 
                                                    //   that.colsp2=1
                                                    //   that.con.devDefence='已布防'
                                                    clearTimeout(settimeathrees)
                                                    let settimeafours = setTimeout(() => {
                                                      that.value13 = false;
                                                      that.glisp = false;
                                                      that.$axios
                                                        .post(
                                                          that.httpUrl + "Datapoints/getData",
                                                          that.$qs.stringify({
                                                            devId: that.$route.query.id
                                                          })
                                                        )
                                                        .then(message => {
                                                          if (message.data.resCode == 0) {
                                                            let messData = JSON.parse((message.data.errMsg).slice(6))
                                                            console.log(messData)
                                                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                              console.log(messData.data.datastreams[i].id);
                                                              switch (messData.data.datastreams[i].id) {
                                                                case '2010': that.threeVlaue = messData.data.datastreams[i].datapoints[0].value
                                                                  break;
                                                                default: break;
                                                              }
                                                            }
                                                            if (that.threeVlaue == 17) {
                                                              that.value13 = false;
                                                              that.ttt = true;
                                                              that.success = 8;
                                                              Indicator.close();
                                                              that.colsp2 = 0
                                                              that.con.devDefence = '未布防'
                                                              clearTimeout(settimeafours)
                                                            } else {
                                                              that.value13 = true;
                                                              that.tit = true;
                                                              that.loser = 1
                                                              Indicator.close();
                                                              that.colsp2 = 1
                                                              that.con.devDefence = '已布防'
                                                              clearTimeout(settimeafours)
                                                            }
                                                          } else {
                                                            that.value13 = true;
                                                            that.tit = true;
                                                            that.loser = 1
                                                            Indicator.close();
                                                            that.colsp2 = 1
                                                            that.con.devDefence = '已布防'
                                                            clearTimeout(settimeafours)
                                                          }
                                                        })
                                                    }, 3000)
                                                  }
                                                } else {
                                                  that.value13 = true;
                                                  that.tit = true;
                                                  that.loser = 1
                                                  Indicator.close();
                                                  that.colsp2 = 1
                                                  that.con.devDefence = '已布防'
                                                  clearTimeout(settimeathrees)
                                                }
                                              })
                                          }, 3000)
                                        }
                                      } else {
                                        that.value13 = true;
                                        that.tit = true;
                                        that.loser = 1
                                        Indicator.close();
                                        that.colsp2 = 1
                                        that.con.devDefence = '已布防'
                                        clearTimeout(settimeatwo)
                                      }
                                    })
                                }, 3000)
                              }
                            } else {
                              that.value13 = true;
                              that.tit = true;
                              that.loser = 1
                              Indicator.close();
                              that.colsp2 = 1
                              that.con.devDefence = '已布防'
                              clearTimeout(settimea)
                            }
                          })
                      }, 3000)
                    }
                  } else {
                    that.value13 = true;
                    that.tit = true;
                    that.loser = 1
                    Indicator.close();
                    that.colsp2 = 1
                    that.con.devDefence = '已布防'
                    clearTimeout(t)
                  }
                })
            }, 3000)
          } else {
            that.value13 = true;
            that.tit = true;
            that.loser = 1
            Indicator.close();
            that.colsp2 = 1
            that.con.devDefence = '已布防'
          }
        })
      // let self=this;
      //   this.$axios
      //         .post(
      //         this.httpUrl+"send/sendCmd",
      //         this.$qs.stringify({
      //             devId:this.$route.query.id,
      //             cmd:19,
      //             cmdValue:'12'
      //           })
      //         )
      //         .then(message => {
      //           if(message.data.resCode==0){
      //             console.log(message)
      //             let that=this;
      //              Indicator.open('Loading...');
      //             let t = setTimeout(function(){
      //                 that.$axios
      //                 .post(
      //                 that.httpUrl+"send/QueryCmdsStatus",
      //                 that.$qs.stringify({
      //                     cmdsId:message.data.cmd_uuid
      //                   })
      //                 )
      //                 .then(res => {
      //                     console.log(res)
      //                     if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==4){
      //                     that.value13=false;
      //                     that.ttt=true;
      //                     that.success=8;
      //                       clearTimeout(t);
      //                       Indicator.close(); 
      //                       that.colsp2=0
      //                       that.con.devDefence='未布防'
      //                     }else if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==0){
      //                       that.value13=true;
      //                       that.tit=true;
      //                       that.loser=86
      //                       Indicator.close(); 
      //                       clearTimeout(t);
      //                       that.colsp2=1
      //                       that.con.devDefence='已布防'
      //                     }else{
      //                       that.value13=true;
      //                       that.tit=true;
      //                       that.loser=1
      //                       Indicator.close(); 
      //                       clearTimeout(t);
      //                       that.colsp2=1
      //                       that.con.devDefence='已布防'
      //                     }
      //                 }).catch(err => {
      //                   clearTimeout(t);
      //                 that.value13=true;
      //                 that.ttt=true;
      //                 that.success=12;
      //                 Indicator.close(); 
      //                 that.colsp2=1
      //                 that.con.devDefence='已布防'
      //               })
      //             },3000)
      //           }else{
      //             self.value13=true;
      //             Indicator.close(); 
      //               self.tit=true;
      //               self.loser=1
      //               self.colsp2=1
      //               self.con.devDefence='已布防'
      //           }

      //         }) 
    },
    famen () {
      this.boss = false;
      let that = this;
      let datatr = {
        devId: that.$route.query.id,
        cmd: 18,
        cmdValue: '11'
      }
      console.log(datatr)
      that.$axios
        .post(
          that.httpUrl + "send/sendCmd",
          that.$qs.stringify(datatr)
        )
        .then(message => {
          if (message.data.resCode == 0) {
            Indicator.open('Loading...');
            let t = setTimeout(function () {
              that.value86 = true;
              that.value42 = false;
              that.boss = false;
              console.log(that.$route.query.id)
              that.$axios
                .post(
                  that.httpUrl + "Datapoints/getData",
                  that.$qs.stringify({
                    devId: that.$route.query.id
                  })
                )
                .then(message => {
                  if (message.data.resCode == 0) {
                    let messData = JSON.parse((message.data.errMsg).slice(6))
                    console.log(messData)
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    if (that.twoValue == 17) {
                      console.log(90)
                      that.ttt = true;
                      that.success = 0;
                      Indicator.close();
                      that.value86 = true;
                      that.value42 = false;
                      that.numc = true
                      that.numcf = false
                      clearTimeout(t)
                      that.clops = 0
                      that.con.devLockState = '开启'
                    } else {

                      // that.tit=true;
                      // that.loser=6
                      //   that.clops=1
                      //   Indicator.close(); 
                      clearTimeout(t)
                      //   that.value86=false;     
                      //   that.con.devLockState='关闭'
                      let settimea = setTimeout(() => {
                        that.value86 = true;

                        that.boss = false;
                        console.log(that.$route.query.id)
                        that.$axios
                          .post(
                            that.httpUrl + "Datapoints/getData",
                            that.$qs.stringify({
                              devId: that.$route.query.id
                            })
                          )
                          .then(message => {
                            if (message.data.resCode == 0) {
                              let messData = JSON.parse((message.data.errMsg).slice(6))
                              console.log(messData)
                              for (let i = 0; i < messData.data.datastreams.length; i++) {
                                console.log(messData.data.datastreams[i].id);
                                switch (messData.data.datastreams[i].id) {
                                  case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                    break;
                                  default: break;
                                }
                              }
                              if (that.twoValue == 17) {
                                console.log(90)
                                that.ttt = true;
                                that.success = 0;
                                Indicator.close();
                                that.value86 = true;
                                that.numc = true
                                that.numcf = false
                                that.value42 = false;
                                clearTimeout(settimea)
                                that.clops = 0
                                that.con.devLockState = '开启'
                              } else {

                                // that.tit=true;
                                // that.loser=6
                                //   that.clops=1
                                //   Indicator.close(); 
                                clearTimeout(settimea)
                                //   that.value86=false;     
                                //   that.con.devLockState='关闭'
                                let settimeatwo = setTimeout(() => {
                                  that.value86 = true;
                                  that.numc = true
                                  that.boss = false;
                                  console.log(that.$route.query.id)
                                  that.$axios
                                    .post(
                                      that.httpUrl + "Datapoints/getData",
                                      that.$qs.stringify({
                                        devId: that.$route.query.id
                                      })
                                    )
                                    .then(message => {
                                      if (message.data.resCode == 0) {
                                        let messData = JSON.parse((message.data.errMsg).slice(6))
                                        console.log(messData)
                                        for (let i = 0; i < messData.data.datastreams.length; i++) {
                                          console.log(messData.data.datastreams[i].id);
                                          switch (messData.data.datastreams[i].id) {
                                            case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                              break;
                                            default: break;
                                          }
                                        }
                                        if (that.twoValue == 17) {
                                          console.log(90)
                                          that.ttt = true;
                                          that.success = 0;
                                          Indicator.close();
                                          that.value86 = true;
                                          that.numc = true
                                          that.numcf = false
                                          that.value42 = false;
                                          clearTimeout(settimeatwo)
                                          that.clops = 0
                                          that.con.devLockState = '开启'
                                        } else {

                                          // that.tit=true;
                                          //   that.loser=6
                                          //   that.clops=1
                                          //   Indicator.close(); 
                                          clearTimeout(settimeatwo)
                                          // that.value86=false;     
                                          // that.con.devLockState='关闭'
                                          let settimeathrees = setTimeout(() => {
                                            that.numc = true
                                            that.value86 = true;
                                            that.boss = false;
                                            console.log(that.$route.query.id)
                                            that.$axios
                                              .post(
                                                that.httpUrl + "Datapoints/getData",
                                                that.$qs.stringify({
                                                  devId: that.$route.query.id
                                                })
                                              )
                                              .then(message => {
                                                if (message.data.resCode == 0) {
                                                  let messData = JSON.parse((message.data.errMsg).slice(6))
                                                  console.log(messData)
                                                  for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                    console.log(messData.data.datastreams[i].id);
                                                    switch (messData.data.datastreams[i].id) {
                                                      case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                                        break;
                                                      default: break;
                                                    }
                                                  }
                                                  if (that.twoValue == 17) {
                                                    console.log(90)
                                                    that.ttt = true;
                                                    that.success = 0;
                                                    Indicator.close();
                                                    that.value86 = true;
                                                    that.numc = true
                                                    that.numcf = false
                                                    that.value42 = false;
                                                    clearTimeout(settimeathrees)
                                                    that.clops = 0
                                                    that.con.devLockState = '开启'
                                                  } else {

                                                    // that.tit=true;
                                                    //   that.loser=6
                                                    //   that.clops=1
                                                    //   Indicator.close(); 
                                                    clearTimeout(settimeathrees)
                                                    // that.value86=false;     
                                                    // that.con.devLockState='关闭'
                                                    let settimeafours = setTimeout(() => {
                                                      that.value86 = true;
                                                      that.numc = true
                                                      that.boss = false;
                                                      console.log(that.$route.query.id)
                                                      that.$axios
                                                        .post(
                                                          that.httpUrl + "Datapoints/getData",
                                                          that.$qs.stringify({
                                                            devId: that.$route.query.id
                                                          })
                                                        )
                                                        .then(message => {
                                                          if (message.data.resCode == 0) {
                                                            let messData = JSON.parse((message.data.errMsg).slice(6))
                                                            console.log(messData)
                                                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                              console.log(messData.data.datastreams[i].id);
                                                              switch (messData.data.datastreams[i].id) {
                                                                case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                                                  break;
                                                                default: break;
                                                              }
                                                            }
                                                            if (that.twoValue == 17) {
                                                              console.log(90)
                                                              that.ttt = true;
                                                              that.success = 0;
                                                              Indicator.close();
                                                              that.value86 = true;
                                                              that.numc = true
                                                              that.numcf = false
                                                              that.value42 = false;
                                                              clearTimeout(settimeafours)
                                                              that.clops = 0
                                                              that.con.devLockState = '开启'
                                                            } else {

                                                              that.tit = true;
                                                              that.loser = 6
                                                              that.clops = 1
                                                              that.numc = false
                                                              that.numcf = true
                                                              Indicator.close();
                                                              clearTimeout(settimeafours)
                                                              that.value86 = false;
                                                              that.value42 = true;
                                                              that.con.devLockState = '关闭'
                                                            }
                                                          } else {
                                                            that.tit = true;
                                                            that.loser = 6
                                                            that.clops = 1
                                                            Indicator.close();
                                                            clearTimeout(settimeafours)
                                                            that.value86 = false;
                                                            that.value42 = true;
                                                            that.numc = false
                                                            that.numcf = true
                                                            that.con.devLockState = '关闭'
                                                          }
                                                        })
                                                    }, 3000)
                                                  }
                                                } else {
                                                  that.tit = true;
                                                  that.loser = 6
                                                  that.clops = 1
                                                  Indicator.close();
                                                  clearTimeout(settimeathrees)
                                                  that.value86 = false;
                                                  that.value42 = true;
                                                  that.numc = false
                                                  that.numcf = true
                                                  that.con.devLockState = '关闭'
                                                }
                                              })
                                          }, 3000)
                                        }
                                      } else {
                                        that.tit = true;
                                        that.loser = 6
                                        that.clops = 1
                                        Indicator.close();
                                        clearTimeout(settimeatwo)
                                        that.value86 = false;
                                        that.value42 = true;
                                        that.numc = false
                                        that.numcf = true
                                        that.con.devLockState = '关闭'
                                      }
                                    })
                                }, 3000)
                              }
                            } else {
                              that.tit = true;
                              that.loser = 6
                              that.clops = 1
                              Indicator.close();
                              clearTimeout(settimea)
                              that.value86 = false;
                              that.numc = false
                              that.numcf = true
                              that.value42 = true;
                              that.con.devLockState = '关闭'
                            }
                          })
                      }, 3000)
                    }
                  } else {
                    that.tit = true;
                    that.loser = 6
                    that.clops = 1
                    Indicator.close();
                    clearTimeout(t)
                    that.value86 = false;
                    that.value42 = true;
                    that.numcf = true;
                    that.numc = false

                    that.con.devLockState = '关闭'
                  }
                })
            }, 3000)
          } else {
            that.numc = false
            that.numcf = true
            that.tit = true;
            that.loser = 6
            that.clops = 1
            that.value86 = false;
            that.value42 = true;
            that.con.devLockState = '关闭'
          }
        })

    },
    famenabc () {
      this.bossabc = false;
      let that = this;
      that.$axios
        .post(
          that.httpUrl + "send/sendCmd",
          that.$qs.stringify({
            devId: that.$route.query.id,
            cmd: 18,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            Indicator.open('Loading...');
            let t = setTimeout(function () {
              // that.bossabc = false;
              that.$axios
                .post(
                  that.httpUrl + "Datapoints/getData",
                  that.$qs.stringify({
                    devId: that.$route.query.id
                  })
                )
                .then(message => {
                  if (message.data.resCode == 0) {
                    let messData = JSON.parse((message.data.errMsg).slice(6))
                    console.log(messData)
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    if (that.twoValue == 17) {
                      // that.tit=true;
                      //   that.loser=0
                      // Indicator.close(); 
                      clearTimeout(t)
                      // that.clops=0
                      //   that.value86=true;
                      // that.con.devLockState='开启';
                      let settimea = setTimeout(() => {
                        that.bossabc = false;
                        that.$axios
                          .post(
                            that.httpUrl + "Datapoints/getData",
                            that.$qs.stringify({
                              devId: that.$route.query.id
                            })
                          )
                          .then(message => {
                            if (message.data.resCode == 0) {
                              let messData = JSON.parse((message.data.errMsg).slice(6))
                              console.log(messData)
                              for (let i = 0; i < messData.data.datastreams.length; i++) {
                                console.log(messData.data.datastreams[i].id);
                                switch (messData.data.datastreams[i].id) {
                                  case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                    break;
                                  default: break;
                                }
                              }
                              if (that.twoValue == 17) {
                                // that.tit=true;
                                //   that.loser=0
                                // Indicator.close(); 
                                clearTimeout(settimea)
                                // that.clops=0
                                //   that.value86=true;
                                // that.con.devLockState='开启';
                                let settimeatwo = setTimeout(() => {
                                  that.bossabc = false;
                                  that.$axios
                                    .post(
                                      that.httpUrl + "Datapoints/getData",
                                      that.$qs.stringify({
                                        devId: that.$route.query.id
                                      })
                                    )
                                    .then(message => {
                                      if (message.data.resCode == 0) {
                                        let messData = JSON.parse((message.data.errMsg).slice(6))
                                        console.log(messData)
                                        for (let i = 0; i < messData.data.datastreams.length; i++) {
                                          console.log(messData.data.datastreams[i].id);
                                          switch (messData.data.datastreams[i].id) {
                                            case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                              break;
                                            default: break;
                                          }
                                        }
                                        if (that.twoValue == 17) {
                                          // that.tit=true;
                                          //   that.loser=0
                                          // Indicator.close(); 
                                          clearTimeout(settimeatwo)
                                          // that.clops=0
                                          //   that.value86=true;
                                          // that.con.devLockState='开启';
                                          let settimeathrees = setTimeout(() => {
                                            that.bossabc = false;
                                            that.$axios
                                              .post(
                                                that.httpUrl + "Datapoints/getData",
                                                that.$qs.stringify({
                                                  devId: that.$route.query.id
                                                })
                                              )
                                              .then(message => {
                                                if (message.data.resCode == 0) {
                                                  let messData = JSON.parse((message.data.errMsg).slice(6))
                                                  console.log(messData)
                                                  for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                    console.log(messData.data.datastreams[i].id);
                                                    switch (messData.data.datastreams[i].id) {
                                                      case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                                        break;
                                                      default: break;
                                                    }
                                                  }
                                                  if (that.twoValue == 17) {
                                                    // that.tit=true;
                                                    //   that.loser=0
                                                    // Indicator.close(); 
                                                    clearTimeout(settimeathrees)
                                                    let settimeafours = setTimeout(() => {
                                                      that.bossabc = false;
                                                      that.$axios
                                                        .post(
                                                          that.httpUrl + "Datapoints/getData",
                                                          that.$qs.stringify({
                                                            devId: that.$route.query.id
                                                          })
                                                        )
                                                        .then(message => {
                                                          if (message.data.resCode == 0) {
                                                            let messData = JSON.parse((message.data.errMsg).slice(6))
                                                            console.log(messData)
                                                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                              console.log(messData.data.datastreams[i].id);
                                                              switch (messData.data.datastreams[i].id) {
                                                                case '2008': that.twoValue = messData.data.datastreams[i].datapoints[0].value
                                                                  break;
                                                                default: break;
                                                              }
                                                            }
                                                            if (that.twoValue == 17) {
                                                              that.tit = true;
                                                              that.loser = 0
                                                              Indicator.close();
                                                              clearTimeout(settimeafours)
                                                              that.clops = 0
                                                              that.value86 = true;
                                                              that.numc = true
                                                              that.numcf = false
                                                              that.value42 = false;
                                                              that.con.devLockState = '开启';
                                                            } else {
                                                              //  that.follow2=message.data.result;
                                                              that.ttt = true;
                                                              that.success = 6;
                                                              Indicator.close();
                                                              clearTimeout(settimeafours)
                                                              that.clops = 1
                                                              that.value86 = false;
                                                              that.numcf = true
                                                              that.numc = false
                                                              that.value42 = true;
                                                              that.con.devLockState = '关闭';
                                                            }
                                                          } else {
                                                            // that.follow2=message.data.result;
                                                            that.ttt = true;
                                                            that.success = 6;
                                                            Indicator.close();
                                                            that.clops = 1
                                                            clearTimeout(settimeafours)
                                                            that.value86 = false;
                                                            that.value42 = true;
                                                            that.numc = false
                                                            that.numcf = true
                                                            that.con.devLockState = '关闭';
                                                          }
                                                        })
                                                    }, 3000)
                                                    // that.clops=0
                                                    //   that.value86=true;
                                                    // that.con.devLockState='开启';
                                                  } else {
                                                    //  that.follow2=message.data.result;
                                                    that.ttt = true;
                                                    that.success = 6;
                                                    Indicator.close();
                                                    clearTimeout(settimeathrees)
                                                    that.clops = 1
                                                    that.value86 = false;
                                                    that.value42 = true;
                                                    that.numc = false
                                                    that.numcf = true
                                                    that.con.devLockState = '关闭';
                                                  }
                                                } else {
                                                  // that.follow2=message.data.result;
                                                  that.ttt = true;
                                                  that.success = 6;
                                                  Indicator.close();
                                                  that.clops = 1
                                                  clearTimeout(settimeathrees)
                                                  that.value86 = false;
                                                  that.value42 = true;
                                                  that.numc = false
                                                  that.numcf = true
                                                  that.con.devLockState = '关闭';
                                                }
                                              })
                                          }, 3000)
                                        } else {
                                          //  that.follow2=message.data.result;
                                          that.ttt = true;
                                          that.success = 6;
                                          that.numcf = true
                                          that.numc = false
                                          Indicator.close();
                                          clearTimeout(settimeatwo)
                                          that.clops = 1
                                          that.value86 = false;
                                          that.value42 = true;
                                          that.con.devLockState = '关闭';
                                        }
                                      } else {
                                        // that.follow2=message.data.result;
                                        that.ttt = true;
                                        that.success = 6;
                                        Indicator.close();
                                        that.clops = 1
                                        that.numcf = true
                                        that.numc = false
                                        clearTimeout(settimeatwo)
                                        that.value86 = false;
                                        that.value42 = true;
                                        that.con.devLockState = '关闭';
                                      }
                                    })
                                }, 3000)
                              } else {
                                //  that.follow2=message.data.result;
                                that.ttt = true;
                                that.success = 6;
                                Indicator.close();
                                that.numcf = true
                                that.numc = false
                                clearTimeout(settimea)
                                that.clops = 1
                                that.value86 = false;
                                that.value42 = true;
                                that.con.devLockState = '关闭';
                              }
                            } else {
                              // that.follow2=message.data.result;
                              that.ttt = true;
                              that.numcf = true
                              that.numc = false
                              that.success = 6;
                              Indicator.close();
                              that.clops = 1
                              clearTimeout(settimea)
                              that.value86 = false;
                              that.value42 = true;
                              that.con.devLockState = '关闭';
                            }
                          })
                      }, 3000)
                    } else {
                      //  that.follow2=message.data.result;
                      that.ttt = true;
                      that.success = 6;
                      Indicator.close();
                      that.numcf = true
                      that.numc = false
                      clearTimeout(t)
                      that.clops = 1
                      that.value86 = false;
                      that.value42 = true;
                      that.con.devLockState = '关闭';
                    }
                  } else {
                    // that.follow2=message.data.result;
                    that.ttt = true;
                    that.numcf = true
                    that.numc = false
                    that.success = 6;
                    Indicator.close();
                    that.clops = 1
                    clearTimeout(t)
                    that.value86 = false;
                    that.value42 = true
                    that.con.devLockState = '关闭';
                  }
                })
            }, 3000)
          } else {
            that.ttt = true;
            that.numc = true
            that.numcf = false
            that.success = 11;
            Indicator.close();
            that.clops = 0
            that.value86 = true;
            that.value42 = false;
            that.con.devLockState = '关闭';
          }
        })

    },
    hideClicktingyong () {
      this.posss = false;
      this.value21 = true;
    },
    toastguan (){
      this.posss = false;
      this.value21 = true;
      this.tit = true;
      this.loser = 24;
    },
    // toastguan () {
    //   this.posss = false;
    //   let that = this;
    //   that.$axios
    //     .post(
    //       that.httpUrl + "send/sendCmd",
    //       that.$qs.stringify({
    //         devId: that.$route.query.id,
    //         cmd: 17,
    //         cmdValue: '11'
    //       })
    //     )
    //     .then(message => {
    //       if (message.data.resCode == 0) {
    //         Indicator.open('Loading...');
    //         let t = setTimeout(function () {
    //           that.posss = false;
    //           that.value21 = false;
    //           that.develop = false;
    //           that.$axios
    //             .post(
    //               that.httpUrl + "Datapoints/getData",
    //               that.$qs.stringify({
    //                 devId: that.$route.query.id
    //               })
    //             )
    //             .then(message => {
    //               if (message.data.resCode == 0) {
    //                 let messData = JSON.parse((message.data.errMsg).slice(6))
    //                 console.log(messData)
    //                 for (let i = 0; i < messData.data.datastreams.length; i++) {
    //                   console.log(messData.data.datastreams[i].id);
    //                   switch (messData.data.datastreams[i].id) {
    //                     case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
    //                       break;
    //                     default: break;
    //                   }
    //                 }
    //                 if (that.oneValue == 17) {
    //                   that.develop = false;
    //                   that.value21 = false;
    //                   that.follow2 = messData.data.result;
    //                   that.ttt = true;
    //                   that.success = 7;
    //                   Indicator.close();
    //                   clearTimeout(t)
    //                   that.colsp1 = 0
    //                   that.con.devControl = '未激活'
    //                 } else {
    //                   // that.develop=true;
    //                   // that.value21=true;
    //                   // Indicator.close();
    //                   // that.tit=true;
    //                   // that.loser=2;
    //                   clearTimeout(t)
    //                   // that.colsp1=1
    //                   // that.con.devControl='已激活'
    //                   let settimea = setTimeout(() => {
    //                     that.posss = false;
    //                     that.value21 = false;
    //                     that.develop = false;
    //                     that.$axios
    //                       .post(
    //                         that.httpUrl + "Datapoints/getData",
    //                         that.$qs.stringify({
    //                           devId: that.$route.query.id
    //                         })
    //                       )
    //                       .then(message => {
    //                         if (message.data.resCode == 0) {
    //                           let messData = JSON.parse((message.data.errMsg).slice(6))
    //                           console.log(messData)
    //                           for (let i = 0; i < messData.data.datastreams.length; i++) {
    //                             console.log(messData.data.datastreams[i].id);
    //                             switch (messData.data.datastreams[i].id) {
    //                               case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
    //                                 break;
    //                               default: break;
    //                             }
    //                           }
    //                           if (that.oneValue == 17) {
    //                             that.develop = false;
    //                             that.value21 = false;
    //                             that.follow2 = messData.data.result;
    //                             that.ttt = true;
    //                             that.success = 7;
    //                             Indicator.close();
    //                             clearTimeout(settimea)
    //                             that.colsp1 = 0
    //                             that.con.devControl = '未激活'
    //                           } else {
    //                             // that.develop=true;
    //                             // that.value21=true;
    //                             // Indicator.close();
    //                             // that.tit=true;
    //                             // that.loser=2;
    //                             clearTimeout(settimea)
    //                             // that.colsp1=1
    //                             // that.con.devControl='已激活'
    //                             let settimeatwo = setTimeout(() => {
    //                               that.posss = false;
    //                               that.value21 = false;
    //                               that.develop = false;
    //                               that.$axios
    //                                 .post(
    //                                   that.httpUrl + "Datapoints/getData",
    //                                   that.$qs.stringify({
    //                                     devId: that.$route.query.id
    //                                   })
    //                                 )
    //                                 .then(message => {
    //                                   if (message.data.resCode == 0) {
    //                                     let messData = JSON.parse((message.data.errMsg).slice(6))
    //                                     console.log(messData)
    //                                     for (let i = 0; i < messData.data.datastreams.length; i++) {
    //                                       console.log(messData.data.datastreams[i].id);
    //                                       switch (messData.data.datastreams[i].id) {
    //                                         case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
    //                                           break;
    //                                         default: break;
    //                                       }
    //                                     }
    //                                     if (that.oneValue == 17) {
    //                                       // that.develop=false;
    //                                       // that.value21=false;
    //                                       // that.follow2=messData.data.result;
    //                                       // that.ttt=true;
    //                                       // that.success=7;
    //                                       // Indicator.close();
    //                                       clearTimeout(settimeatwo)
    //                                       let settimeathrees = setTimeout(() => {
    //                                         that.posss = false;
    //                                         that.value21 = false;
    //                                         that.develop = false;
    //                                         that.$axios
    //                                           .post(
    //                                             that.httpUrl + "Datapoints/getData",
    //                                             that.$qs.stringify({
    //                                               devId: that.$route.query.id
    //                                             })
    //                                           )
    //                                           .then(message => {
    //                                             if (message.data.resCode == 0) {
    //                                               let messData = JSON.parse((message.data.errMsg).slice(6))
    //                                               console.log(messData)
    //                                               for (let i = 0; i < messData.data.datastreams.length; i++) {
    //                                                 console.log(messData.data.datastreams[i].id);
    //                                                 switch (messData.data.datastreams[i].id) {
    //                                                   case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
    //                                                     break;
    //                                                   default: break;
    //                                                 }
    //                                               }
    //                                               if (that.oneValue == 17) {
    //                                                 // that.develop=false;
    //                                                 // that.value21=false;
    //                                                 // that.follow2=messData.data.result;
    //                                                 // that.ttt=true;
    //                                                 // that.success=7;
    //                                                 // Indicator.close();
    //                                                 clearTimeout(settimeathrees)
    //                                                 // that.colsp1=0
    //                                                 // that.con.devControl='未激活'
    //                                                 let settimeafours = setTimeout(() => {
    //                                                   that.posss = false;
    //                                                   that.value21 = false;
    //                                                   that.develop = false;
    //                                                   that.$axios
    //                                                     .post(
    //                                                       that.httpUrl + "Datapoints/getData",
    //                                                       that.$qs.stringify({
    //                                                         devId: that.$route.query.id
    //                                                       })
    //                                                     )
    //                                                     .then(message => {
    //                                                       if (message.data.resCode == 0) {
    //                                                         let messData = JSON.parse((message.data.errMsg).slice(6))
    //                                                         console.log(messData)
    //                                                         for (let i = 0; i < messData.data.datastreams.length; i++) {
    //                                                           console.log(messData.data.datastreams[i].id);
    //                                                           switch (messData.data.datastreams[i].id) {
    //                                                             case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
    //                                                               break;
    //                                                             default: break;
    //                                                           }
    //                                                         }
    //                                                         if (that.oneValue == 17) {
    //                                                           that.develop = false;
    //                                                           that.value21 = false;
    //                                                           that.follow2 = messData.data.result;
    //                                                           that.ttt = true;
    //                                                           that.success = 7;
    //                                                           Indicator.close();
    //                                                           clearTimeout(settimeafours)
    //                                                           that.colsp1 = 0
    //                                                           that.con.devControl = '未激活'
    //                                                         } else {
    //                                                           that.develop = true;
    //                                                           that.value21 = true;
    //                                                           Indicator.close();
    //                                                           that.tit = true;
    //                                                           that.loser = 2;
    //                                                           clearTimeout(settimeafours)
    //                                                           that.colsp1 = 1
    //                                                           that.con.devControl = '已激活'
    //                                                         }
    //                                                       } else {
    //                                                         that.develop = true;
    //                                                         that.value21 = true;
    //                                                         Indicator.close();
    //                                                         clearTimeout(settimeafours)
    //                                                         that.tit = true;
    //                                                         that.loser = 2;
    //                                                         that.colsp1 = 1
    //                                                         that.con.devControl = '已激活'
    //                                                       }
    //                                                     })
    //                                                 }, 3000)
    //                                               } else {
    //                                                 that.develop = true;
    //                                                 that.value21 = true;
    //                                                 Indicator.close();
    //                                                 that.tit = true;
    //                                                 that.loser = 2;
    //                                                 clearTimeout(settimeathrees)
    //                                                 that.colsp1 = 1
    //                                                 that.con.devControl = '已激活'
    //                                               }
    //                                             } else {
    //                                               that.develop = true;
    //                                               that.value21 = true;
    //                                               Indicator.close();
    //                                               clearTimeout(settimeatwo)
    //                                               that.tit = true;
    //                                               that.loser = 2;
    //                                               that.colsp1 = 1
    //                                               that.con.devControl = '已激活'
    //                                             }
    //                                           })
    //                                       }, 3000)
    //                                       // that.colsp1=0
    //                                       // that.con.devControl='未激活'
    //                                     } else {
    //                                       that.develop = true;
    //                                       that.value21 = true;
    //                                       Indicator.close();
    //                                       that.tit = true;
    //                                       that.loser = 2;
    //                                       clearTimeout(settimeatwo)
    //                                       that.colsp1 = 1
    //                                       that.con.devControl = '已激活'
    //                                     }
    //                                   } else {
    //                                     that.develop = true;
    //                                     that.value21 = true;
    //                                     Indicator.close();
    //                                     clearTimeout(settimeatwo)
    //                                     that.tit = true;
    //                                     that.loser = 2;
    //                                     that.colsp1 = 1
    //                                     that.con.devControl = '已激活'
    //                                   }
    //                                 })
    //                             }, 3000)
    //                           }
    //                         } else {
    //                           that.develop = true;
    //                           that.value21 = true;
    //                           Indicator.close();
    //                           clearTimeout(settimea)
    //                           that.tit = true;
    //                           that.loser = 2;
    //                           that.colsp1 = 1
    //                           that.con.devControl = '已激活'
    //                         }
    //                       })
    //                   }, 3000)
    //                 }
    //               } else {
    //                 that.develop = true;
    //                 that.value21 = true;
    //                 Indicator.close();
    //                 clearTimeout(t)
    //                 that.tit = true;
    //                 that.loser = 2;
    //                 that.colsp1 = 1
    //                 that.con.devControl = '已激活'
    //               }
    //             })
    //         }, 3000)
    //       } else {
    //         that.develop = true;
    //         that.value21 = true;
    //         Indicator.close();
    //         that.tit = true;
    //         that.loser = 2;
    //         that.colsp1 = 1
    //         that.con.devControl = '已激活'
    //       }
    //     })

    //   //  this.posss=false;
    //   //   this.value21=false;
    //   //   this.develop=false;
    //   //   let self=this;
    //   //        this.$axios
    //   //       .post(
    //   //       this.httpUrl+"send/sendCmd",
    //   //       this.$qs.stringify({
    //   //           devId:this.$route.query.id,
    //   //           cmd:17,
    //   //           cmdValue:'11'
    //   //         })
    //   //       )
    //   //       .then(message => {
    //   //         if(message.data.resCode==0){
    //   //           console.log(message)
    //   //           let that=this;
    //   //            Indicator.open('Loading...');
    //   //           let t = setTimeout(function(){
    //   //               that.$axios
    //   //               .post(
    //   //               that.httpUrl+"send/QueryCmdsStatus",
    //   //               that.$qs.stringify({
    //   //                   cmdsId:message.data.cmd_uuid
    //   //                 })
    //   //               )
    //   //               .then(res => {
    //   //                   console.log(res)
    //   //                   if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==4){
    //   //                     that.value21=false;
    //   //                     that.follow2=res.data.result;
    //   //                     that.ttt=true;
    //   //                     that.success=7;
    //   //                     clearTimeout(t);
    //   //                     Indicator.close();
    //   //                     that.colsp1=0
    //   //                     that.con.devControl='未激活'
    //   //                   }else if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==0){
    //   //                      that.value21=true;
    //   //                       Indicator.close();
    //   //                       clearTimeout(t);
    //   //                        that.tit=true;
    //   //                         that.loser=86;
    //   //                       that.colsp1=1
    //   //                       that.con.devControl='已激活'
    //   //                   }else{
    //   //                     that.value21=true;
    //   //                     Indicator.close();
    //   //                      that.tit=true;
    //   //                     that.loser=2;
    //   //                     clearTimeout(t);
    //   //                     that.colsp1=1
    //   //                      that.con.devControl='已激活'
    //   //                   }
    //   //               }).catch(err => {
    //   //                 Indicator.close();
    //   //                 that.tit=true;
    //   //                 that.loser=2;
    //   //                 that.value21=true;
    //   //                 that.develop=true;
    //   //                 that.colsp1=1
    //   //                 that.con.devControl='已激活'
    //   //            })
    //   //           },5000)
    //   //         }else{
    //   //           console.log(167)
    //   //             self.tit=true;
    //   //             self.loser=2;
    //   //             self.colsp1=1
    //   //             self.value21=true;
    //   //             Indicator.close();
    //   //             self.develop=true;
    //   //             self.con.devControl='已激活'
    //   //         }

    //   //       })
    // },
    hideClickqu () {
      this.poss = false;
      this.value21 = false;
    },
    toastqiyong () {
      if (this.value21) {
        this.poss = true;
      } else {

        this.posss = true;
      }
    },
    toast () {
      this.poss = false;
      let that = this;
      that.$axios
        .post(
          that.httpUrl + "send/sendCmd",
          that.$qs.stringify({
            devId: that.$route.query.id,
            cmd: 17,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            Indicator.open('Loading...');
            let t = setTimeout(function () {
              that.poss = false;
              that.value21 = true;
              that.$axios
                .post(
                  that.httpUrl + "Datapoints/getData",
                  that.$qs.stringify({
                    devId: that.$route.query.id
                  })
                )
                .then(message => {
                  if (message.data.resCode == 0) {
                    let messData = JSON.parse((message.data.errMsg).slice(6))
                    console.log(messData)
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    if (that.oneValue != 18) {
                      // that.value21=false;
                      // Indicator.close();
                      // that.tit=true;
                      // that.loser=8;
                      // that.develop=false;
                      // that.colsp1=0
                      clearTimeout(t)
                      // that.con.devControl='未激活'
                      let settimea = setTimeout(() => {
                        that.poss = false;
                        that.value21 = true;
                        that.$axios
                          .post(
                            that.httpUrl + "Datapoints/getData",
                            that.$qs.stringify({
                              devId: that.$route.query.id
                            })
                          )
                          .then(message => {
                            if (message.data.resCode == 0) {
                              let messData = JSON.parse((message.data.errMsg).slice(6))
                              console.log(messData)
                              for (let i = 0; i < messData.data.datastreams.length; i++) {
                                console.log(messData.data.datastreams[i].id);
                                switch (messData.data.datastreams[i].id) {
                                  case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
                                    break;
                                  default: break;
                                }
                              }
                              if (that.oneValue != 18) {
                                // that.value21=false;
                                // Indicator.close();
                                // that.tit=true;
                                // that.loser=8;
                                // that.develop=false;
                                // that.colsp1=0
                                clearTimeout(settimea)
                                // that.con.devControl='未激活'
                                let settimeatwo = setTimeout(() => {
                                  that.poss = false;
                                  that.value21 = true;
                                  that.$axios
                                    .post(
                                      that.httpUrl + "Datapoints/getData",
                                      that.$qs.stringify({
                                        devId: that.$route.query.id
                                      })
                                    )
                                    .then(message => {
                                      if (message.data.resCode == 0) {
                                        let messData = JSON.parse((message.data.errMsg).slice(6))
                                        console.log(messData)
                                        for (let i = 0; i < messData.data.datastreams.length; i++) {
                                          console.log(messData.data.datastreams[i].id);
                                          switch (messData.data.datastreams[i].id) {
                                            case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
                                              break;
                                            default: break;
                                          }
                                        }
                                        if (that.oneValue != 18) {
                                          clearTimeout(settimeatwo)
                                          let settimeathrees = setTimeout(() => {
                                            that.poss = false;
                                            that.value21 = true;
                                            that.$axios
                                              .post(
                                                that.httpUrl + "Datapoints/getData",
                                                that.$qs.stringify({
                                                  devId: that.$route.query.id
                                                })
                                              )
                                              .then(message => {
                                                if (message.data.resCode == 0) {
                                                  let messData = JSON.parse((message.data.errMsg).slice(6))
                                                  console.log(messData)
                                                  for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                    console.log(messData.data.datastreams[i].id);
                                                    switch (messData.data.datastreams[i].id) {
                                                      case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
                                                        break;
                                                      default: break;
                                                    }
                                                  }
                                                  if (that.oneValue != 18) {
                                                    clearTimeout(settimeathrees)
                                                    let settimeafours = setTimeout(() => {
                                                      that.poss = false;
                                                      that.value21 = true;
                                                      that.$axios
                                                        .post(
                                                          that.httpUrl + "Datapoints/getData",
                                                          that.$qs.stringify({
                                                            devId: that.$route.query.id
                                                          })
                                                        )
                                                        .then(message => {
                                                          if (message.data.resCode == 0) {
                                                            let messData = JSON.parse((message.data.errMsg).slice(6))
                                                            console.log(messData)
                                                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                                                              console.log(messData.data.datastreams[i].id);
                                                              switch (messData.data.datastreams[i].id) {
                                                                case '2012': that.oneValue = messData.data.datastreams[i].datapoints[0].value
                                                                  break;
                                                                default: break;
                                                              }
                                                            }
                                                            if (that.oneValue != 18) {
                                                              that.value21 = false;
                                                              Indicator.close();
                                                              that.tit = true;
                                                              that.loser = 8;
                                                              that.develop = false;
                                                              that.colsp1 = 0
                                                              clearTimeout(settimeafours)
                                                              that.con.devControl = '未激活'
                                                            } else {
                                                              clearTimeout(settimeafours)
                                                              that.value21 = true;
                                                              that.follow2 = message.data.result;
                                                              that.ttt = true;
                                                              that.success = 2;
                                                              Indicator.close();
                                                              that.develop = true;
                                                              that.colsp1 = 1
                                                              that.con.devControl = '已激活'
                                                            }
                                                          } else {
                                                            clearTimeout(settimeafours)
                                                            that.value21 = true;
                                                            that.follow2 = message.data.result;
                                                            that.ttt = true;
                                                            that.success = 2;
                                                            Indicator.close();
                                                            that.develop = true;
                                                            that.colsp1 = 1
                                                            that.con.devControl = '已激活'
                                                          }
                                                        })
                                                    }, 3000)
                                                  } else {
                                                    clearTimeout(settimeathrees)
                                                    that.value21 = true;
                                                    that.follow2 = message.data.result;
                                                    that.ttt = true;
                                                    that.success = 2;
                                                    Indicator.close();
                                                    that.develop = true;
                                                    that.colsp1 = 1
                                                    that.con.devControl = '已激活'
                                                  }
                                                } else {
                                                  clearTimeout(settimeathrees)
                                                  that.value21 = true;
                                                  that.follow2 = message.data.result;
                                                  that.ttt = true;
                                                  that.success = 2;
                                                  Indicator.close();
                                                  that.develop = true;
                                                  that.colsp1 = 1
                                                  that.con.devControl = '已激活'
                                                }
                                              })
                                          }, 3000)
                                          // that.value21=false;
                                          // Indicator.close();
                                          // that.tit=true;
                                          // that.loser=8;
                                          // that.develop=false;
                                          // that.colsp1=0

                                          // that.con.devControl='未激活'
                                        } else {
                                          clearTimeout(settimeatwo)
                                          that.value21 = true;
                                          that.follow2 = message.data.result;
                                          that.ttt = true;
                                          that.success = 2;
                                          Indicator.close();
                                          that.develop = true;
                                          that.colsp1 = 1
                                          that.con.devControl = '已激活'
                                        }
                                      } else {
                                        clearTimeout(settimeatwo)
                                        that.value21 = true;
                                        that.follow2 = message.data.result;
                                        that.ttt = true;
                                        that.success = 2;
                                        Indicator.close();
                                        that.develop = true;
                                        that.colsp1 = 1
                                        that.con.devControl = '已激活'
                                      }
                                    })
                                }, 3000)
                              } else {
                                clearTimeout(settimea)
                                that.value21 = true;
                                that.follow2 = message.data.result;
                                that.ttt = true;
                                that.success = 2;
                                Indicator.close();
                                that.develop = true;
                                that.colsp1 = 1
                                that.con.devControl = '已激活'
                              }
                            } else {
                              clearTimeout(settimea)
                              that.value21 = true;
                              that.follow2 = message.data.result;
                              that.ttt = true;
                              that.success = 2;
                              Indicator.close();
                              that.develop = true;
                              that.colsp1 = 1
                              that.con.devControl = '已激活'
                            }
                          })
                      }, 3000)
                    } else {
                      clearTimeout(t)
                      that.value21 = true;
                      that.follow2 = message.data.result;
                      that.ttt = true;
                      that.success = 2;
                      Indicator.close();
                      that.develop = true;
                      that.colsp1 = 1
                      that.con.devControl = '已激活'
                    }
                  } else {
                    clearTimeout(t)
                    that.value21 = true;
                    that.follow2 = message.data.result;
                    that.ttt = true;
                    that.success = 2;
                    Indicator.close();
                    that.develop = true;
                    that.colsp1 = 1
                    that.con.devControl = '已激活'
                  }
                })
            }, 3000)
          } else {

            that.value21 = false;
            that.follow2 = message.data.result;
            that.tit = true;
            that.loser = 8;
            Indicator.close();
            that.develop = false;
            that.colsp1 = 0
            that.con.devControl = '已激活'
          }
        })
      // 全注
      // this.poss=false;
      // this.value21=true;
      // let self=this;
      //  this.$axios
      //     .post(
      //     this.httpUrl+"send/sendCmd",
      //     this.$qs.stringify({
      //         devId:this.$route.query.id,
      //         cmd:17,
      //         cmdValue:'12'
      //       })
      //     )
      //     .then(message => {
      //       if(message.data.resCode==0){
      //         console.log(message)
      //         let that=this;
      //         Indicator.open('Loading...');
      //         let t = setTimeout(function(){
      //             that.$axios
      //             .post(
      //             that.httpUrl+"send/QueryCmdsStatus",
      //             that.$qs.stringify({
      //                 cmdsId:message.data.cmd_uuid
      //               })
      //             )
      //             .then(res => {
      //                 console.log(res)
      //                 if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==4){
      //                    that.value21=true;
      //                   that.follow2=res.data.result;
      //                   that.ttt=true;
      //                   that.success=2;
      //                   clearTimeout(t);
      //                  Indicator.close();
      //                   that.develop=true;
      //                    that.colsp1=1
      //                   that.con.devControl='已激活'
      //                 }else if(JSON.parse((res.data.errMsg).slice(4,res.data.errMsg.length)).data.status==0){
      //                     clearTimeout(t);
      //                   that.value21=false;
      //                   Indicator.close();
      //                   that.tit=true;
      //                   that.loser=86;
      //                   that.develop=false;
      //                    that.colsp1=0
      //                    that.con.devControl='未激活'
      //                 }else{
      //                   clearTimeout(t);
      //                   that.value21=false;
      //                   Indicator.close();
      //                   that.tit=true;
      //                   that.loser=8;
      //                   that.develop=false;
      //                    that.colsp1=0
      //                    that.con.devControl='未激活'
      //                 }
      //             }).catch(err => {
      //               console.log(999)
      //               clearTimeout(t);
      //               that.value21=false;
      //               Indicator.close();
      //               that.tit=true;
      //               that.loser=8;
      //               that.develop=false;
      //                that.colsp1=0
      //                that.con.devControl='未激活'
      //          })
      //         },3000)
      //       }else{
      //         console.log(167)
      //          self.value21=false;
      //           self.tit=true;
      //           self.loser=8;
      //           Indicator.close();
      //           self.develop=false;
      //            self.colsp1=0
      //            self.con.devControl='未激活'
      //       }

      //     })
    },
    nextClick (next) {
      this.$router.push({ path: '/' + next, query: { id: this.$route.query.id } });
    },
    start () {
      this.rotate = !this.rotate;
      this.chosehide = !this.chosehide
      console.log(this.rotate)
    },
    starts () {
      this.rotates = !this.rotates;
      this.chosehidea = !this.chosehidea
      console.log(this.rotate)
    },
    ai () {
      this.tit = false;
      //  this.ttt=false;
    },
    ais () {
      this.ttt = false;
      //  this.tit=false;
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
    }
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aaaaa {
  height: 100%;
  width: 100%;
}
.hello li {
  border-bottom: none;
}
.top {
  height: 92px !important;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
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
  background: #f8f8f8;
}
.low {
  font-size: 28px;
  font-family: 'PingFang-SC-regular';
  color: #ff0c00 !important;
}
ul li {
  height: 80px;
  border-top: 2px solid #ebebeb;
  background: #f8f8f8;
  line-height: 80px;
  text-align: left;
  font-size: 28px;
  font-family: 'PingFang-SC-regular';
  color: #767676;
  margin-left: 30px;
}
.bottom {
  /* height: 250px; */
}
ul li span:nth-child(2) {
  text-align: right;
  display: inline-block;
  width: 55%;
  float: right;
  padding-right: 20px;
  color: #303030;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'PingFang-SC-regular';
}
.helloDiv {
  display: inline-block;
  font-size: 32px;
  margin-left: 20px;
  font-weight: bold;
  color: #303030;
  font-family: 'PingFang-SC-regular';
}
.noborder {
  border-bottom: none;
}
.powerItem > input {
  float: right;
  margin-top: 0.06rem;
}
/* .bottomoff{display: flex;justify-content: space-between;} *
    .powerItem{display: block;}



    /* .bottom .bottomchild{border-bottom: none;} */
.bottom .bottomchild span:nth-child(1) {
  width: 32px;
  height: 50px;
  display: inline-block;
}
.bottom .bottomchild span:nth-child(1) img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  margin-bottom: 10px;
}
.bottom .bottomchild span:nth-child(2) {
  display: inline-block;
  line-height: 60px;
  font-weight: bold;
  padding-left: 8px;
}
/* .pos{width: 264px;height: 256px;border-radius: 10px;background: #282829}
    .pos div{width: 212px;height: 86px;line-height: 86px;border-bottom: 1px solid #5b5a5d;margin:0 auto;color: #fff;font-size: 22px;} */
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
/* .hidesqu{position: absolute;top:92px;left: 0;right: 0;bottom: 0;z-index: 22;} */
.statuid {
  margin-left: 240px !important;
}
.four {
  width: 37px !important;
  display: inline-block;
  height: 46px !important;
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
/* .load p img{width: 100%;height: 100%;z-index: 999;} */
.square {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: rgba(108, 108, 108, 0.5);
  z-index: 999;
}
.square .box {
  font-size: 30px;
  width: 70%;
  background: #fff;
  margin: 40% 15%;
  text-align: center;
  height: 260px;
  line-height: 130px;
  border-radius: 10px;
}
.square .box p {
  border-bottom: 1px solid #eee;
  font-size: 30px;
}

.square .box p span:nth-child(2) {
  text-align: center;
}
.lastpos {
  font-size: 30px;
}

/* @-webkit-keyframes rotation{
    from {-webkit-transform: rotate(360deg);}
    to {-webkit-transform: rotate(0deg);}
    }

    .Rotation{
    -webkit-transform: rotate(360deg);
    animation: rotation 3s linear infinite;
    -moz-animation: rotation 3s linear infinite;
    -webkit-animation: rotation 3s linear infinite;
    -o-animation: rotation 3s linear infinite;
    } */
button {
  width: 200px;
  height: 60px;
  background: #4c81d9;
  outline: none;
  border: none;
  border-radius: 30px;
  color: #fff;
}
.bottom li span {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.lastbu {
  margin-right: 20px;
}
.lone {
  border-bottom: none !important;
}
.lefts {
  float: right;
  margin-right: 10px;
  margin-top: 20px;
}
.hellocopy {
  margin-bottom: 0;
}
.aa {
  transition: all 0.5s;
}
.go {
  transform: rotate(90deg);
  transition: all 0.5s;
}
.bb {
  transition: all 0.5s;
}
.cc {
  transform: rotate(90deg);
  transition: all 0.5s;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.bottomoff span:nth-child(1) {
  width: 70%;
}
.bottomoff span:nth-child(2) {
  width: 15% !important;
}
.num1 {
  padding-top: 12px;
}
.newbottom {
  /*height: 84px !important;*/
  margin-bottom: 0 !important;
  margin-top: 30px;
}
.qibottom {
  /* height: 190px; */
}
.topchild {
  border-top: none;
}
.topli {
  border-top: none;
}
.positions {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(108, 108, 108, 0.3);
  z-index: 999;
}
.box {
  font-size: 30px;
  width: 70%;
  background: #fff;
  margin: 40% 15%;
  text-align: center;
  height: 260px;
  line-height: 130px;
  border-radius: 10px;
}
.box > p:nth-of-type(1) {
  border-bottom: 1px solid #cccccc;
  font-size: 32px;
  line-height: 1.733333rem;
}
.box > p:nth-of-type(2) {
  display: flex;
  justify-content: space-around;
  font-size: 32px;
  line-height: 1.733333rem;
}
.mint-switch-core {
  background-color: #4cd964 !important;
  border-color: #4cd964 !important;
}
.morenli {
  margin-left: 0 !important;
}
.moren {
  text-align: center;
  color: red;
}
.imop {
  color: #54a92f !important;
}
.sss {
  color: red !important;
}
.hidespan {
  width: 100% !important;
  height: 80px;
  background: red;
  position: relative;
  right: 0;
  opacity: 0;
}
.hidespans {
  width: 100% !important;
  height: 80px;
  background: black;
  position: relative;
  right: 0;
  opacity: 0;
}
.regular {
  color: #54a92f !important;
}
.mint-loadmore-top{
  margin-top: 0.7rem!important;
}
</style>
