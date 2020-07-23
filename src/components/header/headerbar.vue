<template>
    <div>
        <div class="home-header">
            <div class="container">
                <headerlogo></headerlogo>
                <div class="header-search">
                    <form action="#" method="get">
                        <div class="searchPart" ref="searchPart">
                            <input type="text" @focus="onfocus" @blur="onblur" value="" placeholder="小米10">
                        </div>
                        <div class="sumbitPart">
                            <button type="submit" ref="btn">
                                <span class="iconfont icon-sousuo"></span>
                            </button>
                        </div>
                        <div class="searchList" v-show="showSearchList">
                            <ul>
                                <li v-for="(item,index) in searchList" :key="index" @click="goSearchResult">
                                    <a href="javascript:;">
                                        <span>{{item}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                <div class="header-nav">
                    <ul>
                        <li v-for="(item,index) in headerNav" :key="index">
                            <a href="#" @mouseover="currentIndex=index" @mouseout="currentIndex=null">
                                <span>{{item.name}}</span>
                                <div class="item-children" v-if="item.children.length">
                                    <el-collapse-transition>
                                        <div v-show="currentIndex==index?true:false">
                                            <div class="transition-box">
                                                <div class="container">
                                                    <ul>
                                                        <li v-for="(current,i) in item.children" :key="i">
                                                            <a href="#">
                                                                <div class="figure">
                                                                    <img :src="current.img" alt="">
                                                                </div>
                                                                <div class="title">{{current.title}}</div>
                                                                <p class="price">{{current.price}}</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>   
                                            </div>
                                        </div>
                                    </el-collapse-transition>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // fade/zoom 等
    import 'element-ui/lib/theme-chalk/base.css';
    // collapse 展开折叠
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
    import Vue from 'vue'

    Vue.component(CollapseTransition.name, CollapseTransition);
    import headerlogo from "../public/logo";
    export default {
        data(){
            return{
                show:false,
                searchList:["小米手环5","Redmi K30 Pro","冰箱","小米10","全部商品","米家插线板快充版27W","Redmi手环","小米10 Pro","小米手环5"],
                showSearchList:false,
                headerNav:[],
                currentIndex:null,
                time:null
            }
        },
        methods:{
            onfocus(){
                this.$refs.searchPart.className += " foucs";
                this.$refs.btn.className = "foucs";
                this.showSearchList = true;
            },
            onblur(){
                this.time = setTimeout(()=>{
                    this.$refs.searchPart.className = "searchPart";
                    this.$refs.btn.className = "";
                    this.showSearchList = false;
                },100)
            },
            goSearchResult(){
                clearTimeout(this.time)
                this.$router.push('/search');
                this.showSearchList = false;
            }
        },
        components:{
            headerlogo
        },
        created(){
            this.$axios.get("/getdata",{
                params:{

                }
            }).then((res)=>{
                this.headerNav = res.data.result[0].topbarBannerData;
            }).catch((err)=>{
                throw Error(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    
    
    .foucs{
        border-color: $mainColor !important;
    }
    .blur{
        border-color: #e0e0e0 !important;
    }
    .home-header{
        width: 100%;
        position: relative;
        background-color: #fff;
        height: 100px;
        .header-logo{
            float: left;
            margin-top: 22px;
            margin-bottom: 23px;
            width: 55px;
            height: 55px;
            background-color: $mainColor;
            overflow: hidden;
            ul{
                width: 200%;
                transition: all ease 0.2s 0s;
                li{
                    a{
                        float: left;
                        width: 55px;
                        height: 55px;
                        color: #fff;
                        text-align: center;
                        span{
                            line-height: 55px;
                            font-size: 30px;
                        }
                    }
                }
            }
            &:hover{
                ul{
                    transform: translateX(-50%);
                }
            }
        }
        .header-search{
            margin-top: 25px;
            margin-bottom: 25px;
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
                .searchList{
                    position: absolute;
                    z-index: 100;
                    top: 50px;
                    left: 0;
                    ul{
                        width: 246px;
                        border: 1px solid $mainColor;
                        border-top: 0;
                        box-sizing: border-box;
                        li{
                            width: 100%;
                            height: 30px;
                            box-sizing: border-box;
                            background-color: #fff;
                            padding-left: 15px;
                            line-height: 30px;
                            a{
                                display: block;
                                width: 100%;
                                span{
                                    font-size: 12px;
                                    color: #333;
                                }
                            }
                            &:hover{
                                background-color: #fafafa;
                            }
                        }
                    }
                }
            }
        }
        .header-nav{
            height: 100px;
            margin-left: 235px;
            >ul{
                line-height: 100px;
                >li{
                    float: left;
                    height: 100px;
                    padding: 0 10px;
                    a{
                        span{
                            transition: all linear 0.15s 0s;
                            color: #333333;
                            font-size: 16px;
                        }
                        .item-children{
                            width: 100%;
                            position: absolute;
                            z-index: 999;
                            top: 100px;
                            left: 0;
                            box-shadow: 0 3px 4px rgba(0, 0, 0, .1);
                            .transition-box {
                                width: 100%;
                                height: 230px;
                                background-color: #fff;
                                text-align: center;
                                box-sizing: border-box;
                                border-top: 1px solid #e0e0e0;
                                ul{
                                    li{
                                        width: calc(100% / 6);
                                        float: left;
                                        a{
                                            .figure{
                                                width: 100%;
                                                border-right: 1px solid #e0e0e0;
                                                margin-top: 35px;
                                                height: 110px;
                                                margin-bottom: 20px;
                                                img{
                                                    display: inline-block;
                                                    width: 160px;
                                                    height: 110px;
                                                }
                                                
                                            }
                                            .title{
                                                line-height: 20px;
                                                font-size: 12px;
                                                color: #333;
                                            }
                                            .price{
                                                line-height: 20px;
                                                font-size: 12px;
                                                color: $mainColor;
                                            }
                                        }
                                        &:last-child{
                                            a{
                                                .figure{
                                                    border-right: 0;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        &:hover{
                            span{
                                color: $mainColor;
                            }
                        }
                    }
                }
            }
        }
    }
</style>