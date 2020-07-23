import Vue from 'vue'
import Vuex from 'vuex'
import shopCart from "./shopCart/shopCart";
import user from "./user/user";
import address from "./user/address";
import orderList from "./order/orderList";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		showH:true,
		showF:true,
		username:"", //用户名
		account:null //用户账号
	},
	mutations: {
	},
	actions: {
	},
	getters:{
		// 检测有没有用户是否登录
		isNaName:function(state){
			return state.username==null || state.username=='';
		}
	},
	modules: {
		shopCart, //购物车
		user,     //用户面板
		address, //地址
		orderList//订单列表
	}
})
