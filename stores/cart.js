import { useStorage } from "@vueuse/core"

const cartLocalStorage = useStorage('cart-store', [])

export const useMyCartStore = defineStore({
  id: 'myCartStore',
  state: () => ({
    items: []
   }),
  actions: {
    async load(){
      this.items = await cartLocalStorage.value
      console.log("Cart loaded")
    },
    async save(){
      cartLocalStorage.value = this.items
    },
    getCount(){
      return this.items.length
    },
    async add_item(item){
      this.items.push(item)
      await this.save()
    },
    async clear_items(){
      this.items.length = 0
      await this.save()
    },
    async remove_item(item){
      this.items.splice(this.items.indexOf(item), 1)
      await this.save()
    }
  }
})
