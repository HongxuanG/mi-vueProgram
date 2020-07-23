<template>
    <div>
        <div class="userMenu container">
            <div class="user-header">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }"><a href="javascript:;" >首页</a></el-breadcrumb-item>
                    <el-breadcrumb-item>我的订单</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="userPanel clearfix">
                <div class="user-sideBar">
                    <dl>
                        <dt class="title">订单中心</dt>
                        <dd><router-link tag="a" to="/user/myorder/type0" href="javacript:;">我的订单</router-link></dd>
                        <dd><a href="javacript:;">评价晒单</a></dd>
                        <dd><a href="javacript:;">话费充值订单</a></dd>
                        <dd><a href="javacript:;">以旧换新订单</a></dd>
                    </dl>
                    <dl>
                        <dt class="title">个人中心</dt>
                        <dd><router-link tag="a" to="/user/personal" href="javacript:;">我的个人中心</router-link></dd>
                        <dd><a href="javacript:;">消息通知</a></dd>
                        <dd><a href="javacript:;">购买资格</a></dd>
                        <dd><a href="javacript:;">现金账户</a></dd>
                        <dd><a href="javacript:;">小米礼品卡</a></dd>
                        <dd><a href="javacript:;">现金券</a></dd>
                        <dd><router-link tag="a" to="/user/mylike" href="javacript:;">喜欢的商品</router-link></dd>
                        <dd><a href="javacript:;">优惠券</a></dd>
                        <dd><router-link tag="a" to="/user/address" href="javacript:;">收货地址</router-link></dd>
                        <dd><a href="javacript:;">红包</a></dd>
                    </dl>
                    <dl>
                        <dt class="title">售后服务</dt>
                        <dd><a href="javacript:;">服务记录</a></dd>
                        <dd><a href="javacript:;">申请服务</a></dd>
                        <dd><a href="javacript:;">领取快递报销</a></dd>
                    </dl>
                    <dl>
                        <dt class="title">账户管理</dt>
                        <dd><a href="javacript:;">个人信息</a></dd>
                        <dd><a href="javacript:;">修改密码</a></dd>
                    </dl>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import {Breadcrumb,BreadcrumbItem} from "element-ui";
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    export default {
        data(){
            return{

            }
        },
        created(){
            this.$store.state.showH = true;
            this.$store.state.showF = true;
        }
    }
</script>

<style lang="scss">
    $mainColor:#ff6700;
    .userMenu{
        margin-bottom: 40px;
        .user-header{
            height: 40px;
            padding: 12px 0;
            box-sizing: border-box;
            color: #757575;
            span.el-breadcrumb__separator{
                margin: 0 8px;
            }
        }
        .userPanel{
            .user-sideBar{
                float: left;
                width: 234px;
                background-color: #fff;
                padding: 36px 0; 
                dl{
                    margin: 0 48px;
                    margin-bottom: 10px;
                    dt.title{
                        height: 52px;
                        line-height: 52px;
                        color: #333333;
                        font-size: 16px;
                    }
                    dd{
                        height: 34px;
                        line-height: 34px;
                        font-size: 14px;
                        a{
                            color: #757575;
                            &:hover{
                                color: #333333;
                            }
                        }
                    }
                }
            }
            .content{
                float: left;
                margin-left: 14px;
                width: 978px;
                background-color: #fff;
                padding: 36px 48px;
                box-sizing: border-box;
            }
        }
    }
</style>