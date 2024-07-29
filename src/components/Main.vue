<template>
  <el-container id="container">
    <Aside />
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
import Aside from './aside/Aside.vue'
</script>
<style lang="scss" scoped>
#container {
  height: 100vh;
  border: 1px dotted red;
}

#container > :first-child {
  margin: 0%;
  padding: 0%;
  width: 100px;
}

#container > :nth-child(2) {
  width: 1fr;
  color: red;
}
</style>
