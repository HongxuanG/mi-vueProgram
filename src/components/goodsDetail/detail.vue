<template>
    <div>
        <div class="detailPage">
            <div class="pageHeader" ref="navbar">
                <div class="container" >
                    <div class="left">
                        <h2>{{product.product_name}}</h2>
                        <div class="con">|
                            <!-- <span>小米10</span> -->
                        </div>
                    </div>
                    <div class="right">
                        <a href="#">概述</a>
                        <span>|</span>
                        <a href="#">参数</a>
                        <span>|</span>
                        <a href="#">F码通道</a>
                        <span>|</span>
                        <a href="#">咨询客服</a>
                        <span>|</span>
                        <a href="#">用户评价</a>
                        <span>|</span>
                    </div>
                </div>
            </div>
            <div :class="['pageHeader-hide',bool?'show':'']" ref="navbarhide">
                <div class="container" >
                    <div class="left">
                        <h2>{{product.product_name}}</h2>
                        <div class="con">|
                            <!-- <span>小米10</span> -->
                        </div>
                    </div>
                    <div class="right">
                        <a href="#">概述</a>
                        <span>|</span>
                        <a href="#">参数</a>
                        <span>|</span>
                        <a href="#">F码通道</a>
                        <span>|</span>
                        <a href="#">咨询客服</a>
                        <span>|</span>
                        <a href="#">用户评价</a>
                        <span>|</span>
                    </div>
                </div>
            </div>
            <div class="mainPage">
                <div class="loginAuth" v-if="$store.getters.isNaName && closeTips">
                    <div class="container">
                        为方便您购买，请提前登录
                        <a href="javascript:;" @click="$router.push('/login/accountLogin')">立即登录</a>
                        <span class="iconfont icon-guanbi11" @click="closeTips=false"></span>
                    </div>
                </div>
                <div class="product_box">
                    <div class="container clearfix">
                        <!-- 左侧轮播图 -->
                        <div class="img_left">
                            <!-- Swiper -->
                            <div class="swiper-container detailContainer">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(item,index) in product.product_imgs" :key="index">
                                        <img :src="item" alt="">
                                    </div>
                                </div>
                                <!-- Add Pagination -->
                                <div class="swiper-pagination"></div>
                                <!-- Add Arrows -->
                                <div class="swiper-button-next bannerNext"></div>
                                <div class="swiper-button-prev bannerPrev"></div>
                            </div>
                        </div>
                        <!-- 右侧商品详细信息 -->
                        <div class="product_con">
                            <h2>{{product.product_name}}</h2>
                            <p class="sale-desc">
                                <font color="#ff4a00">「买赠冰封散热背夹」</font>
                                {{product.sale_desc}}
                            </p>
                            <p>小米自营</p>
                            <div class="price-info">
                                <span>{{product.product_price}}</span>元
                            </div>
                            <div class="line"></div>
                            <div class="active-box">
                                <div class="flow-box">
                                    <span class="flow-tag">赠完即止</span>
                                    <span class="flow-name">赠冰封散热背夹</span>
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="address-box">
                                <i class="iconfont icon-didian"></i>
                                <div class="product_address">
                                    <p class="my_address">
                                        <span>{{address.province}}</span>
                                        <span>{{address.city}}</span>
                                        <span>{{address.district}}</span>
                                        <span>{{address.street}}</span>
                                    </p>
                                    <!-- 打开修改界面 -->
                                    <a href="javascript:;">仓库地址</a>
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <span>有现货</span>
                                    </div>
                                </div>
                            </div>
                            <div class="buy_option">
                                <div class="buy_box_child">
                                    <div class="title">选择版本</div>
                                    <ul class="clearfix">
                                        <li v-for="(item,index) in product.buy_option.option1" :class="index==select[0]?'active':''" :key="index" @click="select.splice(0,1,index)">
                                            <a href="javascript:;">{{item}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="buy_box_child">
                                    <div class="title">选择颜色</div>
                                    <ul class="clearfix">
                                        <li v-for="(item,index) in product.buy_option.option2" :class="index==select[1]?'active':''" :key="index" @click="select.splice(1,1,index)">
                                            <a href="javascript:;">{{item}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="selected-list clearfix">
                                <div class="result clearfix">
                                    <div class="name">{{select_totalName}}</div>
                                    <span>{{product.product_price}}元</span>
                                </div>
                                <div class="total_price clearfix">总计：{{product.product_price}}元</div>
                            </div>
                            <div class="btn-box">
                                <button class="addCart" @click="addCart">加入购物车</button>
                                <button class="like" @click="onLike">
                                    <span v-show="!isLike" class="iconfont icon-xihuan default"></span>
                                    <span v-show="isLike" class="iconfont icon-xihuan1 red"></span>
                                    喜欢
                                </button>
                            </div>
                            <div class="after-sale">
                                <span>
                                    <i class="iconfont icon-dagou"></i>
                                    <em>小米自营</em>
                                </span>
                                <span>
                                    <i class="iconfont icon-dagou"></i>
                                    <em>小米发货</em>
                                </span>
                                <span>
                                    <i class="iconfont icon-dagou"></i>
                                    <em>7天无理由退货</em>
                                </span>
                                <span>
                                    <i class="iconfont icon-dagou"></i>
                                    <em>运费说明</em>
                                </span>
                                <span>
                                    <i class="iconfont icon-dagou"></i>
                                    <em>企业信息</em>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部 -->
            <div class="product-detail">
                <div class="section">
                    <div class="title container">价格说明</div>
                    <img class="img-box" src="../../assets/img/a482afa34053b1b32ece1023475af7fb.jpeg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import Vue from "vue";
    import Message from "element-ui";
    Vue.use(Message)
    export default {
        data(){
            return{
                // 商品信息
                product:{
                    product_id:1,
                    product_name:"小米10 Pro",
                    product_image:require("../../assets/img/pms_1581493329.10251213.jpg"),
                    product_imgs:[
                        require("../../assets/img/pms_1581493329.10251213.jpg"),
                        require("../../assets/img/pms_1581493337.56513921.jpg"),
                        require("../../assets/img/pms_1581493347.45562393.jpg"),
                        require("../../assets/img/pms_1581493356.23386064.jpg"),
                        require("../../assets/img/pms_1581493365.27036533.jpg"),
                    ],
                    sale_desc:"向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC",
                    buy_option:{
                        option1:["8GB+256GB","12GB+256GB","12GB+512GB"],
                        option2:["星空蓝","珍珠白"],
                    },
                    product_price:"4999",
                    buy_num:1,
                },
                // 收货地址
                address:{
                    province:"广东",
                    city:"佛山市",
                    district:"南海区",
                    street:"桂城街道",
                },
                userInfo:null,
                // 选中
                select:[0,0],
                select_totalName:null,
                closeTips:true,
                isLike:false,
                bool:false
            }
        },
        methods:{
            // 添加商品到购物车
            addCart(){
                if(this.$store.getters.isNaName){
                    this.$router.push("/login/accountLogin")
                }else{
                    // 因为是引用类型，所以需要转换一下 JSON.parse(JSON.stringify(this.product)) 
                    // 对于一个对象或者数组的时候他们等于是引用的地址是相同的所有就跟着变了
                    this.product.item_id = String(Date.now()).slice(-3)
                    this.$store.commit("shopCart/addCart",{product:JSON.parse(JSON.stringify(this.product)),totalName:this.select_totalName});
                    this.$message({
                        message: '加入购物车成功，请前往购物车查看',
                        type: 'success'
                    });
                }
            },
            scroll(){
                if(window.pageYOffset !== null){
                    return {
                        top: window.pageYOffset,
                        left: window.pageXOffset
                    }
                }else if(document.compatMode === "CSS1Compat"){ // W3C
                    return {
                        top: document.documentElement.scrollTop,
                        left: document.documentElement.scrollLeft
                    }
                }else{
                    return {
                        top: document.body.scrollTop,
                        left: document.body.scrollLeft
                    }
                }  
            },
            __init(){
                console.log(document.body);
                console.log(this.$refs.navbar.offsetTop)
                document.body.onscroll=()=>{
                    if(this.scroll().top >= 203){
                        console.log(1)
                        this.bool = true
                    }else{
                        this.bool = false
                    }
                }
                // this.$refs.navbar
            },
            // 点击喜欢按钮后
            onLike(){
                if(this.userInfo!=null){
                    // 如果此状态为喜欢 取消喜欢状态
                    if(this.isLike){
                        this.$axios.post("/delLike",{
                            account:this.$store.state.account,
                            totalName:this.select_totalName
                        }).then((res)=>{
                            this.userInfo = res.data.doc;
                            this.isLike = false;
                            console.log(this.userInfo);
                        }).catch((err)=>{
                            throw Error(err);
                        })
                    }else{
                        // 如果此状态为不喜欢 添加喜欢状态
                        this.$axios.post("/addLike",{
                            account:this.$store.state.account,
                            likeItem:this.product,
                            totalName:this.select_totalName
                        }).then((res)=>{
                            this.userInfo = res.data.doc;
                            this.isLike = true;
                            console.log(this.userInfo);
                        }).catch((err)=>{
                            throw Error(err);
                        })
                    }
                    // 切换 喜欢状态
                    console.log(this.isLike);
                }else{
                    this.$message({
                        message: '请先登录!',
                        type: 'warning'
                    });
                }
            }   
        },
        created(){
            this.$store.state.showH = true;
            this.$store.state.showF = true;
            
            this.$axios.get("/getGoods",{
                params:{
                    goods_id:this.$route.query.goods_id,
                    account:this.$store.state.account
                }
            }).then((res)=>{
                console.log(res);
                this.userInfo = res.data.userInfo; //含用户id，账号密码，likeList 不安全
                // 如果返回有数据
                if(res.data.result){
                    this.product = res.data.result;
                    // 初始化 select_totalName值
                    this.select_totalName = `${this.product.product_name} ${this.product.buy_option.option1[this.select[0]]} ${this.product.buy_option.option2[this.select[1]]}`;
                    // 如果用户登录了
                    if(res.data.userInfo){
                        console.log(this.select_totalName);
                        this.isLike = res.data.userInfo.likeList.some(item=>{
                            return item.totalName == this.select_totalName
                        })
                    }
                }
                this.select_totalName = `${this.product.product_name} ${this.product.buy_option.option1[this.select[0]]} ${this.product.buy_option.option2[this.select[1]]}`;
            }).catch((err)=>{
                console.log(err);
            })
            
        },
        mounted(){
            this.__init();
            new Swiper('.detailContainer', {
                autoplay:true,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        beforeUpdate(){
            this.select_totalName = `${this.product.product_name} ${this.product.buy_option.option1[this.select[0]]} ${this.product.buy_option.option2[this.select[1]]}`;
            if(this.userInfo){
                console.log(this.userInfo);
                this.isLike = this.userInfo.likeList.some(item=>{
                    return item.totalName == this.select_totalName
                })
                console.log(this.select_totalName )
                console.log(this.isLike);
            }
        }
    }
</script>

<style lang="scss">
    $mainColor:#ff6700;
    .detailContainer {
        width: 100%;
        height: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
        }
        .swiper-pagination-bullet {
            width: 50px;
            height: 3px;
            border-radius: 0;
            text-align: center;
            opacity: 1;
            background: #d6d6d6;
        }
        .swiper-pagination-bullet-active {
            background: #a3a3a3;
        }
        .bannerNext{
            width: 41px;
            height: 69px;
            background: url("../../assets/img/icon-slides.png") no-repeat -124px 0;
            &::after{
                content: "";
            }
            &:hover{
                background: url("../../assets/img/icon-slides.png") no-repeat -42px 0;
            }
        }
        .bannerPrev{
            width: 41px;
            height: 69px;
            background: url("../../assets/img/icon-slides.png") no-repeat -83px 0;
            &::after{
                content: "";
            }
            &:hover{
                background: url("../../assets/img/icon-slides.png") no-repeat 0 0;
            }
        }
    }
    .detailPage{
        background-color: #fff;
        .pageHeader{
            height: 63px;
            box-shadow: 0 5px 5px rgba(0,0,0,.07);
            border-top: 1px solid #e0e0e0;
            box-sizing: border-box;
            line-height: 63px;
            position: relative;
            z-index: 100;
            .left{
                float: left;
                h2{
                    float: left;
                    font-size: 18px;
                    font-weight: normal;
                    margin-right: 10px;
                }
                .con{
                    float: left;
                    font-size: 12px;
                    span{
                        cursor: pointer;
                        margin-left: 10px;
                        color: #616161;
                        &:hover{
                            color: $mainColor;
                        }
                    }
                }
            }
            .right{
                float: right;
                height: 62px;

                a{
                    font-size: 14px;
                    color: #616161;
                    &:hover{
                        color: $mainColor;
                    }
                }
                span{
                    margin: 0 10px;
                    color: #e7e1e0;
                    &:last-child{
                        display: none;
                    }
                }
            }
        }
        .pageHeader-hide{
            width: 100%;
            height: 63px;
            box-shadow: 0 5px 5px rgba(0,0,0,.07);
            border-top: 1px solid #e0e0e0;
            box-sizing: border-box;
            line-height: 63px;
            position: fixed;
            transition: top .2s linear;
            top: -63px;
            background-color: #fff;
            z-index: 100;
            .left{
                float: left;
                h2{
                    float: left;
                    font-size: 18px;
                    font-weight: normal;
                    margin-right: 10px;
                }
                .con{
                    float: left;
                    font-size: 12px;
                    span{
                        cursor: pointer;
                        margin-left: 10px;
                        color: #616161;
                        &:hover{
                            color: $mainColor;
                        }
                    }
                }
            }
            .right{
                float: right;
                height: 62px;

                a{
                    font-size: 14px;
                    color: #616161;
                    &:hover{
                        color: $mainColor;
                    }
                }
                span{
                    margin: 0 10px;
                    color: #e7e1e0;
                    &:last-child{
                        display: none;
                    }
                }
            }
            
        }
        .show{
            top:0;
        }
        .mainPage{
            .loginAuth{
                background-color: #f7f7f7;
                height: 49px;
                line-height: 49px;
                font-size: 14px;
                color: #333333;
                .container{
                    text-align: center;
                    a{
                        margin-left: 30px;
                        color: $mainColor;
                    }
                    span{
                        cursor: pointer;
                        margin-left: 20px;
                        font-size: 14px;
                        color: #b6b5b5;
                    }
                }
            }
            .product_box{
                padding-top: 32px;
                padding: 10px;
                .img_left{
                    float: left;
                    width: 606px;
                    img{
                        width: 560px;
                        height: 560px;
                    }
                }
                .product_con{
                    float: left;
                    margin-left: 20px;
                    width: 600px;
                    h2{
                        font-size: 24px;
                        color: #333;
                        font-weight: normal;
                    }
                    p{
                        margin: 10px 0;
                        color: $mainColor;
                        font-size: 14px;
                    }
                    p.sale-desc{
                        margin-top: 10px;
                        color: #b0b0b0;
                        line-height: 20px;
                    }
                    .price-info{
                        padding: 10px 0;
                        color: $mainColor;   
                        font-size: 16px;
                    }
                    .line{
                        width: 100%;
                        height: 1px;
                        background-color: #e0e0e0;
                        margin-top: 10px;
                    }
                    .active-box{
                        .flow-box{
                            padding: 10px 0 0;
                            .flow-tag{
                                display: inline-block;
                                text-align: center;
                                line-height: 25px;
                                width: 80px;
                                height: 25px;
                                background-color: $mainColor;
                                color: #fff;
                            }
                            .flow-name{
                                color: #333;
                                margin-left: 5px;
                            }
                        }
                    }
                    .address-box{
                        position: relative;
                        padding: 30px 50px 30px 50px;
                        border: 1px solid #e0e0e0;
                        background-color: #fafafa;
                        color: #333;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        i{
                            font-size: 16px;
                            position: absolute;
                            left: 20px ;
                            top: 28px;
                        }
                        .product_address{
                            .my_address{
                                margin: 0;
                                display: inline-block;
                                span{
                                    color: #333;
                                    margin-right: 20px;
                                }
                            }
                            a{
                                color: $mainColor;
                            }
                        }
                        .info{
                            .desc{
                                span{
                                    color: $mainColor;
                                }
                            }
                        }
                    }
                    .buy_option{
                        .buy_box_child{
                            margin-bottom: 25px;
                            .title{
                                font-size: 18px;
                                color: #333;
                            }
                            ul{
                                li{
                                    float: left;
                                    width: calc(50% - 6px);
                                    box-sizing: border-box;
                                    margin-top: 10px;
                                    margin-right: 12px;
                                    height: 42px;
                                    border: 1px solid #e0e0e0;
                                    background-color: #fff;
                                    line-height: 42px;
                                    text-align: center; 
                                    a{
                                        display: inline-block;
                                        width: 100%;
                                        height: 100%;
                                        color: #757575;
                                    }
                                    &:nth-child(2n){
                                        margin-right: 0;
                                    }
                                    &.active{
                                        border: 1px solid $mainColor;
                                        a{
                                            color: $mainColor;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .selected-list{
                        width: 100%;
                        background-color: #f9f9fa;
                        padding: 35px 29px 36px 28px;
                        box-sizing: border-box;
                        .result{
                            font-size: 12px;
                            color: #616161;
                            .name{
                                float: left;
                            }
                            span{
                                float: right;
                            }
                        }
                        .total_price{
                            margin-top: 34px;
                            font-size: 20px;
                            color: $mainColor;
                            float: left;
                        }
                    }
                    .btn-box{
                        margin-top: 30px;
                        .addCart{
                            vertical-align: middle;
                            width: 300px;
                            height: 54px;
                            background-color: $mainColor;
                            color: #fff;
                            font-size: 16px;
                            margin-right: 10px;
                            border: 0;
                            cursor: pointer;
                            outline: none;
                        }
                        .like{
                            cursor: pointer;
                            vertical-align: middle;
                            outline: none;
                            border: 0;
                            height: 54px;
                            width: 142px;
                            color: #fff;
                            background-color: #b0b0b0;
                            font-size: 16px;
                            transition: all .3s linear;
                            span.iconfont{
                                margin-right: 4px;
                                font-size: 16px;
                            }
                            span.red{
                                color: red;
                            }
                            &:hover{
                                background-color: #757575;
                                
                            }
                        }
                    }
                    .after-sale{
                        margin-top: 26px;
                        span{
                            display: inline-block;
                            margin-bottom: 16px;
                            margin-right: 10px;
                            font-size: 14px;
                            color: #bdbdbd;
                            i{
                                margin-right: 2px;
                            }
                            em{

                            }
                        }
                    }
                }
            }
            
        }
        .product-detail{
            background-color: #f7f7f7;
            .section{
                .title{
                    height: 77px;
                    line-height: 77px;
                    font-size: 20px;
                }
                .img-box{
                    margin: 0 auto;
                    height: 189px;
                    width: auto;
                    margin-bottom: 50px;
                }
            }
        }
    }
    
</style>