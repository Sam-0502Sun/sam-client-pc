<template>
  <div class="layout-container">
    <MenuIndex />
    <router-view />
  </div>
</template>

<script>
import MenuIndex from '@/components/Menu/menu-index'

export default {
  name: 'HomeView',
  components: {
    MenuIndex
  }
}
</script>

<style lang="less">
.layout-container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
