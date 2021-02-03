<template>

    <el-container style="height: 100%">
  <el-header height="10%">
    <el-row :gutter="20">
    <el-col :span="2" :offset="22"><div class="grid-content bg-purple" style="cursor:pointer" @click.prevent="doLogout">注销</div></el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside width="200px">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
    <el-main>Main</el-main>
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