<template>
  <div id="home">
    <div class="container">
      <div class="left-nav">
        <div class="title"> <i class="el-icon-upload logo"></i> 家政服务平台</div>
        <div id="nav" >
          <el-menu 
            :collapse="false"
            background-color="#242939"
            text-color="#fff"
            active-text-color="#5d78ff"
            :router="true" 
            default-active="2" class="el-menu-vertical-demo" >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>
            <el-menu-item index="/category">
              <i class="el-icon-s-order"></i>
              <span slot="title">栏目管理</span>
            </el-menu-item>
            <el-menu-item index="/product">
              <i class="el-icon-s-shop"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item index="/customer">
              <i class="el-icon-s-custom"></i>
              <span slot="title">顾客管理</span>
            </el-menu-item>
            <el-menu-item index="/order">
              <i class="el-icon-s-custom"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="/check">
              <i class="el-icon-message-solid"></i>
              <span slot="title">审核大厅</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="right-content">
        <div class="right-header">
          <el-row>
            <el-col :span="18">
              <i class="el-icon-s-fold"></i>
            </el-col>
            <el-col :span="6">
              欢迎您 xxx
              <a href="" @click.prevent="logoutHandler">退出</a>
            </el-col>
          </el-row>
        </div>
        <div class="content">
          <router-view/>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    logoutHandler(){
      this.$router.push("/login")
    }
  }
}
</script>
<style>
#home {
  height: 100%;
}

.container {
  height: 100%;
  display: flex;
}
.container > .left-nav {
  width: 200px;
  background-color: #242939;
}
.container > .left-nav .title {
  line-height: 2.5em;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
}
.logo {
  color: #536be2;
  font-size: 18px;
}

#nav {
  margin-right: -1px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.container > .right-content {
  flex:1;
  background-color: #f1f2f7;
  overflow-y: scroll;
}
.container > .right-content > .right-header {
  padding: 0 1em;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ededed;
}
.content {
  background-color: #ffffff;
  border-radius: 3px;
  padding: .5em;
  min-height: 400px;
}
</style>
