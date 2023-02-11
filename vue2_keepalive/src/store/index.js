import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cachedViews: [], // 缓存的路由
  },
  getters: {},
  mutations: {
    // 添加缓存
    ADD_CACHEVIEW: (state, payload) => {
      if (!state.cachedViews.includes(payload.name)) {
        state.cachedViews.push(payload.name);
      }
    },
    // 删除缓存
    DELETE_CACHEVIEW: (state, payload) => {
      state.cachedViews = state.cachedViews.filter((item) => item != payload.name);
    },
  },
  actions: {},
  modules: {}
});
