import Vue from 'vue'
import Router from 'vue-router'
import equipitem from '@/components/equipitem'
import equipment from '@/components/equipment'
import historynum from '@/components/historynum'
import homepage from '@/components/homepage'
import hourstate from '@/components/hourstate'
import water from '@/components/water'
import mapshow from '@/components/mapshow'
import login from '@/components/login'
// import setPhone from '@/components/setPhone'
import validate from '@/components/validate'
import modifyPhone from '@/components/modifyPhone'
import bian from '@/components/bian'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登陆',
        keepAlive: false,
      }
    },
    {
      path: '/equipitem',
      name: 'equipitem',
      component: equipitem,
      meta: {
        title: '设备管理'
      }
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      meta: {
        title: '功能选择'
      }
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: equipment,
      meta: {
        title: '设备管理'
      }
    },
    {
      path: '/historynum',
      name: 'historynum',
      component: historynum,
      meta: {
        title: '功能选择'
      }
    },
    {
      path: '/hourstate',
      name: 'hourstate',
      component: hourstate,
      meta: {
        title: '实时状态'
      }
    },
    {
      path: '/water',
      name: 'water',
      component: water,
      meta: {
        title: '用水统计'
      }
    },
    {
      path: '/mapshow',
      name: 'mapshow',
      component: mapshow,
      meta: {
        title: '地图展示'
      }
    },
    {
      path: '/bian',
      name: 'bian',
      component: bian,
      meta: {
        title: '周边设备'
      }
    },
    // {
    //   path: '/setPhone',
    //   name: 'setPhone',
    //   component: setPhone,
    //   meta:{
    //   	title:'绑定手机号码'
    //   }
    // },{
    {
      path: '/validate',
      name: 'validate',
      component: validate,
      meta: {
        title: '验证码'
      }
    }, {
      path: '/modifyPhone',
      name: 'modifyPhone',
      component: modifyPhone,
      meta: {
        title: '手机号码'
      }
    }
  ]
})
/* <template>
    <baidu-map  id="allmap" class="map" :center="obj" :zoom="15" :scroll-wheel-zoom="true" @click="getClickInfo" @ready="handler" :enableMapClick="false">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>

    </baidu-map>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import {BaiduMap} from 'vue-baidu-map'
import BMap from 'BMap'


export default {
    name: 'mapshow',
    data() {
        return {
            obj: { lng: "", lat: "" },
            center: { lng: "", lat: "" },
            con:{
                devLongitude:'',
                devLatitude:'',
                devVOL:'',
                waterMeter:'',
                waterPressure:'',
                waterTemperature:'',
            }
        }
    },
    mounted:function(){
        let that =this;
        this.$axios
            .post(
            that.httpUrl+"Datapoints/getData",
            this.$qs.stringify({
                    devId:this.$route.query.id
                })
            )
            .then(message => {
            console.log(message);
            console.log(JSON.parse((message.data.errMsg).slice(6)))
            let messData=JSON.parse((message.data.errMsg).slice(6))
            that.con.devLongitude=messData.data.datastreams[0].datapoints[0].value
            that.con.devLatitude=messData.data.datastreams[1].datapoints[0].value
			console.log(that.con.devLongitude)
            console.log(that.con.devLatitude)
             sessionStorage.setItem('mlog',that.con.devLongitude)
             sessionStorage.setItem('mlat',that.con.devLongitude)
             
            // this.center.lng = that.con.devLongitude;
            // this.center.lat = that.con.devLatitude;
            //  var gpsPoint = new BMap.Point(that.con.devLongitude,that.con.devLatitude);
            //  var markergps = new BMap.Marker(gpsPoint);
            	// map = new BMap.Map("allmap");
    // map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);
            })


    },
    methods: {
        
        getClickInfo(e) {
            console.log(e);
            
            // this.center.lng = e.point.lng;
            // this.center.lat = e.point.lat;
        },
         handler({ BMap, map }) {
            var _this=this;
            // 下面注释是百度地图API官方实现方法，因为我使用自定义图标覆盖物，所以没有使用这种方法！
            // 如使用以下这种方法，那么我Template里所写的自定义定位图标代码是不需要的
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMap.Marker(r.point);
                    // map.addOverlay(mk);
                    // map.panTo(r.point);
                    // console.log(r);
                    console.log(33)
                    map.enableMapClick=false;
                    _this.obj.lng = r.point.lng;
                    _this.obj.lat = r.point.lat;
                    console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                }
                else {
                    alert('failed' + this.getStatus());
                }
            }, { enableHighAccuracy: true })
        

        
        }
        
    }
}
</script>
<style>
/* 地图容器必须设置宽和高属性 */
// .map {
//     width: 100%;
//     height: 100%;
// }
// /* 隐藏点击查看详情 */
// .BMap_pop,.BMap_shadow{
//     display: none!important;
// }
// </style> */}
