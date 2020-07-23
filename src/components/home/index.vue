<template>
  <div>
    <ibanner></ibanner>
    <imain></imain>
  </div>
</template>

<script>
import imain from "../../views/main";
import ibanner from "../../views/banner";
export default {
  components: {
    ibanner,
    imain
  },
  created() {
    this.$store.state.showH = true;
    this.$store.state.showF = true;
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
</style>