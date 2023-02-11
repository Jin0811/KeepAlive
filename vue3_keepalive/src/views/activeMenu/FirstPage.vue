<template>
  <div>
    <h1>FirstPage 一级菜单页面</h1>
    <el-divider></el-divider>
    <p>
      此组件是一级菜单，会出现在左侧的菜单栏当中，当点击按钮进入到此模块的二级页面时，需要高亮当前菜单。
      高亮在刷新页面后，一样会存在
    </p>
    <el-divider></el-divider>
    <el-button type="primary" @click="toSecondPage">进入二级页面</el-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "FirstPage",
  setup(props) {
    const router = useRouter();

    // 跳转进入二级页面
    function toSecondPage(){
      router.push({ path: "/secondPage" });
    }

    return {
      toSecondPage
    }
  },
}
</script>
