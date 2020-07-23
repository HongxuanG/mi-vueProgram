<template>
    <div>
        <div class="header-main" v-if="show">
            <flashSale></flashSale>
            <!-- 以后这里根据数据追加 组件数量 传入数据给组件-->
            <div v-for="(item,index) in goodsFloorData" :key="index">
                <bannerBox v-if="goodsFloorData[index].view_type=='cells_auto_fill'" :imgUrl="goodsFloorData[index].body.items[0].img_url"></bannerBox>
                <listeight v-else-if="goodsFloorData[index].view_type=='list_eight_product'" :type="0" :data="goodsFloorData[index].body"></listeight>
                <listeight v-else-if="goodsFloorData[index].view_type=='list_eight_product_tab'" :type="1" :data="goodsFloorData[index].body"></listeight>
            </div>
        </div>
    </div>
</template>

<script>
import listeight from "../components/main/ListEight";
import bannerBox from "../components/main/bannerBox";
import flashSale from "../components/public/flashSaleList";
    export default {
        data(){
            return{
                goodsFloorData:[],
                show:false
            }
        },
        components:{
            listeight,
            bannerBox,
            flashSale
        },
        created(){
            this.$axios.get("/getdata",{
                params:{

                }
            }).then((res)=>{
                console.log(res);
                this.goodsFloorData = res.data.result[0].goodsFloorData;
                this.show = true;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .header-main{
        padding: 4px 0 12px;

    }
</style>