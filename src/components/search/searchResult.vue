<template>
    <div>
        <div class="breadcrumb">
            <div class="container">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }"><a href="javascript:;">首页</a></el-breadcrumb-item>
                    <el-breadcrumb-item>全部结果</el-breadcrumb-item>
                    <el-breadcrumb-item>全部商品</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="search-filter">
            <div class="filter-wrap">
                <ul class="item">
                    <span class="label-category">分类:</span>
                    <li class="active">
                        <a href="javascript:;">
                            全部
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            手机
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            电视
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            笔记本
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            盒子
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            路由器
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            平板
                        </a>
                    </li>
                    <span class="label-more">
                        更多<i class="iconfont icon-down2"></i>
                    </span>
                </ul>
            </div>
        </div>
        <div class="search-resutlt">
            <div class="container">
                <div class="order-list-box clearfix">
                    <ul class="orderlist">
                        <li class="active">
                            <a href="javascript:;">
                                综合
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                新品
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                销量
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                价格&nbsp;<span class="iconfont icon-jiantouxiangxia"></span><span class="iconfont icon-jiantouxiangshang"></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="typelist">
                        <li>
                            <a href="javascript:;">
                                <input type="checkBox" value="">促销
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <input type="checkBox" value="">分期
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <input type="checkBox" value="">仅看有货
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="goods-list-box">
                    <ul class="clearfix">
                        <li v-for="(item,index) in resultdata" :key="index" @click="$router.push('/detail')">
                            <a href="javascript:;">
                                <img :src="item.img" alt="">
                            </a>
                            <h3 class="title">{{item.title}}</h3>
                            <p class="price">{{item.price}}元</p>
                            <div class="thumbs"></div>
                            <div class="flags">
                                <img v-for="(flag,index) in item.flags" :key="index" :src="flag" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-favourite">
            <div class="container">

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
                resultdata:[
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                    {
                        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817698.94952676.jpg',
                        title:"Redmi 9 4GB+128GB 墨黛青",
                        price:999,
                        flags:[
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png",
                            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6617316b7754bbddc68fc498c31f6aa7.png",
                            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png"
                        ]
                    },
                ]
            }
        },
        created(){
            this.$store.state.showH = true;
            this.$store.state.showF = true;
        }
    }
</script>

<style lang="scss" scoped>
$mainColor:#ff6700;
    .breadcrumb {
        height: 40px;
        line-height: 40px;
    }
    .search-filter {
        background-color: #fff;
        height: 84px;
        padding: 18px 0;
        box-sizing: border-box;
        .filter-wrap {
            margin: 0 auto;
            width: 1226px;
            .item {
                padding: 0 60px 0 124px;
                position: relative;
                .label-category {
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #b0b0b0;
                    height: 20px;
                    line-height: 20px;
                    padding: 14px 0;
                    font-size: 14px;
                }
                .active {
                    a {
                        color: $mainColor;

                    }
                }
                li {
                    float: left;
                    width: 148px;
                    height: 20px;
                    padding: 14px 0;
                    a {
                        font-size: 14px;
                    }
                }
                .label-more {
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: #757575;
                    height: 20px;
                    line-height: 20px;
                    padding: 14px 0;
                    font-size: 14px;
                    cursor: pointer;
                    .icon-down2 {
                        font-size: 14px;
                        color: #cccccc;
                    }
                }
            }
        }
    }
    .search-resutlt {
        padding: 20px 0 100px 0;
        .container {
            .order-list-box {
                height: 30px;
                margin: 20px 0;
                ul.orderlist {
                    float: left;
                    height: 30px;
                    li {
                        padding: 0 20px;
                        height: 20px;
                        float: left;
                        border-right: 1px solid #e0e0e0;
                        a {
                            color: #424242;
                            font-size: 14px;
                            .iconfont {
                            }
                            .icon-jiantouxiangxia {
                                font-size: 14px;
                            }
                            .icon-jiantouxiangshang {
                                font-size: 14px;
                            }
                        }
                        &:last-child{
                            border-right: none;
                        }
                    }
                    .active{
                        a{
                            color: $mainColor;
                        }
                    }
                }
                ul.typelist {
                    float: right;
                    li {
                        float: left;
                        
                        a {
                            font-size: 14px;
                            color: #424242;
                            margin-right: 30px;
                            vertical-align: middle;
                            input {
                                vertical-align: middle;
                                margin-right: 5px;
                                border-radius: 0;
                                outline: none;
                                border: 1px solid #e0e0e0;
                            }

                        }
                        &:last-child{
                            a{
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
            .goods-list-box {
                ul {
                    margin-right: -14px;
                    li {
                        padding-top: 47px;
                        box-sizing: border-box;
                        float: left;
                        margin-right: 14px;
                        margin-bottom: 14px;
                        width: 296px;
                        height: 430px;
                        background-color: #fff;
                        text-align: center;
                        transition: box-shadow .5s linear;
                        a {
                            width: 100%;
                            img {
                                width: 200px;
                                display: block;
                                margin: 0 auto;
                                margin-bottom: 16px;
                                height: 200px;
                            }
                        }
                        .title {
                            font-weight: normal;
                            height: 230px;
                            height: 21px;
                            margin: 0 auto;
                            font-size: 14px;
                        }
                        .price {
                            font-size: 14px;
                            color: $mainColor;
                            margin-bottom: 15px;
                        }
                        .thumbs{
                            height: 36px;
                        }
                        .flags {
                            margin-top: 20px;
                            text-align: center;
                            img {
                                display: inline-block;
                                margin-right: 5px;
                                width: auto;
                                height: 18px;
                            }
                        }
                        &:hover{
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                        }
                    }
                }
            }
        }
    }
    .search-favourite {

    }
</style>