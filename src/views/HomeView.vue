<script setup>
import HeroBlock from '@/views/homePage/HeroBlock.vue'
import BrandsBlock from '@/views/homePage/BrandsBlock.vue'

import CardList from '@/components/CardList.vue'
import { onMounted,ref } from 'vue'
import axios from 'axios'



const newClothes = ref([])
const topSelling = ref([])
onMounted(async () => {
  try {
    const [ newRes,topRes ] = await Promise.all([

      await axios.get('https://67fd25743da09811b174db5b.mockapi.io/newClothes'),

      await axios.get('https://67fd25743da09811b174db5b.mockapi.io/topSelling')

    ])


    newClothes.value = newRes.data
    topSelling.value = topRes.data
    console.log(topSelling.value)

  }
  catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <main>
    <MainLayout>
      <hero-block></hero-block>

      <brands-block></brands-block>

      <CardList  :items="newClothes" title="NEW ARRIVALS" ></CardList>
      <CardList  :items="topSelling" title="top selling" ></CardList>
    </MainLayout>
  </main>
</template>
