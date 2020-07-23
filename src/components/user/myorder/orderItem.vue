<template>
    <div>
        <div v-if="itemList.length != 0">
            <div class="orderInfo" v-for="(item,index) in itemList" :key="index" >
                <div class="topInfo">
                    <div class="infoTitle">
                        <!-- 订单状态 -->
                        <h1>{{tradingStatus[item.type]}}</h1>
                        <div class="info clearfix">
                            <div class="left">
                                <!-- 下单时间 -->
                                <span class="orderTime">{{item.orderTime | dateFormat("YYYY年MM月DD日 HH:mm")}}</span>
                                <i>|</i>
                                <!-- 收件人 -->
                                <span class="addressee">{{item.addressInfo.form.name}}</span>
                                <i>|</i>
                                <!-- 订单号 -->
                                <span class="orderId">订单号：{{item.order_id}}</span>
                                <i>|</i>
                                <span>在线支付</span>
                            </div>
                            <div class="right">
                                <!-- 总价格 -->
                                应付金额：<span class="totalPrice">{{item.total_price}}</span>元
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottomInfo clearfix">
                    <!-- 订单数据信息 -->
                    <div class="bottom-left">
                        <!-- 这里有两部手机 -->
                        <div class="orderItem" v-for="(value,i) in item.orderArr" :key="i">
                            <div class="itemImage">
                                <img :src="value.imgUrl" alt="">
                            </div>
                            <div class="itemInfo">
                                <h3>{{value.goodsName}}</h3>
                                <p><span class="singlePrice">{{value.price}}</span>元 × <span class="num">{{value.num}}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-right">
                        <button class="payNow">立即支付</button>
                        <button class="orderDetail">订单详情</button>
                        <button class="kefu">联系客服</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 空状态 -->
        <div class="empty" v-if="itemList.length == 0">
            <p class="tips">当前没有{{tradingStatus[tipsIndex]}}订单</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        // type
        // 全部订单 0
        // 待支付 1
        // 待收货 2
        // 订单回收站 3
        data(){
            return{
                // 删除的订单在回收站里面
                tradingStatus:["任何","待支付","待收货","回收站"],

            }
        },
        props:["tipsIndex","itemList"],
        computed:{
            ...mapState("orderList",{
                orderList:state=>state.orderList,
            })
        },
        created(){
            console.log(this.itemList)
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .empty{
        background-color: #fff;
        width: 100%;
        height: 107px;
        padding: 10px 0;
        line-height: 107px;
        text-align: center;
        p.tips{
            
            color: #b0b0b0;
            font-size: 16px;
        }
    }
    .orderInfo{
        margin-top: 16px;
        border: 1px solid $mainColor;
        .topInfo{
            padding: 20px 30px;
            border-bottom: 1px solid #feccac;
            background-color: #fffaf7;
            .infoTitle{
                h1{
                    height: 35px;
                    font-size: 18px;
                    line-height: 35px;
                    color: $mainColor;
                    font-weight: normal;
                }
                .info{
                    height: 30px;
                    line-height: 30px;
                    .left{
                        float: left;
                        font-size: 14px;
                        color: #757575;
                        span{

                        }
                        i{
                            color: #e2e7ed;
                            margin: 0 8px;
                            &:last-child{
                                display: none;
                            }
                        }
                    }
                    .right{
                        float: right;
                        color: #757575;
                        font-size: 14px;
                        span.totalPrice{
                            font-size: 25px;
                            color: #333;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .bottomInfo{
            padding: 10px 30px;
            .bottom-left{
                float: left;
                background-color: #fff;
                .orderItem{
                    height: 95px;
                    .itemImage{
                        float: left;
                        margin-right: 20px;
                        img{
                            width: 80px;
                            height: 80px;
                        }
                    }
                    .itemInfo{
                        float: left;
                        font-size: 14px;
                        color: #333;
                        padding: 20px 0;
                        h3{
                            font-weight: normal;
                        }
                        p{
                            line-height: 24px;
                            .singlePrice{

                            }
                            .num{

                            }
                        }
                    }
                }
            }
            .bottom-right{
                float: right;
                button{
                    display: block;
                    margin: 10px 0;
                    width: 120px;
                    height: 30px;
                    box-sizing: border-box;
                    outline: none;
                    border: 1px solid #b0b0b0;
                    background-color: #fff;
                    color: #757575;
                    cursor: pointer;
                }
                .payNow{
                    background-color: $mainColor;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
</style>