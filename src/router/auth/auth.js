module.exports = [
    {path:"/login",redirect:"/login/accountLogin"},
    {
        path: '/login',
        name: '登录',
        component: () => import('../../components/auth/login.vue'),
        children:[
            {
                path: 'accountLogin',
                name: '账号登录',
                component: () => import('../../components/auth/login_way/accountLogin.vue'),
            },
            {
                path: 'QRcodeLogin',
                name: '扫码登录',
                component: () => import('../../components/auth/login_way/QRcodeLogin.vue'),
            },
        ]
    },
    {
        path: '/register',
        name: '注册',
        component: () => import('../../components/auth/register.vue'),
    },
]