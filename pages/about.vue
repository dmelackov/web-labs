<template>
  <div>
    <HeaderNavbar :scrolled="scrolled"></HeaderNavbar>
    <div class="snap-y snap-proximity overflow-y-scroll h-screen" ref="el">
      <section
        class="h-screen snap-start w-screen pt-20 px-6 lg:px-20 bg-[url('~/assets/img/landing_2.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="mx-6 md:mx-20 mt-28 md:mt-28 flex flex-row justify-between">
          <h1 class="text-6xl font-medium text-gray-50 leading-tight">
            О НАС
          </h1>
          <div class="flex flex-col gap-12">
            <div class="flex flex-row items-end gap-2">
              <p class="text-9xl text-primary">90</p>
              <p class="text-3xl text-gray-50">Салонов<br> по всей России</p>
            </div>
            <div class="flex flex-row items-end gap-2">
              <p class="text-9xl text-primary">1360</p>
              <p class="text-3xl text-gray-50">Топовых<br> специалистов</p>
            </div>
            <div class="flex flex-row items-end gap-2">
              <div class="flex flex-row"><p class="text-9xl text-primary">1</p><p class="align-top h-full text-primary text-5xl">МЛН</p></div>
              <p class="text-3xl text-gray-50">Счастливых<br> клиентов в год</p>
            </div>
          </div>
        </div>
      </section>
      <section class="h-screen snap-start w-screen">
        <div class="h-full flex justify-between flex-col">
          <div class="flex-grow pt-20 px-20">
            <h2 class="text-8xl text-left">Вакансии</h2>
            <div class="flex flex-row justify-between gap-10 mt-10">
              <template v-for="vac in vacancions">
                <div class="w-4/5 aspect-square bg-cover bg-center" :style="{backgroundImage: 'url(' + vac.image + ')'}">
                  <div class="flex justify-center items-center w-full h-full bg-black bg-opacity-30">
                    <p class="text-6xl text-gray-50">{{ vac.title }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <Footer class="self-end"></Footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const el = ref(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

const vacancions = ref([
  {
    title: "Топ стилист",
    image: "/img/top_style.webp"
  },
  {
    title: "Cтилист",
    image: "/img/style.webp"
  },
  {
    title: "Топ мастер",
    image: "/img/top_master.webp"
  },
  {
    title: "Мастер",
    image: "/img/master.webp"
  }
])

const scrolled = computed(() => {
  return y.value > 10
})


definePageMeta({
  title: 'Персона - О нас'
})
</script>

<style></style>