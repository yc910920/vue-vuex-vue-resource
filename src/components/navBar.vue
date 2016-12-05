<template>
  <nav >
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="vertical" @select="handleSelect">

    <router-link to='/contentManage'>
  
      <el-menu-item index="1">内容管理</el-menu-item>
    </router-link>  
    <router-link to='/userManage'>

      <el-menu-item index="2">用户管理</el-menu-item>
    </router-link>  
    <el-submenu index="3">
        <template slot="title">标签管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">标签列表</el-menu-item>
          <el-menu-item index="3-2">热门标签设置</el-menu-item>
          <el-menu-item index="3-3">热搜词设置</el-menu-item>

          <el-menu-item index="3-4">专辑列表</el-menu-item>
          <el-menu-item index="3-5">逛街导航</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>

    <el-submenu index="4">
        <template slot="title">举报管理</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">话题举报列表</el-menu-item>
          <el-menu-item index="4-2">评论举报列表</el-menu-item>
          <el-menu-item index="4-3">举报原因管理</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>

    <el-submenu index="5">
        <template slot="title">用户反馈</template>
        <el-menu-item-group>
          <el-menu-item index="5-1">反馈列表列表</el-menu-item>
        
        </el-menu-item-group>
       
    </el-submenu>

    <el-submenu index="6">
        <template slot="title">举报管理</template>
        <el-menu-item-group>
          <el-menu-item index="6-1">话题举报列表</el-menu-item>
          <el-menu-item index="6-2">评论举报列表</el-menu-item>
          <el-menu-item index="6-3">举报原因管理</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>

    <el-submenu index="7">
        <template slot="title">系统消息</template>
        <el-menu-item-group>
          <el-menu-item index="7-1">发送系统消息</el-menu-item>
          <el-menu-item index="7-2">待发布消息查看</el-menu-item>
          <el-menu-item index="7-3">官方消息发布</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>

    <el-submenu index="8">
        <template slot="title">app提示管理</template>
        <el-menu-item-group>
          <el-menu-item index="8-1">发布提示语</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>
      
      <el-menu-item index="9">统计</el-menu-item>
    <el-submenu index="10">
        <template slot="title">其他管理</template>
        <el-menu-item-group>
          <el-menu-item index="10-1">违禁词管理</el-menu-item>
          <el-menu-item index="10-2">封面图管理</el-menu-item>

        </el-menu-item-group>
       
    </el-submenu>
      
      <el-menu-item index="11">账单</el-menu-item>

    </el-menu>
  <div class="line"></div>
 
  </nav>
</template>
<style lang="less">
.el-submenu .el-menu-item {
  padding: 0;
}
  
</style>
<script>
    export default{
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
