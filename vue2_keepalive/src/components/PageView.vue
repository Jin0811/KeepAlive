<template>
  <div id="page-view">
    <keep-alive :include="cachedViews">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "PageView",
  computed: {
    cachedViews(){
      return this.$store.state.cachedViews;
    }
  },
}
</script>

<style lang="less" scoped>
  #page-view{
    width: 100%;
    height: 100%;
  }
</style>