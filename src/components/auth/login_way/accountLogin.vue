<template>
    <div>
        <div class="accountLogin">
            <div class="account">
                <input type="text" name="account" placeholder="邮箱/手机号码/小米ID" v-model="account">
            </div>
            <div class="password">
                <input type="password" name="password" placeholder="密码" v-model="password">
            </div>
            <div class="btn">
                <button class="submit" type="button" @click="login">登录</button>
            </div>
            <p class="shortway clearfix">
                <a href="javascript:;" class="phone">手机短信登录/注册</a>
                <span>
                    <a href="javascript:;" class="goRegister" @click="$router.push('/register')">立即注册</a>
                    <i class="line">|</i>
                    <a href="javascript:;" class="forgetPwd">忘记密码</a>
                </span>
            </p>
            <div class="divider">
                <el-divider>其他方式登录</el-divider>
            </div>
            <div class="loginLink">
                <a href="javascript:;" class="QQ">
                    <span class="iconfont icon-QQ"></span>
                </a>
                <a href="javascript:;" class="xinlang">
                    <span class="iconfont icon-xinlang"></span>
                </a>
                <a href="javascript:;" class="zhifubao">
                    <span class="iconfont icon-zhifubao"></span>
                </a>
                <a href="javascript:;" class="weixincopy">
                    <span class="iconfont icon-weixincopy"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Divider from "element-ui";
    Vue.use(Divider);
    export default {
        data(){
            return{
                account:"",
                password:""
            }
        },
        methods:{
            // 登录
            login(){
                this.$axios.post("/login",{
                    account:this.account,
                    password:this.password
                }).then((res)=>{
                    console.log(res)
                    switch(res.data.code){
                        case 200:
                            this.$message({
                                showClose: true,
                                message: '恭喜你，登录成功!',
                                type: 'success'
                            });
                            this.$store.state.username = res.data.result.username;
                            this.$store.state.account = this.account;
                            // 跳到指定页面
                            if(this.$route.query.redirect){
                                var ts = JSON.parse(window.sessionStorage.getItem("ts"));
                                this.$router.push({path:this.$route.query.redirect,params:ts,name:this.$route.query.name});
                                window.sessionStorage.removeItem("ts");
                            }else{
                                this.$router.push("/home");
                            }
                            break;
                        case 201:
                            this.$message({
                                showClose: true,
                                message: '找不到该用户',
                                type: 'error'
                            });
                            break;
                        case 202:
                            this.$message({
                                showClose: true,
                                message: '登录失败',
                                type: 'error'
                            });
                            break;
                    }
                }).catch((err)=>{
                    throw Error(err);
                })
            }
        },
        created(){

            console.log(JSON.parse(window.sessionStorage.getItem("ts")));
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .accountLogin{
        padding: 0 31px;
        .account{
            margin-bottom: 14px;
            input{
                width: 348px;
                height: 50px;
                border:1px solid #e0e0e0;
                background-color: #fff;
                padding: 15px 0 15px 15px;
                box-sizing: border-box;
                outline: none;
            }
        }
        .password{
            margin-bottom: 24px;
            input{
                outline: none;
                box-sizing: border-box;
                padding: 15px 0 15px 15px;
                background-color: #fff;
                width: 348px;
                height: 50px;
                border:1px solid #e0e0e0;
            }
        }
        .btn{
            button{
                outline: none;
                cursor: pointer;
                width: 348px;
                height: 50px;
                background-color: $mainColor;
                color: #fff;
                font-size: 14px;
                border: none;
            }
        }
        .shortway{
            margin-top: 10px;
            a.phone{
                float: left;
                color: $mainColor;
                font-size: 14px;
            }
            span{
                float: right;
                a{
                    font-size: 14px;
                    color: #999999;
                }
                i{
                    margin: 0 5px;
                    color: #c2a599;
                }
            }
        }
        .divider{
            padding-top: 124px;
        }
        .loginLink{
            margin-top: 14px;
            text-align: center;
            a{
                margin-right: 34px;
                span{
                    font-size: 30px;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
            .QQ{
                color: #0288d1;
            }
            .xinlang{
                color: #d32f2f;
            }
            .zhifubao{
                color: #00aaee;
            }
            .weixincopy{
                color: #00d20d;
            }
        }
    }
</style>