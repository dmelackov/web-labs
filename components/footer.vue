<template>
  <div class="w-screen bg-gray-900 flex p-10 justify-between">
    <p class="text-gray-50">
      © 2024 Персона. Все права защищены.
    </p>
    <p class="text-gray-50 hover:text-gray-400 cursor-pointer" @click="openPolicy">
      Политика конфиденциальности
    </p>
  </div>
</template>

<script setup>
function openPolicy() {
  let create_window = window.open("/documents/policy.pdf", "new window", "popup")
}
</script>

<style>

</style>