<template>
  <div>
    <HeaderNavbar :scrolled="scrolled"></HeaderNavbar>
    <div class="snap-y snap-proximity overflow-y-scroll h-screen" ref="el">
      <section
        class="h-screen snap-start w-screen pt-20 px-6 lg:px-20 bg-[url('~/assets/img/landing_1.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="mx-6 md:mx-20 mt-28 md:mt-28 flex flex-col">
          <h1 class="text-6xl font-medium text-gray-50 leading-tight">
            Красоту Творим Любовью!
          </h1>
          <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-300">
            Ваш стиль - наша страсть!
          </p>
          <NuxtLink class="p-4 bg-gray-50 w-max mt-6 hover:bg-gray-400 transition-colors duration-200" to="/catalog">
            Записаться
          </NuxtLink>
        </div>
      </section>
      <section class="h-screen snap-start w-screen px-20 pt-20">
        <h2 class="text-8xl text-left">К кому вы хотите записаться</h2>
        <div class="flex flex-row justify-between mx-20 mt-10">
          <div class="bg-gray-50 flex flex-col w-1/5">
            <img src="~/assets/img/top_style.webp" alt="" srcset="" class="w-full h-80">
            <div class="p-4">
              <p class="text-3xl text-gray-950">Топ стилист</p>
              <p class="text-1xl h-12 text-gray-700">Расскажите, чем вы хотите заниматься</p>
              <div class="flex w-full items-center mt-5 flex-row">
                <div class="grid grid-cols-2 grid-flow-row m-auto gap-x-3">
                  <p class="font-bold">Стаж</p>
                  <p>от 7 лет</p>
                  <p class="font-bold">Окрашивание</p>
                  <p>от 4100 р.</p>
                  <p class="font-bold">Стрижка</p>
                  <p>4000 р.</p>
                </div>
              </div>
            </div>
            <NuxtLink class="w-full p-4 bg-gray-950 mt-6 hover:bg-gray-800 transition-colors duration-200 text-gray-50"
              to="/catalog">Записаться
            </NuxtLink>
          </div>
          <div class="bg-gray-50 flex flex-col w-1/5">
            <img src=" ~/assets/img/style.webp" alt="" srcset="" class="w-full h-80">
            <div class="p-4">
              <p class="text-3xl text-gray-950">Cтилист</p>
              <p class="text-1xl h-12 text-gray-700">Скажите ему, чем вы занимаетесь</p>
              <div class="flex w-full items-center mt-5 flex-row">
                <div class="grid grid-cols-2 grid-flow-row m-auto gap-x-3">
                  <p class="font-bold">Стаж</p>
                  <p>от 5 лет</p>
                  <p class="font-bold">Окрашивание</p>
                  <p>от 3700 р.</p>
                  <p class="font-bold">Стрижка</p>
                  <p>3100 р.</p>
                </div>
              </div>
            </div>
            <NuxtLink class="w-full p-4 bg-gray-950 mt-6 hover:bg-gray-800 transition-colors duration-200 text-gray-50"
              to="/catalog">Записаться
            </NuxtLink>
          </div>
          <div class="bg-gray-50 flex flex-col w-1/5">
            <img src=" ~/assets/img/top_master.webp" alt="" srcset="" class="w-full h-80">
            <div class="p-4">
              <p class="text-3xl text-gray-950">Топ мастер</p>
              <p class="text-1xl h-12 text-gray-700">Посоветует, какую лучше стрижку сделать</p>
              <div class="flex w-full items-center mt-5 flex-row">
                <div class="grid grid-cols-2 grid-flow-row m-auto gap-x-3">
                  <p class="font-bold">Стаж</p>
                  <p>от 3-х лет</p>
                  <p class="font-bold">Окрашивание</p>
                  <p>от 3400 р.</p>
                  <p class="font-bold">Стрижка</p>
                  <p>2500 р.</p>
                </div>
              </div>
            </div>
            <NuxtLink class="w-full p-4 bg-gray-950 mt-6 hover:bg-gray-800 transition-colors duration-200 text-gray-50"
              to="/catalog">Записаться
            </NuxtLink>
          </div>
          <div class="bg-gray-50 flex flex-col w-1/5">
            <img src=" ~/assets/img/master.webp" alt="" srcset="" class="w-full h-80">
            <div class="p-4">
              <p class="text-3xl text-gray-950">Мастер</p>
              <p class="text-1xl h-12 text-gray-700">Сделает стрижку, которую вы хотите</p>
              <div class="flex w-full items-center mt-5 flex-row">
                <div class="grid grid-cols-2 grid-flow-row m-auto gap-x-3">
                  <p class="font-bold">Стаж</p>
                  <p>от 1 года</p>
                  <p class="font-bold">Окрашивание</p>
                  <p>от 2800 р.</p>
                  <p class="font-bold">Стрижка</p>
                  <p>1800 р.</p>
                </div>
              </div>
            </div>
            <NuxtLink class="w-full p-4 bg-gray-950 mt-6 hover:bg-gray-800 transition-colors duration-200 text-gray-50"
              to="/catalog">Записаться
            </NuxtLink>
          </div>
        </div>
      </section>
      <section class="h-screen snap-start w-screen pt-20 px-20">
        <h2 class="text-8xl text-left">Наши ресурсы</h2>
        <div class="flex flex-row justify-around h-full mt-5">
          <div class="bg-gray-50 w-1/5 h-4/5 flex justify-between flex-col">
            <div class="flex-grow p-10">
              <p class="text-2xl text-gray-950">Франчайзинг</p>
              <p class="text-1xl h-12 text-gray-700">Откройте свою Персону</p>
            </div>
            <div class="w-full">
              <img src="~/assets/img/resource_1.png" alt="" class="m-auto">
            </div>
          </div>
          <div class="bg-gray-50 w-1/5 h-4/5 flex justify-between flex-col">
            <div class="flex-grow p-10">
              <p class="text-2xl text-gray-950">Бизнес школа</p>
              <p class="text-1xl h-12 text-gray-700">Узнайте как руководить салоном</p>
            </div>
            <div class="w-full">
              <img src="~/assets/img/resource_2.png" alt="" class="m-auto">
            </div>
          </div>
          <div class="bg-gray-50 w-1/5 h-4/5 flex justify-between flex-col">
            <div class="flex-grow p-10">
              <p class="text-2xl text-gray-950">Школа стилистов</p>
              <p class="text-1xl h-12 text-gray-700">Обучаем парикмахеров, визажистов и имиджмейкеров</p>
            </div>
            <div class="w-full">
              <img src="~/assets/img/resource_3.png" alt="" class="m-auto">
            </div>
          </div>
          <div class="bg-gray-50 w-1/5 h-4/5 flex justify-between flex-col">
            <div class="flex-grow p-10">
              <p class="text-2xl text-gray-950">Имидж агенство</p>
              <p class="text-1xl h-12 text-gray-700">Закажите имидж для известных медийных лиц</p>
            </div>
            <div class="w-full">
              <img src="~/assets/img/resource_4.png" alt="" class="m-auto">
            </div>
          </div>
        </div>
      </section>
      <section class="h-screen snap-start w-screen">
        <div class="h-full flex justify-between flex-col">
          <div class="flex-grow pt-20 px-20">
            <h2 class="text-8xl text-left">Отчеты с мероприятий</h2>
            <div class="w-full flex justify-center mt-10">
              <Carousel class="min-w-0" :value="events" :numVisible="1" :numScroll="1" circular="true">
                <template #item="slotProps">
                  <div class="w-full flex justify-center">
                    <div class="w-max">
                      <img :src="slotProps.data.image" alt="">
                      <p class="text-2xl text-gray-950">{{ slotProps.data.title }}</p>
                      <p class="text-1xl h-12 text-gray-700">{{ slotProps.data.date }}</p>
                    </div>
                  </div>
                </template>
              </Carousel>
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

const events = [
  {
    title: "Рождественнская песенка года",
    image: "/img/event_1.png",
    date: "30 декабря 2023"
  },
  {
    title: "Грандиозное ледовое шоу Ильи Авербуха \"Кармен\"",
    image: "/img/event_2.png",
    date: "5 декабря 2023"
  }
]

const scrolled = computed(() => {
  return y.value > 10
})

definePageMeta({
  title: 'Персона'
})
</script>
