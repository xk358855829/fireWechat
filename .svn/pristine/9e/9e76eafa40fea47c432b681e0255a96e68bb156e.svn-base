<template>
  <div>

    <div @click="ab">
      {{battery}}
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { mapState, mapActions, } from 'vuex'
export default {
  name: 'hourstate',
  data () {
    return {
      battery: 1,
      conduit: '',
      pipeline: '',
      accumulated: '',
      watermetertem: '',
      numcf: false,
      numc: false,
      colsp2: '',
      colsp1: '',
      clops: '',
      mapshowlat: false,
      readmessage: false,
      morenshow: false,
      glisp: false,
      bossabc: false,
      boss: false,
      boaa: false,
      poss: false,
      posss: false,
      develop: '',
      rotate: false,
      chosehide: false,
      loser: '5',
      success: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      ttt: false,
      tit: false,
      load: false,
      datemg: false,
      undatemg: true,
      follow: '',
      follow1: '',
      follow2: '',
      bg: '',
      help: '',
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
    console.log(this.$route.query.id)
    // if(this.value1==true){
    //   this.develop=true
    //   console.log(88888)
    // }else{
    //   this.develop=false
    // }
    let that = this;
    that.$http({
      methods: 'post',
      url: that.httpUrl + 'devices/findsn',
      data: Qs.stringify({
        devId: this.$route.query.id,
        pageNum: 1,
        pageSize: 10
      }),
    }).then(function (res) {
      console.log(res)
      if (res.data.code == 0) {
        that.con.devParaSnone = message.data.i.devParaSn.slice(0, 2);
        that.con.devParaSntwo = '20' + message.data.i.devParaSn.slice(2, 4) + '年' + message.data.i.devParaSn.slice(4, 6) + '月' + message.data.i.devParaSn.slice(6, 8) + '日';
        that.con.devParaSnthree = message.data.i.devParaSn.slice(8, 12);
      }
    })
    //   this.$axios
    //     .post(
    //     that.httpUrl+"devices/findsn",
    //     this.$qs.stringify({
    //         devId:this.$route.query.id,
    //         pageNum:1,
    // 		pageSize:10
    //       })
    //     )
    //      .then(message => {
    //       console.log(message.data.i.devParaSn)
    //           that.con.devParaSnone=message.data.i.devParaSn.slice(0,2);
    //           that.con.devParaSntwo='20'+message.data.i.devParaSn.slice(2,4)+'年'+message.data.i.devParaSn.slice(4,6)+'月'+message.data.i.devParaSn.slice(6,8)+'日';
    //           that.con.devParaSnthree=message.data.i.devParaSn.slice(8,12);
    //      })

    that.$http({
      methods: 'post',
      url: that.httpUrl + 'Datapoints/getData',
      data: Qs.stringify({
        devId: this.$route.query.id,
      }),
    }).then(function (res) {
      console.log(res)
      console.log(message)
      console.log(JSON.parse((message.data.errMsg).slice(6)))
      let messData = JSON.parse((message.data.errMsg).slice(6))
      for (let i = 0; i < messData.data.datastreams.length; i++) {
        console.log(messData.data.datastreams[i].id);
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
          case '2005': that.con.waterPressure = messData.data.datastreams[i].datapoints[0].value
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
      console.log(888888888888888888888)
      console.log(that.con.devLockState)
      console.log(that.con.devLatitude);
      // if(that.con.devLatitude==0){
      //   that.con.devLatitude='无'
      // }
      if (String(that.con.waterMeterTotal) == '') {
        that.con.waterMeterTotal = '无'
        that.accumulated = 0
      } else {
        that.accumulated = 1
      }
      if (String(that.con.devUnlockTime) == '') {
        that.con.devUnlockTime = '无'
      }
      if (String(that.con.waterMeterTemp) == '') {
        that.con.waterMeterTemp = '无'
        that.watermetertem = 0
      } else {
        that.watermetertem = 1
      }
      if (String(that.con.devHardVerison) == '') {
        that.con.devHardVerison = '无'
      }
      if (String(that.con.devVOL) == '') {
        that.con.devVOL = '无'
        that.battery = 0
      } else {
        that.battery = 1
      }
      if (String(that.con.waterPressure) == '') {
        that.con.waterPressure = '无'
        that.conduit = 0
      } else {
        that.conduit = 1
      }
      if (String(that.con.waterTemperature) == '') {
        that.con.waterTemperature = '无'
        that.pipeline = 0
      } else {
        that.pipeline = 1
      }
      if (String(that.con.devSoftVerison) == '') {
        that.con.devSoftVerison = '无'
      }
      if (String(that.con.devIccid) == '') {
        that.con.devIccid = '无'
      }
      if (String(that.con.devParaSn) == '') {
        that.con.devParaSn = '无'
      }
      if (String(that.con.devWarning) == '') {
        that.con.devWarning = '无'
      }
      if (String(that.con.devLongitude) == '') {
        that.con.devLongitude = '无'
      }
      if (String(that.con.devLatitude) == '') {
        that.con.devLatitude = '无'
      }
      if (String(that.con.devParaSnthree) == '') {
        that.con.devParaSnthree = '无'
      }
      // if(String(that.con.devParaSnone)==''){
      //   that.con.devParaSnone='无'
      // }
      if (String(that.con.devParaSntwo) == '') {
        that.con.devParaSntwo = '无'
      }
      if (that.con.devStatus == 0x11) {
        this.help = 0
      } else if (that.con.devStatus == 0x12) {
        this.help = 1
      } else if (String(that.con.devStatus) == '') {
        that.con.devStatus = '无'
      }
      if (that.con.devDefence == 17) {
        // that.con.devDefence='已布防'
        that.colsp2 = 0
        that.value3 = false
      } else {
        // that.con.devDefence='未布防'
        that.colsp2 = 1
        that.value3 = true
      }
      if (that.con.devUnlockWay == 17) {
        that.con.devUnlockWay = 'IC卡'
      } else if (that.con.devUnlockWay == 18) {
        that.con.devUnlockWay = '手机'
      } else if (that.con.devUnlockWay == 20) {
        that.con.devUnlockWay = '应急开锁'
      } else {
        that.con.devUnlockWay = '未激活'
      }

      if (that.con.devControl == 17) {
        // that.con.devControl='未激活'
        that.colsp1 = 0
        that.value1 = false;
        that.develop = false;
      } else {
        // that.con.devControl='已激活'
        that.colsp1 = 1
        that.value1 = true;
        that.develop = true;
      }

      if (that.con.devLockState == 17) {
        // that.con.devLockState='关闭';
        that.clops = 0
        that.value2 = true;
        that.value4 = false;
      } else {
        // that.con.devLockState='开启'
        that.clops = 1
        that.value2 = false;
        that.value4 = true;

      }
      console.log(that.con.devLockState)

      console.log(that.con.devParaSnone)
    })
    this.ktime = [String(new Date().getFullYear()), String((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes())), String(new Date().getSeconds() <= 9 ? '0' + (new Date().getSeconds()) : (new Date().getSeconds()))];
    console.log(this.ktime)
    console.log(22)
  },
  methods: {
    ...mapActions([
      'ADD'
    ]),
    ab () {
      this.nice()
    },
    noself () {
      if (this.value4 == false) {
        console.log(88888)
        this.bossabc = true;
        this.numcf = false;

      } else {
        console.log(456)
        this.numcf = true;
      }
    },
    mapchange () {
      this.mapshowlat = true;
    },
    readmessages () {
      this.readmessage = true;
    },
    moren () {
      this.morenshow = true;
    },
    morenno () {
      this.morenshow = false;
    },
    mapshowno () {
      this.mapshowlat = false;
    },
    readmesno () {
      this.readmessage = false;
    },
    readmesyes () {
      this.readmessage = false;
      this.load = true;
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
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.load = false;
                    clearTimeout(t);
                    that.readmessage = false;
                    that.tit = true;
                    that.loser = 22;
                  } else {
                    that.load = false;
                    clearTimeout(t);
                    that.readmessage = false;
                    that.tit = true;
                    that.loser = 23
                  }
                }).catch(err => {
                  that.load = false;
                  clearTimeout(t);
                  console.log(1)
                  that.readmessage = false;
                  that.tit = true;
                  that.loser = 23
                })
            }, 3000)
          } else {
            this.load = false;
            this.readmessage = false;
            this.tit = true;
            this.loser = 23
          }

        }).catch(err => {
          this.load = false;
          this.readmessage = false;
          this.tit = true;
          this.loser = 23
        })
    },
    mapshowyes () {
      this.mapshowlat = false;
      this.load = true;
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
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.load = false;
                    clearTimeout(t);
                    that.mapshowlat = false;
                    that.tit = true;
                    that.loser = 20;

                  } else {
                    that.load = false;
                    clearTimeout(t);
                    that.mapshowlat = false;
                    that.tit = true;
                    that.loser = 21
                  }
                }).catch(err => {
                  that.load = false;
                  clearTimeout(t);
                  that.mapshowlat = false;
                  that.tit = true;
                  that.loser = 21
                })
            }, 3000)
          } else {
            this.load = false;
            this.mapshowlat = false;
            this.tit = true;
            this.loser = 21
          }

        }).catch(err => {
          this.mapshowlat = false;
          this.tit = true;
          this.loser = 21
        })
    },
    morenyes () {
      this.morenshow = false;
      this.load = true;
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
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.load = false;
                    clearTimeout(t);
                    that.morenshow = false;
                    that.tit = true;
                    that.loser = 19;

                  } else {
                    that.load = false;
                    clearTimeout(t);
                    that.morenshow = false;
                    that.tit = true;
                    that.loser = 18
                  }
                }).catch(err => {
                  that.load = false;
                  clearTimeout(t);
                  console.log(1)
                  that.morenshow = false;
                  that.tit = true;
                  that.loser = 18
                })
            }, 3000)
          } else {
            this.load = false;
            this.morenshow = false;
            this.tit = true;
            this.loser = 18
          }

        })
    },
    bossspaabc () {
      this.bossabc = false;
    },
    boaaspa () {
      this.boaa = false;
    },
    bossspa () {
      this.boss = false;
    },
    glispspa () {
      this.glisp = false;
    },
    tankuang () {
      if (this.value3) {
        this.glisp = true;
      } else {
        this.boaa = true;
      }
    },
    famens () {
      console.log(this.value2)
      // if(this.value2==true){
      //   console.log(1111111111111111111111112)
      //     this.bossabc=true;
      //   }else{
      //     this.boss=true;
      //   }

      if (this.value2) {
        console.log(987)
        this.numc = true;
      } else {
        console.log(456)
        this.boss = true;
        this.numc = false;
      }
    },
    aifa () {
      this.value3 = true;
      this.boaa = false;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 19,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.success = 1;
                    that.ttt = true;
                    that.follow1 = res.data.result;
                    clearTimeout(t);
                    that.load = false;
                    that.colsp2 = 1
                    that.con.devDefence = '已布防'
                  } else {
                    clearTimeout(t);
                    that.tit = true;
                    that.loser = 7
                    that.colsp2 = 0
                    that.con.devDefence = '未布防'
                  }
                }).catch(err => {
                  clearTimeout(t);
                  that.tit = true;
                  that.loser = 7
                  that.load = false;
                  that.colsp2 = 0
                  that.con.devDefence = '未布防'
                })
            }, 3000)
          } else {
            this.tit = true;
            this.loser = 7
            this.colsp2 = 0
            this.con.devDefence = '未布防'
          }

        })




    },
    glisplab () {
      this.value3 = false;
      this.glisp = false;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 19,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {

                    that.ttt = true;
                    that.success = 8;
                    clearTimeout(t);
                    that.load = false;
                    that.colsp2 = 0
                    that.con.devDefence = '未布防'
                  } else {
                    that.tit = true;
                    that.loser = 1
                    that.load = false;
                    clearTimeout(t);
                    that.colsp2 = 1
                    that.con.devDefence = '已布防'
                  }
                }).catch(err => {
                  clearTimeout(t);
                  that.value3 = true;
                  that.ttt = true;
                  that.success = 12;
                  that.load = false;
                  that.colsp2 = 1
                  that.con.devDefence = '已布防'
                })
            }, 3000)
          } else {
            this.value3 = true;
            this.load = false;
            this.tit = true;
            this.loser = 1
            this.colsp2 = 1
            this.con.devDefence = '已布防'
          }

        })
    },
    famen () {
      //  this.value2=true;
      this.boss = false;
      // this.value2=!this.value2;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 18,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.ttt = true;
                    that.success = 0;
                    clearTimeout(t);
                    that.load = false;
                    that.value2 = true;
                    that.value4 = false;
                    that.clops = 0
                    that.con.devLockState = '开启'
                  } else {
                    clearTimeout(t);
                    that.tit = true;
                    that.loser = 6
                    that.clops = 1
                    that.load = false;
                    that.value2 = false;
                    that.value4 = true;
                    that.con.devLockState = '关闭'
                  }
                }).catch(err => {
                  clearTimeout(t);
                  that.tit = true;
                  that.loser = 6;
                  that.load = false;
                  that.clops = 1
                  that.value2 = false;
                  that.value4 = true;
                  that.con.devLockState = '关闭'
                })
            }, 6000)
          } else {
            this.tit = true;
            this.loser = 6;
            this.clops = 1
            this.load = false;
            this.value2 = false;
            that.value4 = true;
            this.con.devLockState = '关闭'
            console.log(789)
          }

        })

    },
    famenabc () {
      // this.value2=false;
      this.bossabc = false;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 18,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.follow2 = res.data.result;
                    that.ttt = true;
                    that.success = 6;
                    clearTimeout(t);
                    that.load = false;
                    that.clops = 1
                    that.value2 = false;
                    that.value4 = true;
                    that.con.devLockState = '关闭';
                  } else {
                    clearTimeout(t);
                    this.tit = true;
                    this.loser = 0
                    this.load = false;
                    this.clops = 0
                    this.value2 = true;
                    this.value4 = false;
                    this.con.devLockState = '开启';
                  }
                }).catch(err => {
                  clearTimeout(t);
                  that.value2 = true;
                  that.load = false;
                  that.ttt = true;
                  that.success = 11;
                  that.clops = 0
                  this.value4 = false;
                  that.con.devLockState = '开启';
                })
            }, 6000)
          } else {
            this.value2 = true;
            this.tit = true;
            this.loser = 0
            this.load = false;
            this.clops = 0
            this.value4 = false;
            this.con.devLockState = '开启';
          }

        })

    },
    hideClicktingyong () {
      this.posss = false;
    },
    toastguan () {
      this.posss = false;
      this.value1 = false;
      this.develop = false;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 17,
            cmdValue: '11'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.follow2 = res.data.result;
                    that.ttt = true;
                    that.success = 7;
                    clearTimeout(t);
                    that.load = false;
                    that.colsp1 = 0
                    that.con.devControl = '未激活'
                  } else {
                    clearTimeout(t);
                    that.colsp1 = 1
                    that.con.devControl = '已激活'
                  }
                }).catch(err => {
                  this.tit = true;
                  this.loser = 2;
                  this.value1 = true;
                  this.load = false;
                  this.develop = true;
                  this.colsp1 = 1
                  this.con.devControl = '已激活'
                })
            }, 3000)
          } else {
            console.log(167)
            this.tit = true;
            this.loser = 2;
            this.colsp1 = 1
            this.value1 = true;
            this.load = false;
            this.develop = true;
            this.con.devControl = '已激活'
          }

        })
    },
    hideClickqu () {
      this.poss = false;
    },
    toastqiyong () {
      console.log(12111111111111)
      if (this.value1) {
        this.posss = true;
      } else {
        this.poss = true;
      }
    },
    toast () {
      this.poss = false;
      this.value1 = true;
      // this.develop=true;
      this.$axios
        .post(
          this.httpUrl + "send/sendCmd",
          this.$qs.stringify({
            devId: this.$route.query.id,
            cmd: 17,
            cmdValue: '12'
          })
        )
        .then(message => {
          if (message.data.resCode == 0) {
            console.log(message)
            let that = this;
            that.load = true;
            let t = setTimeout(function () {
              that.$axios
                .post(
                  that.httpUrl + "send/QueryCmdsResp",
                  that.$qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                )
                .then(res => {
                  console.log(res)
                  if (res.data.resCode == 0) {
                    that.follow2 = res.data.result;
                    that.ttt = true;
                    that.success = 2;
                    clearTimeout(t);
                    that.load = false;
                    that.develop = true;
                    that.colsp1 = 1
                    that.con.devControl = '已激活'
                  } else {
                    clearTimeout(t);
                    that.value1 = false;
                    that.load = false;
                    that.tit = true;
                    that.loser = 8;
                    that.develop = false;
                    that.colsp1 = 0
                    that.con.devControl = '未激活'
                  }
                }).catch(err => {
                  that.value1 = false;
                  that.load = false;
                  that.tit = true;
                  that.loser = 8;
                  that.develop = false;
                  that.colsp1 = 0
                  that.con.devControl = '未激活'
                })
            }, 3000)
          } else {
            console.log(167)
            this.value1 = false;
            this.tit = true;
            this.loser = 8;
            this.load = false;
            this.develop = false;
            this.colsp1 = 0
            this.con.devControl = '未激活'
          }

        })
    },
    nextClick (next) {
      this.$router.push({ path: '/' + next, query: { id: this.$route.query.id } });
    },
    start () {
      this.rotate = !this.rotate;
      this.chosehide = !this.chosehide
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
.hello li {
  border-bottom: none;
}
.top {
  height: 92px !important;
  margin-bottom: 30px;
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
.low {
  font-size: 28px;
  font-family: 'PingFang-SC-regular';
  color: #ff0c00 !important;
}
ul li {
  height: 80px;
  border-top: 2px solid #ebebeb;
  background: #fff;
  line-height: 80px;
  text-align: left;
  font-size: 28px;
  font-family: 'PingFang-SC-regular';
  color: #767676;
  margin-left: 30px;
}
.bottom {
  height: 250px;
}
ul li span:nth-child(2) {
  text-align: right;
  display: inline-block;
  width: 55%;
  float: right;
  padding-right: 20px;
  color: #303030;
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
  width: 120px;
  height: 60px;
  background: #ff5907;
  outline: none;
  border: none;
  border-radius: 8px;
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
.fr {
  float: right;
}
.fl {
  float: left;
}
.bottomoff span:nth-child(1) {
  width: 80%;
}
.bottomoff span:nth-child(2) {
  width: 15% !important;
}
.num1 {
  margin-top: 12px;
}
.newbottom {
  height: 164px !important;
  margin-bottom: 0 !important;
  margin-top: 30px;
}
.qibottom {
  height: 252px;
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
div {
  width: 220px;
  height: 200px;
  background: red;
}
</style>
<template>
  <div class="hellohead">
    <div id="allmap"></div>
    <div class="hello losters">
      <p class="png zg">
        <!-- <img src="../../static/image/picu.png" alt=""> -->
        <img :src="urll" />
      </p>
      <p class="mor">{{names}},您好！</p>
      <p @click="saoyisao">
        <img src="../../static/image/ma.png"
             alt="">
      </p>
    </div>
    <div class="inputBorder">
      <div class="li">
        <p>
          <img src="../../static/image/fang.png"
               alt="">
        </p>
        <input type="text"
               v-model="value"
               @input="changeList"
               placeholder="请输入设备编号即可" />
      </div>
    </div>
    <!-- <scroller :on-refresh="refresh" ref="my_scroller" style="top:205px"> -->
    <ul>
      <li v-for="(item,index) in deviceList"
          :key='index'
          @click="abc(index)">
        <div><img src="../../static/image/jing.png"
               alt=""
               class="innerimg"></div>
        <div>
          <p>{{psya}}</p>
          <p>{{item.emptys}}</p>
          <p style="display:block">{{changezhi(item.deviceId)}}</p>
        </div>
        <div v-if="pro==0"
             class="api">{{item.empty}}</div>
        <div v-if="pro==1"
             class="no api">{{item.empty}}</div>
        <div v-if="pro==2"
             class="api">{{item.empty}}</div>

        <div @click.stop="showClick(item)"><img src="../../static/image/deng.png"
               alt=""
               class="deleteimg"></div>
        <div class="flexBoxBG cube"
             v-show="bg"
             v-bind:class="{animaBg:isAnima,unAnimaBg:isUnAnima}"
             @click.stop="hideClick"></div>
        <div class="flexBoxCT cube"
             v-bind:class="{anima:isAnima,unAnima:isUnAnima}">
          <!--<router-link :to="{path:'/select',query:{id:item}}"><p class="Feat">功能界面</p></router-link>-->
          <p class="Feat dele"
             @click.stop="dell(index)">删除</p>
          <p class="Feat"
             @click.stop="hideClick">取消</p>
        </div>
      </li>
    </ul>
    <!-- </scroller>   -->
    <div class="positions"
         v-show='po'>
      <div class="box">
        <p>真的要删除吗？</p>
        <p>
          <span @click="hideClickno">取消</span>
          <span class="querenB"
                @click="delec">确定</span>
        </p>
      </div>
    </div>
  </div>

</template>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
<script>
import Qs from 'qs'
import axios from 'axios'
// import wx from 'weixin-js-sdk'
import {mapState,mapActions,mapGetters} from 'vuex'
import {Loadmore,MessageBox } from 'mint-ui';
export default {
  name: 'equipitem',
  data () {
    return {
      pro:'',
      po:false,
      bg:false,
      urll:'',
      isAnima:false,
      isUnAnima:false,
      names:'',
      item:'',
      value:'',
      imgMy: './static/image/my.png',
      deviceList:[],
      wtime:['','','','',''],
      zong:[],
      devol:[],
      deviceLists:[],
      math:'',
      trueys:[],
      infow:{
        devLongitude:'',
        devLatitude:'',

      },
      replace1:'',
      replace2:'',
      menga:'',
      mengb:'',
      infows:{
        address:'',
        number:''
      },
      newdirectory:'',
      psya:'',
      list:[],
      lnging:'',
      laging:'',
      arrs:[]
    }
  },
  created(){
    let that=this;
    
    // that.$store.dispatch('again')
  
   
  },
  // watch:{
  //   messArray_get : function(val){
  //         console.log(val)
  //      }
  // },

  mounted:function(){
    document.title=this.$route.meta.title;
    let that=this;
    that.wtime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate())),String(new Date().getHours()<=9?(new Date().getHours()):(new Date().getHours())),String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()))];
    that.searchclick()
      that.$axios
        .post(
        that.httpUrl+"users/find",
        that.$qs.stringify({
            openid:localStorage.getItem('openid')
          })
        )
        .then(res => {
          console.log(res);
          if(res.data.resCode==0){
               that.urll=res.data.result.headimgurl
               that.names=res.data.result.nickname
          }
      })
  },
  methods:{
    // ...mapActions(['again']),
    changezhi(val){
      console.log(val)
      let that=this;

        this.$axios
        .post(
        that.httpUrl+"Datapoints/getData",
        this.$qs.stringify({
            devId:val
          })
        )
        .then(message => {
          
          let messData=JSON.parse((message.data.errMsg).slice(6))
          console.log(messData)
          if(messData.errno==0){
              for(let i=0;i<messData.data.datastreams.length;i++){
                console.log(i)
                if(messData.data.datastreams[i].id=='2003'){
                   that.lnging=(messData.data.datastreams[i].datapoints[0].value)/100000
                   if(that.lnging==0){
                     that.lnging=120.2282128307
                   }
                }
                if(messData.data.datastreams[i].id=='2002'){
                   that.laging=(messData.data.datastreams[i].datapoints[0].value)/100000
                   if(that.laging==0){
                     that.laging=30.2693046269
                   }
                   
                }
              }
          }else{
              that.lnging=120.2282128307
              that.laging=30.2693046269
          }
          var obj={
              ab:that.lnging,
              bc:that.laging
          }
          that.arrs.push(obj)
          console.log(that.arrs)
          that.arrs.forEach((a,b)=>{
             var map = new BMap.Map("allmap");
            setTimeout(function(){
    
                  // that.replace1=that.lnging
                  // that.replace2=that.laging
                
                var ggPoint = new BMap.Point(a.ab,a.bc); 
                var convertor = new BMap.Convertor();
              
                var pointArr = [];
                pointArr.push(ggPoint);
              
                convertor.translate(pointArr, 1, 5, function (data){
                if(data.status === 0) {
                  var marker = new BMap.Marker(data.points[0]);
                  var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
                  map.setCenter(data.points[0]);
                  console.log(data.points[0])
                  that.menga=data.points[0].lng
                  that.mengb=data.points[0].lat
                  console.log(that.menga)
                  console.log(that.mengb)
                   var point = new BMap.Point(that.menga,that.mengb)
                    map.centerAndZoom(point, 16);
                    var geoc = new BMap.Geocoder(); 
                    geoc.getLocation(point, function(rs){
                      var addComp = rs.addressComponents;
                      console.log(addComp)
                //  that.newdirectory=addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
                  
                //       if(that.infows.number=="1"){
                //         that.psya=that.infows.address
                //       }else if(that.infows.number==0||that.infows.number==''){
                //         that.psya=that.newdirectory
                //         console.log(that.psya)
                //       }
                //         }); 
                    // that.$axios
                    // .post(
                    // that.httpUrl+"Datapoints/findByDevId",
                    // that.$qs.stringify({
                    //         devId:val
                    //     })
                    // )
                    // .then(message => {
                    //   console.log(message)
                    //   that.infows.address=message.data.detail.address
                    //   that.infows.number=message.data.detail.number
                    //   console.log(that.infows.address)
                       
                    })
                }
                })
            })
          })
         
      })
    
    
    },
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
    searchclick(){
      let that=this
      this.$axios
        .post(
        that.httpUrl+"wechatUser/findDevbyUser",
        this.$qs.stringify({
          weChatUsePhone:sessionStorage.getItem("weChatUsePhone")
          })
        )
        .then(res => {
        console.log(res);
          if(res.data.resCode==0){
            // that.deviceList=[];
            //  that.deviceLists=[];
            // that.devol=[];
            for(var i=0;i<res.data.s.length;i++){
              // that.zong.push(res.data.s[i])
              that.deviceList.push(res.data.s[i])
              // that.deviceLists.push(res.data.s[i])
            }
            for(var s=0;s<that.deviceList.length;s++){
              that.trueys.push(that.deviceList[s].deviceId)
            }
            // console.log(that.trueys)
            // let dataC={
            //     devId:that.trueys
            //   }
            //   console.log(dataC)
            //   this.$axios
            //     .post(
            //     that.httpUrl+"devices/accurate",
            //     this.$qs.stringify(dataC)
            //     )
            //     .then(message => {
            //       console.log(message);
            //       if(message.data.errno==0){
            //         for(var a=0;a<message.data.data.devices.length;a++){
            //           for(var n=0;n<that.deviceList.length;n++){
            //             if(message.data.data.devices[a].id==that.deviceList[n].deviceId){
            //               that.deviceList[n].empty=message.data.data.devices[a].online
            //               that.deviceList[n].emptys=message.data.data.devices[a].title
            //               if(that.deviceList[n].empty){
            //                 that.deviceList[n].empty='在线'
            //                 that.pro=1
            //               }else{
            //                 that.deviceList[n].empty='离线'
            //                 that.pro=0
            //               }
            //               if(that.deviceList[n].empty==undefined){
            //                 that.deviceList[n].empty='设备异常'
            //                 that.pro=2
            //               }
            //               console.log(that.deviceList[n].empty)
            //             }
            //           }
            //         }
            //       }else{
            //         //  that.pro=2
            //       }
                  
            //     })
          }
      })
      
      
      
    },
    delec(){
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
       let that=this;
      this.$axios
        .post(
        that.httpUrl+"wechatUser/removeWechatDev",
        this.$qs.stringify({
            weChatUsePhone:sessionStorage.getItem("weChatUsePhone"),
            id:that.math
          })
        )
        .then(res => {
        console.log(res);
        that.bg = false;
        that.po=false;
        that.searchclick()
      })
    },
    abc(index){
      console.log(index)
      // localStorage.removeItem('lll')
      // localStorage.removeItem('ppp')
      this.$router.push({path:'/homepage',query:{id:this.zong[index].deviceId}})
    },
    changeList(){
      console.log(this.deviceLists)
      this.deviceList = [];
      for(var i=0;i<this.deviceLists.length;i++){
        let a=this.value.toUpperCase()
        if(this.deviceLists[i].emptys.indexOf(a)!=-1){
					this.deviceList.push(this.deviceLists[i])
				}
      }
    },
    showClick(item){
      console.log(item)
			this.bg = true;
			this.isUnAnima = false;
      this.isAnima = true;
      this.math=item.id;
      // MessageBox.confirm('确定要删除么？').then(action => {
      //   console.log(item)
      // })
    },
    dell(index){
      console.log(index)
      // this.mo=0;
      this.po=true;
      this.isAnima = false;
    },
    hideClickno(){
      this.bg = false;
      this.po = false
      this.isUnAnima = false;
      this.isAnima = false;
    },    
		hideClick(){
			this.po = false
			let that = this;
			this.isAnima = false;
      this.isUnAnima = true;
			let t = setTimeout(function(){
				that.bg = false;
				clearTimeout(t)
			},250)
    },
    saoyisao() {
      let that=this;
      this.$axios
        .get(
        that.httpUrl+ 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
        )
        .then(function(message){
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
          wx.ready(function(){
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function(res) {
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let p1 = result.indexOf("state");
                let p2 = result.indexOf("redirect_uri");
                if(result.substring(p2+13,p2+36 ) == 'http://cloud.sokeed.com'){
                    // alert(result.substring(p1+6,p1+14))
                    that.$axios
                    .post(
                    that.httpUrl+"wechatUser/addWechatDev",
                    that.$qs.stringify({
                        weChatUsePhone:sessionStorage.getItem("weChatUsePhone"),
                        deviceId:result.substring(p1+6,p1+14)
                      })
                    )
                    .then(res => {
                      that.$router.push({
                      path: '/equipitem',
                      query:{id:result.substring(p1+6,p1+18 )}
                      
                    });
                    that.searchclick()
                  })
                }
                  
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
  width: 100%;
  height: 210px;
  position: relative;
  padding-top: 60px;
  background: #ff5907;
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
  top: 7px;
  right: 15px;
  width: 54px;
  height: 48px;
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
}
.li {
  height: 64px;
  width: 690px;
  line-height: 64px;
  position: absolute;
  top: 18px;
  left: 4%;
  background: #f8f8f8;
  border-radius: 10px;
  font-size: 30px;
  font-family: 'PingFang-SC-regular';
  color: #d8d8d8;
}
input {
  border: none;
  outline: none;
  text-indent: 10%;
  height: 64px;
  width: 690px;
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
</style>
