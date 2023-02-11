<template>
  <div>
    <h1>Detail 详情页面</h1>
    <el-divider></el-divider>

    <el-descriptions class="margin-top" :column="3" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ person.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        苏州市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        {{ person.address }}
      </el-descriptions-item>
    </el-descriptions>

    <el-row type="flex" justify="center" style="margin-top: 20px;">
      <el-button type="primary" @click="handleBack">返回</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      person: {},
    }
  },
  created() {
    this.person = { ...this.$route.query };
  },
  methods: {
    handleBack(){
      this.$router.back();
    },
  },
}
</script>
