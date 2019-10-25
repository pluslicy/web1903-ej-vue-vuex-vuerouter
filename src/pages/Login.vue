<template>
  <div class="login">
    <h2>家政服务平台</h2>
    <div class="login-content" >
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginHandler">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data(){
   return {
      user:{}
   }
  },
  methods:{
    loginHandler(){
      this.$router.push("/")
    }
  }
}
</script>
<style scoped>
  .login {
    text-align: center;
  }
  .login .login-content {
    width:400px;
    margin: 0 auto;
  }
</style>