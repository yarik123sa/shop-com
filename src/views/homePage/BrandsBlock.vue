<script setup>
import { useBrandStore } from '@/stores/useBrandStore.js'

const brandsStore = useBrandStore()
</script>

<template>
    <div class="bg-black flex p-8 justify-between">
      <img v-for="brand in brandsStore.getBrands" :src="brand.img" :alt="brand.name" />
    </div>
</template>

<style scoped></style>
