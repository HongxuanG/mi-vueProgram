<template>
    <div>
        <!-- 顶部组件 -->
        <topbar></topbar>
        <!-- 头部组件 -->
        <headerbar></headerbar>
    </div>
</template>

<script>
import topbar from "../components/header/topbar";
import headerbar from "../components/header/headerbar";
    export default {
        components:{
            topbar,
            headerbar
        }
    }
</script>

<style lang="scss" scoped>

</style>