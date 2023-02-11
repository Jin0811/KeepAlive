<template>
  <div class="menu-container">
    <el-menu router :default-active="defaultActive" background-color="#f1f1f1" text-color="#000" active-text-color="royalblue">
      <template v-for="(item, index) in menuData">
        <template v-if="item.children && item.children.length>0 && !item.meta.hidden">
          <SubMenu :menuItem="item" :key="index"></SubMenu>
        </template>
        <template v-else-if="!item.meta.hidden">
          <el-menu-item :index="item.path" :key="index">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.meta?.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { routes } from "@/router"; // 菜单配置项，这里是静态的，实际项目当中根据项目情况来
import SubMenu from "./SubMenu";
export default {
  name: "Menu",
  components: {
    SubMenu
  },
  // 利用计算属性，实现刷新页面之后，保持当前激活的菜单项
  computed: {
    defaultActive() {
      return this.$route.meta?.activeMenu || this.$route.path;
    },
    menuData(){
      return routes;
    },
  },
}
</script>

<style lang="less" scoped>
  .menu-container{
    height: 100%;
    .el-menu{
      height: 100%;
    }
  }
</style>