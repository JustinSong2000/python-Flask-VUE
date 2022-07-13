<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="/recreate_users">随机重置用户</el-menu-item>
<!--            <el-menu-item index="shopList">羊毛党等级说明</el-menu-item>-->
            <el-menu-item index="/score">得分情况展示</el-menu-item>
            <el-menu-item index="/black">黑名单</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-star-on"></i>结果分析</template>
            <el-menu-item index="visitor">图表</el-menu-item>
            <el-menu-item index="/showres">结果显示</el-menu-item>
            <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  },
}
</script>


