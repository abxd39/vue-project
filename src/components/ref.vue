<template>
  <div ref="re">
    <article>
      使用ref 获取dom结构，
      <br />
      需要在dom 加载完成以后才能获取。amouned 事件可以监听dom加载完成
    </article>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
const re = this.$refs.re
onBeforeMount(() => {
  $refs.re.style.color = 'red'
  ref('re').value.style.color = 'red'
  console.log('onbeforemount')
})
onMounted(() => {
  ref('re').value.style.color = 'blue'
  console.log('onmounted')
})
</script>
