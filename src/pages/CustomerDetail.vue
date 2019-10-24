<template>
  <div class="customer_details">
    <h2>顾客详情</h2> 
    <el-button type="primary" size="small" @click="backHandler">返回</el-button> 
    <div>姓名: {{customer.realname}} </div>
    <div>手机: {{customer.telephone}}</div>
  </div> 
</template>
<script>
export default {
  data:{
    customer:{}
  },
  created(){
    console.log("当前路由",this.$route);
    this.customer = this.$route.query.customer;
  },
  methods:{
    backHandler(){
      // this.$router.push('/customer')
      this.$router.go(-1)
    }
  }

}
</script>
<style scoped>

</style>