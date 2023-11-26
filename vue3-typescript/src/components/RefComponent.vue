<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const count = ref<number>(0)
const count2: Ref<number> = ref(0)

</script>

<template>
    <h2>Ref</h2>
    {{ count }}<br>
    <button @click="$event => count++">クリック</button>
    <hr>
    {{ count2 }}<br>
    <button @click="$event => count2++">クリック</button>
</template>
