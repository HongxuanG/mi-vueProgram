module.exports = [
    {path:"/user",redirect:"/user/myorder/type1"},
    {
        path:"/user",
        name:"用户面板",
        component:()=>import("../../components/user/user.vue"),
        children:[
            {
                path:"myorder",
                name:"我的订单",
                component:()=>import("../../components/user/myorder/myorder.vue"),
                children:[
                    {
                        path:"type0",
                        name:"全部",
                        component:()=>import("../../components/user/myorder/orderItem.vue"),
                        meta:{
                            requireAuth:true
                        }
                    },
                    {
                        path:"type1",
                        name:"待支付",
                        component:()=>import("../../components/user/myorder/orderItem.vue"),
                        meta:{
                            requireAuth:true
                        }
                    },
                    {
                        path:"type2",
                        name:"待收货",
                        component:()=>import("../../components/user/myorder/orderItem.vue"),
                        meta:{
                            requireAuth:true
                        }
                    },
                    {
                        path:"type3",
                        name:"订单回收站",
                        component:()=>import("../../components/user/myorder/orderItem.vue"),
                        meta:{
                            requireAuth:true
                        }
                    },
                ]
            },
            {
                path:"personal",
                name:"我的个人中心",
                component:()=>import("../../components/user/personal.vue"),
                meta:{
                    requireAuth:true
                }
            },
            {
                path:"address",
                name:"收货地址",
                component:()=>import("../../components/user/address.vue"),
                meta:{
                    requireAuth:true
                }
            },
            {
                path:"mylike",
                name:"我的喜欢",
                component:()=>import("../../components/user/mylike.vue"),
                meta:{
                    requireAuth:true
                }
            }
        ],
        
    }
]