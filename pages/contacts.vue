<template>
  <div>
    <HeaderNavbar class="z-50" :scrolled="true"></HeaderNavbar>
    <div class="snap-y snap-proximity overflow-y-scroll h-screen">
      <section class="pt-20 px-20 w-screen h-screen flex flex-col justify-between pb-20 gap-10 flex-nowrap">
        <h2 class="text-8xl text-left">Где нас найти</h2>
        <div class="flex flex-row gap-10 min-h-0 w-full h-full">
          <div class="bg-surface-50 overflow-y-scroll py-3 px-5 flex flex-col gap-3 w-max">
            <template v-for="f in contacts">
              <Filial :filial="f"></Filial>
            </template>
          </div>
          <div class="flex-1">
            <YandexMap v-model="map" :settings="{
              location: {
                center: [37.617644, 55.755819],
                zoom: 11,
              },
            }" width="100%" height="100%">
              <YandexMapDefaultSchemeLayer />
              <YandexMapDefaultFeaturesLayer />
              <YandexMapDefaultMarker v-for="marker in markers" :settings="marker">
              </YandexMapDefaultMarker>
            </YandexMap>
          </div>
        </div>
      </section>
      <section class="h-screen snap-start w-screen">
        <div class="h-full flex justify-between flex-col gap-3">
          <div class="flex-grow pt-20 px-20 flex flex-col gap-5">
            <h2 class="text-8xl text-left">Обратная связь</h2>
            <div class="flex-grow flex w-full justify-center">
              <div class="flex bg-surface-0 w-1/2 p-10">
                <div class="card flex flex-col gap-4 w-full">
                  <div class="flex flex-row gap-4 w-full">
                    <div class="flex flex-col gap-2 flex-grow">
                      <label for="name1" class="text-xl">Ваше имя</label>
                      <InputText id="name1" type="text" placeholder="Моё имя"/>
                    </div>
                    <div class="flex flex-col gap-2 flex-grow">
                      <label for="email1" class="text-xl">Почта для ответа</label>
                      <InputText id="email1" type="text" placeholder="my@example.ru"/>
                    </div>
                  </div>

                  <div class="flex flex-col flex-grow gap-2">
                    <label class="text-xl" for="address">Сообщение</label>
                    <Textarea class="flex-grow" id="address" placeholder="Расскажите о своей проблеме"></Textarea>
                  </div>
                  <Button label="Отправить" class="w-full" as="router-link" to="/"></Button>
                </div>
              </div>
            </div>
          </div>
          <Footer class="self-end"></Footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
const map = shallowRef(null);

const contacts = ref([
  {
    title: "Персона Лубянка Политех",
    address: "г.Москва, Лубянский проезд, д.5",
    phones: ["+7 (968) 087-85-45", "+7 (499) 430-06-23"],
    working_time: "пн‑вс: 10:00‑22:00",
    image: "https://persona.ru/upload/iblock/ba3/4m4n3465gbnql33p3qjdcnod89jaf9ku.jpg",
    coordinates: [55.758630, 37.629709]
  },
  {
    title: "Персона Преображенка",
    address: "г.Москва, ул. Краснобогатырская, д.90, стр2",
    phones: ["+7 (499) 168-77-78", "+7 (916) 336-53-06"],
    working_time: "пн‑вс: 10:00‑22:00",
    image: "https://persona.ru/upload/iblock/ea6/ea6060d06c2cc74d8c2cea815b61b28f.jpg",
    coordinates: [55.800428, 37.710063]
  },
  {
    title: "Персона Фили",
    address: "г. Москва, ул. Большая Филёвская, д. 4",
    phones: ["+7 (925) 712-03-75"],
    working_time: "пн‑вс: 10:00‑22:00",
    image: "https://persona.ru/upload/iblock/2b7/ucgxn3t4u7pyykiy3hydepfk2bh9eiys.JPG",
    coordinates: [55.753686, 37.513143]
  },
  {
    title: "Персона Университет",
    address: "г.Москва, Ломоносовский пр-т, д. 25, корп. 2 ЖК \"Доминион\"",
    phones: ["+7 (495) 989-00-05", "+7 (977) 689-00-05", "+7 (977) 628-00-05"],
    working_time: "пн‑вс: 10:00‑22:00",
    image: "https://persona.ru/upload/iblock/892/892f677878fc7029f1d4f3a397f952de.jpg",
    coordinates: [55.695195, 37.530229]
  },
  {
    title: "Персона Чертаново",
    address: "г. Москва, Симферопольский бульвар, д. 29 к 3",
    phones: ["+7 (495) 120-22-03"],
    working_time: "пн‑вс: 10:00‑22:00",
    image: "https://persona.ru/upload/iblock/227/vdecgqv77llfzykacck1cg9jt5q5h0gr.jpg",
    coordinates: [55.646629, 37.606514]
  }
])

const markers = computed(() => {
  let new_markers = []
  for (let i = 0; i < contacts.value.length; i++) {
    const element = contacts.value[i];
    let new_coords = [element.coordinates[1], element.coordinates[0]]
    new_markers.push({
      coordinates: new_coords,
      color: "#ea580c",
      title: element.title
    })
  }
  return new_markers
})


definePageMeta({
  title: 'Персона - Контакты'
})
</script>

<style></style>