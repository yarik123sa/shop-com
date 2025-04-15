<script setup>
import mainImg from '@/images/mainImg.png'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero">

      <div class="hero__body size-auto" :style="`background-image: url(${mainImg})`">
        <div class="container">
          <div class="hero__content pt-32 pb-32 max-w-lg  flex flex-col">

          <h1 class="hero__title text-6xl font-bold  pb-4 ">{{ t('mainPage.mainTitle')}}</h1>
            <div class="hero__subTitle text-gray-400 pb-3">
              {{ t('mainPage.mainSubtitle')}}
            </div>

            <div   class="hero__button cursor-pointer text-white rounded-4xl bg-black p-3.5 self-start w-[210px] text-center"  >
              {{t('buttons.shopNow')}}
            </div>

          <div class="hero__items items-hero flex gap-10 pt-7">
            <div class="hero__item">
              <div class="items-hero__title text-4xl font-bold ">200+</div>
              <div class="items-hero__label text-gray-400">International Brands</div>
            </div>
            <div class="hero__item">
              <div class="items-hero__title text-4xl font-bold "  >2,000+</div>
              <div class="items-hero__label text-gray-400 ">High-Quality Products</div>

            </div>
            <div class="hero__item">
              <div class="items-hero__title text-4xl font-bold text">
                30,000+

              </div>
              <div class="items-hero__label text-gray-400 ">
                Happy Customers

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    <div class="container">
    </div>

  </section>
</template>

<style scoped>
.hero__body {
  background-size: cover;
  background-position: center;

}
</style>
