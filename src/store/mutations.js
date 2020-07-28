import * as type from './mutations-type'

export default {
    // [ADD](state,{
    //     num,
    //     arr
    // }) {
    //     state.num=num
     
    // },
    SET(state,lat){
        console.log(lat)
        state.lat=lat
    },
    LIST(state,list){
        state.list=list
    }
}
