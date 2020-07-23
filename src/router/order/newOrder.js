module.exports = [
    {
        path:"/confirmOrder",
        name:"支付订单",
        component:()=>import("../../components/order/confirmOrder.vue"),
        meta:{
            requireAuth:true //要权限
        }
    },
    {
        path:"/newOrder",
        name:"确认订单",
        component:()=>import("../../components/order/newOrder.vue"),
        meta:{
            requireAuth:true //要权限
        }
    }
]