import { createRouter, createWebHashHistory } from 'vue-router';

import PageView from "@/components/PageView";
import Home from '@/views/Home.vue';

// 路由缓存
import List from '@/views/keepAlive/List.vue';
import Detail from '@/views/keepAlive/Detail.vue';

// 菜单高亮
import FirstPage from '@/views/activeMenu/FirstPage.vue';
import SecondPage from '@/views/activeMenu/SecondPage.vue';

export const routes = [
  {
    path: '/',
    redirect: "/home",
    meta: { hidden: true }, // 不显示在菜单栏当中
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: "首页" }
  },
  {
    path: "/keepAliveDemo",
    name: "KeepAliveDemo",
    component: PageView,
    meta: { title: "路由缓存" },
    children: [
      {
        path: '/list',
        name: 'List',
        component: List,
        meta: {
          title: "路由缓存-列表页",
          keepAlive: true, // 标识需要进行缓存
          // 从哪个路由跳转进来的时候，需要保持缓存的状态
          // 如果不写，或者为空数组，则会全部都进行缓存
          cacheFrom: ["Detail"], // 标识从Detail进入List时，需要缓存List
        }
      },
      {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
          title: "路由缓存-详情页",
          hidden: true, // 标识此路由不需要显示在左侧的菜单当中
          activeMenu: "/list", // 标识当进入此页面时，需要高亮/list菜单，此功能是为了防止进入二级页面之后，菜单丢失高亮效果
        }
      },
    ],
  },
  {
    path: "/activeMenuDemo",
    name: "ActiveMenuDemo",
    component: PageView,
    meta: { title: "菜单高亮" },
    children: [
      {
        path: '/firstPage',
        name: 'FirstPage',
        component: FirstPage,
        meta: {
          title: "一级菜单",
        }
      },
      {
        path: '/secondPage',
        name: 'SecondPage',
        component: SecondPage,
        meta: {
          title: "二级页面",
          hidden: true, // 标识此路由不需要显示在左侧的菜单当中
          activeMenu: "/firstPage", // 值为一级菜单路由的path，标识当进入此页面时，需要高亮List菜单，此功能是为了防止进入二级页面之后，菜单丢失高亮效果
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
