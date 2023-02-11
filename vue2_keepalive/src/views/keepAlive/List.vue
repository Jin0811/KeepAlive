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
        <template slot-scope="scope">
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
export default {
  name: "List",
  data() {
    return {
      tableData: [],
      total: 100,
      currentPage: 1,
      loading: false,
    }
  },
  created() {
    this.fetchTableData();
  },
  methods: {
    // 获取表格数据
    fetchTableData(){
      this.loading = true;
      const tempArr = [];
      for (let i = 0; i < 10; i++) {
        tempArr.push({
          id:  `第${this.currentPage}页 ${i}`,
          date: `${2000 + this.currentPage}年${1 + i}月${ 1 + i }日`,
          name: `人员${this.currentPage}_${i}`,
          address: `XXX大道${this.currentPage}_${i}号`,
        });
      }
      setTimeout(() => {
        this.tableData = [ ...tempArr ];
        this.loading = false;
      }, 500);
    },
    // 处理表格分页
    handleCurrentChange(currentPage){
      this.currentPage = currentPage;
      this.fetchTableData();
    },
    // 跳转详情页
    handleToDetail(record){
      this.$router.push({
        path: "/detail",
        query: { ...record },
      });
    },
  },
}
</script>

<style lang="less" scoped>
  .pagination{
    margin-top: 20px;
  }
</style>