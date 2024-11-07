<template>
  <div class="bg-surface-50 flex flex-col">
    <div class="bg-center bg-cover h-32 w-full" :style="{backgroundImage: `url('${service.image}')`}">
    </div>
    <div class="px-5">
      <p class="text-xl font-bold mb-3">{{ service.title }}</p>
      <div class="flex flex-row">
        <p class="w-6 text-center">₽</p>
        <p> <template v-for="(cost, index) in service.cost">{{ cost }}{{ index == 3 ? '' : ' / ' }}</template></p>
      </div>
      <div class="flex flex-row">
        <p class="w-6 text-center mb-3"><i class="pi pi-clock"></i></p>
        <p>{{ service.duration }}</p>
      </div>
    </div>
    <p class="bg-surface-950 text-gray-50 w-full text-center py-2 cursor-pointer" @click="openEvent">Записаться</p>
  </div>
</template>

<script setup>
const emit = defineEmits(["opened"])

function openEvent(){
  emit("opened")
}
const props = defineProps({
  service: Object
})
</script>

<style></style>