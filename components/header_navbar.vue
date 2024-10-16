<template class="">
  <div class="w-screen  mx-0 fixed py-2 px-2">
    <div class="flex items-center justify-between gap-8 py-4 px-6 transition-colors duration-500"
      :class="{ 'bg-gray-100 bg-opacity-50': scrolled }">
      <NuxtLink class="flex items-center" to="/">
        <Logo class="transition-colors duration-500" :class="{ 'invert': scrolled }"></Logo>
      </NuxtLink>
      <div
        class="items-center grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
        <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
          <li>
            <NuxtLink to="/about"
              class="px-0 py-4 text-gray-50 hover:text-gray-400 font-medium text-xl transition-colors duration-500"
              :class="{ 'text-gray-950': scrolled }">
              <span>О нас</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/catalog"
              class="px-0 py-4 text-gray-50 hover:text-gray-400 font-medium text-xl transition-colors duration-500"
              :class="{ 'text-gray-950': scrolled }">
              <span>Услуги</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts"
              class="px-0 py-4 text-gray-50 hover:text-gray-400 font-medium text-xl transition-colors duration-500"
              :class="{ 'text-gray-950': scrolled }">
              <span>Контакты</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-8">
          <NuxtLink class="font-medium text-xl text-gray-50 hover:text-gray-400 transition-colors duration-500"
            :class="{ 'text-gray-950': scrolled }" to="/auth/login">Авторизация</NuxtLink>
          <NuxtLink class="font-medium text-xl text-gray-50 hover:text-gray-400 transition-colors duration-500"
            :class="{ 'text-gray-950': scrolled }" to="/auth/registration">Регистрация</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  scrolled: Boolean
})
</script>

<style></style>