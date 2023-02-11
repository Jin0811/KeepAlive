<template>
  <div id="page-view">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { useMainStore } from "@/store";
export default {
  name: "PageView",
  setup(){
    const store = useMainStore();
    const { cachedViews } = store;
    return { cachedViews };
  }
}
</script>

<style lang="less" scoped>
  #page-view{
    width: 100%;
    height: 100%;
  }
</style>