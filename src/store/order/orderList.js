export default {
    namespaced:true,
    state: {
        // 订单列表
        orderList:[],
        // type
        // 全部订单 0
        // 待支付 1
        // 待收货 2
        // 订单回收站 3
        type1:[],
        type2:[],
        type3:[],
	},
	mutations: {
        // 添加订单
        addOrder(state,dataObj){
            let type = Math.floor(Math.random() * 3 + 1);
            dataObj["type"] = type;
            state.orderList.push(dataObj);

            // 分类
            state.type1 = state.orderList.filter((item)=>{
                return item.type == 1;
            })
            state.type2 = state.orderList.filter((item)=>{
                return item.type == 2;
            })
            state.type3 = state.orderList.filter((item)=>{
                return item.type == 3;
            })
        }
	},
	actions: {
        addOrder({commit,rootState},dataObj){
            commit("addOrder",dataObj);
            // 操作其他模块的state
            rootState.shopCart.cartItem = [];
        }
	},
	getters:{

	},
	modules: {

	}
}