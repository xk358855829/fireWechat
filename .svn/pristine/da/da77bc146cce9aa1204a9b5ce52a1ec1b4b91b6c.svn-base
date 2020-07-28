// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'whatwg-fetch'
import store from './store'
import 'lib-flexible'
import BaiduMap from 'vue-baidu-map'
import echarts from 'echarts'
import { Indicator } from 'mint-ui';
import Mint from 'mint-ui';
import common from './../common/common.js'

import 'mint-ui/lib/style.css';
import qs from 'qs';
import VueScroller from 'vue-scroller'
import './assets/css/my-mint.css'//全局修改mint-UI样式

import Calendar from 'vue-mobile-calendar'

Vue.use(Calendar)

Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.common = common;
Vue.use(Mint);
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueScroller)
Vue.prototype.httpUrl = 'http://39.104.102.213:8796/';
// Vue.prototype.httpUrl = 'http://39.104.113.112:8796/';
// Vue.prototype.httpUrl = 'http://192.168.2.143:8796/';
Vue.prototype.$echarts = echarts
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '444uk5Y1FOnFEnSZl0OFsMt7VlNsSH9H'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
