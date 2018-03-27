// import Vue from 'vue'
// import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './action'
// import getters from './getters'

// Vue.use(Vuex)

// const state = {
	// telephonenum: '', // 快速登录检测的手机号
	// longitude: '', // 当前位置经度
	// cartList: {}, // 加入购物车的商品列表
	// shopDetail: null, //商家详情信息
	// invoice: false,//开发票
	// newAddress: [], //确认订单页新的地址
	// geohash: '31.22299,121.36025',//地址geohash值
// }

// export default new Vuex.Store({
// 	state,
// 	getters,
// 	actions,
// 	mutations,
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    telephonenum: '',
    usernameval:'',
    nowshow:true,
    selected:1,
    phonenumremind:true,
    logodo:'',
    deviceparameters:[
        {devicename:""},
        {devicenum:""},
        {devicebrand:""},
        {devicemodelnumber:""},
        {devicedescribe:""},
    ]
  },
  mutations:{
  	sharephonnum (state,msg){
  		state.telephonenum = msg
  	},
    shareusername (state,val){
      state.usernameval = val
    },
    shareselected (state,val){
      state.selected = val
    },
    sharenowshow (state,show){
      state.nowshow = show
    },
    sharephonenumremind (state,show){
      state.phonenumremind = show
    },
    sharelogodo (state,show){
      state.logodo = show
    },
    sharedeviceparameters (state,show){
      state.deviceparameters = show
    }
  }
})

export default store