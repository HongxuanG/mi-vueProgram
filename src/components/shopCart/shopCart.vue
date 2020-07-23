<template>
    <div>
        <littleHeader title="我的购物车" showTips></littleHeader>
        <div v-if="goodsList.length!=0" class="cartlist container">
            <div class="list">
                <div class="headerRow clearfix">
                    <div class="col check">
                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    </div>
                    <div class="col goodsImg">
                        商品图片
                    </div>
                    <div class="col goodsName">
                        商品名称
                    </div>
                    <div class="col price">
                        单价
                    </div>
                    <div class="col buy_num">
                        数量
                    </div>
                    <div class="col little_total">
                        小计
                    </div>
                    <div class="col handle">
                        操作
                    </div>
                </div>
                <el-checkbox-group v-model="checkedGoods" @change="handleCheckedGoodsChange" >
                    <div class="bodyRow" v-for="(item,index) in goodsList" :key="index">
                        <div class="col check_value">
                            <el-checkbox :label="`商品${item.itemid}`"></el-checkbox>
                        </div>
                        <div class="col goodsImg_value">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="col goodsName_value">
                            {{item.goodsName}}
                        </div>
                        <div class="col price_value">
                            {{item.price}}
                        </div>
                        <div class="col buy_num_value">
                            <el-input-number v-model="item.num" @change="handleChange" size="small" :min="1" :max="99" label="描述文字"></el-input-number>
                        </div>
                        <div class="col little_total_value">
                            {{item.price*item.num}}
                        </div>
                        <div class="col del">
                            <div class="delBtn" @click="delGoods(item.id)">
                                <span class="iconfont icon-guanbi11"></span>
                            </div>
                        </div>
                    </div>
                </el-checkbox-group>    
            </div>    
        </div>
        <div v-if="goodsList.length!=0" class="total_price container">
            <div class="priceInfo">
                <div class="left">
                    <a href="javascript:;">
                        继续购物
                    </a>
                    <span class="line">|</span>
                    <span class="info">
                        共
                        <em>{{goodsList.length}}</em>
                        件商品，已选择
                        <em>{{checkedGoods.length}}</em>
                        件
                    </span>
                </div>
                <div class="right">
                    合计：<span class="totalNum">{{total_price}}</span>元
                </div>
            </div>
            <div class="payBtn">
                <button type="button" @click="goOrder">去结算</button>
            </div>
        </div>
        <div v-if="goodsList.length==0" class="empty-cart container">
            <div class="empty-cart-top">
                <h2>您的购物车还是空的！</h2>
                <p v-if="$store.getters.isNaName">>登录后将显示您之前加入的商品</p>
                <button class="btn login" type="button" v-if="$store.getters.isNaName" @click="$router.push('/login/accountLogin')">立即登录</button>
                <button class="btn goshopping" type="button" @click="$router.push('/home')">马上去购物</button>
            </div>
            <div class="empty-cart-bottom">
                <recommend></recommend>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import littleHeader from "../public/littleHeader";
    import recommend from "../public/recommend";
    import Checkbox from "element-ui";
    import InputNumber from "element-ui";
    Vue.use(Checkbox);
    Vue.use(InputNumber);
    import {mapState} from "vuex";
    export default {
        data(){
            return{
                
                checkAll: false,
                checkedGoods: [],//被选中的商品  ["商品1","商品2","商品3","商品4"]
                checkedGoodsList:[], //checkedGoodsList用来存储已选中的商品的详细信息
                goodsOption:[], // ["商品1","商品2","商品3","商品4"]
                goodsList:[//在购物车中的所有商品
                    // {
                    //     id:1,
                    //     imgUrl:require("../../assets/img/pms_1581493329.10251213.jpg"),
                    //     goodsName:"Redmi 10X4G4GB+128GB 天际蓝",
                    //     price:999,
                    //     num:1
                    // }
                ],
            }
        },
        methods:{
            handleCheckAllChange(val) {
                this.checkedGoods = val ? this.goodsOption : [];
            },
            handleCheckedGoodsChange(value) {
                this.checkedGoods = value;
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.goodsList.length;
            },
            handleChange(value) {
                console.log(value)
            },
            //删除数据
            delGoods(itemId){
                // goodsList的索引值
                let j = this.goodsList.findIndex(function(item){
                    return item.itemid == itemId
                })
                // checkedGoods的索引值
                let i = this.checkedGoods.findIndex((item)=>{
                    let index = item.substr(2);
                    console.log(index);
                    return index == itemId
                })
                // checkedGoodsList的索引值
                let k = this.checkedGoodsList.findIndex((item)=>{
                    return item.itemid == itemId
                })
                this.goodsList.splice(j,1);
                if(!isNaN(i)){
                    this.checkedGoods.splice(i,1);
                }
                if(!isNaN(k)){
                    this.checkedGoodsList.splice(k,1);
                }
            },
            // 跳转到订单页
            goOrder(){
                
                this.$router.push({path:'/newOrder',params:{checkedGoodsList:this.checkedGoodsList,total_price:this.total_price},name:"确认订单"},()=>{});
                
            }
        },
        watch:{
            // checkedGoods数据改变时执行
            // eslint-disable-next-line no-unused-vars
            checkedGoods:function(newvalue,oldvalue){
                let arr = [];
                for(let i of newvalue){
                    let itemId = i.substr(2);
                    let index = this.goodsList.findIndex(function(item){
                        return item.itemid == itemId
                    })
                    arr.push(this.goodsList[index])
                }
                this.checkedGoodsList = arr;
            },
            // goodsList数据改变时执行
            // eslint-disable-next-line no-unused-vars
            goodsList:function(newval,oldval){
                let arr = [];
                newval.forEach((item)=>{
                    arr.push(`商品${item.itemid}`)
                })
                this.goodsOption = arr;
            }
        },
        computed:{
            // 计算总价
            total_price:function(){
                let totalPrice = this.checkedGoodsList.reduce((total,item)=>{
                    return total + item.num*item.price;
                },0)
                return totalPrice;
            },
            // 获取购物车数据
            ...mapState("shopCart",{
                cartItem:state=>state.cartItem,
            }),
        },
        components:{
            littleHeader,
            recommend
        },
        created(){
            this.$store.state.showH = false;
            this.$store.state.showF = true;
            // 处理名字与数据属性名不同的情况
            this.cartItem.forEach((item)=>{
                let {product,totalName} = item;
                this.goodsList.push({
                    id : product.product_id,
                    itemid : product.item_id,
                    imgUrl : product.product_image,
                    goodsName : totalName,
                    price : product.product_price,
                    num : product.buy_num,
                })
            })
            let arr = [];
            this.goodsList.forEach((item)=>{
                arr.push(`商品${item.itemid}`)
            })
            this.goodsOption = arr;
        }   
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .cartlist{
        margin-top: 38px;
        margin-bottom: 20px;
        background-color: #fff;
        .list{
            .headerRow{
                height: 70px;
                border-bottom: 1px solid #e0e0e0;
                padding-right: 26px;
                .col{
                    text-align: center;
                    line-height: 70px;
                    float: left;
                    font-size: 14px;
                    font-weight: normal;
                }
                .check{
                    width: 110px;
                }
                .goodsImg{
                    width: 120px;
                }
                .goodsName{
                    text-align: left;
                    width: 380px;
                }
                .price{
                    width: 140px;
                    padding-right: 18px;
                }
                .buy_num{
                    width: 150px;
                }
                .little_total{
                    width: 201px;
                }
                .handle{
                    width: 80px;
                }
            }
            .bodyRow{
                height: 110px;
                .col{
                    float: left;
                    text-align: center;
                    line-height: 110px;
                    font-size: 14px;
                    color: #333;
                }
                .check_value{
                    width: 110px;
                }
                .goodsImg_value{
                    width: 120px;
                    padding-top: 15px;
                    height: 110px;
                    box-sizing: border-box;
                    img{
                        display: inline-block;
                        width: 80px;
                        height: 80px;
                    }
                }
                .goodsName_value{
                    text-align: left;
                    width: 380px;
                }
                .price_value{
                    width: 140px;
                    padding-right: 18px;
                }
                .buy_num_value{
                    width: 150px;
                }
                .little_total_value{
                    width: 201px;
                }
                .del{
                    width: 80px;
                    .delBtn{
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background-color: transparent;
                        text-align: center;
                        transition: all .1s linear;
                        line-height: 24px;
                        cursor: pointer;
                        span{
                            font-size: 14px;
                            color: #7a7474;
                        }
                        &:hover{
                            span{
                                color: #fff;
                            }
                            background-color: #e53935;
                        }
                    }
                }
            }
        }
    }
    .total_price{
        margin-bottom: 20px;
        height: 50px;
        background-color: #fff;
        line-height: 50px;
        .priceInfo{
            padding: 0 16px;
            width: 1024px;
            box-sizing: border-box;
            float: left;
            .left{
                float: left;
                a{
                    color: #757575;
                }
                span.line{
                    margin: 0 16px;
                }
                span.info{
                    color: #757575;
                    em{
                        color: $mainColor;
                    }
                }
            }
            .right{
                float: right;
                margin-right: 33px;
                color: $mainColor;
                .totalNum{
                    font-size: 30px;
                }
            }
        }
        .payBtn{
            float: left;
            width: 202px;
            button{
                cursor: pointer;
                height: 50px;
                width: 202px;
                background-color: $mainColor;
                color: #fff;
                outline: none;
                border: none;
                font-size: 16px;
            }
        }
    }
    .empty-cart{
        margin-top: 38px;
        .empty-cart-top{
            overflow: hidden;
            background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png) no-repeat;
            height: 273px;
            padding-left: 558px;
            margin-top: 65px;
            margin-bottom: 130px;
            h2{
                margin-top: 70px;
                font-size: 36px;
                color: #b0b0b0;
            }
            p{
                font-size: 20px;
                color: #b0b0b0;
            }
            .btn{
                margin-top: 20px;
                margin-right: 10px;
                width: 170px;
                height: 48px;
                outline: none;
                border: none;
                box-sizing: border-box;
                cursor: pointer;
            }
            .login{
                background-color: $mainColor;
                color: white;
            }
            .goshopping{
                background-color: #fff;
                border:1px solid $mainColor;
                color: $mainColor;
            }
        }
        
    }
</style>