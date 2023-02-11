import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cachedViews: [], // 缓存的路由
    }
  },
  actions: {
    // 添加缓存
    addCacheView(payload){
      if (!this.cachedViews.includes(payload.name)) {
        this.cachedViews.push(payload.name);
      }
    },
    // 删除缓存
    deleteCacheView(payload){
      this.cachedViews = this.cachedViews.filter((item) => item != payload.name);
    },
  },
});
