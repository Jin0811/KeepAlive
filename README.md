# Vue 可配置化的路由缓存（Vu2 & Vue3）

## 1 介绍
在Vue的项目当中，路由缓存是一个比较常见的功能，譬如，从列表页面进入到详情页面，返回到列表页面时，如果可以保持列表的状态，那用户效果就会好很多。

Vue当中的路由缓存是通过内置组件 `keepAlive` 实现的，在项目规模比较小，代码量不多的时候，我们还可以通过手动去操作数据来进行路由缓存，但是一旦项目的规模变大，代码量和组件数量增多，如果没有一个方便的方式去配置和自动进行路由缓存，那路由缓存的功能就会变得很麻烦，并且容易出Bug。

这里提供了一份可配置化的路由缓存，只需要在配置路由的时候进行缓存的配置，后续就不需要再进行任何操作了。

注意：仓库当中存在了两个项目，分别为Vue2和Vue3，可以根据自身需要进行查看。

## 2 相关技术栈
### 2.1 Vue2
- Vue2
- Vuex
- VueRouter
- ElementUI

### 2.2 Vue3
- Vue3
- Pinia
- VueRouter
- ElementPlus

## 3 思路解析
这里大概解析一下整个路由缓存的思路：
关键文件有以下几个：
- src/components/PageView.vue
- src/router/index.js
- src/utils/vueKeepAliveUtil.js
- src/main.js

首先我们需要创建一个`store`，`store`当中存放了cachedViews，即需要缓存的路由的名称，后续我们需要在路由拦截器当中对`cachedViews`进行添加和删除的操作

随后我们需要创建一个`PageView`组件，`PageView`当中就是读取`store`中的数据，并且使用`keepAlive`组件，进行路由缓存，准备功能已经完成了，后续我们只需要进行操作`cachedViews`，就可以实现路由的缓存了
```html
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
```

准备工作完成之后，我们需要去配置路由，详细的配置可以参考项目中的路由配置，meta中的`title`、`hidden`、`cacheFrom`、`activeMenu`都有相关的注释信息，用于实现菜单组件、菜单高亮、路由缓存

最重要的是`vueKeepAliveUtil`，此文件当中，进行了路由的拦截，并且根据路由信息中的meta信息，来决定是否对路由进行缓存，详细代码如下，可以结合代码中的注释进行理解
```js
import router from "@/router";
import store from "@/store";

router.beforeEach((to, from, next) => {
  // 如果to需要进行缓存，则直接进行缓存，无论是从哪里进入，都先进行缓存
  if (to.meta && to.meta.keepAlive) {
    store.commit("ADD_CACHEVIEW", to);
  }
  // 如果to的cacheFrom存在，并且cacheFrom不包含from的name，说明是从不需要缓存to的页面进入to的，这个时候就删除to的缓存
  // 从其他菜单项，进入keepAlive的页面，需要删除进入页面的缓存
  if (to.meta.cacheFrom && !to.meta.cacheFrom.includes(from.name)) {
    store.commit("DELETE_CACHEVIEW", to);
  }
  // 如果从需要缓存的页面，跳转到其他页面，则先缓存From
  // 例如：从list跳转detail，缓存list
  if (from.meta && from.meta.keepAlive) {
    store.commit("ADD_CACHEVIEW", from);
  }

  // 放行路由
  setTimeout(() => next());
});
```

最后需要在`main.js`当中去引入`vueKeepAliveUtil.js`，使其生效

## 4 详细代码
具体代码，请访问GitHub仓库

GitHub仓库地址: [https://github.com/Jin0811/KeepAlive](https://github.com/Jin0811/KeepAlive)
