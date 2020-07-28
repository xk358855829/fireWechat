


import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex);

const state={
    num:'',
    arr:0,
    lat:{},
    list:[]
}
export default new Vuex.Store({
    state:{
    	allList:10
    },
    actions,
    getters,
    mutations:{
      updateallList(state,data){
      	console.log(data)
        state.allList=data;
      }
    },

})