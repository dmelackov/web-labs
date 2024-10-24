export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuth: false,
    userInfo: {
      phone: null
    }
  }),
  actions: {
    async fetch() {
      const { data } = await useMyFetch('/api/auth')
      this.isAuth = data.value.isAuth
      this.userInfo = data.value.userInfo
    },
    async login(login, password, remember_me) {
      const { data, status, error } = await useMyFetch('/api/auth/login', {
        method: "post",
        body: {
          phone: login,
          password: password,
          remember_me: remember_me
        }
      })
      await this.fetch()
      if (status.value == "error")
        return {
          status: error.value.statusCode,
          data: error.value.data?.detail
        }
      return {
        status: 200,
        data: data.value
      }
    },
    async registration(login, password, repeat_password) {
      const { data, status, error } = await useMyFetch('/api/auth/registration', {
        method: "post",
        body: {
          phone: login,
          password: password,
          password_again: repeat_password
        }
      })
      await this.fetch()
      if (status.value == "error")
        return {
          status: error.value.statusCode,
          data: error.value.data?.detail
        }
      return {
        status: 200,
        data: data.value
      }
    },
    async logout() {
      const { data, status, error } = await useMyFetch('/api/auth/logout', {
        method: "post"
      })
      await this.fetch()
    }
  }
})