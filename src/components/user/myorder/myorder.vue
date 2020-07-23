<template>
    <div>
        <div class="contentTitle">
            <h1>我的订单</h1>
        </div>
        <div class="option clearfix">
            <ul class="category">
                <li :class="[currentIndex == index?'active':'']" v-for="(item,index) in myorder" :key="index" @click="currentIndex = index">
                    <router-link tag="a" :to="'/user/myorder/'+item.to" href="javascript:;">{{item.name}}</router-link>
                    <span class="line">|</span>
                </li>
            </ul>
            <div class="header-search">
                <form action="#" method="get">
                    <div class="searchPart" ref="searchPart">
                        <input type="text" value="" placeholder="小米10">
                    </div>
                    <div class="sumbitPart">
                        <button type="submit" ref="btn">
                            <span class="iconfont icon-sousuo"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="categoryContent">
            <router-view :tips-index="currentIndex" :item-list="dataList"></router-view>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        data(){
            return{
                currentIndex:0,
                myorder:[
                    {to:"type0",name:"全部有效订单"},
                    {to:"type1",name:"待支付"},
                    {to:"type2",name:"待收货"},
                    {to:"type3",name:"订单回收站"},
                ],
            }
        },
        computed:{
            ...mapState("orderList",{
                orderList:state=>state.orderList,
                type1:state=>state.type1,
                type2:state=>state.type2,
                type3:state=>state.type3,
            }),
            dataList:function(){
                if(this.currentIndex == 3){
                    return this.type3;
                }else if(this.currentIndex == 1){
                    return this.type1;
                }else if(this.currentIndex == 2){
                    return this.type2;
                }else{
                    return this.orderList;
                }
            }
        },
        mounted(){

        },
        created(){
            console.log(this.orderList);
            
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .contentTitle{
        h1{
            font-weight: normal;
            font-size: 30px;
            color: #757575;
        }
    }
    .option{

        ul.category{
            float: left;
            height: 22px;
            padding: 10px 0;
            li{
                float: left;
                a{
                    font-size: 16px;
                    color: #757575;
                    &:hover{
                        color: $mainColor;
                    }
                }
                span{
                    margin: 0 20px;
                   
                }
                &:last-child{
                    span{
                        display: none;
                    }
                }
                &.active{
                    a{
                        color: $mainColor;
                    }
                }
            }   
        }
    }
    .header-search{
        
        float: right;
        form{
            position: relative;
            .searchPart{
                float: left;
                width: 245px;
                height: 50px;
                transition: all linear 0.2s 0s;
                border: 1px solid #e0e0e0;
                border-right: 0;
                box-sizing: border-box;
                input{
                    width: calc(100% - 10px);
                    height: 100%;
                    outline: none;
                    padding: 0 0 0 10px;
                    &::-webkit-input-placeholder{
                        color: #757575;
                    }
                }
                
            }
            &:hover{
                .searchPart{
                    border-color: #b0b0b0;
                }
                .sumbitPart{
                    button{
                        border-color: #b0b0b0;
                    }
                }
            }
            .sumbitPart{
                float: left;
                button{
                    cursor: pointer;
                    width: 50px;
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    box-sizing: border-box;
                    background-color: #fff;
                    transition: all linear 0.2s 0s;
                    span{
                        color: #616161;
                        font-size: 20px;
                    }
                }
                &:hover{
                    button{
                        background-color: $mainColor;
                        border: 1px solid $mainColor;
                        span{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>