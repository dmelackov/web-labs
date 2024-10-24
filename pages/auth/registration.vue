<script setup>
import { ref } from 'vue';
const phone = ref('');
const password = ref('');
const repeat_password = ref('')
const politics1 = ref(false);
const politics2 = ref(false);

const authStore = useAuthStore()
const toast = useToast();
const router = useRouter()


async function registration() {
  if (!phone.value || !password.value || !repeat_password.value){
    toast.add({ summary: "Ошибка", severity: "error", detail: "Вы не заполнили поля", life: 3000})
    return
  }
  if(!politics1.value) {
    toast.add({ summary: "Ошибка", severity: "error", detail: "Вы не приняли соглашение о пользовании", life: 3000})
    return
  }
  if(!politics2.value) {
    toast.add({ summary: "Ошибка", severity: "error", detail: "Вы не приняли использование куки", life: 3000})
    return
  }
  if(password.value != repeat_password.value){
    toast.add({ summary: "Ошибка", severity: "error", detail: "Указанные пароли не совпадают", life: 3000})
    return
  }
  const result = await authStore.registration(phone.value, password.value, repeat_password.value)
  if(result.status != 200){
    toast.add({ summary: "Ошибка", severity: "error", detail: result.data, life: 3000})
  } else {
    toast.add({ summary: "Удачно", severity: "success", detail: "Вы зарегистрировались", life: 3000})
    router.push({path: "/auth/login"})
  }
}


definePageMeta({
  title: 'Персона - Регистрация',
  need_not_auth: true
})
</script>

<template>
  <div>
    <HeaderNavbar :scrolled="true" />
    <div class="bg-surface-100 flex items-center justify-between min-h-screen min-w-[100vw] overflow-hidden flex-col">
      <div class="flex flex-col items-center justify-center flex-grow">
        <div
          style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
          <div class="w-full bg-surface-0 py-20 px-8 sm:px-20">
            <div class="text-center mb-8">
              <div class="text-surface-900 text-3xl font-medium mb-4">Добро пожаловать в Персону</div>
              <span class="text-muted-color font-medium">Зарегестрируйтесь, чтобы продолжить</span>
            </div>

            <div>
              <label for="email1" class="block text-surface-900 text-xl font-medium mb-2">Номер телефона</label>
              <InputMask id="email1" type="phone" mask="+7 999-999-99 99" placeholder="+7 999-999-99 99"
                class="w-full md:w-[30rem] mb-8" v-model="phone" />

              <label for="password1" class="block text-surface-900 font-medium text-xl mb-2">Пароль</label>
              <Password id="password1" v-model="password" placeholder="Пароль" :toggleMask="true" class="mb-4" fluid
                :feedback="false"></Password>

              <label for="password2" class="block text-surface-900 font-medium text-xl mb-2">Повторите пароль</label>
              <Password id="password2" v-model="repeat_password" placeholder="Пароль" :toggleMask="true" class="mb-4" fluid
                :feedback="false"></Password>

              <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                <div class="flex items-center">
                  <Checkbox v-model="politics1" id="politics1" binary class="mr-2"></Checkbox>
                  <label for="politics1">Я принимаю условия соглашения о пользовании</label>
                </div>
              </div>

              <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                <div class="flex items-center">
                  <Checkbox v-model="politics2" id="politics2" binary class="mr-2"></Checkbox>
                  <label for="politics2">Я принимаю политику cookie</label>
                </div>
              </div>
              <Button label="Зарегистрироваться" class="w-full" @click="registration"></Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>