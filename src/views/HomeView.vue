<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { MyPick } from './pick'

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

type NewUser = MyPick<User, 'Name' | 'Age'>

let u1: NewUser = {
  Id: 11,
  Name: 'er',
  Age: 33
}

console.log('-------u---------', u)
console.log('-------u---------', u1)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
../../pick
