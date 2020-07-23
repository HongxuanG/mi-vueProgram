<template>
    <div>
        <div class="QRcodeLogin">
            <div class="QRcode">
                <img src="../../../assets/img/snipaste20200629_075614.png" alt="">
            </div>
            <p class="saoyisao">使用<font color="#ff6700"> 小米商城APP </font>扫一扫</p>
            <p class="tip">
                小米手机可打开「设置」>「小米帐号」扫码登录
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .QRcodeLogin{
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        .QRcode{
            width: 180px;
            height: 180px;
            margin: 144px auto 10px;

            img{

            }
        }
        .saoyisao{
            
        }
        .tip{

        }
    }
</style>