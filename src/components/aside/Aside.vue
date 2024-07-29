<template>
  <el-menu id="menu" @open="gotoPage">
    <el-menu-item index="/home">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="/about"> About </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function gotoPage(key: string, keyPath: string[]) {
  console.log('key', key)
  console.log('keyPath', keyPath)

  router.push('/about')
}
</script>
<style scoped lang="scss">
#menu {
  height: 100vh;
  background-color: #545c64;
}
</style>
