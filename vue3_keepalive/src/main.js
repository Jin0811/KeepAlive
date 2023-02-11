import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// ElementPlus
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 页面缓存处理函数
import "./utils/vueKeepAliveUtil";

// Pinia
const pinia = createPinia();

// App相关
const app = createApp(App);

// 全局注册ElementPlusIcons
// 因为 HTML 标准已经定义了一个名为 menu 的标签， 如果您注册的 menu 无法正常工作，您需要使用别名来渲染图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  let componentName = key === "Menu" ? "MenuIcon" : key;
  app.component(componentName, component)
}

// 使用ElementPlus pinia router
app.use(ElementPlus, { size: 'small' }).use(pinia).use(router).mount('#app');
