export default{
	add:function(m){return m<10?'0'+m:m },						
	timeToDate:function(data){
		var d = new Date(data*1000);//时间戳记得乘以1000再进行处理
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var date = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		return year + "-" + this.add(month) + "-" + this.add(date) + " " + this.add(hour) + ":" + this.add(minute) + ":" + this.add(second);
	},
	getNowFormatDatenew:function() {

		    var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth()+1;
		    var strDate = date.getDate()-1;
		    var strHours = date.getHours();
		    var strMinutes = date.getMinutes();
		    var strSeconds = date.getSeconds();
		    
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    if (strHours >= 0 && strHours <= 9) {
		        strHours = "0" + strHours;
		    }
		    if (strMinutes >= 0 && strMinutes <= 9) {
		        strMinutes = "0" + strMinutes;
		    }
		    if (strSeconds >= 0 && strSeconds <= 9) {
		        strSeconds = "0" + strSeconds;
		    }
		    
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		            + "T" + strHours + seperator2 + strMinutes
		            + seperator2 + strSeconds;
		    return currentdate;
					
	},
	getNowFormatDate:function() {

		    var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth()+1;
		    var strDate = date.getDate();
		    var strHours = date.getHours();
		    var strMinutes = date.getMinutes();
		    var strSeconds = date.getSeconds();
		    
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    if (strHours >= 0 && strHours <= 9) {
		        strHours = "0" + strHours;
		    }
		    if (strMinutes >= 0 && strMinutes <= 9) {
		        strMinutes = "0" + strMinutes;
		    }
		    if (strSeconds >= 0 && strSeconds <= 9) {
		        strSeconds = "0" + strSeconds;
		    }
		    
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		            + "T" + strHours + seperator2 + strMinutes
		            + seperator2 + strSeconds;
		    return currentdate;
					
	},
}
export function wgs84togcj02(lng, lat) {
    // if (out_of_china(lng, lat)) {
    //     return [lng, lat]
    // }
    // else {
        var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
        var PI = 3.1415926535897932384626;
        var a = 6378245.0;
        var ee = 0.00669342162296594323;
        var dlat = transformlat(lng - 105.0, lat - 35.0);
        var dlng = transformlng(lng - 105.0, lat - 35.0);
        var radlat = lat / 180.0 * PI;
        var magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        var sqrtmagic = Math.sqrt(magic);
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
        var mglat = lat + dlat;
        var mglng = lng + dlng;
        console.log(mglng);
        var z = Math.sqrt(mglng * mglng + mglat * mglat) + 0.00002 * Math.sin(mglat * x_PI);
        var theta = Math.atan2(mglat, mglng) + 0.000003 * Math.cos(mglng * x_PI);
        var bd_lng = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;
        //console.log([bd_lng, bd_lat]) 
        let objchange=[bd_lng,bd_lat]
        console.log(objchange);
        return (objchange);
        //gcj02tobd09(mglng,mglat)
    // }
}
export function transformlat(lng, lat) {
    var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
    var PI = 3.1415926535897932384626;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
}
 
export function transformlng(lng, lat) {
    var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
    var PI = 3.1415926535897932384626;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
}