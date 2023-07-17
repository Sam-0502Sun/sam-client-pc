<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <template v-for="item in menuList" :key="item.name">
        <el-menu-item :index="item.url">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MenuIndex',
  setup () {
    const activeIndex = ref('/')
    const menuList = [
      {
        name: '首页',
        url: '/'
      },
      {
        name: '产品',
        url: '/goods'
      }
    ]

    return {
      activeIndex,
      menuList
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  width: 100%;
  height: 60px;
  .el-menu {
    .el-menu-item {}
  }
}
</style>
