<template>
    <div>
        <div class="home-flashsale container">
            <div class="box-hd">
                <h2 class="title">小米闪购</h2>
            </div>
            <div class="box-bd">
                <div class="flashsale-countdown">
                    <div class="round">10:00 场</div>
                    <img src="../../assets/img/flashsale.png" alt="">
                    <p class="desc">距离结束还有</p>
                    <div class="time-run">
                        <span>{{hour | formatTime}}</span>
                        <i>:</i>
                        <span>{{min | formatTime}}</span>
                        <i>:</i>
                        <span>{{sec | formatTime}}</span>
                    </div>
                </div>
                <div class="flashsale-list">
                    <div class="swiper-container flashList-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in flashList" :key="index">
                                <a href="javascript:;">
                                    <div class="thumb">
                                        <img :src="item.thumb_img" alt="">
                                    </div>
                                    <h3 class="title">{{item.title}}</h3>
                                    <p class="desc">{{item.desc}}</p>
                                    <p>
                                        <span>{{item.price}}</span>元 <del>{{item.org_price}}元</del>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-controls">
                            <div class="swiper-button-next flashListnext">
                                <i class="iconfont icon-go"></i>
                            </div>
                            <div class="swiper-button-prev flashListprev">
                                <i class="iconfont icon-back"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data(){
            return{
                flashList:[
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                    {
                        thumb_img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg?thumb=1&w=200&h=200",
                        title:"小米AI音箱",
                        desc:"听音乐、语音遥控家电",
                        price:"1699",
                        org_price:"2499"
                    },
                ],
                hour:0,
                min:45,
                sec:10,
                time:null
            }
        },
        computed:{
            timecountdown:function(){
                return false
            }
        },
        methods:{
            timerun(){
                this.time = setInterval(()=>{
                    this.sec -= 1
                    if(this.sec==0){
                        this.sec = 59;
                        this.min -= 1;
                        if(this.min==0){
                            this.min = 59
                            this.hour-=1;
                            if(this.hour == 0){
                                this.hour = 0;
                                this.min = 0;
                                this.sec = 0;
                                clearInterval(this.time);
                            }
                        }
                    }
                },1000)
            },
        },
        mounted(){
            new Swiper('.flashList-container', {
                slidesPerView: 4,
                spaceBetween: 14,
                slidesPerGroup: 3,
                speed:1000,
                autoplay:{
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            this.timerun();
        },
        filters:{
            formatTime(number){
                return number = number>9?number:"0"+number;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        height: 339px;
        width: 234px;
        border-top: 1px solid red;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    $mainColor:#ff6700;
    .home-flashsale {
        margin-top: 2px;
        .box-hd {
            height: 60px;
            line-height: 60px;
            .title {
                font-size: 25px;
                color: #333;
                font-weight: normal;
                text-align: left;
            }
        }
        .box-bd {
            height: 340px;
            .flashsale-countdown {
                width: 234px;
                height: 339px;
                margin-right: 14px;
                background-color: #f1eded;
                border-top: 1px solid #e53935;
                float: left;
                .round {
                    margin-top: 60px;
                    text-align: center;
                    color: #ef3a3b;
                    font-size: 20px;
                }
                img {
                    margin: 25px auto;
                    width: 34px;
                    height: 53px;
                }
                .desc {
                    padding: 10px 0;
                    text-align: center;
                    font-size: 16px;
                    color: #6f6d6d;
                }
                .time-run {
                    margin-top: 23px;
                    text-align: center;
                    span {
                        display: inline-block;
                        width: 46px;
                        height: 46px;
                        background-color: #605751;
                        color: #ffffff;
                        text-align: center;
                        line-height: 46px;
                        font-size: 20px;
                        vertical-align: middle;
                    }
                    i {
                        vertical-align: middle;
                        display: inline-block;
                        height: 46px;
                        line-height: 46px;
                        color: #605751;
                        text-align: center;
                        width: 15px;
                    }
                }
            }
            .flashsale-list {
                width: 978px;
                float: left;
                .swiper-controls{
                    .flashListnext{
                        right: 0;
                        i.icon-go{
                            color: $mainColor;
                        }
                        &::after{
                            content:"";
                        }
                    }
                    .flashListprev{
                        left: 0;
                        i.icon-back{
                            color: $mainColor;
                        }
                        &::after{
                            content:"";
                        }
                    }
                }
                .swiper-slide{
                    a {
                        padding-top: 39px;
                        box-sizing: border-box;
                        text-align: center;
                        .thumb {
                            margin-bottom: 6px;
                            img {
                                width: 160px;
                                height: 160px;
                            }
                        }
                        .title {
                            margin-top: 20px;
                            font-size: 14px;
                            color: #202020;
                            margin: 5px 0;
                            font-weight: normal;
                        }
                        .desc {
                            font-size: 14px;
                            color: #adadad;
                            margin-top: 5px;
                            margin-bottom: 20px;
                        }
                        p {
                            color: $mainColor;
                            font-size: 14px;
                            span {

                            }
                            del {
                                color: #adadad;
                            }
                        }
                    }
                    &:nth-child(5n+1){
                        border-top-color: #ffac13;
                    }
                    &:nth-child(5n+2){
                        border-top-color: #83c44e;
                    }
                    &:nth-child(5n+3){
                        border-top-color: #2196f3;
                    }
                    &:nth-child(5n+4){
                        border-top-color: #e53935;
                    }
                    &:nth-child(5n+5){
                        border-top-color: #00c0a5;
                    }
                }
            }
        }
    }
</style>