<template>
    <div>
        <div class="personalCenter">
            <div class="userInfo clearfix">
                <div class="userLeft">
                    <div class="userImg">
                        <img src="../../assets/img/userImg.jpg" alt="">
                    </div>
                    <div class="user">
                        <span class="username">{{$store.state.username}}</span>
                        <span class="wenhou">晚上好~</span>
                        <a href="javascript:;">修改个人信息></a>
                    </div>
                </div>
                <div class="userRight">
                    <div class="deepInfo">
                        <div>账号安全: <span class="level">普通</span></div>
                        <div>绑定手机: <span>173********34</span></div>
                        <div>绑定邮箱: <span>未绑定</span></div>
                    </div>
                </div>
            </div>
            <div class="myorder">
                <ul>
                    <li>
                        <img src="../../assets/img/icon/portal-icon-1.png" alt="">
                        <div class="rr">
                            <h1>
                                待支付的订单：<span class="num">{{type1.length}}</span>
                            </h1>
                            <a href="javascript:;" @click="$router.push('/user/myorder/type1')">
                                查看待支付订单<span class="iconfont icon-go"></span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/icon/portal-icon-2.png" alt="">
                        <div class="rr">
                            <h1>
                                待收货的订单：<span class="num">{{type2.length}}</span>
                            </h1>
                            <a href="javascript:;" @click="$router.push('/user/myorder/type2')">
                                查看待收货订单<span class="iconfont icon-go"></span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/icon/portal-icon-3.png" alt="">
                        <div class="rr">
                            <h1>
                                待评价的订单：<span class="num">0</span>
                            </h1>
                            <a href="javascript:;">
                                查看待评价订单<span class="iconfont icon-go"></span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/icon/portal-icon-4.png" alt="">
                        <div class="rr">
                            <h1>
                                喜欢的订单：<span class="num">0</span>
                            </h1>
                            <a href="javascript:;">
                                查看喜欢订单<span class="iconfont icon-go"></span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        data(){
            return{

            }
        },
        computed:{
            ...mapState("orderList",{
                orderList:state=>state.orderList,
                type1:state=>state.type1,
                type2:state=>state.type2,
                type3:state=>state.type3,
            }),
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .personalCenter{
        .userInfo{
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 40px;
            .userLeft{
                float: left;
                padding-top: 24px;
                .userImg{
                    float: left;
                    margin-right: 20px;
                    img{
                        display: inline-block;
                        width: 150px;
                        height: 150px;
                        padding: 4px;
                        border-radius: 50%;
                        border: 1px solid #e2e2e2;
                    }
                }
                .user{
                    padding-top: 40px;
                    float: left;
                    span.username{
                        display: block;
                        color: #333;
                        font-size: 18px;
                        margin-bottom: 10px;
                    }   
                    span.wenhou{
                        display: block;
                        color: #757575;
                        font-size: 14px;
                    }
                    a{
                        display: block;
                        padding-top: 10px;
                        color: $mainColor;
                        font-size: 14px;
                    }
                }
            }
            .userRight{
                float: right;
                width: 360px;
                .deepInfo{
                    padding-top: 50px;
                    div{
                        font-size: 14px;
                        color: #757575;
                        margin: 10px 0;
                        span{
                            color: #757575;
                        }
                        span.level{
                            color: #ffac13;
                        }
                    }
                }
            }
        }
        .myorder{
            ul{
                li{
                    width: 400px;
                    float: left;
                    margin-left: 4px;
                    margin-top: 50px;
                    img{
                        float: left;
                        margin-right: 22px;
                        width: 100px;
                        height: 100px;
                    }
                    .rr{
                        float: left;
                        padding-top: 28px;
                        h1{
                            color: #757575;
                            font-size: 18px;
                            font-weight: normal;
                            span{
                                color: $mainColor;
                            }
                        }
                        a{
                            font-size: 14px;
                            color: #757575;
                            span{
                                font-size: 14px;
                                color: #757575;
                            }
                            &:hover{
                                color: $mainColor;
                                span{
                                    color: $mainColor;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>