<template>
  <h2>Counter: {{ count }}</h2>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
</template>

<script setup>
  import { ref } from "vue";
  const count = ref(0);
</script>
