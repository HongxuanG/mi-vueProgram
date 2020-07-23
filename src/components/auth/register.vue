<template>
    <div>
        <div class="registerPage">
            <div class="wrap">
                <div class="logo" @click="$router.push('/home')">
                    <span class="iconfont icon-mi"></span>
                </div>
                <div class="pageTitle">
                    注册小米账号
                </div>
                <form>
                    <div class="account">
                        <input type="text" id="account" name="account" placeholder="输入账号" v-model="account">
                    </div>
                    <div class="password">
                        <input type="password" id="password" name="password" placeholder="输入密码" v-model="password">
                    </div>
                    <div class="confirmPwd">
                        <input type="password" id="confirmPwd" name="confirmPwd" placeholder="再次确认密码" v-model="confirmPwd">
                    </div>
                </form>
                <div class="register">
                    <button class="confirm" type="button" @click="register">立即注册</button>
                </div>
                <p class="agree">已阅读并同意：小米 用户协议和 隐私政策</p>
            </div>
            <div class="register_footer">
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
    import Vue from "vue";
    import Message from "element-ui";
    Vue.use(Message);
    export default {
        data(){
            return{
                account:"",
                password:"",
                confirmPwd:""
            }
        },
        methods:{
            // 注册
            register(){
                this.$axios.post("/register",{
                    account:this.account,
                    password:this.password,
                    confirmPwd:this.confirmPwd
                }).then((res)=>{
                    console.log(res);
                    if(res.data.code==201){
                        this.$message({
                            showClose: true,
                            message: '错了哦，注册失败',
                            type: 'error'
                        });
                    }else if(res.data.code==202){
                        this.$message({
                            showClose: true,
                            message: '请输入正确用户名或密码',
                            type: 'error'
                        });
                    }else if(res.data.code==203){
                        this.$message({
                            showClose: true,
                            message: '已有账号',
                            type: 'error'
                        });
                    }else{
                        this.$message({
                            showClose: true,
                            message: '恭喜你，注册成功!',
                            type: 'success'
                        });
                        this.$router.push('/login/accountLogin');
                    }
                }).catch((err)=>{
                    console.log(err);
                })
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
    .registerPage{
        padding-top: 141px;
        .wrap{
            margin: 0 auto 0;
            width: 854px;
            height: 550px;
            background-color: #fff;
            text-align: center;
            .logo{
                display: inline-block;
                width: 49px;
                height: 48px;
                background-color: $mainColor;
                border-radius: 2px;
                line-height: 48px;
                span{
                    color: #fff;
                    font-size: 30px;
                }
            }
            .pageTitle{
                margin-top: 46px;
                font-size: 30px;
                color: #333;
            }
            
            .account{
                margin-top: 64px;
                input{
                    outline: none;
                    width: 332px;
                    height: 42px;
                    border: 1px solid #e8e8e8;
                    background-color: #fff;
                    padding: 14px 0 14px 14px;
                    box-sizing: border-box;
                }
            }
            .password{
                margin-top: 25px;
                input{
                    outline: none;
                    width: 332px;
                    height: 42px;
                    border: 1px solid #e8e8e8;
                    background-color: #fff;
                    padding: 14px 0 14px 14px;
                    box-sizing: border-box;
                }
            }
            .confirmPwd{
                margin-top: 25px;
                input{
                    outline: none;
                    width: 332px;
                    height: 42px;
                    border: 1px solid #e8e8e8;
                    background-color: #fff;
                    padding: 14px 0 14px 14px;
                    box-sizing: border-box;
                }
            }
            .register{
                margin-top: 32px;
                button{
                    width: 332px;
                    height: 42px;
                    background-color: $mainColor;
                    color: #fff;
                    font-size: 14px;
                    outline: none;
                    border: 0;
                    cursor: pointer;
                }
            }
            .agree{
                margin-top: 40px;
                color: #9d9d9d;
            }
        }
        .register_footer{
            height: 236px;
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