<template>
	<div id="modifyPhone">
		<p class="tit">您已绑定手机号码</p>
		<p class="phone">{{phone}}</p>
		<router-link to='/setPhone'><div class="btn">更换</div></router-link>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'homePage',
		data() {
			return {
				phone:'暂未填写'
			}
		},
		mounted: function() {
			document.title = this.$route.meta.title;
			this.phone = localStorage.getItem('phone').substr(0,3)+'****'+localStorage.getItem('phone').substr(7,11)
		},
		methods: {}
	}
</script>

<style scoped="scoped">
	#modifyPhone{width: 100%;}
	.tit{text-align: center;width: 100%;color: #787878;padding: 0.5rem 0;}
	.phone{width: 100%;text-align: center;font-size: 0.48rem}
	.btn{width: 1rem;border: 1px solid #D8D8D8;height: 0.5rem;text-align: center;line-height: 0.5rem;background-color: #FFFFFF;margin:0.5rem auto;}
	.btn:active{background-color: #787878;color: #FFFFFF;}
</style>
  this.$axios
        .post(
        that.httpUrl+"Datapoints/findDetails",
        // this.$qs.stringify({
        //         devId:this.$route.query.id
        //     })
        )
        .then(message => {
        console.log(message);
        let points=message.data.details;
        let arrnew=[]
        for(var i=0;i<points.length;i++){
          arrnew.push(new BMap.Point((points[i].devLongitude)/100000,(points[i].devLatitude)/100000))
          
        }
          var map = new BMap.Map("allmap");
          var new_point = new BMap.Point(localStorage.getItem('pointlngright'),localStorage.getItem('pointlatright'));
           map.centerAndZoom(new_point, 15);
          var marker = new BMap.Marker(new_point); // 创建标注
          map.addOverlay(marker); // 将标注添加到地图中
          map.panTo(new_point); //转到该点位置    
         var convertor = new BMap.Convertor(); 
          var carPoints = arrnew
          var arr = [], i = 0, newCarPoint = [];
          for (var a = 0; a < carPoints.length; a = a + 10) {
              arr.push(carPoints.slice(a, a + 10));
          }
          console.log(arr);
          function translateCarPoints(i) {
              convertor.translate(arr[i], 1, 5, function (res) {
                  console.table(res.points);
                  newCarPoint = newCarPoint.concat(res.points);
                  if (arr[i + 1] && arr[i + 1].length > 0) {
                      i++;
                      translateCarPoints(i);
                  }
                  if (newCarPoint.length === carPoints.length) {
                      console.log(newCarPoint);
                      for (var j = 0; j < newCarPoint.length; j++) {
                          var point = new BMap.Point(newCarPoint[j].lng, newCarPoint[j].lat);
                          var marker = new BMap.Marker(point);
      //                     map.addOverlay(marker);
                          const deviceSize = new BMap.Size(16,26);
                          const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
                              imageSize: deviceSize
                          });

                          const marker = new BMap.Marker(point, {
                              icon: deviceIcon
                          });
                          map.addOverlay(marker);  //将标注点添加到地图上
            // 74877777777777777777777777
            console.log(points)
            function addMarker(points) {
            for(let j=0;j<points.length;j++){
                (function() {
                    var thePoint = points[j];
                    marker.addEventListener("click",
                        function(e) {
                          
                        showInfo(this,thePoint);
                    });
                })();  
            }
                
            }
             addMarker(points);
            //添加监听事件
           
        }
    }
            function showInfo(thisMarker,point) {
                console.log(point)
                that.photo=!that.photo;
                that.postionPoint.lng=(point.devLatitude)/100000;
                that.postionPoint.lat=(point.devLongitude)/100000;
                that.idvals=point.deviceId
                that.idpalce(that.idvals)
                console.log(that.postionPoint.lng)
                console.log(that.postionPoint.lat)
                point = new BMap.Point(that.postionPoint.lng,that.postionPoint.lat);
                var geoc = new BMap.Geocoder(); 
                var pt=thisMarker.point
                geoc.getLocation(pt,function(rs){
                    var addComp = rs.addressComponents; 
                    // alert(addComp.province + ", " + addComp.city + "," + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber); 
                    console.log(addComp);
                    that.newdirectory=addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
                    console.log(that.newdirectory)
                    
                });
                
            }
             
            
            
            // addMarker(points);
                //                     map.setCenter(point);// 由于写了这句，每一个被设置的点都是中心点的过程
                                
                 })   
                
                        
                        }
                
                translateCarPoints(i);
                map.addControl(top_left_navigation);  
                 
        })
