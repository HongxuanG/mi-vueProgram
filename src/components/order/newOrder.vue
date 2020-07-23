<template>
    <div>
        <littleHeader title="确认订单" username="小明"></littleHeader>
        <div class="checkout-main container">
            <div class="checkout-detail">
                <!-- <div class="fixed-header" style="display: none;">
                    <div class="fixed-address-choose">
                        <a href="javascript:void(0)" class="choose-btn btn btn-primary" >选择该收货地址</a>
                        <div class="address-title">
                            <span class="address-desc">郭鸿轩</span>
                            <span class="address-desc">173****5534</span>
                            <span class="address-desc">广东 佛山市 南海区 林岳西二村学校前二巷三号</span>
                        </div>
                    </div>
                </div> -->
                <div class="detail-section address-detail">
                    <div class="address-header">
                        <span class="header-title">收货地址</span>
                    </div>
                    <div class="address-list show-less-list clearfix" >
                        <div :class="['address-item',currentAddress==index?'active':'']" @click="currentAddress = index" v-for="(item,index) in userAddress" :key="index">
                            <div  class="address-info">
                                <div  class="name">
                                    {{item.form.name}}
                                    <span  style="color: rgb(176, 176, 176);">{{item.form.tag}}</span>
                                </div>
                                <div  class="tel">{{item.form.phone.replace(/(\d{3})\d*(\d{4})/,"$1****$2")}}</div>
                                <div  class="address-con">
                                    <span >{{item.label[0]}}</span>
                                    <span >{{item.label[1]}}</span>
                                    <span >{{item.label[2]}}</span>
                                    <span class="info">{{item.form.textarea}}</span>
                                </div>
                                <div  class="address-action show-action">
                                    <span @click="addressEditPanel(item.form.id)">修改</span>
                                </div>
                            </div>
                            <div  class="address-info-solt" style></div>
                        </div>
                        <div  class="address-item" @click="addressAddPanel">
                            <div  class="add-desc">
                                <i  class="iconfont icon-plus"></i>
                                <span >添加新地址</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-header">商品及优惠券</div>
                    <div  class="goods-list">
                        <div  class="good-item" v-for="(item,index) in orderArr" :key="index">
                            <div  class="item-desc good-img">
                                <img :src="item.imgUrl" />
                            </div>
                            <div  class="item-desc good-name">
                                <a  href="javascript:;" target="_blank">
                                    <span>{{item.goodsName}}</span>
                                </a>
                            </div>
                            <div  class="item-desc">
                                <div  class="special-handling-differentiate">
                                    <div  class="item-desc good-price">{{item.price}} x {{item.num}}</div>
                                    <div  class="item-desc good-total">{{item.price*item.num}}元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-section">
                    <!-- 配送方式 -->
                    <div class="section-options section-shipment clearfix">
                        <div class="options-desc options-header">
                            <div class="title">配送方式</div>
                        </div>
                        <div class="options-desc options-body">
                            <div class="options-list">
                                <div class="options-item selected">包邮</div>
                            </div>
                        </div>
                    </div>
                    <!-- 发票栏 -->
                    <div class="section-options section-invoice clearfix">
                        <div class="options-desc options-header">
                            <div class="title">发票</div>
                        </div>
                        <div class="options-desc options-body">
                            <div class="options-list">
                                <div class="options-item selected">电子普通发票</div>
                                <div class="options-item selected">个人</div>
                                <div class="options-item selected">商品明细</div>
                                <a href="javascript:void(0);" class="options-item selected" >修改 &gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-section count-detail">
                    <div class="section-discount">
                        <div class="discount-coupon">
                            <a href="javascript:void(0)">
                                <i class="iconfont icon-plus"></i>
                                <span >使用优惠券</span>
                            </a>
                        </div>
                        <div class="position-box">
                            <div class="discount-ecard">
                                <a class="coupon-title">
                                    <i class="iconfont icon-plus"></i>
                                    <span >使用小米礼品卡</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="section-bill">
                        <div class="bill-item">
                            <div class="bill-name">商品件数：</div>
                            <div class="bill-money">{{orderArr.length}} 件</div>
                        </div>
                        <div class="bill-item">
                            <div class="bill-name">商品总价：</div>
                            <div class="bill-money">{{total_price}} 元</div>
                        </div>
                        <div class="bill-item">
                            <div class="bill-name">活动优惠：</div>
                            <div class="bill-money">-0 元</div>
                        </div>
                        <div class="bill-item">
                            <div class="bill-name">优惠券抵扣：</div>
                            <div class="bill-money">-0 元</div>
                        </div>
                        <div class="bill-item">
                            <div class="bill-name">运费：</div>
                            <div class="bill-money">0 元</div>
                        </div>
                        <div class="bill-item total-price">
                            <div class="bill-name">应付总额：</div>
                            <div class="bill-money">
                                <em >{{total_price}}</em> 元
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 尾部信息 -->
                <div class="detail-section footer-detail clearfix">
                    <div class="footer-address" v-if="myIsNaN(currentAddress)">
                        <div class="selecter-address">
                            <div class="address-name">{{userAddress[currentAddress].form.name}} {{userAddress[currentAddress].form.phone.replace(/(\d{3})\d*(\d{4})/,"$1****$2")}}</div>
                            <div class="address-desc">
                                <span >{{fulladdress}}</span>
                                <a href="javascript:;" @click="addressEditPanel(userAddress[currentAddress].form.id)">修改</a>
                            </div>
                        </div>
                    </div>
                    <div class="handle-action">
                        <div class="operating-button">
                            <a href="javascript:void(0);" class="buy_now" @click="$router.push('/shopCart')">返回购物车</a>
                            <a href="javascript:void(0);" class="toCart" @click="goPay">立即下单</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 模态框 -->
        <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" placeholder="姓名" clearable></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.phone" autocomplete="off" placeholder="手机号" maxlength="11" clearable></el-input>
                </el-form-item>
                <el-form-item label="省市区" :label-width="formLabelWidth">
                    <el-cascader :options="options" clearable @change="onchange"></el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth">
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入详细地址"
                        v-model="form.textarea" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="地址标签" :label-width="formLabelWidth">
                    <el-input v-model="form.tag" clearable autocomplete="off" placeholder="如:'家','公司'。限五个字内" maxlength="5"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="add" v-if="!isEdit">添 加</el-button>
                <el-button type="primary" @click="edit" v-if="isEdit">编 辑</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

import littleHeader from "../public/littleHeader";
import {mapState} from "vuex";
import Vue from "vue";
import Form from "element-ui";
import FormItem from "element-ui";
import Select from "element-ui";
import Dialog from "element-ui";
import Input from "element-ui";
import cascader from "element-ui";
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(cascader);
var formData = {};
export default {
    data() {
        return {
            currentAddress:null, //选中地址高亮
            orderArr:null,
            total_price:null,
            //以下是地址的增查改所需的参数
            dialogFormVisible: false,
            form: {
                name: '',
                phone: '',
                region: '',
                tag: '',
                textarea:""
            },
            formLabelWidth: '120px',
            options:null,
            selectedOptions:null, //"120000", "120100", "120103" value值
            labelArray:[], //找到对应的label值
            isEdit:false
        };
    },
    methods:{
        onchange(val){
            // 数据归零
            this.labelArray = [];
            console.log(val);
            this.selectedOptions = val;
            // 获取选中的label值
            this.getLabel(0,this.selectedOptions,this.options);
            console.log(this.labelArray);
        },
        // 获取label值
        getLabel(level=0,item,opt){
            opt.forEach(val=>{
                if(val.value == item[level]){
                    console.log(1)
                    this.labelArray.push(val.label);
                    level++;
                    if("children" in val){
                        this.getLabel(level,item,val.children);
                    }
                }
            })
            return null
        },
        close(){
            // 关闭
            this.dialogFormVisible = false;
        },
        addressAddPanel(){
            this.isEdit = false;
            for(let k in this.form){
                this.form[k] = "";
            }
            this.dialogFormVisible = true;
        },
        // 增加地址
        add(){
            this.$store.commit("address/addAddress",{form:this.form,label:this.labelArray});
            console.log(this.userAddress);
            this.dialogFormVisible = false;
        },
        // 修改地址
        addressEditPanel(id){
            console.log(id);
            this.isEdit = true;
            this.dialogFormVisible = true;
            let i = this.userAddress.findIndex((item)=>{
                return item.form.id == id;
            })
            for(let k in this.form){
                this.form[k] = this.userAddress[i].form[k]
            }
            formData.id = id;
        },
        edit(){
            for(let k in this.form){
                formData[k] = this.form[k];
            }
            console.log(this.form);
            this.$store.commit("address/editAddress",{form:formData,label:this.labelArray});
            this.dialogFormVisible = false;
            formData = {};
        },
        // 立即下单
        goPay(){
            // 生成下单时间
            let orderTime = new Date();
            let addressInfo = this.userAddress[this.currentAddress];
            let order_id = this.random_No(5,orderTime);
            let total_price = this.total_price;
            this.$store.dispatch("orderList/addOrder",{
                orderTime,
                addressInfo,
                orderArr:this.orderArr,
                order_id,
                total_price});
            this.$router.push({path:'/confirmOrder',params:{order_id,total_price,addressInfo,orderArr:this.orderArr},name:"支付订单"});
            
        },
        // 判断是否是数值
        myIsNaN(value) {
            return typeof value === 'number' && !isNaN(value);
        },
        // 生成订单号
        random_No(j,date) {
            var random_no = "";
            for (var i = 0; i < j; i++) //j位随机数，用以加在时间戳后面。
            {
                random_no += Math.floor(Math.random() * 10);
            }
            random_no = date.getTime() + random_no;
            // eslint-disable-next-line no-unused-vars
            return random_no.split("").sort((a,b)=>{
                return Math.random() - 0.5;
            }).join("");
        }
    },
    computed:{
        ...mapState("address",{
            userAddress:state=>state.userAddress,
        }),
        fulladdress:function(){
            let str = "";
            this.userAddress[this.currentAddress].label.forEach(item=>{
                str += item + " ";
            })
            return `${str} ${this.userAddress[this.currentAddress].form.textarea}`
        }
    },
    components: {
        littleHeader
    },
    created() {
        console.log(this.$route.params)
        this.orderArr = this.$route.params.checkedGoodsList;
        this.total_price = this.$route.params.total_price;
        // 控制头部和尾部显示隐藏
        this.$store.state.showH = false;
        this.$store.state.showF = true;
        // 请求省市区
        this.$axios.post("/getCity",{}).then((res)=>{
            this.options = res.data;
        }).catch((err)=>{
            throw Error(err);
        })
    }
};
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .checkout-main {
        margin-top: 40px;
        background-color: #fff;
        margin-bottom: 60px;
        .checkout-detail {
            padding: 38px 0 0;
            .detail-section {
                .address-header {
                    margin-bottom: 12px;
                    .header-title {
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        color: #333333;
                    }
                }
                .address-list {
                    .address-item {
                        position: relative;
                        float: left;
                        margin-right: 17px;
                        margin-bottom: 17px;
                        width: 270px;
                        height: 180px;
                        border: 1px solid #e0e0e0;
                        padding: 15px 24px;
                        box-sizing: border-box;
                        position: relative;
                        cursor: pointer;
                        .address-info {
                            color: #757575;
                            .name {
                                width: 100%;
                                height: 30px;
                                line-height: 30px;
                                font-size: 18px;
                                color: #333;
                                margin-bottom: 10px;
                                span {
                                    font-size: 14px;
                                    float: right;
                                    color: #757575;
                                }
                            }
                            .tel {
                                line-height: 23px;
                            }
                            .address-con {
                                line-height: 23px;
                                span {

                                }
                                .info {
                                    display: block;
                                }
                            }
                            .address-action {
                                position: absolute;
                                bottom: 15px;
                                right: 24px;
                                span {
                                    font-size: 14px;
                                    color: $mainColor;
                                }
                            }
                            .show-action {

                            }
                        }
                        .address-info-solt {

                        }
                        .add-desc {
                            position: absolute;
                            display: inline-block;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            .iconfont {

                            }
                            .icon-plus {
                                transition: opacity .1s linear;
                                font-size: 30px;
                                color: #b0b0b0;
                                opacity: 0.5;
                            }
                            span {
                                width: 70px;
                                display: block;
                                color: #757575;
                                font-size: 14px;
                            }
                        }
                        &:hover{
                            .add-desc{
                                .icon-plus{
                                    opacity: 1;
                                }
                            }
                        }
                    }
                    .active {
                        border: 1px solid $mainColor;
                    }
                }
                .show-less-list {
                }
            }
            .address-detail {
            }
            .detail-section {
                padding: 0 24px;
                .detail-header {
                    height: 45px;
                    line-height: 45px;
                    font-size: 18px;
                    color: #333;
                }
                .goods-list {
                    .good-item {
                        height: 46px;
                        line-height: 46px;
                        padding: 10px 0;
                        .item-desc {
                            
                        }
                        .good-img {
                            display: inline-block;
                            margin-right: 10px;
                            line-height: 46px;
                            img{
                                vertical-align: middle;
                                display: inline-block;
                                height: 30px;
                                width: 30px;
                            }
                        }
                        .good-name {
                            width: 650px;
                            float: left;
                            a {
                                font-size: 14px;
                                span {
                                    color: #333;
                                }
                            }
                        }
                        .item-desc {
                            float: left;
                            .special-handling-differentiate {
                                width: 440px;
                                text-align: center;
                                .item-desc {
                                }
                                .good-price {
                                    float: left;
                                    width: 150px;
                                }
                                .good-status {
                                }
                                .good-total {
                                    float: right;
                                    width: 190px;
                                }
                            }
                        }
                    }
                }
            }
            .detail-section {
                padding: 0 24px;
                .section-options {
                    border-top: 1px solid #e0e0e0;
                    padding: 20px 0;
                    line-height: 55px;
                    .options-desc {
                        .title {
                            height: 55px;
                            font-size: 18px;
                            color: #333;
                            width: 150px;
                        }
                    }
                    .options-desc {
                        .options-list {
                            .options-item {
                                float: left;
                                color: $mainColor;
                                margin-right: 15px;
                            }
                            .selected {
                            }
                        }
                    }
                    .options-header {
                        float: left;
                    }
                    .options-body {
                        float: left;
                    }
                }
                .section-shipment {
                }
                .section-invoice {
                }
            }
            .detail-section {
                padding: 0 24px;
                .section-discount {
                    float: left;
                    .discount-coupon {
                        a {
                            height: 50px;
                            line-height: 50px;
                            .iconfont {
                            }
                            .icon-plus {
                                color: $mainColor;
                                margin-left: 10px;

                            }
                            span {
                                color: #757575;
                                font-size: 14px;
                            }
                        }
                    }
                    .position-box {
                        display: inline-block;
                        .discount-ecard {
                            .coupon-title {
                                height: 50px;
                                line-height: 50px;
                                .iconfont {
                                }
                                .icon-plus {
                                    color: $mainColor;
                                    margin-left: 10px;
        
                                }
                                span {
                                    color: #757575;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
                .section-bill {
                    position: absolute;
                    bottom: 20px;
                    right: 0;
                    .bill-item {
                        text-align: right;
                        line-height: 30px;
                        .bill-name {
                            float: left;
                            width: 90px;
                            color: #757575;
                        }
                        .bill-money {
                            float: left;
                            color: $mainColor;
                            width: 110px;
                        }
                    }
                    .total-price {
                        .bill-name {
                            margin-top: 7px;
                        }
                        .bill-money {
                            vertical-align: baseline;
                            em {
                                font-size: 30px;
                            }
                        }
                    }
                }
            }
            .count-detail {
                position: relative;
                min-height: 200px;
                padding: 20px 0;
                margin: 0 48px;
            }
            .detail-section {
                .footer-address {
                    float: left;
                    .selecter-address {
                        display: inline-block;
                        color: #333;
                        .address-name {
                        }
                        .address-desc {
                            span {
                                margin-right: 10px;
                            }
                            a {
                                color: $mainColor;
                            }
                        }
                    }
                }
                .handle-action {
                    float: right;
                    .operating-button {
                        a{
                            display: block;
                            float: left;
                            margin-left: 30px;
                            text-align: center;
                            line-height: 40px;
                            width: 160px;
                            height: 40px;
                            color: #fff;
                            background-color: $mainColor;
                        }
                        a.buy_now{
                            background-color: #fff;
                            border: 1px solid #b0b0b0;
                            color: #b0b0b0;
                        }
                    }
                }
            }
            .footer-detail {
                padding: 20px 48px;
                height: 80px;
                box-sizing: border-box;
                border-top: 2px solid #f5f5f5;
            }
        }
    }
    
</style>