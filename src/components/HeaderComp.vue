<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function changeLanguage(lang) {
  locale.value = lang
}

const closeIcon = ref(null)
const topHeader = ref(null)

function closeTopHeader() {
  if (closeIcon.value) {
    topHeader.value.classList.add('close-header')
    console.log('Sd')
  }
}
</script>

<template>
  <div class="top-header bg-black text-white flex items-center p-2" ref="topHeader">
    <div class="top-header__label flex-1 flex justify-center gap-2 items-center">
      <div class="top-header__text">
        {{ t('header.headerText') }}
      </div>
      <div class="top-header__link underline">
        {{ t('header.headerLink') }}
      </div>
    </div>

    <div
      @click="closeTopHeader()"
      class="ml-auto cursor-pointer hover:rotate-180 transition duration-600 ease-in-out"
      ref="closeIcon"
    >
      <font-awesome-icon :icon="['fas', 'xmark']" size="2x" />
    </div>
  </div>

  <header class="header">
    <div class="container">
      <div class="header__body flex items-center  ">
        <img src="../images/logo.svg" alt="" />
        <nav class="flex ml-20  w-full gap-6 items-center">
          <router-link to="/">{{ t('header.menu.shop') }}</router-link>
          <router-link to="/contacts">{{ t('header.menu.sale') }}</router-link>
          <router-link to="/contacts">{{ t('header.menu.arrivals') }}</router-link>
          <router-link to="/contacts">{{ t('header.menu.brands') }}</router-link>





          <input type="text" :placeholder="t('header.menu.placeholder')" class="bg-[#f0f0f0] p-4 rounded-2xl w-1/2"  >

          <div class="flex gap-2">
            <button @click="changeLanguage('en')" class="cursor-pointer">EN</button>
            <button @click="changeLanguage('ua')" class="cursor-pointer">UA</button>
          </div>
          <div class="header__icons icons-header flex gap-4">
            <div class="icons-header__cart cursor-pointer">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </div>
            <div class="icons-header__user cursor-pointer">
              <font-awesome-icon :icon="['fas', 'user']" />
            </div>
          </div>
        </nav>


      </div>
    </div>
  </header>
</template>

<style scoped>
.close-header {
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}
</style>
