<template>
  <div class="inputBorder">
    <div class="li">
      <p>
        <img src="../../static/image/fang.png"
             alt="">
      </p>
      <input type="text" style="position: absolute;left: 0"
             v-model="search"
             @input="serach($event)"
             placeholder="请输入设备编号" />
      <span style="position: absolute;right:70px;color:#515151" @click="excle">列表
        <img src="../../static/image/liebiao.png"
             alt=""
             @click="excle"
             style="width:16px;height:16px;vertical-align: middle;margin-left: 1px">
      </span>
      <span style="position: absolute;right:60px">|</span>
      <span style="position: absolute;right:5px;color:#515151" @click="saixuan">筛选<img src="../../static/image/saixuan.png"
             alt=""
             @click="saixuan"
             style="width:16px;height:16px;vertical-align: middle;margin-left: 5px;">
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
</template>
<script>
export default {
  props: ['deviceList'],
  props: ['maindeviceList'],
  data () {
    return {
      search: '',
      saiData: false,
      lng: '',
      lat: '',
      changmap: false,
      obj: Object
    }
  },
  methods: {
    all () {
      console.log(this.deviceList);
      this.$emit('all', this.maindeviceList);
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
      console.log(this.deviceList);
      this.$emit('online', this.deviceList);
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
      this.$emit('outline', this.deviceList);
      this.saiData = false;
    },
    excle () {
      this.$emit('chools', this.changmap)
    },
    saixuan () {
      this.saiData = !this.saiData;
    },
    serach (val) {
      // console.log(this.maindeviceList)
      // this.maindeviceList.forEach(a => {
      //   // console.log(a.emptys)
      //   if (a.emptys == this.search) {
      //      console.log(a)
      //     this.lng = a.amendLongitude
      //     this.lat = a.amendLatitude
      //     this.obj = {
      //       a: this.lng,
      //       b: this.lat,
      //       c: this.search
      //     }

      //   }
      // })
      // console.log(this.obj)
      if (this.search) {
        this.obj= this.maindeviceList.filter(a => {
          return a.emptys.includes(this.search)
        })
        // console.log()
      } else {
        this.obj= this.maindeviceList
      }
      console.log(this.obj)
      this.$emit('serchid', this.obj)


    }
  }
}
</script>
<style scoped>
.inputborder {
  width: 100%;
  background: #f8f8f8;
  position: relative;
  height: 1.333333rem;
  font-size: 0.4rem;
  font-family: 'PingFang-SC-regular';
}
.li {
  height: 0.853333rem;
  width: 98%;
  line-height: 0.853333rem;
  position: absolute;
  top: 0.24rem;
  left: 1%;
  background: #f8f8f8;
  border-radius: 0.133333rem;
  font-size: 0.4rem;
  font-family: 'PingFang-SC-regular';
  color: #d8d8d8;
}
.li p {
  position: absolute;
  top: 3%;
  left: 1%;
  width: 0.293333rem;
  height: 0.32rem;
  z-index: 999;
}
.li p img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
input {
  border: none;
  outline: none;
  text-indent: 10%;
  height: 0.853333rem;
  width: 6rem;
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
</style>
