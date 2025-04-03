<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 class="text-3xl font-bold text-blue-600">¡Tailwind está funcionando! 🎉</h1>
      <p class="mt-2 text-gray-700">Este es un texto con estilos de Tailwind.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
