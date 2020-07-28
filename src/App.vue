<template>
	<div id="app">
		<router-view v-if="isRouterAlive"></router-view>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'App',
		provide(){
			return {
				reload:this.reload
			}
		},
		data(){
			return{
				isRouterAlive:true
			}
		},
		created(){
		  	//在页面加载时读取sessionStorage里的状态信息

			if (sessionStorage.getItem("store") ) {

			this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))

			}

			 

			//在页面刷新时将vuex里的信息保存到sessionStorage里

			window.addEventListener("beforeunload",()=>{

			sessionStorage.setItem("store",JSON.stringify(this.$store.state))

			})
		  },
		methods: {
			reload(){
				this.isRouterAlive=false
				this.$nextTick(function(){
					this.isRouterAlive=true
				})
			}
		},
		mounted:function(){
			document.title=this.$route.meta.title;
			/*if(!localStorage.getItem('openid')){
				window.location.href = 'http://cloud.sokeed.com/mp/card/error.html'
			}*/
		}
	}
</script>
<style>
	#app {}
</style>