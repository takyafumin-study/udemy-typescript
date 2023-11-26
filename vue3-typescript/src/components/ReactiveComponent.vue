<script setup lang="ts">
import { reactive } from 'vue'

type User = {
    name: string
    age: number
}

const user1: User = {
    name: 'Taro',
    age: 20
}

const user2 = reactive({} as User)
user2.name = 'Hoge'

</script>

<template>
    <h2>Reactive</h2>
    {{ user1.name }}<br>
    {{ user2.name }}
</template>