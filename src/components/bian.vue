<template>
     <div id="allmap"></div>
</template>
  <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=PWttlCcjWHRXa9YrV7LwVIzlT7qQRlNS"></script>

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
             // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.331398,39.897445);
            map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);
            map.enableScrollWheelZoom(true);
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);           
            }
            else {
                that.toast("定位失败！");
            }        
            });

         
          

            // function myFun(result){
            //     var cityName = result.name;
            //     map.setCenter(cityName);
            //     // alert("当前定位城市:"+cityName);
            // }
            // var myCity = new BMap.LocalCity();
            // myCity.get(myFun);
            // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            map.addControl(navigationControl);
            // 添加定位控件
            var geolocationControl = new BMap.GeolocationControl();
            // geolocationControl.addEventListener("locationSuccess", function(e){
            //     // 定位成功事件
            //     var address = '';
            //     address += e.addressComponent.province;
            //     address += e.addressComponent.city;
            //     address += e.addressComponent.district;
            //     address += e.addressComponent.street;
            //     address += e.addressComponent.streetNumber;
            //     alert("当前定位地址为：" + address);
            // });
            geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                alert(e.message);
            });
            map.addControl(geolocationControl);
            var data_info = [[sessionStorage.getItem('mlog'), sessionStorage.getItem('mlat'),"地址：北京市东城区王府井大街88号乐天银泰百货八层"]
					];
            var opts = {
                        width : 250,     // 信息窗口宽度
                        height: 80,     // 信息窗口高度
                        title : "信息窗口" , // 信息窗口标题
                        enableMessage:true//设置允许信息窗发送短息
                    };
            for(var i=0;i<data_info.length;i++){
                var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
                var content = data_info[i][2];
                map.addOverlay(marker);               // 将标注添加到地图中
                addClickHandler(content,marker);
            }
            function addClickHandler(content,marker){
                marker.addEventListener("click",function(e){
                    openInfo(content,e)}
                );
            }
            function openInfo(content,e){
                var p = e.target;
                var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                map.openInfoWindow(infoWindow,point); //开启信息窗口
            }
                    // this.center.lng = that.con.devLongitude;
                    // this.center.lat = that.con.devLatitude;
                    //  var gpsPoint = new BMap.Point(that.con.devLongitude,that.con.devLatitude);
                    //  var markergps = new BMap.Marker(gpsPoint);
                        // map = new BMap.Map("allmap");
             
                    })
    },
    methods: {
        
        getClickInfo(e) {
            console.log(e);
            
            // this.center.lng = e.point.lng;
            // this.center.lat = e.point.lat;
        },
        //  handler({ BMap, map }) {
        //     var _this=this;
        //     // 下面注释是百度地图API官方实现方法，因为我使用自定义图标覆盖物，所以没有使用这种方法！
        //     // 如使用以下这种方法，那么我Template里所写的自定义定位图标代码是不需要的
        //     var geolocation = new BMap.Geolocation();
        //     geolocation.getCurrentPosition(function (r) {
        //         if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        //             var mk = new BMap.Marker(r.point);
        //             // map.addOverlay(mk);
        //             // map.panTo(r.point);
        //             // console.log(r);
        //             console.log(33)
        //             map.enableMapClick=false;
        //             _this.obj.lng = r.point.lng;
        //             _this.obj.lat = r.point.lat;
        //             console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
        //         }
        //         else {
        //             alert('failed' + this.getStatus());
        //         }
        //     }, { enableHighAccuracy: true })
        

        
        // }
        
    }
}
</script>
<style>
 #allmap{width:100%;height:100%;}
    p{margin-left:5px; font-size:14px;}
</style>
