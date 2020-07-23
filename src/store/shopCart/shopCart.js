export default {
    namespaced:true,
    state: {
        // 购物车列表
		cartItem:[],
	},
	mutations: {
        // 添加到购物车
        addCart(state,obj){
            let {product,totalName} = obj;
            // 查找cartItem里面有没有相同数据
            let index = state.cartItem.findIndex((val)=>{
                // 如果相同商品
                if(val.product.product_id == product.product_id){
                    // 相同颜色或者其他选项
                    return val.totalName == totalName;
                }
            })
            console.log("index:",index);
            // 如果有，这个数据的购买数量 加一
            if(index >= 0){
                state.cartItem[index].product.buy_num += 1;
            }else{
                // 没有就添加一条
                state.cartItem.push(obj);
            }
            console.log("cartItem:",state.cartItem);
        }
	},
	actions: {
	},
	getters:{

	},
	modules: {

	}
}