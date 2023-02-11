<template>
  <div id="main">
    <el-container class="main-container">
      <el-header class="main-header">Vue3 可配置化的路由缓存</el-header>
      <el-container>
        <el-aside width="220px">
          <Menu></Menu>
        </el-aside>
        <el-main class="main-content">
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu/Menu";
export default {
  name: "App",
  components: {
    Menu,
  }
}
</script>

<style lang="less">
  // 全局样式
  *{
    margin: 0;
    padding: 0;
  }
  #main{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .main-container{
    width: 100%;
    height: 100%;
  }
  .main-header{
    background-color: royalblue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
  }
  .main-content{
    width: 100%;
    height: calc(100vh - 60px);
    & > div {
      height: calc(100vh - 100px);
      overflow-y: auto;
    }
  }

  // 美化滚动条样式
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #fdf8f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #ccc;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #ccc;
    cursor: pointer;
  }
</style>

