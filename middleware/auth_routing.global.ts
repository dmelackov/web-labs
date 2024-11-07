export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()
    await authStore.fetch()
    if (to.meta?.need_not_auth && authStore.isAuth){
        return navigateTo("/")
    }
})
