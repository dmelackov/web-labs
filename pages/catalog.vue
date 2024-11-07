<template>
  <div>
    <HeaderNavbar :scrolled="true"></HeaderNavbar>
    <div class="flex flex-col w-screen h-screen pt-20">
      <div class="w-screen py-5 px-10 flex flex-row gap-10 justify-between flex-grow">
        <div class="bg-surface-50 py-10 px-5 flex flex-col w-1/6">
          <p class="text-2xl w-full text-center">Фильтры</p>
          <p class="text-xl mt-5  mb-2">Тип услуги</p>

          <div v-for="category of Object.values(category)" :key="category" class="flex items-center">
            <Checkbox v-model="selectedCategories" :inputId="category" name="category" :value="category" />
            <label class="px-3" :for="category">{{ category }}</label>
          </div>
          <p class="text-xl mt-5 mb-2">Цена</p>
          <div class="flex flex-row justify-between mb-3">
            <InputNumber type="number" class="min-w-0 w-1/3" v-model.number="cost_filter[0]" :min="0" :max="10000">
            </InputNumber>
            <InputNumber type="number" class="w-1/3" v-model.number="cost_filter[1]" :min="0" :max="10000">
            </InputNumber>
          </div>
          <Slider v-model="cost_filter" range class="w-full" :min="0" :max="10000" />
          <p class="text-xl mt-5 mb-2">Длительность</p>
          <div class="flex flex-row justify-between mb-3">
            <InputNumber type="number" class="w-1/3" v-model.number="duration_filter[0]" :maxFractionDigits="1"
              :step="0.5" :min="0" :max="2">
            </InputNumber>
            <InputNumber type="number" class="w-1/3" v-model.number="duration_filter[1]" :maxFractionDigits="1"
              :step="0.5" :min="0" :max="2">
            </InputNumber>
          </div>
          <Slider v-model="duration_filter" range class="w-full" :min="0" :max="2" :step="0.5" />
        </div>
        <div class="flex-grow min-h-0 flex flex-col">
          <InputGroup class="mb-5">
            <InputGroupAddon>
              <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText v-model="search_text" placeholder="Поиск" />
          </InputGroup>
          <div class="overflow-y-scroll min-h-0 flex-grow h-32">
            <div class="grid grid-cols-4 gap-3">
              <Service class="w-" v-for="service in filtered" :service="service" @opened="openDialog(service)">
              </Service>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer> </Footer>
        <Dialog v-model:visible="addDialogVisible" modal header="Запись" :style="{ width: '30rem' }">
          <p class="text-2xl">Услуга: {{ openedItem.title }}</p>
          <div class="flex flex-col gap-2 mt-2">
            <div class="flex items-center justify-between">
              <Button class="w-36" :disabled="openedItem.cost[3] == '-'" @click="addToCart(3)">Топ стилист</Button>
              <p class="text-xl"> {{ openedItem.cost[3] }} ₽</p>
            </div>
            <div class="flex items-center justify-between">
              <Button class="w-36" :disabled="openedItem.cost[2] == '-'" @click="addToCart(2)">Стилист</Button>
              <p class="text-xl"> {{ openedItem.cost[2] }} ₽</p>
            </div>
            <div class="flex items-center justify-between">
              <Button class="w-36" :disabled="openedItem.cost[1] == '-'" @click="addToCart(1)">Топ мастер</Button>
              <p class="text-xl"> {{ openedItem.cost[1] }} ₽</p>
            </div>
            <div class="flex items-center justify-between">
              <Button class="w-36" :disabled="openedItem.cost[0] == '-'" @click="addToCart(0)">Мастер</Button>
              <p class="text-xl"> {{ openedItem.cost[0] }} ₽</p>
            </div>
          </div>

        </Dialog>
      </div>
    </div>

  </div>
</template>

<script setup>

const cartStore = useMyCartStore()
const toast = useToast();
const search_text = ref("")
const selectedCategories = ref([])
const cost_filter = ref([0, 10000])
const duration_filter = ref([0, 2])

const openedItem = ref(null)
const addDialogVisible = ref(false)

function openDialog(item) {
  openedItem.value = item
  addDialogVisible.value = true
}

async function addToCart(cost_index) {
  const workers = ["Мастер", "Топ мастер", "Стилист", "Топ стилист"]
  await cartStore.add_item({
    cost: Number.parseInt(openedItem.value.cost[cost_index]),
    worker: workers[cost_index],
    item: openedItem.value
  })
  toast.add({ summary: "Добавлено в корзину", severity: "success", detail: `Запись к ${workers[cost_index]} на услугу ${openedItem.value.title} добавлена в корзину`, life: 3000})
  openedItem.value = null
  addDialogVisible.value = false
}

const category =
{
  haircuts: "Стрижки",
  styling: "Укладки",
  colorbar: "Color bar"
}

const time_map = {
  "30 мин": 0.5,
  "1 ч": 1,
  "1.5 ч": 1.5,
  "2 ч": 2
}

const catalog_store = useCalatogStore()

await callOnce(catalog_store.fetch)


const filtered = computed(() => {
  let catalog = catalog_store.catalog
  let search = search_text.value.toLowerCase();
  let filtered = catalog.filter(function (elem) {
    if (selectedCategories.value.length != 0) {
      if (!selectedCategories.value.includes(elem.category))
        return false
    }
    if (!(duration_filter.value[0] <= time_map[elem.duration] && time_map[elem.duration] <= duration_filter.value[1]))
      return false
    let mapped_cost = []
    for (let i = 0; i < elem.cost.length; i++) {
      const element = elem.cost[i];
      if (element != "-") {
        mapped_cost.push(Number.parseInt(element))
      }
    }
    mapped_cost.sort()
    if (cost_filter.value[0] > mapped_cost[mapped_cost.length - 1])
      return false
    if (cost_filter.value[1] < mapped_cost[0])
      return false
    if (search === "") return true;
    else return elem.title.toLowerCase().indexOf(search) > -1;
  });
  return filtered;
})


definePageMeta({
  title: 'Персона - Услуги'
})
</script>

<style>
.p-inputnumber-input {
  width: 100%
}
</style>