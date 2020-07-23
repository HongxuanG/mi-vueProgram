<template>
    <div>
        <div class="contentTitle">
            <h1>收货地址</h1>
        </div>
        <div class="address-list show-less-list clearfix">
            <div class="address-item" @click="addressAddPanel">
                <div class="add-desc">
                    <i class="iconfont icon-plus"></i>
                    <span >添加新地址</span>
                </div>
            </div>
            <div class="address-item" v-for="(item,index) in userAddress" :key="index">
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
                        <span @click="del(item.form.id)">删除</span>
                    </div>
                </div>
                <div  class="address-info-solt" style></div>
            </div>
        </div>
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
    import Vue from "vue";
    import Form from "element-ui";
    import FormItem from "element-ui";
    import Select from "element-ui";
    import Dialog from "element-ui";
    import Input from "element-ui";
    import cascader from "element-ui";
    import { MessageBox } from 'element-ui';
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Select);
    Vue.use(Dialog);
    Vue.use(Input);
    Vue.use(cascader);
    Vue.prototype.$message = MessageBox
    import {mapState} from "vuex";
    var formData = {};
    export default {
        data(){
            return{
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
            }
        },
        methods:{
            onchange(val){
                // 数据归零
                this.labelArray = [];
                this.selectedOptions = val;
                // 获取选中的label值
                this.getLabel(0,this.selectedOptions,this.options);
            },
            // 获取label值
            getLabel(level=0,item,opt){
                opt.forEach(val=>{
                    if(val.value == item[level]){
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
                this.$store.commit("address/editAddress",{form:formData,label:this.labelArray});
                this.dialogFormVisible = false;
                formData = {};
            },
            del(id){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                        this.$store.commit("address/delAddress",id);
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                });
            }
        },
        computed:{
            ...mapState("address",{
                userAddress:state=>state.userAddress,
            }),
            
        },
        created(){
            this.$axios.post("/getCity",{}).then((res)=>{
                this.options = res.data;
            }).catch((err)=>{
                throw Error(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor:#ff6700;
    .contentTitle{
        margin-bottom: 12px;
        h1{
            font-weight: normal;
            font-size: 30px;
            color: #757575;
        }
    }
    .address-list {
        .address-item {
            transition: border .1s linear;
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
                        margin-right: 10px;
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
                border: 1px solid #b0b0b0;
            }
        }
        .active {
            border: 1px solid $mainColor;
        }
    }
</style>