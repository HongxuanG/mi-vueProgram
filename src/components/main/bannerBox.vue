<template>
    <div class="container">
        <div class="bannerBox">
            <a href="#">
                <img :src="imgUrl" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:["imgUrl"]
    }
</script>

<style lang="scss" scoped>
    .bannerBox{
        margin: 22px 0;
        height: 120px;
        a{
            display: flex;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>