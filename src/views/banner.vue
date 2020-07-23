<template>
    <div>
        <div class="header-banner">
            <div class="container">
                <div class="left">
                    <div class="navbox">
                        <ul>
                            <li @mouseenter="currentIndex=index" @mouseleave="currentIndex=null" v-for="(item,index) in category" :key="index">
                                <a href="#">
                                    {{item.title}}
                                    <em class="iconfont icon-go"></em>
                                </a>
                                <div class="children" v-show="currentIndex==index?true:false">
                                    <!-- item.children是数组 -->
                                    <!-- children 是数组里面的对象 -->
                                    <ul v-for="(children,cindex) in item.children" :key="cindex">
                                        <li v-for="(childrenItem,iindex) in children" :key="iindex">
                                            <a href="#" class="clearfix">
                                                <img class="thumb" :src="childrenItem[0]" alt="">
                                                <span class="text">{{childrenItem[1]}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="swiper-container headerbannerContainer">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="../assets/img/1.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/img/2.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/img/3.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/img/4.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/img/5.jpg" alt="">
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination point"></div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next bannerNext"></div>
                        <div class="swiper-button-prev bannerPrev"></div>
                    </div>
                </div>
                <div class="bottom clearfix">
                    <div class="span4">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/xiaomimiaosha.png" alt="">
                                    小米秒杀
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/qiyetuangou.png" alt="">
                                    企业团购
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/Fma.png" alt="">
                                    F码通道
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/mifenka.png" alt="">
                                    米粉卡
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/jiuhuanxin.png" alt="">
                                    以旧换新
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/icon/huafeichongzhi.png" alt="">
                                    话费充值
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="span16">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/d158f243b54d5ec68dd2ac72bd24555d.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/fbff319c7dd00e75c9758acf248d3784.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../assets/img/816a66edef10673b4768128b41804cae.jpg" alt="">
                                </a>
                            </li>
                        </ul>
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
                show:false,
                currentIndex:null,
                category:[
                    {
                        title:"手机电话卡",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"电视盒子",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"笔记本显示器平板",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"家电插线板",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"出行穿戴",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"智能路由器",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"电源配件",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"健康儿童",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"耳机音箱",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                    {
                        title:"生活箱包",
                        children:[
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                            {
                                item1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item3:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item4:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item5:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                                item6:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90","Redmi 9"],
                            },
                        ]
                    },
                        
                        
                        
                        
                        
                        
                        
                        
                        
                ]
            }
        },
        methods:{

        },
        mounted(){
            new Swiper('.headerbannerContainer', {
                slidesPerView: 1,
                spaceBetween: 30,
                effect:"fade",
                speed:500,
                loop: true,
                autoplay:{
                    disableOnInteraction:false,
                },
                pagination: {
                    el: '.point',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .container{
        width: 1226px;
        margin: 0 auto;
    }
    
    .swiper-pagination-bullet-active {
            background-color: #52B54B
    }
    .my-bullet{
        display: inline-block;
        width: 6px;
        height: 6px;
        border: 2px solid #969fa2;
        background: #fff;
        opacity: 1;
    }
    .my-bullet-active{
        background:#687678;
        opacity: 1;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

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
    .header-banner{
        margin-top: 0px;
        position: relative;
        background: white;
        .left{
            position: absolute;
            z-index: 99;
            width: 234px;
            height: 460px;
            padding: 20px 0;
            box-sizing: border-box;
            background-color: rgba(105,101,101,.6);
            .navbox{
                >ul{
                    >li{
                        padding: 0 22px 0 30px;
                        box-sizing: border-box;
                        line-height: 42px;
                        height: 42px;
                        a{
                            display: block;
                            width: 100%;
                            font-size: 14px;
                            color: white;
                            em{
                                font-size: 14px;
                                float: right;
                            }
                        }
                        &:hover{
                            background-color: $mainColor;
                        }
                        .children{
                            border: 1px solid #e0e0e0;
                            position: absolute;
                            top: 0;
                            left: 234px;
                            width: 992px;
                            height: 458px;
                            background-color: #fff;
                            ul{
                                width: 25%;
                                float: left;
                                li{
                                    padding: 18px 20px;
                                    a{
                                        img.thumb{
                                            float: left;
                                            width: 40px;
                                            height: 40px;
                                            margin-right: 10px;
                                        }
                                        span.text{
                                            float: left;
                                            display: block;
                                            height: 40px;
                                            color: #333;
                                            &:hover{
                                                color: $mainColor;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .right{
            .headerbannerContainer{
                img{
                    height: 460px;
                }
                .point{
                    bottom: 26px;
                    right: 34px;
                    left: auto;
                    width: 400px;
                    height: 18px;
                    text-align: right;
                }
                .bannerNext{
                    right: 0;
                    width: 41px;
                    height: 69px;
                    background: url("../assets/img/icon-slides.png") no-repeat -124px 0;
                    &::after{
                        content: "";
                    }
                    &:hover{
                        background: url("../assets/img/icon-slides.png") no-repeat -42px 0;
                    }
                }
                .bannerPrev{
                    left: 234px;
                    width: 41px;
                    height: 69px;
                    background: url("../assets/img/icon-slides.png") no-repeat -83px 0;
                    &::after{
                        content: "";
                    }
                    &:hover{
                        background: url("../assets/img/icon-slides.png") no-repeat 0 0;
                    }
                }
                    
            }
        }
        .bottom{
            margin-top: 14px;
            padding-bottom: 26px;
            .span4{
                float: left;
                width: 234px;
                height: 170px;
                background-color: #5f5750;
                ul{
                    padding: 3px;
                    li{
                        width: 76px;
                        height: 84px;
                        box-sizing: border-box;
                        padding: 0 3px;
                        float: left;
                        position: relative;
                        &::before{
                            content:"";
                            display: block;
                            position: absolute;
                            width: 64px;
                            height: 1px;
                            background: #665e57;
                            top: 0;
                            left: 6px;
                        }
                        a{
                            color: #fff;
                            padding-top: 18px;
                            display: block;
                            width: 75px;
                            text-align: center;
                            opacity: .7;
                            transition: opacity .2s;
                            img{
                                width: 24px;
                                height: 24px;
                                margin: 0 auto 4px;
                            }
                            &:hover{
                                opacity: 1;
                            }
                        }
                        &::after{
                            content:"";
                            display: block;
                            position: absolute;
                            width: 1px;
                            background: #665e57;
                            height: 70px;
                            left: 0px;
                            top: 7px;
                        }
                    }
                }
            }
            .span16{
                float: left;
                ul{
                    li{
                        float: left;
                        margin-left: 14px;
                        a{
                            img{
                                width: 316px;
                                height: 170px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>