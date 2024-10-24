<template>
  <Toast />
  <div class="bg-gray-100">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>


<script setup>

const authStore = useAuthStore()


await callOnce(authStore.fetch)
</script>