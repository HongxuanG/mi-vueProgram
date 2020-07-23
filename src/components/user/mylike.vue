<template>
    <div style="overflow: hidden;">
        <div class="contentTitle">
            <h1>我的喜欢</h1>
        </div>
        <div class="likePage" v-if="likeList.length!=0">
            <ul>
                <li v-for="(item,index) in likeList" :key="index">
                    <a href="javascript:;" class="img">
                        <div class="likeImg">
                            <img :src="item.likeItem.product_image" alt="">
                        </div>
                    </a>
                    <h3 class="total_name">{{item.totalName}}</h3>
                    <p class="price">{{item.likeItem.product_price}}元</p>
                    <div class="active">
                        <a href="javascript:;" class="delGoods" @click="delItem(index)">删除</a>
                        <a href="javascript:;" class="goodsDetail" @click="getDetail(index)">查看详情</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                likeList:[],
            }
        },
        methods:{
            delItem(i){
                this.$axios.post("/delLike",{
                    account:this.$store.state.account,
                    totalName:this.likeList[i].totalName
                }).then((res)=>{
                    if(res.data.code==200){
                        this.likeList.splice(i,1);
                    }
                    console.log(res);
                }).catch((err)=>{
                    throw Error(err);
                })
            },
            getDetail(i){
                this.$router.push({path:"/detail",query:{goods_id:this.likeList[i].likeItem._id}})
            }
        },
        created(){
            if(this.$store.state.account){
                this.$axios.get("/getLikeItem",{
                    params:{
                        account:this.$store.state.account,
                    }
                }).then((res)=>{
                    console.log(res.data.result);
                    if(res.data.result){
                        this.likeList = res.data.result;
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .likePage {
        ul {
            width: 930px;
            li {
                padding: 40px 48px 0 0;
                float: left;
                width: 260px;
                height: 348px;
                border-bottom: 1px solid #e0e0e0;
                font-size: 14px;
                text-align: center;
                
                a.img{
                    display: inline-block;
                    width: 200px;
                    height: 206px;
                    .likeImg {
                        img {
                            width: 200px;
                            height: 200px;
                        }
                    }
                }
                .total_name {
                    font-weight: normal;
                    color: #333;
                    margin-bottom: 5px;
                }
                .price {
                    color: $mainColor;

                }
                .active{
                    margin-top: 40px;
                    font-size: 12px;
                    opacity: 0;
                    transition: opacity .4s;
                    a.delGoods {
                        margin: 0 7px;
                        display: inline-block;
                        width: 108px;
                        height: 28px;
                        border: 1px solid #b0b0b0;
                        background-color: #fff;
                        color: #b0b0b0;
                        line-height: 28px;
                        transition: all .2s linear;
                        &:hover{
                            background-color: #757575;
                            border: 1px solid #757575;
                            color: white;
                        }
                    }
                    a.goodsDetail {
                        margin: 0 7px;
                        display: inline-block;
                        width: 108px;
                        height: 28px;
                        border: 1px solid $mainColor;
                        background-color: $mainColor;
                        color: #fff;
                        line-height: 28px;
                        transition: all .2s linear;
                        &:hover{
                            background-color: #f25807;
                            border: 1px solid #f25807;
                            color: white;
                        }
                    }
                }
                &:hover{
                    .active{
                        opacity: 1;
                    }
                }
            }
        }
    }
    .contentTitle{
        margin-bottom: 12px;
        h1{
            font-weight: normal;
            font-size: 30px;
            color: #757575;
        }
    }
</style>