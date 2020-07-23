import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../router/home/index";
import detail from "../router/detail/detail";
import auth from "../router/auth/auth";
import shopCart from "../router/shopCart/shopCart";
import user from "./user/user";
import newOrder from "./order/newOrder";
import search from "./search/search";

import store from "../store/index";
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

  const routes = [
    {path:"/",redirect:"/home"},
    index,  //首页
	detail,	// 详情页
	...auth, //权限 登录注册
	shopCart, //购物车
	...user, // 用户面板
	...newOrder,
	search
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// eslint-disable-next-line no-unused-vars
	scrollBehavior(to, from,savedPosition) {
		return { x: 0, y: 0 }
	}
})
// eslint-disable-next-line no-unused-vars
router.beforeEach((to,from,next)=>{
	console.log("to",to);
	if(to.fullPath == "/newOrder"){
		console.log(to.params);
		window.sessionStorage.setItem("ts",JSON.stringify(to.params));
	}
	if(to.meta.requireAuth){
		let isNaName = store.getters.isNaName;
		console.log(isNaName)
		if(isNaName){
			next({path:"/login/accountLogin",query:{redirect:to.fullPath,name:to.name}});
		}else{
			next();
		}
	}else{
		next()
	}
})

export default router
