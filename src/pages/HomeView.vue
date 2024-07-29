<script setup lang="ts">
type User = {
  Id: number
  Name: string
  Age: number
}
let u: User = {
  Id: 10,
  Name: 'wy',
  Age: 29
}

let u1: User = {
  Id: 11,
  Name: 'wy1',
  Age: 30
}
console.log('-------u---------', u)
console.log('-------u---------', u1)
</script>

<template>
  <title>HomeView</title>
</template>
