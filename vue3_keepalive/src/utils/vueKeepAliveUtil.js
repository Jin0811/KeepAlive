import router from "@/router";
import { useMainStore } from "@/store";

router.beforeEach((to, from, next) => {
  const mainStore = useMainStore();

  // 如果to需要进行缓存，则直接进行缓存，无论是从哪里进入，都先进行缓存
  if (to.meta && to.meta.keepAlive) {
    mainStore.addCacheView(to);
  }
  // 如果to的cacheFrom存在，并且cacheFrom不包含from的name，说明是从不需要缓存to的页面进入to的，这个时候就删除to的缓存
  // 从其他菜单项，进入keepAlive的页面，需要删除进入页面的缓存
  if (to.meta.cacheFrom && !to.meta.cacheFrom.includes(from.name)) {
    mainStore.deleteCacheView(to);
  }
  // 如果从需要缓存的页面，跳转到其他页面，则先缓存From
  // 例如：从list跳转detail，缓存list
  if (from.meta && from.meta.keepAlive) {
    mainStore.addCacheView(from);
  }

  // 放行路由
  setTimeout(() => next());
});