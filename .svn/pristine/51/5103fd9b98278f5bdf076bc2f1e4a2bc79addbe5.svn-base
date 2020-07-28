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
      <div @click.stop="nextClick('mapshow')">
        <span class="c four"><img src="../../static/image/app.png"
               alt=""></span>
        <span class="lastpos">周边设备</span>
      </div>
      <div @click.stop="nextClick('homepage')">
        <span class="three"><img src="../../static/image/tongji.png"
               alt=""></span>
        <span class="lastpos">地图展示</span>
      </div>
      <!-- <div class="last" @click="nextClick('historynum')">
                <span class="two"><img src="../../static/image/lishi.png" alt=""></span>
                <span class="lastpos">历史记录</span>
            </div> -->
    </div>
    <div class="item">
      <p class="time">选择时间范围</p>
      <div class="flee">
        <div @click="timeClick1('m')">{{wtime[0]}}-{{wtime[1]}}-{{wtime[2]}}</div>
        <!-- :{{wtime[3]}}:{{wtime[4]}} -->
        <img src="../../static/image/arrow.png"
             alt="">
        <div @click="timeClick('m')">{{htime[0]}}-{{htime[1]}}-{{htime[2]}}</div>
        <!-- :{{htime[3]}}:{{htime[4]}} -->
      </div>
    </div>
    <div class="statistics">
      <div id="main"></div>
      <!-- <div id="bar"></div> -->
    </div>

    <div v-if="block==false"
         id="popup">
      <div class="popupBox">
        <p v-if="timeend==1">设备暂无数据</p>
        <p v-if="timeend==0">结束时间不能早于开始时间</p>
        <p @click="nextq">确定</p>
      </div>
    </div>
    <div class="load"
         v-if="load">
      <img src="../../static/image/loading.gif"
           alt="">
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import Picker from 'better-picker'
var echarts = require('echarts/lib/echarts');// 引入 ECharts 主模块

export default {
  name: 'mapShow',
  data () {
    return {
      timeend: '',
      photo: true,
      show: false,
      datemg: false,
      undatemg: true,
      load: false,
      bg: '',
      series5: [],
      xAxis6L: [],
      ktime: ['', '', '', '', '', ''],
      endtime: ['', '', '', '', '', ''],
      wtime: ['', '', '', '', ''],
      end: [],
      datt: [],
      wtime: ['', '', '', '', ''],
      htime: ['', '', ''],
      jointime: '',
      joinhtime: '',
      devvol: [],
      devVOL: [],
      devWarning: [],
      devStatus: [],
      block: false,
      bone: 0,
      yearList: [
        { text: '2018', value: 0 },
        { text: '2019', value: 1 }
      ],
      monthList: [
        { text: '01', value: 0 },
        { text: '02', value: 1 },
        { text: '03', value: 2 },
        { text: '04', value: 3 },
        { text: '05', value: 4 },
        { text: '06', value: 5 },
        { text: '07', value: 6 },
        { text: '08', value: 7 },
        { text: '09', value: 8 },
        { text: '10', value: 9 },
        { text: '11', value: 10 },
        { text: '12', value: 11 }
      ],
      dayList: [],
      dayListA: [
        { text: '01', value: 0 },
        { text: '02', value: 1 },
        { text: '03', value: 2 },
        { text: '04', value: 3 },
        { text: '05', value: 4 },
        { text: '06', value: 5 },
        { text: '07', value: 6 },
        { text: '08', value: 7 },
        { text: '09', value: 8 },
        { text: '10', value: 9 },
        { text: '11', value: 10 },
        { text: '12', value: 11 },
        { text: '13', value: 12 },
        { text: '14', value: 13 },
        { text: '15', value: 14 },
        { text: '16', value: 15 },
        { text: '17', value: 16 },
        { text: '18', value: 17 },
        { text: '19', value: 18 },
        { text: '20', value: 19 },
        { text: '21', value: 20 },
        { text: '22', value: 21 },
        { text: '23', value: 22 },
        { text: '24', value: 23 },
        { text: '25', value: 24 },
        { text: '26', value: 25 },
        { text: '27', value: 26 },
        { text: '28', value: 27 },
        { text: '29', value: 28 },
        { text: '30', value: 29 },
        { text: '31', value: 30 }
      ],
      dayListB: [
        { text: '01', value: 0 },
        { text: '02', value: 1 },
        { text: '03', value: 2 },
        { text: '04', value: 3 },
        { text: '05', value: 4 },
        { text: '06', value: 5 },
        { text: '07', value: 6 },
        { text: '08', value: 7 },
        { text: '09', value: 8 },
        { text: '10', value: 9 },
        { text: '11', value: 10 },
        { text: '12', value: 11 },
        { text: '13', value: 12 },
        { text: '14', value: 13 },
        { text: '15', value: 14 },
        { text: '16', value: 15 },
        { text: '17', value: 16 },
        { text: '18', value: 17 },
        { text: '19', value: 18 },
        { text: '20', value: 19 },
        { text: '21', value: 20 },
        { text: '22', value: 21 },
        { text: '23', value: 22 },
        { text: '24', value: 23 },
        { text: '25', value: 24 },
        { text: '26', value: 25 },
        { text: '27', value: 26 },
        { text: '28', value: 27 }
      ],
      dayListC: [
        { text: '01', value: 0 },
        { text: '02', value: 1 },
        { text: '03', value: 2 },
        { text: '04', value: 3 },
        { text: '05', value: 4 },
        { text: '06', value: 5 },
        { text: '07', value: 6 },
        { text: '08', value: 7 },
        { text: '09', value: 8 },
        { text: '10', value: 9 },
        { text: '11', value: 10 },
        { text: '12', value: 11 },
        { text: '13', value: 12 },
        { text: '14', value: 13 },
        { text: '15', value: 14 },
        { text: '16', value: 15 },
        { text: '17', value: 16 },
        { text: '18', value: 17 },
        { text: '19', value: 18 },
        { text: '20', value: 19 },
        { text: '21', value: 20 },
        { text: '22', value: 21 },
        { text: '23', value: 22 },
        { text: '24', value: 23 },
        { text: '25', value: 24 },
        { text: '26', value: 25 },
        { text: '27', value: 26 },
        { text: '28', value: 27 },
        { text: '29', value: 28 },
        { text: '30', value: 29 }
      ],
    }
  },
  mounted: function () {
    let month = '';
    document.title = this.$route.meta.title;
    this.htime = [String(new Date().getFullYear()), String((new Date().getMonth()) <= 9 ? '0' + (new Date().getMonth()) : (new Date().getMonth())), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes()))];
    this.wtime = [String(new Date().getFullYear()), String((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes()))];
    // this.ktime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate()))]
    let series5 = [];
    let xAxis6 = [];
    let that = this
    let data = {
      devId: that.$route.query.id,
      end: that.wtime[0] + '-' + that.wtime[1] + '-' + that.wtime[2] + 'T00:00:00',
      start: that.htime[0] + '-' + that.htime[1] + '-' + that.htime[2] + 'T00:00:00'
    }
    console.log(data)
    console.log(77777333333333)
    let series4 = [];
    let xAxis3 = [];
    //  that.load=true;

    that.$axios
      .post(
        that.httpUrl + "Datapoints/getHistoryData",
        that.$qs.stringify(data)
      )
      .then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          // that.load=false;
          let waters = JSON.parse((res.data.errMsg).slice(6))
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2006") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(water);
              console.log(789789)
              console.log(water.length);
              for (let j = 0; j < water.length; j++) {
                console.log(water[j].at.slice(0, 10))
                xAxis6.push(water[j].at.slice(0, 10));
                series5.push(water[j].value);
              }
              console.log(xAxis3);
              console.log(series4);
              var myChart = echarts.init(document.getElementById('main'));// 基于准备好的dom，初始化echarts实例
              // var bar = echarts.init(document.getElementById('bar'));// 基于准备好的dom，初始化echarts实例
              myChart.setOption({
                title: {
                  text: '最近六个月用水记录',
                  left: 'center',
                  padding: [15, 0, 12, 0],
                  textStyle: {
                    fontSize: 15,
                    fontStyle: 'bold',
                    fontFamily: 'PingFang-SC-regula',
                    color: '#303030',
                  }
                },
                subtext: {},
                xAxis: {
                  min: 0,
                  max: 5,
                  // type: 'category',
                  boundaryGap: false,
                  data: xAxis6,
                  axisLine: {
                    lineStyle: {
                      color: '#f3f3f3',
                      width: 1
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: ['#f3f3f3'],
                      width: 1,
                      type: 'solid'
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: '#303030',//坐标值得具体的颜色
                      fontSize: 12,
                      fontFamily: 'PingFang-SC-regular'
                    }
                  }
                },
                yAxis: {
                  min: 0,
                  max: 300,
                  splitNumber: 3,
                  name: '单位: 吨',
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: ['#f3f3f3'],
                      width: 1,
                      type: 'solid'
                    }
                  }
                },
                grid: {
                  left: '4%',
                  right: '4%',
                  bottom: '7%',
                  top: '20%',
                  containLabel: true
                },
                series: [{
                  data: series5,
                  type: 'line',
                  areaStyle: {                    normal: {
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          { offset: 0, color: '#a2c9fd' },
                          { offset: 1, color: '#fff' }
                        ]
                      )
                    }                  },
                  smooth: true,
                  symbol: 'circle',
                  itemStyle: {
                    normal: {
                      color: "#4896ff",
                      lineStyle: {
                        color: "#4896ff"
                      }
                    }
                  },
                }],
              }),
                bar.setOption({
                  title: {
                    text: '2018用水量',
                    left: 'center',
                    padding: [15, 0, 19, 0],
                    textStyle: {
                      fontStyle: 'bold',
                      fontSize: 15
                    }
                  },
                  grid: {
                    left: '4%',
                    right: '4%',
                    bottom: '5%',
                    top: '22%',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    data: xAxis6,
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: ['#f3f3f3'],
                        width: 1,
                        type: 'solid'
                      }
                    },
                    splitLine: { show: false },//去除网格线
                  },
                  yAxis: {
                    min: 0,
                    max: 300,
                    type: 'value',
                    splitNumber: 3,
                    left: '8%',
                    right: '0',
                    name: '单位: 吨',
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: 'f3f3f3',
                        width: 1
                      }
                    },
                    axisTick: {
                      show: false
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: ['#f3f3f3'],
                        width: 1,
                        type: 'solid'
                      }
                    }
                  },
                  series: [{
                    data: series5,
                    type: 'bar',
                    barWidth: 16,
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: "#6577fe" // 0% 处的颜色
                        }, {
                          offset: 1,
                          color: "#4896ff" // 100% 处的颜色
                        }], false)
                      }
                    }
                  }]
                })// 绘制图表
            }

          }
        } else {
          // that.none=0;
          // that.load=false;
          that.block = false
          that.timeend = 1
        }
      })
    // })
  },
  methods: {
    nextClick (next) {
      this.$router.push({ path: '/' + next, query: { id: this.$route.query.id } });
    },
    head () {
      this.photo = !this.photo;
    },
    tables () {
      this.datemg = true;
      this.undatemg = false;
      this.bg = true;
    },
    timeClick (km) {
      let that = this;
      that.none = 1
      let selected = [];
      if (km === 'k') {
        if (that.ktime[0] === '2018') {
          selected[0] = 0;
        } else if (that.ktime[0] === '2019') {
          selected[0] = 1;
        }
        selected[1] = (Number(that.ktime[1]) - 1);
        selected[2] = (Number(that.ktime[2]) - 1);
        // selected[3]=(Number(that.ktime[3]));
        // selected[4]=(Number(that.ktime[4]));
      } else {
        if (that.htime[0] === '2018') {
          selected[0] = 0;
        } else if (that.htime[0] === '2019') {
          selected[0] = 1;
        }
        selected[1] = (Number(that.htime[1]) - 1);
        selected[2] = (Number(that.htime[2]) - 1);
        // selected[3]=(Number(that.htime[3]));
        // selected[4]=(Number(that.htime[4]));
      }
      let picker = new Picker({
        data: [that.yearList, that.monthList, that.dayListA],
        selectedIndex: selected,
        title: '请选择时间'
      });

      picker.show();
      picker.on('picker.select', function (selectedVal, selectedIndex) {
        if (km === 'k') {
          that.ktime = [that.yearList[selectedVal[0]].text, that.monthList[selectedVal[1]].text, that.dayListA[selectedVal[2]].text]
        } else {
          that.htime = [that.yearList[selectedVal[0]].text, that.monthList[selectedVal[1]].text, that.dayListA[selectedVal[2]].text]
        }
        console.log(that.htime)
        let h = new Date(that.htime[0] + '/' + that.htime[1] + '/' + that.htime[2]).getTime();
        let w = new Date(that.wtime[0] + '/' + that.wtime[1] + '/' + that.wtime[2]).getTime();
        if (w > h) {
          that.block = true
          that.timeend = 1
        }
        console.log(w)
        console.log(h)
        let data = {
          devId: that.$route.query.id,
          end: that.wtime[0] + '-' + that.wtime[1] + '-' + that.wtime[2] + 'T00:00:00',
          start: that.htime[0] + '-' + that.htime[1] + '-' + that.htime[2] + 'T00:00:00'
        }
        console.log(data)
        console.log(77777333333333)
        let series4 = [];
        let xAxis3 = [];
        that.load = true;
        that.$axios
          .post(
            that.httpUrl + "Datapoints/getHistoryData",
            that.$qs.stringify(data)
          )
          .then(res => {
            console.log(res);
            if (res.data.resCode == 0) {
              that.load = false;
              let waters = JSON.parse((res.data.errMsg).slice(6))
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2006") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(water);
                  console.log(789789)
                  console.log(water.length);
                  for (let j = 0; j < water.length; j++) {
                    console.log(water[j].at.slice(0, 10))
                    xAxis3.push(water[j].at.slice(0, 10));
                    series4.push(water[j].value);
                  }
                  console.log(xAxis3);
                  console.log(series4);
                  var myChart = echarts.init(document.getElementById('main'));// 基于准备好的dom，初始化echarts实例
                  // var bar = echarts.init(document.getElementById('bar'));// 基于准备好的dom，初始化echarts实例
                  myChart.setOption({
                    title: {
                      text: '最近六个月用水记录',
                      left: 'center',
                      padding: [15, 0, 12, 0],
                      textStyle: {
                        fontSize: 15,
                        fontStyle: 'bold',
                        fontFamily: 'PingFang-SC-regula',
                        color: '#303030',
                      }
                    },
                    subtext: {},
                    xAxis: {
                      min: 0,
                      max: 5,
                      // type: 'category',
                      boundaryGap: false,
                      data: xAxis3,
                      axisLine: {
                        lineStyle: {
                          color: '#f3f3f3',
                          width: 1
                        }
                      },
                      axisTick: {
                        show: false
                      },
                      splitLine: {
                        show: true,
                        lineStyle: {
                          color: ['#f3f3f3'],
                          width: 1,
                          type: 'solid'
                        }
                      },
                      axisLabel: {
                        textStyle: {
                          color: '#303030',//坐标值得具体的颜色
                          fontSize: 12,
                          fontFamily: 'PingFang-SC-regular'
                        }
                      }
                    },
                    yAxis: {
                      min: 0,
                      max: 300,
                      splitNumber: 3,
                      name: '单位: 吨',
                      axisLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      splitLine: {
                        show: true,
                        lineStyle: {
                          color: ['#f3f3f3'],
                          width: 1,
                          type: 'solid'
                        }
                      }
                    },
                    grid: {
                      left: '4%',
                      right: '4%',
                      bottom: '7%',
                      top: '20%',
                      containLabel: true
                    },
                    series: [{
                      data: series4,
                      type: 'line',
                      areaStyle: {                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                              { offset: 0, color: '#a2c9fd' },
                              { offset: 1, color: '#fff' }
                            ]
                          )
                        }                      },
                      smooth: true,
                      symbol: 'circle',
                      itemStyle: {
                        normal: {
                          color: "#4896ff",
                          lineStyle: {
                            color: "#4896ff"
                          }
                        }
                      },
                    }],
                  }),
                    bar.setOption({
                      title: {
                        text: '2018用水量',
                        left: 'center',
                        padding: [15, 0, 19, 0],
                        textStyle: {
                          fontStyle: 'bold',
                          fontSize: 15
                        }
                      },
                      grid: {
                        left: '4%',
                        right: '4%',
                        bottom: '5%',
                        top: '22%',
                        containLabel: true
                      },
                      xAxis: {
                        type: 'category',
                        data: xAxis3,
                        axisLine: {
                          show: false
                        },
                        axisTick: {
                          show: false
                        },
                        splitLine: {
                          show: true,
                          lineStyle: {
                            color: ['#f3f3f3'],
                            width: 1,
                            type: 'solid'
                          }
                        },
                        splitLine: { show: false },//去除网格线
                      },
                      yAxis: {
                        min: 0,
                        max: 300,
                        type: 'value',
                        splitNumber: 3,
                        left: '8%',
                        right: '0',
                        name: '单位: 吨',
                        axisLine: {
                          show: true,
                          lineStyle: {
                            color: 'f3f3f3',
                            width: 1
                          }
                        },
                        axisTick: {
                          show: false
                        },
                        splitLine: {
                          show: true,
                          lineStyle: {
                            color: ['#f3f3f3'],
                            width: 1,
                            type: 'solid'
                          }
                        }
                      },
                      series: [{
                        data: series4,
                        type: 'bar',
                        barWidth: 16,
                        itemStyle: {
                          normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: "#6577fe" // 0% 处的颜色
                            }, {
                              offset: 1,
                              color: "#4896ff" // 100% 处的颜色
                            }], false)
                          }
                        }
                      }]
                    })// 绘制图表
                }
              }

            } else {
              that.load = false;
              that.block = false
              that.timeend = 1
            }
          })
      })
      picker.on('picker.change', function (selectedVal, selectedIndex) {

        // console.log(selectedVal)
        // console.log(selectedIndex)
        if (selectedVal === 1) {
          if (selectedIndex === 0 || selectedIndex === 2 || selectedIndex === 4 || selectedIndex === 6 || selectedIndex === 7 || selectedIndex === 9 || selectedIndex === 11) {
            picker.refillColumn(2, that.dayListA)
          } else if (selectedIndex === 1) {
            picker.refillColumn(2, that.dayListB)
          } else {
            picker.refillColumn(2, that.dayListC)
          }
        }
      })
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
    timeClick1 (km) {
      let that = this;
      that.none = 1
      let selected = [];
      if (km === 'k') {
        if (that.ktime[0] === '2018') {
          selected[0] = 0;
        } else if (that.ktime[0] === '2019') {
          selected[0] = 1;
        }
        selected[1] = (Number(that.ktime[1]) - 1);
        selected[2] = (Number(that.ktime[2]) - 1);
        // selected[3]=(Number(that.ktime[3]));
        // selected[4]=(Number(that.ktime[4]));
      } else {
        if (that.wtime[0] === '2018') {
          selected[0] = 0;
        } else if (that.htime[0] === '2019') {
          selected[0] = 1;
        }
        selected[1] = (Number(that.wtime[1]) - 1);
        selected[2] = (Number(that.wtime[2]) - 1);
        //  selected[3]=(Number(that.wtime[3]));
        // selected[4]=(Number(that.wtime[4]));
      }
      let picker = new Picker({
        data: [that.yearList, that.monthList, that.dayListA],
        selectedIndex: selected,
        title: '请选择时间'
      });

      picker.show();
      picker.on('picker.select', function (selectedVal, selectedIndex) {
        if (km === 'k') {
          that.ktime = [that.yearList[selectedVal[0]].text, that.monthList[selectedVal[1]].text, that.dayListA[selectedVal[2]].text]
        } else {
          that.wtime = [that.yearList[selectedVal[0]].text, that.monthList[selectedVal[1]].text, that.dayListA[selectedVal[2]].text]
        }
        console.log(that.wtime)
        that.jointime = that.yearList[selectedVal[0]].text + '-' + that.monthList[selectedVal[1]].text + '-' + that.dayListA[selectedVal[2]].text + 'T00:00:00'
        let h = new Date(that.htime[0] + '/' + that.htime[1] + '/' + that.htime[2]).getTime();
        let w = new Date(that.wtime[0] + '/' + that.wtime[1] + '/' + that.wtime[2]).getTime();
        if (w > h) {
          that.block = true
          that.timeend = 0
        }
        console.log(that.htime[0] + '/' + that.htime[1] + '/' + that.htime[2])
        console.log(h)
        console.log(w)
        that.joinhtime = that.htime[0] + '-' + that.htime[1] + '-' + that.htime[2] + 'T00:00:00',
          that.ajaxtime()
        // let data={
        // 	devId:that.$route.query.id,
        // 	end:that.jointime,
        // 	start:that.joinhtime
        // }
        // console.log(data)
        // that.$axios
        //   .post(
        //   that.httpUrl+"Datapoints/getHistoryData",
        //   that.$qs.stringify(data)
        //   )
        //   .then(res => {
        //   console.log(res);
        //     if(res.data.resCode==0){
        // 			let messData=JSON.parse((res.data.errMsg).slice(6))
        // 			console.log(messData)
        //     }
        // })
      })
      // picker.on('picker.change', function (selectedVal, selectedIndex) {

      // 	// console.log(selectedVal)
      // 	// console.log(selectedIndex)
      // 	if(selectedVal === 1){
      // 		if(selectedIndex === 0||selectedIndex === 2||selectedIndex === 4||selectedIndex === 6||selectedIndex === 7||selectedIndex === 9||selectedIndex === 11){
      // 			picker.refillColumn(2, that.dayListA)
      // 		}else if(selectedIndex === 1){
      // 			picker.refillColumn(2, that.dayListB)
      // 		}else{
      // 			picker.refillColumn(2, that.dayListC)
      // 		}
      // 	}
      // })
    },
    nextq () {
      this.block = true;
    },
    routerback: function () {
      this.$router.back(-1)
    },
    ajaxtime () {
      let that = this
      let data = {
        devId: that.$route.query.id,
        end: that.jointime,
        start: that.joinhtime
      }
      console.log(data)
      that.$axios
        .post(
          that.httpUrl + "Datapoints/getHistoryData",
          that.$qs.stringify(data)
        )
        .then(res => {
          console.log(res);
          if (res.data.resCode == 0) {
            let messData = JSON.parse((res.data.errMsg).slice(6))
            let series9 = [];
            let xAxis8 = [];
            let that = this
            that.load = true;
            let data = {
              devId: that.$route.query.id,
              end: that.wtime[0] + '-' + that.wtime[1] + '-' + that.wtime[2] + 'T00:00:00',
              start: that.htime[0] + '-' + that.htime[1] + '-' + that.htime[2] + 'T00:00:00'
            }
            console.log(data)
            console.log(77777333333333)
            that.$axios
              .post(
                that.httpUrl + "Datapoints/getHistoryData",
                that.$qs.stringify(data)
              )
              .then(res => {
                console.log(res);
                if (res.data.resCode == 0) {
                  that.load = false;
                  let waters = JSON.parse((res.data.errMsg).slice(6))
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2006") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(water);
                      console.log(789789)
                      console.log(water.length);
                      for (let j = 0; j < water.length; j++) {
                        console.log(water[j].at.slice(0, 10))
                        xAxis8.push(water[j].at.slice(0, 10));
                        series9.push(water[j].value);
                      }
                      console.log(xAxis8);
                      console.log(series9);
                      var myChart = echarts.init(document.getElementById('main'));// 基于准备好的dom，初始化echarts实例
                      // var bar = echarts.init(document.getElementById('bar'));// 基于准备好的dom，初始化echarts实例
                      myChart.setOption({
                        title: {
                          text: '最近六个月用水记录',
                          left: 'center',
                          padding: [15, 0, 12, 0],
                          textStyle: {
                            fontSize: 15,
                            fontStyle: 'bold',
                            fontFamily: 'PingFang-SC-regula',
                            color: '#303030',
                          }
                        },
                        subtext: {},
                        xAxis: {
                          min: 0,
                          max: 5,
                          // type: 'category',
                          boundaryGap: false,
                          data: xAxis8,
                          axisLine: {
                            lineStyle: {
                              color: '#f3f3f3',
                              width: 1
                            }
                          },
                          axisTick: {
                            show: false
                          },
                          splitLine: {
                            show: true,
                            lineStyle: {
                              color: ['#f3f3f3'],
                              width: 1,
                              type: 'solid'
                            }
                          },
                          axisLabel: {
                            textStyle: {
                              color: '#303030',//坐标值得具体的颜色
                              fontSize: 12,
                              fontFamily: 'PingFang-SC-regular'
                            }
                          }
                        },
                        yAxis: {
                          min: 0,
                          max: 300,
                          splitNumber: 3,
                          name: '单位: 吨',
                          axisLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          splitLine: {
                            show: true,
                            lineStyle: {
                              color: ['#f3f3f3'],
                              width: 1,
                              type: 'solid'
                            }
                          }
                        },
                        grid: {
                          left: '4%',
                          right: '4%',
                          bottom: '7%',
                          top: '20%',
                          containLabel: true
                        },
                        series: [{
                          data: series9,
                          type: 'line',
                          areaStyle: {                            normal: {
                              color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                  { offset: 0, color: '#a2c9fd' },
                                  { offset: 1, color: '#fff' }
                                ]
                              )
                            }                          },
                          smooth: true,
                          symbol: 'circle',
                          itemStyle: {
                            normal: {
                              color: "#4896ff",
                              lineStyle: {
                                color: "#4896ff"
                              }
                            }
                          },
                        }],
                      }),
                        bar.setOption({
                          title: {
                            text: '2018用水量',
                            left: 'center',
                            padding: [15, 0, 19, 0],
                            textStyle: {
                              fontStyle: 'bold',
                              fontSize: 15
                            }
                          },
                          grid: {
                            left: '4%',
                            right: '4%',
                            bottom: '5%',
                            top: '22%',
                            containLabel: true
                          },
                          xAxis: {
                            type: 'category',
                            data: xAxis8,
                            axisLine: {
                              show: false
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              show: true,
                              lineStyle: {
                                color: ['#f3f3f3'],
                                width: 1,
                                type: 'solid'
                              }
                            },
                            splitLine: { show: false },//去除网格线
                          },
                          yAxis: {
                            min: 0,
                            max: 300,
                            type: 'value',
                            splitNumber: 3,
                            left: '8%',
                            right: '0',
                            name: '单位: 吨',
                            axisLine: {
                              show: true,
                              lineStyle: {
                                color: 'f3f3f3',
                                width: 1
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              show: true,
                              lineStyle: {
                                color: ['#f3f3f3'],
                                width: 1,
                                type: 'solid'
                              }
                            }
                          },
                          series: [{
                            data: series9,
                            type: 'bar',
                            barWidth: 16,
                            itemStyle: {
                              normal: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                  offset: 0,
                                  color: "#6577fe" // 0% 处的颜色
                                }, {
                                  offset: 1,
                                  color: "#4896ff" // 100% 处的颜色
                                }], false)
                              }
                            }
                          }]
                        })// 绘制图表
                    }
                  }
                } else {
                  that.load = false;
                  console.log(980)
                  that.block = false
                  that.timeend = 1
                }
              })
          } else {
            that.load = false;
            console.log(980)
            that.block = false
            that.timeend = 1
          }
        })
    }
  }
}
</script>

<style scoped>
#main,
#bar {
  border-radius: 10px;
  background: #fff;
  margin: 0 auto;
  width: 690px;
  height: 570px;
}
.statistics {
  height: 539px;
}
#main {
  margin-top: 30px;
  margin-bottom: 44px;
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
  height: 712px;
  background: rgb(63, 58, 58);
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
  position: absolute;
  width: 94%;
  height: 35%;
  bottom: 0;
  margin: 0 3%;
  background: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0 0 10px #999;
}
.photo .head {
  width: 80px;
  height: 10px;
  margin: 20px auto;
  border-radius: 5px;
  background: #cecece;
}
.photo div {
  width: 96%;
  margin: 0 auto;
  font-size: 30px;
  font-family: '微软雅黑';
  line-height: 55px;
}
.photo div span:nth-child(2),
.status {
  color: #7c7c7c;
}
.photo .first {
  display: flex;
  justify-content: space-between;
}
.photo .first span:nth-child(3) {
  margin-right: 10%;
}
.photo div span:nth-child(1) {
  color: #bfbfbf;
}
.hello {
  background: #f2f2f2;
}
.su .time {
  font-size: 20px;
  font-family: 'PingFang-SC-regular';
  padding-top: 18px;
  margin-left: 30px;
  margin-bottom: 28px;
  color: #787878;
}
.su .flee {
  display: flex;
  justify-content: space-between;
}
.flee div {
  margin: 0 90px;
  height: 28px;
  line-height: 28px;
  font-size: 32px;
  color: #303030;
  width: 188px;
  height: 28px;
}
.su .item {
  height: 120px;
  width: 100%;
  background: #fff;
  margin-bottom: 30px;
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
  overflow: hidden;
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
/* #popup{width: 100%;height: 40%;background-color: rgba(0,0,0,0.5);position: absolute;left: 0;top: 0;} */
.popupBox {
  width: 70%;
  background-color: #ffffff;
  text-align: center;
  margin: 40% 15%;
  border-radius: 20px;
}
#popup {
  width: 100%;
  height: 100%;
  background: rgba(108, 108, 108, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popupBox p {
  font-size: 32px;
  color: #666;
  text-align: center;
}
.popupBox p:nth-child(1) {
  height: 1.3rem;
  line-height: 1.3rem;
  border-bottom: 1px solid #ddd;
}
.popupBox p:nth-child(2) {
  height: 1.3rem;
  line-height: 1.3rem;
}
.popupBox {
  width: 100%;
}
.record {
  height: 83%;
  width: 100%;
  z-index: 8888;
  background: rgba(40, 40, 41, 0.6);
  opacity: 0.7;
  position: fixed;
  bottom: 0;
}
.record p {
  width: 100%;
  text-align: center;
  color: #fff;
  margin: 40% auto;
}
.statuid {
  margin-left: 240px !important;
}
.first span:nth-child(2) {
  margin-left: 10px;
}
.status {
  margin-right: 10px;
}
.four {
  width: 37px !important;
  display: inline-block;
  height: 46px !important;
}
.three {
  width: 37px !important;
  height: 37px !important;
  display: inline-block;
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
</style>
