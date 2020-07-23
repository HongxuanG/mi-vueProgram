<template>
    <div>
        <div class="little-header">
            <div class="container">
                <div class="little-header-left">
                    <headerlogo></headerlogo>
                    <h2>{{title}}</h2>
                    <p v-if="showTips">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
                </div>
                <div class="little-header-right">
                    <a href="javascript:;" v-if="!isNaName" class="userInfo" @mouseover="showHiden=true" @mouseout="showHiden=false">
                        <span class="username">{{$store.state.username}}</span>
                        <span class="iconfont icon-down2"></span>
                        <div class="hiden" v-show="showHiden">
                            <ul>
                                <li>
                                    <a href="javascript:;" @click="$router.push('/user/personal')">个人中心</a>
                                </li>
                                <li>
                                    <a href="javascript:;">评价晒单</a>
                                </li>
                                <li>
                                    <a href="javascript:;">我的喜欢</a>
                                </li>
                                <li>
                                    <a href="javascript:;">小米账户</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="loginout">退出登录</a>
                                </li>
                            </ul>
                        </div>
                    </a>
                    <a href="javascript:void(0);" v-if="isNaName" @click="$router.push('/login')">登录</a>
                    <span class="divider">|</span>
                    <a class="myorder" v-if="!isNaName" href="javascript:;" @click="$router.push('/user/myorder/type0')">我的订单</a>
                    <a href="javascript:void(0);" v-if="isNaName" @click="$router.push('/login')">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerlogo from "../public/logo";
    import {mapGetters} from "vuex";
    export default {
        data(){
            return{
                showHiden:false,
            }
        },
        methods:{
            loginout(){
                this.$store.state.username = "";
                this.$router.replace("/home");
            }
        },
        computed:{
            ...mapGetters([
                "isNaName"
            ])
        },
        props:{
            title:{
                type:String,
                default:"我是小标题",
                required:true
            },
            showTips:{
                type:Boolean,
                default:false
            }
        },
        components:{
            headerlogo
        },
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .little-header{
        height: 100px;
        border-bottom: 2px solid $mainColor;
        background-color: #fff;
        .little-header-left{
            width: 620px;
            float: left;
            h2{
                float: left;
                margin-left: 45px;
                font-size: 25px;
                color: #333;
                margin-right: 15px;
                line-height: 100px;
            }
            p{
                float: left;
                color: #757575;
                font-size: 12px;
                line-height: 100px;
            }
        }
        .little-header-right{
            float: right;
            line-height: 100px;
            a.userInfo{
                position: relative; 
                display: inline-block;
                height: 70px;
                line-height: 70px;
                span.username{
                    color: #757575;
                    font-size: 14px;
                }
                span.iconfont{
                    margin-left: 10px;
                    margin-right: 10px;
                    color: #757575;
                    font-size: 14px;
                }
                .hiden{
                    height: 150px;
                    width: 110px;
                    padding: 7px 0;
                    background-color: #fff;
                    text-align: center;
                    position: absolute;
                    top: 50px;
                    left: -10px;
                    z-index: 10;
                    box-shadow: 0 10px 10px rgba(0,0,0,.15);
                    ul{
                        li{
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            a{
                                width: 100%;
                                color: #333;

                            }
                            &:hover{
                                a{
                                    color: $mainColor;
                                }
                                background-color: #f5f5f5;
                            }
                        }
                    }
                }
            }
            .divider{
                margin: 0 15px;
            }
            a.myorder{
                color: #757575;
                font-size: 14px;
            }
            a{
                &:hover{
                    color: $mainColor;
                }
                span.username{
                    color: $mainColor;
                }
                span.iconfont{
                    color: $mainColor;
                }
            }
        }
    }
</style>