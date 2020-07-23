<template>
    <div>
        <div class="recommendPage container">
            <div class="recommend-header">
                <span class="title">为您推荐</span>
            </div>
            <div class="recommend-body">
                <ul class="clearfix">
                    <li v-for="(item,index) in recommendData" :key="index">
                        <a href="javascript:;">
                            <img :src="item.recommend_img" alt="">
                            <div class="recommend-name">
                                {{item.recommend_name}}
                            </div>
                            <div class="recommend-price">
                                {{item.recommend_price}}元
                            </div>
                            <div class="recommend-tips">
                                {{item.recommend_hotsale}}人好评
                            </div>
                        </a>
                        <div class="getCart">
                            <button class="" >加入购物车</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                recommendData:[
                    {
                        recommend_id:1,
                        recommend_img:"//i1.mifile.cn/a1/pms_1557977821.03156568!180x180.jpg",
                        recommend_name:"米家驱蚊器智能版",
                        recommend_price:"59",
                        recommend_hotsale:"2656"
                    },
                    {
                        recommend_id:2,
                        recommend_img:"//i1.mifile.cn/a1/pms_1555985714.86057204!180x180.png",
                        recommend_name:"米家直流变频落地扇1X",
                        recommend_price:"299",
                        recommend_hotsale:"5879"
                    },
                    {
                        recommend_id:3,
                        recommend_img:"//i1.mifile.cn/a1/pms_1496833357.9528722!180x180.jpg",
                        recommend_name:"手机USB micro 数据线",
                        recommend_price:"9.9",
                        recommend_hotsale:"2.1万"
                    },
                    {
                        recommend_id:4,
                        recommend_img:"//i1.mifile.cn/a1/pms_1585724406.64656082!180x180.jpg",
                        recommend_name:"Redmi Note 8 Pro 6GB+64GB 全网通版",
                        recommend_price:"1299",
                        recommend_hotsale:"1625"
                    },
                    {
                        recommend_id:5,
                        recommend_img:"//i1.mifile.cn/a1/pms_1567422055.88767967!180x180.jpg",
                        recommend_name:"Redmi Note 8 6GB+64GB",
                        recommend_price:"1099",
                        recommend_hotsale:"2656"
                    },
                    {
                        recommend_id:6,
                        recommend_img:"//i1.mifile.cn/a1/pms_1593593565.41015924!180x180.jpg",
                        recommend_name:"米家IH电饭煲 4L",
                        recommend_price:"499",
                        recommend_hotsale:"6756"
                    },
                    {
                        recommend_id:7,
                        recommend_img:"//i1.mifile.cn/a1/pms_1558861752.64448370!180x180.jpg",
                        recommend_name:"Redmi7A 全网通版 3GB",
                        recommend_price:"549",
                        recommend_hotsale:"778"
                    },
                    {
                        recommend_id:8,
                        recommend_img:"//i1.mifile.cn/a1/pms_1524223442.33418864!180x180.jpg",
                        recommend_name:"小米电视4A 50英寸影院版",
                        recommend_price:"1898",
                        recommend_hotsale:"2656"
                    },
                    {
                        recommend_id:9,
                        recommend_img:"//i1.mifile.cn/a1/pms_1559728396.2634058!180x180.jpg",
                        recommend_name:"米家电饭煲4L",
                        recommend_price:"299",
                        recommend_hotsale:"914"
                    },
                    {
                        recommend_id:10,
                        recommend_img:"//i1.mifile.cn/a1/pms_1509330056.27762473!180x180.jpg",
                        recommend_name:"8H多功能青春床垫X1",
                        recommend_price:"399",
                        recommend_hotsale:"1115"
                    },
                    {
                        recommend_id:11,
                        recommend_img:"//i1.mifile.cn/a1/pms_1560161251.21862332!180x180.jpg",
                        recommend_name:"米家互联网洗烘一体机 Pro 10kg",
                        recommend_price:"2999",
                        recommend_hotsale:"264"
                    },
                    {
                        recommend_id:12,
                        recommend_img:"//i1.mifile.cn/a1/pms_1545303051.38414485!180x180.jpg",
                        recommend_name:"小米米家照片打印机",
                        recommend_price:"499",
                        recommend_hotsale:"6647"
                    },
                    {
                        recommend_id:13,
                        recommend_img:"//i1.mifile.cn/a1/pms_1559616366.16874615!180x180.jpg",
                        recommend_name:"小米巨能写中性笔",
                        recommend_price:"9.99",
                        recommend_hotsale:"2068"
                    },
                    {
                        recommend_id:14,
                        recommend_img:"//i1.mifile.cn/a1/pms_1563253830.31218077!180x180.jpg",
                        recommend_name:"米家互联网燃气灶",
                        recommend_price:"799",
                        recommend_hotsale:"618"
                    },
                    {
                        recommend_id:15,
                        recommend_img:"//i1.mifile.cn/a1/pms_1513864376.45999722!180x180.jpg",
                        recommend_name:"知吾煮汤锅 米家定制",
                        recommend_price:"99",
                        recommend_hotsale:"7561"
                    },
                    {
                        recommend_id:16,
                        recommend_img:"//i1.mifile.cn/a1/pms_1553766071.54459183!180x180.jpg",
                        recommend_name:"米家电子温湿度计Pro",
                        recommend_price:"79",
                        recommend_hotsale:"2765"
                    },
                    {
                        recommend_id:17,
                        recommend_img:"//i1.mifile.cn/a1/pms_1482321199.12589253!180x180.jpg",
                        recommend_name:"小米活塞耳机 清新版",
                        recommend_price:"29",
                        recommend_hotsale:"16.1万"
                    },
                    {
                        recommend_id:18,
                        recommend_img:"//i1.mifile.cn/a1/pms_1559124291.51352878!180x180.jpg",
                        recommend_name:"小米米家照片打印机彩色相纸套装",
                        recommend_price:"59",
                        recommend_hotsale:"552"
                    },
                    {
                        recommend_id:19,
                        recommend_img:"//i1.mifile.cn/a1/pms_1573012329.17249804!180x180.jpg",
                        recommend_name:"小米电视音响",
                        recommend_price:"399",
                        recommend_hotsale:"1.1万"
                    },
                    {
                        recommend_id:20,
                        recommend_img:"//i1.mifile.cn/a1/pms_1556442959.03416899!180x180.jpg",
                        recommend_name:"智睿LED灯泡 米家定制",
                        recommend_price:"14.9",
                        recommend_hotsale:"1083"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .recommendPage{
        padding: 38px 0;
        .recommend-header{
            position: relative;
            height: 50px;
            border-top: 1px solid #e0e0e0;
            .title{
                width: 482px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                display: block;
                position: absolute;
                left: 50%;
                top: -20px;
                background-color: #f5f5f5;
                transform: translateX(-50%);
                font-size: 30px;
            }
        }
        .recommend-body{
            ul{
                margin-left: -14px;
                li{
                    overflow: hidden;
                    width: 234px;
                    height: 300px;
                    float: left;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    background-color: #fff;
                    position: relative;
                    a{
                        text-align: center;
                        img{
                            width: 140px;
                            height: 140px;
                            margin: 40px auto 20px;
                        }
                        .recommend-name{
                            font-size: 14px;
                            margin: 0 10px 10px;
                            color: #333;
                        }
                        .recommend-price{
                            font-size: 14px;
                            margin-bottom: 10px;
                            color: $mainColor;
                        }
                        .recommend-tips{
                            font-size: 14px;
                            color: #757575;
                        }
                    }
                    .getCart{
                        height: 30px;
                        position: absolute;
                        bottom: -30px;
                        left: 50%;
                        transform: translateX(-50%);
                        transition: bottom 0.2s ease;
                        button{
                            width: 120px;
                            height: 28px;
                            border: 1px solid $mainColor;
                            background-color: #fff;
                            color: $mainColor;
                            transition: all .1s linear;
                            cursor: pointer;
                            &:hover{
                                background-color: $mainColor;
                                color: white;
                            }
                        }
                    }
                    &:hover{
                        .getCart{
                            bottom: 18px;
                        }
                    }
                }
            }
        }
    }
</style>