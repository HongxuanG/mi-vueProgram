export default {
    namespaced:true,
    state: {
        userAddress:[],
	},
	mutations: {
        // 添加地址
        addAddress(state,obj){
            obj = JSON.parse(JSON.stringify(obj));
            obj.form.id = Date.now(); //给个id值
            state.userAddress.push(obj)
            
        },
        // 修改地址
        editAddress(state,obj){
            console.log(state.userAddress);
            let index = state.userAddress.findIndex((item)=>{
                return item.form.id == obj.form.id;
            })
            console.log(index);
            Object.assign(state.userAddress[index],obj);
        },
        // 删除地址
        delAddress(state,id){
            let index = state.userAddress.findIndex((item)=>{
                return item.form.id == id;
            })
            state.userAddress.splice(index,1);
        }
	},
	actions: {
	},
	getters:{

	},
	modules: {

	}
}