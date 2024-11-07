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
        <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-8 items-center">
          <p class="text-gray-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer"
            @click="cartDialogVisibility = true" :class="{ 'text-gray-950': scrolled }" to="/cart">
            <OverlayBadge v-if="cartStore.getCount() > 0" :value="cartStore.getCount()">
              <i class="pi pi-shopping-cart text-4xl"></i>
            </OverlayBadge>
            <i class="pi pi-shopping-cart text-4xl" v-else></i>
          </p>
          <NuxtLink class="font-medium text-xl text-gray-50 hover:text-gray-400 transition-colors duration-500"
            :class="{ 'text-gray-950': scrolled }" to="/auth/login" v-if="!authStore.isAuth">Авторизация</NuxtLink>
          <NuxtLink class="font-medium text-xl text-gray-50 hover:text-gray-400 transition-colors duration-500"
            :class="{ 'text-gray-950': scrolled }" to="/auth/registration" v-if="!authStore.isAuth">Регистрация
          </NuxtLink>
          <p class="font-medium text-xl text-gray-50 hover:text-gray-400 transition-colors duration-500 h-max cursor-pointer"
            :class="{ 'text-gray-950': scrolled }" @click="logout" v-if="authStore.isAuth">{{ authStore.userInfo.phone
            }}</p>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="cartDialogVisibility" modal header="Корзина" :style="{ width: '60rem' }">

      <DataTable :value="cartStore.items" tableStyle="min-width: 50rem">
        <Column field="item.title" header="Услуга"></Column>
        <Column field="cost" header="Цена"></Column>
        <Column field="worker" header="Мастер"></Column>
        <Column class="w-24 !text-end">
          <template #body="{ data }">
            <Button icon="pi pi-trash" @click="deleteRow(data)" severity="secondary" rounded></Button>
          </template>
        </Column>
      </DataTable>
      <div class="flex flex-col gap-1 my-3">
        <InputGroup>
          <InputText placeholder="Промокод" v-model="promo"></InputText>
          <Button label="Активировать" @click="activatePromo"> </Button>
        </InputGroup>
        <p class="text-xl">Итого - {{ resultCost }}</p>
        <p class="text-xl">Скидка - {{ resultCost * discount / 100 }}</p>
        <p class="text-xl">Итого со скидкой - {{ resultCost * (100 - discount) / 100 }}</p>
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Оформить заказ" @click="order"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
const authStore = useAuthStore()
const toast = useToast();
const cartStore = useMyCartStore()
const discount = ref(0)

const promo = ref("")

const cartDialogVisibility = ref(false)

await callOnce(authStore.fetch)
await callOnce(cartStore.load)


function deleteRow(data){
  cartStore.remove_item(data)
}
function activatePromo() {
  if (promo.value == "SALE10") {
    toast.add({ summary: "Промокод активирован", severity: "success", life: 3000 })
    discount.value = 10
  } else {
    toast.add({ summary: "Промокод не найден", severity: "error", life: 3000 })
    discount.value = 0
  }
}

const resultCost = computed(() => {
  let total = 0
  for (let i = 0; i < cartStore.items.length; i++) {
    total = total + cartStore.items[i].cost
  }
  return total
})

async function order() {
  await cartStore.clear_items()
  toast.add({ summary: "Заказ оформлен", severity: "success", life: 3000 })
  cartDialogVisibility.value = false
}
async function logout() {
  await authStore.logout()
  toast.add({ summary: "Вы вышли из аккаунта", severity: "success", life: 3000 })
}

defineProps({
  scrolled: Boolean
})
</script>

<style></style>