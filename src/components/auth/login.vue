<template>
    <div>
        <div class="login">
            <div class="login_header">
                <div class="layout_pannel">
                    <div class="logo" @click="$router.push('/home')">
                        
                    </div>
                </div>
            </div>
            <div class="login_main">
                <div class="main_bg layout_pannel">
                    <form action="" method="post">
                        <div class="login_way">
                            <router-link to="/login/accountLogin" tag="h1" :class="current==0?'active':''" @click.native="current = 0">账号登录</router-link>
                            <span class="line"></span>
                            <router-link to="/login/QRcodeLogin" tag="h1" :class="current==1?'active':''" @click.native="current = 1">扫码登录</router-link>
                        </div>
                        <router-view></router-view>
                    </form>
                </div>
            </div>
            <div class="login_footer">
                <div class="layout_pannel">
                    <p class="option">
                        <a href="#">简体</a>
                        <span>|</span>
                        <a href="#">繁体</a>
                        <span>|</span>
                        <a href="#">English</a>
                        <span>|</span>
                        <a href="#">常见问题</a>
                        <span>|</span>
                        <a href="#">隐私政策</a>
                        <span>|</span>
                    </p>
                    <div class="copyright">
                        小米公司版权所有-京ICP备10046444-
                        <a href="#">
                            <img src="../../assets/img/icon/ghs.png">
                        </a>
                        京公网安备11010802020134号-京ICP证110507号
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current:0
            }
        },
        created(){
            // 隐藏头部和尾部
            this.$store.state.showH = false;
            this.$store.state.showF = false;
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .layout_pannel{
        margin: 0 auto;
        width: 1130px;
    }
    .login{
        .login_header{
            height: 98px;
            background-color: #fff;
            .logo{
                margin-top: 24px;
                margin-bottom: 24px;
                float: left;
                width: 200px;
                height: 50px;
                background:url("../../assets/img/mistore_logo.png") no-repeat center center;
                cursor: pointer;
            }
        }
        .login_main{
            height: 588px;
            background: url("../../assets/img/aece569d6689b4c461bb53efd9eea9c7.jpg") no-repeat center center;
            .main_bg{
                position: relative;
                form{
                    position: absolute;
                    top: 32px;
                    right: 0;
                    width: 410px;
                    height: 556px;
                    background-color: #fff;
                    .login_way{
                        margin-top: 29px;
                        margin-bottom: 24px;
                        h1{
                            font-size: 22px;
                            cursor: pointer;
                            font-weight: normal;
                            display: inline-block;
                            width: calc(50% - 2px);
                            height: 29px;
                            line-height: 29px;
                            text-align: center;
                            vertical-align: middle;
                            &.active{
                                color: $mainColor;
                            }
                            &:hover{
                                color: $mainColor;
                            }
                        }
                        .line{
                            display: inline-block;
                            vertical-align: middle;
                            width: 2px;
                            height: 29px;
                            background-color: #e0e0e0;

                        }
                    }
                }
            }
        }
        .login_footer{
            height: 236px;
            background-color: #fff;
            font-size: 14px;
            padding: 85px;
            box-sizing: border-box;
            text-align: center;
            .option{
                margin: 10px 0;
                a{

                }
                span{
                    margin: 0 10px;
                    &:last-child{
                        display: none;
                    }
                }
            }
            .copyright{
                a{
                    img{
                        vertical-align: baseline;
                        display: inline-block;
                        height: 20px;
                        width: auto;
                    }
                }
            }
        }
    }
</style>