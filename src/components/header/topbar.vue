<template>
    <div>
        <div class="home-topbar">
            <div class="container clearfix">
                <div class="topbar_nav">
                    <ul>
                        <li v-for="(item,index) in topbar_nav" :key="index">
                            <a href="#">{{item}}</a>
                            <span class="line">|</span>
                        </li>
                    </ul>
                </div>
                <div class="shopcart" ref="cart" @mouseover="showCart" @mouseout="hideCart">
                    <div @click="$router.push('/shopCart')" class="cart">
                        <span class="iconfont icon-gouwuche1"></span>
                        <em >购物车</em>
                        <span class="buy_num">({{cartItem.length}})</span>
                    </div>
                    <div  class="hide">
                        <el-collapse-transition>
                            <div v-show="show" class="miniCart">
                                <div class="transition-box" v-if="cartItem.length==0">购物车中还没有商品，赶紧选购吧！</div>
                                <div class="miniCartList" v-if="cartItem.length!=0">
                                    <ul>
                                        <li v-for="(item,index) in cartItem" :key="index">
                                            <a href="javascript:;" class="clearfix">
                                                <div class="imgLeft">
                                                    <img :src="item.product.product_image" alt="">
                                                </div>
                                                <div class="itemName">{{item.totalName}}</div>
                                                <div class="itemPrice">
                                                    {{item.product.product_price}}元 x {{item.product.buy_num}}
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="miniCart-total clearfix" v-if="cartItem.length!=0">
                                    <span class="total">
                                        共 <em>{{cartItem.length}}</em> 件商品
                                        <span class="price"><em>{{total_price}}</em>元</span>
                                    </span>
                                    <a href="javascript:;" class="btn " @click="$router.push('/shopCart')">
                                        去购物车结算
                                    </a>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
                
                <div class="login_control">
                    <ul>
                        <li v-if="isNaName">
                            <a href="javascript:void(0);" @click="$router.push('/login')">登录</a>
                            <span class="line">|</span>
                        </li>
                        <li v-if="isNaName">
                            <a href="javascript:void(0);" @click="$router.push('/register')">注册</a>
                            <span class="line">|</span>
                        </li>
                        <li v-if="!isNaName">
                            <a href="javascript:;" class="userInfo" @mouseover="showHiden=true" @mouseout="showHiden=false">
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
                                            <a href="javascript:;" @click="$router.push('/user/mylike')">我的喜欢</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">小米账户</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="loginout()">退出登录</a>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                            <span class="line">|</span>
                        </li>
                        <li v-if="!isNaName">
                            <a href="javascript:void(0);">消息通知</a>
                            <span class="line">|</span>
                        </li>
                        <li v-if="!isNaName">
                            <a href="javascript:void(0);" @click="$router.push('/user/myorder/type0')">我的订单</a>
                            <span class="line">|</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    // fade/zoom 等
    import 'element-ui/lib/theme-chalk/base.css';
    // collapse 展开折叠
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
    Vue.component(CollapseTransition.name, CollapseTransition)
    import {mapState,mapGetters} from "vuex";
    export default {
        data(){
            return{
                show:false,
                topbar_nav:["小米商城","MIUI","loT","云服务","金融","有品","小爱开放平台","企业团购","资质证照","协议规则","下载app","Select Location"],
                showHiden:false
            }
        },
        methods:{
            showCart(){
                this.show = true;
                this.$refs.cart.style.color = "#ff6700";
                this.$refs.cart.style.backgroundColor = "#fff";
            },
            hideCart(){
                this.show = false;
                this.$refs.cart.style.color = "#b0b0b0";
                this.$refs.cart.style.backgroundColor = "#424242";
            },
            // 退出登录
            loginout(){
                this.$store.state.username = "";
                this.$store.state.account = null;
                // 如果是home，不跳转
                if(this.$route.fullPath != "/home"){
                    this.$router.replace("/home");
                }
            }
        },
        computed:{
            total_price:function() {
                return this.cartItem.reduce((total,current)=>{
                    return total + current.product.product_price*current.product.buy_num;
                },0)
            },
            ...mapState("shopCart",{
                cartItem:state=>state.cartItem
            }),
            ...mapGetters([
                "isNaName"
            ])
        },
        created(){
            console.log(this.cartItem);
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .container{
        width: 1226px;
        margin: 0 auto;
        position: relative;
    }
    .home-topbar{
        background: #333333;
        height: 40px;
        .topbar_nav{
            float: left;
            ul{
                li{
                    line-height: 40px;
                    float: left;
                    a{
                        &:hover{
                            color: white;
                        }   
                    }
                    span.line{
                        margin: 0 5px;
                        color: #393e3e;
                        
                    }
                    &:last-child{
                        span.line{
                            display: none;
                        }
                    }
                }
            }
        }
        .login_control{
            float: right;
            ul{
                li{
                    line-height: 40px;
                    float: left;
                    a{
                        &:hover{
                            color: white;
                        }
                    }
                    span.line{
                        margin: 0 5px;
                        color: #393e3e;
                    }
                    &:last-child{
                        span.line{
                            display: none;
                        }
                    }
                    a.userInfo{
                        width: 100px;
                        position: relative; 
                        display: inline-block;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        &:hover{
                            background-color: #fff;
                            span.username{
                                color: $mainColor;
                            }
                            span.iconfont{
                                color: $mainColor;
                            }
                        }
                        span.username{
                            color: #b0b0b0;
                            font-size: 12px;
                        }
                        span.iconfont{
                            margin-left: 5px;
                            margin-right: 5px;
                            color: #757575;
                            font-size: 12px;
                        }
                        .hiden{
                            height: 150px;
                            width: 100%;
                            padding: 7px 0;
                            background-color: #fff;
                            text-align: center;
                            position: absolute;
                            top: 40px;
                            left: 0px;
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
                }
            }
        }
        .shopcart{
            margin-left: 15px;
            float: right;
            line-height: 40px;
            text-align: center;
            width: 120px;
            height: 40px;
            background-color: #424242;
            color: #b0b0b0;
            .cart{
                cursor: pointer;
                em{
                    margin-left: 4px;
                }
                .buy_num{
                    margin-left: 7px;
                }
            }
            .hide{
                position: absolute;
                z-index: 200;
                top: 40px;
                right: 0px;
                box-shadow: 0 2px 10px rgba(0,0,0,.15);
                background-color: #fff;
                .miniCart{
                    .transition-box {
                        width: 316px;
                        height: 100px;
                        text-align: center;
                        color: #333;
                        line-height: 100px;
                        box-sizing: border-box;
                    }
                    .miniCartList{
                        width: 316px;
                        padding: 0 20px;
                        margin-top: 20px;
                        ul{
                            li{
                                padding: 10px 0;
                                height: 60px;
                                a{
                                    line-height: 60px;
                                    .imgLeft{
                                        float: left;
                                        margin-right: 10px;
                                        img{
                                            width: 60px;
                                            height: 60px;
                                        }
                                    }
                                    .itemName{
                                        width: 85px;
                                        float: left;
                                        margin: 10px 0;
                                        line-height: 16px;
                                        color: #424242;
                                    }
                                    .itemPrice{
                                        float: right;
                                        color: #424242;
                                    }
                                }
                            }
                        }
                    }
                    .miniCart-total{
                        padding: 15px 20px;
                        span.total{
                           float: left;
                           color: #333;
                           line-height: 20px;
                            em{

                            }
                            span.price{
                                color: $mainColor;
                                display: block;
                                font-size: 14px;
                                em{
                                    font-size: 25px;
                                }
                            }
                        }
                        .btn{
                            float: right;
                            width: 132px;
                            height: 40px;
                            color: white;
                            text-align: center;
                            line-height: 40px;
                            background-color: $mainColor;
                        }
                    }
                }
            }
        }
    }
</style>