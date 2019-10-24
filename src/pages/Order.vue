<template>
  <div>
    <h2>订单管理</h2>  
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未付款" name="first"></el-tab-pane>
      <el-tab-pane label="未派单" name="second"></el-tab-pane>
      <el-tab-pane label="未接单" name="third"></el-tab-pane>
      <el-tab-pane label="未完成" name="fourth"></el-tab-pane>
    </el-tabs>
    <!-- 二级路由的接受 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeName:'first'
    }
  },
  methods:{
    handleClick(tab){
      // 路由跳转
      console.log(tab);
    }
  }
}
</script>
<style scoped>

</style>