<template>
    <div>
        <div class="home-list">
            <div class="container">
                <div class="header">
                    <div class="title">{{data.floor_name}}</div>
                    <div class="more">
                        <!-- 查看全部 -->
                        <a href="javascript:void(0);" v-if="type==0">
                            查看全部
                            <span class="iconfont icon-gengduo"></span>
                        </a>
                        <!-- 分类 -->
                        <ul class="tab-list" v-if="type==1">
                            <li v-for="(item,index) in data.tab_content" :key="index" @mouseover="currentIndex = index" :class="{'on':currentIndex==index}">
                                {{item.tab_name}}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left-adv">
                        <!-- type==0 长条 type==1 分两格-->
                        <ul v-if="type==0">
                            <li class="brick-item brick-item-l" v-for="(item,index) in data.left_ad.items" :key="index">
                                <img :src="item.img_url" alt="">
                            </li>
                        </ul>
                        <ul v-if="type==1" >
                            <li class="brick-item brick-item-m" v-for="(item,index) in data.left_ad.items" :key="index" >
                                <img :src="item.img_url" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="product_list">
                        <ul v-if="type==0">
                            <!-- view_type=="list_eight_product_tab"时，七大格,最后一格分两小格 其中一格为 浏览更多 -->
                            <!-- view_type=="list_eight_product"时,八大格 -->
                            <li class="brick-item" v-for="(item,index) in data.product_list" :key="index" @click="godetail(item.product_id)">
                                <a href="javascript:void(0);">
                                    <div class="img">
                                        <img :src="item.img_url" alt="">
                                    </div>
                                    <h3 class="title txt-cut">{{item.product_name}}</h3>
                                    <p class="desc">{{item.product_brief}}</p>
                                    <p class="price">
                                        <span class="num">{{item.product_price}}</span>元<span v-if="item.show_price_qi">起</span>
                                        <del v-if="item.product_price==item.product_org_price">
                                            <span class="num">{{item.product_org_price}}</span>元
                                        </del>
                                    </p>
                                </a>
                            </li>
                        </ul>
                        <div v-if="type==1" >
                            <ul  v-for="(items,i) in data.tab_content" :key="i" v-show="i==currentIndex" >
                                <li class="brick-item" v-for="(item,index) in items.product_list.slice(0,items.product_list.length-1)" :key="index" @click="godetail(item.product_id)">
                                    <a href="javascript:void(0);">
                                        <div class="img">
                                            <img :src="item.img_url" alt="">
                                        </div>
                                        <h3 class="title txt-cut">{{item.product_name}}</h3>
                                        <p class="desc">{{item.product_brief}}</p>
                                        <p class="price">
                                            <span class="num">{{item.product_price}}</span>元<span v-if="item.show_price_qi">起</span>
                                            <del v-if="item.product_price==item.product_org_price">
                                                <span class="num">{{item.product_org_price}}</span>元
                                            </del>
                                        </p>
                                    </a>
                                </li>
                                <div class="minika">
                                    <ul>
                                        <li class="brick-item brick-item-s" @click="godetail(items.product_list[items.product_list.length-1].product_id)">
                                            <a href="javascript:void(0);">
                                                <div class="left-item">
                                                    <h3 class="title txt-cut">{{items.product_list[items.product_list.length-1].product_name}}</h3>
                                                    <p class="price">
                                                        <span class="num">{{items.product_list[items.product_list.length-1].product_price}}</span>元<span v-if="items.product_list[items.product_list.length-1].show_price_qi">起</span>
                                                    </p>
                                                </div>
                                                <img :src="items.product_list[items.product_list.length-1].img_url" alt="">
                                            </a>
                                        </li>
                                        <li class="brick-item brick-item-s">
                                            <a href="javascript:void(0);">
                                                <div class="more">
                                                    {{items.more_text}}<br>
                                                    <small>{{items.tab_name}}</small>
                                                </div>
                                                <i class="iconfont icon-gengduo1"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
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
                currentIndex:0
            }
        },
        props:["data","type"],
        methods:{
            godetail(goods_id){
                this.$router.push({path:'/detail',query:{goods_id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    // 卡片放大特效
    .brick-item{
        transition: all .2s linear;
        &:hover{
            box-shadow: 0 15px 30px rgba(0,0,0,.1);
            transform: translate3d(0,-2px,0);
        }
    }
    .home-list{
        .header{
            height: 58px;
            .title{
                float: left;
                font-size: 20px;
                color: #333333;
                line-height: 58px;
            }
            .more{
                float: right;
                a{
                    line-height: 58px;
                    color: #333;
                    font-size: 14px;
                    span{
                        vertical-align: middle;
                        font-size: 22px;
                        color: #b0b0b0;
                    }
                }
                ul.tab-list{
                    height: 40px;
                    padding-top: 20px;
                    box-sizing: border-box;
                    li{
                        font-size: 16px;
                        float: left;
                        color: #333;
                        margin-left: 30px;
                        transition: border .3s linear;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                        &:hover{
                            color: $mainColor;
                            border-bottom: 2px solid $mainColor;
                        }
                    }
                    .on{
                        color: $mainColor;
                        border-bottom: 2px solid $mainColor;
                    }
                }
            }
        }
        .content{
            .left-adv{
                float: left;
                ul{
                    // 长条
                    li.brick-item-l{
                        width: 234px;
                        height: 614px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    // 短条
                    li.brick-item-m{
                        width: 234px;
                        height: 300px;
                        margin-bottom: 14px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .product_list{
                width: 992px;
                float: left;
                ul{
                    >li{
                        float: left;
                        width: 234px;
                        height: 300px;
                        margin-left: 14px;
                        background-color: #fff;
                        margin-bottom: 14px;
                        text-align: center;
                        padding: 20px 0;
                        box-sizing: border-box;
                        >a{
                            display: block;
                            width: 160px;
                            height: 160px;
                            margin: 0 auto;
                            .img{
                                width: 160px;
                                height: 160px;
                                display: flex;
                                align-items: center;
                                img{

                                }
                            }
                            .title{
                                font-size: 14px;
                                color: #333;
                                margin-bottom: 5px;
                                font-weight: normal;
                            }
                            .desc{
                                font-size: 12px;
                                color: #b0b0b0;
                                margin-bottom: 10px;
                            }
                            .price{
                                font-size: 12px;
                                color: $mainColor;
                                
                                .num{
                                    
                                }
                                span{

                                }
                                del{
                                    margin-left: 5px;
                                    color: #b0b0b0;
                                    .org_num{

                                    }
                                }
                            }
                        }
                    }
                    .minika{
                        width: 248px;
                        height: 300px;
                        float: left;

                        ul{
                            li{
                                width: 234px;
                                background-color: #fff;
                                height: 143px;
                                margin-bottom: 14px;
                                margin-left: 14px;
                                padding-top: 50px;
                                box-sizing: border-box;
                                a{
                                    display: flex;
                                    justify-content: center;
                                    .left-item{
                                        width: 98px;
                                        float: left;
                                        .title{
                                            height: 42px;
                                            color: #333;
                                            text-align: left;
                                        }
                                        .price{
                                            color: $mainColor;
                                            height: 20px;
                                            text-align: left;
                                        }
                                    }
                                    img{
                                        float: left;
                                        width: 80px;
                                        height: 80px;
                                    }
                                    .more{
                                        display: inline-block;
                                        width: 98px;
                                        height: 45px;
                                        color: #333333;
                                        font-size: 20px;
                                        text-align: left;
                                        small{
                                            font-size: 12px;
                                            
                                        }
                                    }
                                    i.iconfont{
                                        color: $mainColor;
                                        font-size: 48px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>