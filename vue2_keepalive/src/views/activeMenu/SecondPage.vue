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
export default {
  name: "SecondPage",
  data() {
    return {}
  },
  methods: {
    handleBack(){
      this.$router.back();
    },
  },
}
</script>
