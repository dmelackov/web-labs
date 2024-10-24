export const useCalatogStore = defineStore('catalogStore', {
    state: () => ({
      catalog: []
    }),
    actions: {
      async fetch() {
        const { data } = await useMyFetch('/api/catalog/')
        const catalogEntries = data.value
        for (let i = 0; i < catalogEntries.length; i++) {
            catalogEntries[i].cost = JSON.parse(catalogEntries[i].cost)
        }
        this.catalog = catalogEntries
      }
    }
  })