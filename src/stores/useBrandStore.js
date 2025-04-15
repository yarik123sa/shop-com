import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { brands as brandList } from '@/constants/brands.js'

export const useBrandStore = defineStore('brand', () => {
  const brands = ref(brandList)
  const getBrands = computed(() => brands.value)



  return {
    brands,
    getBrands,
  }
})


