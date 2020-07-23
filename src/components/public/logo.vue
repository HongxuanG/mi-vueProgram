<template>
    <div>
        <div class="header-logo" @click="$router.push('/home')">
            <ul>
                <li>
                    <a href="javascript:void(0);">
                        <span class="iconfont icon-mi"></span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span class="iconfont icon-zhuye"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .header-logo{
            float: left;
            margin-top: 22px;
            margin-bottom: 23px;
            width: 55px;
            height: 55px;
            background-color: $mainColor;
            overflow: hidden;
            ul{
                width: 200%;
                transition: all ease 0.2s 0s;
                li{
                    a{
                        float: left;
                        width: 55px;
                        height: 55px;
                        color: #fff;
                        text-align: center;
                        span{
                            line-height: 55px;
                            font-size: 30px;
                        }
                    }
                }
            }
            &:hover{
                ul{
                    transform: translateX(-50%);
                }
            }
        }
</style>