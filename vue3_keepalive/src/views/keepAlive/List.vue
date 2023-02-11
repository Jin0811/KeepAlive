<template>
  <div>
    <h1>List 列表页面</h1>
    <el-divider></el-divider>

    <el-table :data="tableData" v-loading="loading" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="action" label="操作">
        <template #default="scope">
          <el-link type="primary" @click="handleToDetail(scope.row)">查看用户详情</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="10"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-row>

  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
export default {
  name: "List",
  setup(props) {
    // Hook
    const router = useRouter();

    // State
    const tableData = ref([]);
    const total = ref(100);
    const currentPage = ref(1);
    const loading = ref(false);

    // 获取表格数据
    const fetchTableData = () => {
      loading.value = true;
      const tempArr = [];
      for (let i = 0; i < 10; i++) {
        tempArr.push({
          id:  `第${currentPage.value}页 ${i}`,
          date: `${2000 + currentPage.value}年${1 + i}月${ 1 + i }日`,
          name: `人员${currentPage.value}_${i}`,
          address: `XXX大道${currentPage.value}_${i}号`,
        });
      }
      setTimeout(() => {
        tableData.value = [ ...tempArr ];
        loading.value = false;
      }, 500);
    };
    // 处理表格分页
    const handleCurrentChange = (current) => {
      currentPage.value = current;
      fetchTableData();
    };
    // 跳转详情页
    const handleToDetail = (record) => {
      router.push({
        path: "/detail",
        query: { ...record },
      });
    };

    // 初始化查询表格数据
    fetchTableData();

    return {
      tableData,
      total,
      currentPage,
      loading,
      handleToDetail,
      handleCurrentChange,
    }
  },
}
</script>

<style lang="less" scoped>
  .pagination{
    margin-top: 20px;
  }
</style>