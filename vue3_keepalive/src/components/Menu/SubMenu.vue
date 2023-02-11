<template>
  <el-sub-menu :index="menuItem.path">
    <template #title>
      <el-icon><MenuIcon /></el-icon>
      <span>{{ menuItem.meta.title }}</span>
    </template>
    <template v-for="(item, index) in menuItem.children">
      <template v-if="item.children && item.children.length > 0 && !item.meta.hidden">
        <SubMenu :menuItem="item" :key="index"></SubMenu>
      </template>
      <template v-else-if="!item.meta.hidden">
        <el-menu-item :index="item.path" :key="index">
          <template #title>
            <el-icon><MenuIcon /></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
  </el-sub-menu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuItem: {
      type: Object,
      require: true
    }
  },
};
</script>
