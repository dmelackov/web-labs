<template>
  <div class="flex flex-row w-max gap-3">
    <div class="flex flex-col w-96">
      <p class="text-2xl text-gray-950 uppercase">{{ props.filial.title }}</p>
      <p class="over">{{ props.filial.address }}</p>
      <div class="mt-3">
        <p>Контакты:</p>
        <template v-for="phone in props.filial.phones">
          <p>{{ phone }}</p>
        </template>
      </div>
      <div class="flex flex-row gap-5 mt-3">
        <p>Режим работы:</p>
        <p>{{ props.filial.working_time }}</p>
      </div>
    </div>
    <div class="min-h-0 h-full">
      <img class="min-h-0 h-32" :src="props.filial.image" alt="">
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  filial: Object
})
</script>

<style></style>