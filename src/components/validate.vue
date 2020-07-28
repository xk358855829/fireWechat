<template>
	<div id="validate">
		<p class="tit">请输入{{phone}}短信验证码</p>
		<div class="date">
			<span>验证码</span>
			<span>
				<input type="number" @input="nexts" name="" id="" v-model="values" :placeholder="val" />
			</span>
			<span v-if="times==''" class="haveGet" @click="getValidate">{{validate}}</span>
			<span v-else class="noGet">{{validate}}</span>
		</div>
		<div class="next">
			<div v-if="next == 1" class="nextOk" @click="nextOk">完成</div>
			<div v-else class="nextNo">完成</div>
		</div>
		<div v-if="code==0||code==1" id="popup">
			<div v-if="code==0" class="popupBox">
				<p>绑定成功</p>
				<!-- <p><img src="../../static/image/dg.png"/></p> -->
				<p @click="nextHome">确定</p>
			</div>
			<div v-if="code==1" class="popupBox">
				<p>绑定失败</p>
				<!-- <p><img src="../../static/image/dx.png"/></p> -->
				<p @click="nextPhone">确定</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'homePage',
		data() {
			return {
				phone:'',
				values:'',
				val:'请输入验证码',
				validate:'获取验证码',
				times:'',
				next:0,
				code:3
			}
		},
		mounted:function(){
			document.title = this.$route.meta.title;
			this.phone = this.$route.query.phone.substr(0,3)+'****'+this.$route.query.phone.substr(7,11);
		},
		methods: {
			nextHome(){
				this.$router.push({path: '/'});
			},
			nextPhone(){
				this.$router.push({path: '/setPhone'});
			},
			nexts(){
				if(this.values.length==4){
					console.log(this.values)
					this.next = 1;
				}
			},
			getValidate(){
				let that = this;
				if(that.times==''){
					clearInterval(that.times)
					let a = 59;
					that.validate = '剩余'+a+'s';
					that.times = setInterval(function(){
						if(a<=0){
							that.validate = '重新获取';
							clearInterval(that.times);
							that.times = '';
						}else{
							a--;
							that.validate = '剩余'+a+'s';
						}
					},1000)
				}
				that.$http({
					method: 'post',
					url: that.httpUrl + 'message/set' /*'http://192.168.2.129:8080/BlockEven/user/find'*/ ,
					data: Qs.stringify({
						phoneNumber: that.$route.query.phone /*'oOKex1F95KBTAurYO4Z5gvNelR6c'*/
					})
				}).then(function(message){
					if(message.data.resCode==0){}
				})
			},
			nextOk(){
				console.log(this.values)
				console.log(this.$route.query.phone)
				console.log(localStorage.getItem('openid'))
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl + 'user/setphone' /*'http://192.168.2.129:8080/BlockEven/user/find'*/ ,
					data: Qs.stringify({
						openid:localStorage.getItem('openid'),
						phonenumber:this.$route.query.phone,
						Verification:this.values
					})
				}).then(function(message){
					that.code = message.data.resCode;
				})
			}
		}
	}
</script>

<style scoped="scoped">
.tit{text-align: center;height: 1.1rem;line-height: 1.1rem;border-bottom: 1px solid #D8D8D8;color: #787878;}
.date{display: flex;height: 1rem;line-height: 1rem;border-bottom: 1px solid #D8D8D8;justify-content: space-between;padding-left:0.25rem;font-size: 0.28rem}
.date>span:nth-of-type(1){color: #F68B1B;border-right:1px solid #D8D8D8 ;padding-right: 0.25rem;}
.date>span:nth-of-type(2){width: 50%;}
.date>span:nth-of-type(2)>input{width: 100%;height: 100%;border: none;background-color: #EEEEEE;}
.date>.haveGet{background-color: #F68B1B;color: #FFFFFF;width: 25%;text-align: center;}
.date>.noGet{background-color: #C9C9C9;color: #FFFFFF;width: 25%;text-align: center;}
.next{width: 100%;display: flex;}
.next .nextOk,.nextNo{width: 100%;margin: 0 0.5rem; height: 0.88rem;background-color: #F68B1B;border-radius:0.1rem ;text-align: center;line-height: 0.88rem;color: #FFFFFF;font-size: 0.36rem;margin-top: 0.4rem;}
.next .nextOk:active{background-color: #FFFFFF;color: #F68B1B;}
.next>.nextNo{background-color: #d9d9d9;color: #FFFFFF;}
	#popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;left: 0;top: 0;}
	.popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:5px ;}
	.popupBox p{height: 0.6rem;line-height: 0.6rem;font-size: 0.28rem;color: #F68B1B;}
	.popupBox p:nth-of-type(1){padding-top: 5px;}
	.popupBox p:nth-of-type(2){margin: 9px 0;}
	.popupBox p:nth-of-type(3){border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;}
	.popupBox img{width: 0.6rem;}
	.popupBox p:nth-of-type(3):active{background-color: #F68B1B;color: #FFFFFF;}

</style>