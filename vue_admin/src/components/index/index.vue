<template>

    <el-container style="height: 100%">
  <el-header height="10%">
    <el-row :gutter="20">
    <el-col :span="2" :offset="22"><div class="grid-content bg-purple" style="cursor:pointer" @click.prevent="doLogout">注销</div></el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside width="210px">
    <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
         <el-menu-item index="1-3">
           <router-link :to="'/users'" >
              <i class="el-icon-s-check"></i>
              <span>用户列表</span>
          </router-link>
         </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
     <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  beforeCreate(){
    const token = localStorage.getItem("token");
    if (!token){
      this.$router.push({name:"login"})
    }

  },
        data(){
          return{}
        },
         methods: {
              handleOpen(key, keyPath) {
                console.log(key, keyPath);
              },
              handleClose(key, keyPath) {
                console.log(key, keyPath);
              },
              doLogout(){
                localStorage.clear();
                this.$router.push({name:"login"});
                this.$message({
                  message: '退出登录',
                  type: 'success'
                });
              }
            }
}
</script>

<style>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 80px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>