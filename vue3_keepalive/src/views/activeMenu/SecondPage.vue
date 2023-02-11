<template>
  <div>
    <h1>SecondPage 二级页面</h1>
    <el-divider></el-divider>
    <p>进入到二级页面之后，菜单高亮效果并不会消失，刷新页面也会存在高亮效果</p>
    <el-divider></el-divider>
    <el-button type="primary" @click="handleBack">返回</el-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "SecondPage",
  setup(props) {
    const router = useRouter();

    // 返回
    const handleBack = () => {
      router.back();
    };

    return {
      handleBack
    };
  },
}
</script>
