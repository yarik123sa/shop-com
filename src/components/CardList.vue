<script setup>
defineProps({
  title: String,
  items: Array,
})
</script>

<template>
  <section class="card-list">
    <div class="container">
      <h3 class="card-list__title text-center text-5xl font-bold mb-10 mt-20 uppercase">{{ title }}</h3>

      <div class="card-list__items items-card flex gap-4">
        <div v-for="item in items" class="card-list__item cursor-pointer" :key="item.id">
          <img :src="item.image" alt="photo" class="items-card__image" />

          <div class="card-list__content flex flex-col gap-0.2 mt-1.5 fd">
            <div class="items-card__title font-bold text-xl">{{ item.title }}</div>

<!--            <div class="items-card__rating">{{ item.rating }}</div>-->

            <div class="items-card__prices text-2xl flex gap-3 font-bold items-center">
              <div class="items-card__price">{{ item.price }}</div>
              <div v-if="item.oldPrice" class="items-card__oldPrice text-gray-400 line-through">{{item.oldPrice}}</div>


              <div  v-if="item.discount " class="items-card__discount bg-[#FF3333] text-center text-xs text-white  p-2 font-medium  text-4xl rounded-md">
                {{item.discount}}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
