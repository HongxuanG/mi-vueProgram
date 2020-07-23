<template>
  <div>
    <littleHeader title="确认订单" username="小明"></littleHeader>
    <div class="confirm-order container">
        <div class="order-info clearfix">
            <div class="fl">
            <div class="title">
                <h2>订单提交成功！去付款咯~</h2>
                <p>请在<span> 1 小时 59 分 </span>内完成支付, 超时后将取消订单</p>
            </div>
            </div>
            <div class="fr">
            <div class="total">应付总额：<span>{{data_detail.total_price}}</span>元</div>
            <a href="javascript:;">
                订单详情
                <i class="iconfont icon-down2"></i>
            </a>
            </div>
        </div>
        <div class="order-detail">
            <ul>
            <li>
                <div class="label">订单号：</div>
                <div class="content light">{{data_detail.order_id}}</div>
            </li>
            <li>
                <div class="label">收货信息：</div>
                <div class="content">{{data_detail.addressInfo.form.name}} {{data_detail.addressInfo.form.phone.replace(/(\d{3})\d*(\d{4})/,"$1****$2")}} {{data_detail.addressInfo.label[0]}} {{data_detail.addressInfo.label[1]}} {{data_detail.addressInfo.label[2]}} {{data_detail.addressInfo.textarea}}</div>
            </li>
            <li>
                <div class="label">商品名称：</div>
                <div class="content">
                    <span v-for="(item,index) in data_detail.orderArr" :key="index">{{item.goodsName}}</span>
                </div>
            </li>
            <li>
                <div class="label">发票信息：</div>
                <div class="content">电子普通发票 个人</div>
            </li>
            </ul>
        </div>
        <span class="iconfont icon-ziyuan"></span>
    </div>
    <div class="order-pay container">
      <div class="title">
        <h1>选择以下支付方式付款</h1>
      </div>
      <div class="payment-box" v-for="(item,index) in payment" :key="index">
        <div class="payment-header">
          <h3>{{item.name}}</h3>
        </div>
        <div class="payment-body">
            <ul class="clearfix">
                <li v-for="(children,i) in item.pay" :key="i">
                    <a href="javascript:;">
                        <img
                        :src="children"
                        alt
                        />
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="sections-install container">
        <div class="payment-box" v-for="(item,index) in install" :key="index">
            <div class="payment-header">
                <h3>{{item.name}}</h3>
            </div>
            <div class="payment-body">
                <ul class="clearfix">
                    <li v-for="(children,i) in item.pay" :key="i">
                        <a href="javascript:;">
                            <img
                            :src="children"
                            alt
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import littleHeader from "../public/littleHeader";
export default {
  data() {
    return {
        payment: [
            {
                name: "支付平台",
                pay: [
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a4f743d0bdb5c048ad9803914a4ea83.jpg",
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg",
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ead8cd015b07ca9f363ef9b6dd5e8e2.jpg",
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9fcf10ba01a57b7d08d38b6f4ff3dfa8.jpg"
                ]
            },
            {
                name: "银行借记卡及信用卡",
                pay: [
                    "//s01.mifile.cn/i/banklogo/payOnline_zsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_jsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_jtyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_nyyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_zgyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_youzheng.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gfyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gfyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gdyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gdyh.png"
                ]
            },
            {
                name: "快捷支付",
                pay: [
                    "//s01.mifile.cn/i/banklogo/payOnline_zsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_jtyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_jsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gsyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_zxyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gdyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_zgyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_shncsyyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_xyyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_nyyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_payh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_hyyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_gfyh.png",
                    "//s01.mifile.cn/i/banklogo/payOnline_bjyh.png",
                ]
            }
        ],
        install:[
            {
                name:"分期付款",
                pay:[
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924147efb783abb94fde84a07a5e89b.jpg",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21f373c603cb1284c1bcb7acaf2cb96d.jpg",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f32babec080c5dade34a91f2c8e5e926.jpg"
                ]
            }
        ],
        data_detail:{}
    };
},
    components: {
        littleHeader
    },
    created() {
        // 控制头部和尾部显示隐藏
        this.$store.state.showH = false;
        this.$store.state.showF = true;
        console.log(this.$route.params);
        Object.assign(this.data_detail,this.$route.params);
    }
};
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .confirm-order {
        margin-top: 38px;
        position: relative;
        padding: 48px 48px 48px 183px;
        background-color: #fff;
        box-sizing: border-box;
        margin-bottom: 30px;
        .order-info {
            margin-bottom: 20px;
            .fl {
                .title {
                    h2 {
                        font-size: 25px;
                        color: #333;
                        font-weight: normal;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #616161;
                        font-size: 14px;
                        margin-bottom: 10px;
                        span{
                            color: $mainColor;
                        }
                    }
                }
            }
            .fr {
                .total {
                    font-size: 14px;
                    margin-bottom: 20px;
                    span{
                        color: $mainColor;
                        font-size: 25px;
                    }
                }
                a {
                    display: block;
                    text-align: right;
                    font-size: 14px;
                    color: #747474;
                    i.icon-down2 {
                        margin-left: 5px;
                        font-size: 14px;
                        color: #747474;
                    }
                    &:hover{
                        color: $mainColor;
                    }
                }
            }
        }
        .icon-ziyuan {
            position: absolute;
            top: 40px;
            left: 50px;
            font-size: 84px;
            color: #83c44e;
        }
        .order-detail {
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            ul {
                li {
                    margin-bottom: 10px;
                    font-size: 14px;
                    .label {
                        width: 85px;
                        display: inline-block;
                        vertical-align: top;
                    }
                    .content {
                        display: inline-block;
                        span{
                            display: block;
                        }
                    }
                    .light{
                        color: $mainColor;
                    }
                }
            }
        }
        
    }
    .order-pay {
        padding: 30px 48px;
        background-color: #fff;
        box-sizing: border-box;
        margin-bottom: 30px;
        .title {
            margin-bottom: 30px;
            height: 51px;
            border-bottom: 1px solid #e0e0e0;
            h1 {
                font-weight: normal;
                font-size: 18px;
                color: #424242;
                text-align: left;
            }
        }
        .payment-box {
            .payment-header {
                margin-bottom: 20px;
                h3 {
                    font-size: 16px;
                    color: #796161;
                    font-weight: normal;
                    
                }
            }
            .payment-body {
                ul {
                    margin-right: -14px;
                    li{
                        border: 1px solid #e0e0e0;
                        height: 60px;
                        width: 174px;
                        margin-right: 14px;
                        margin-bottom: 14px;
                        float: left;
                        transition: all 0.1s linear;
                        a {
                            width: 100%;
                            height: 100%;
                            img {
                                height: 60px;
                                width: 174px;
                            }
                        }
                        &:hover{
                            border-color: $mainColor;
                        }
                    }
                }
            }
        }
    }
    .sections-install {
        padding: 30px 48px;
        background-color: #fff;
        box-sizing: border-box;
        margin-bottom: 30px;
        .payment-box {
            .payment-header {
                margin-bottom: 20px;
                h3 {
                    font-size: 16px;
                    color: #796161;
                    font-weight: normal;
                    
                }
            }
            .payment-body {
                ul {
                    margin-right: -14px;
                    li{
                        border: 1px solid #e0e0e0;
                        height: 60px;
                        width: 174px;
                        margin-right: 14px;
                        margin-bottom: 14px;
                        float: left;
                        transition: all 0.1s linear;
                        a {
                            width: 100%;
                            height: 100%;
                            img {
                                height: 60px;
                                width: 174px;
                            }
                        }
                        &:hover{
                            border-color: $mainColor;
                        }
                    }
                }
            }
        }
    }
</style>