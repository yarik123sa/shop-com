<script setup>
import {ref,onMounted} from 'vue'
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
    console.log("Sd")
  }
}
</script>

<template>
  <div class="top-header bg-black text-white flex items-center p-2" ref="topHeader">
    <!-- Центрований блок з текстом -->
    <div class="top-header__label flex-1 flex justify-center gap-2 items-center">
      <div class="top-header__text">
        {{ t('header.headerText') }}
      </div>
      <div class="top-header__link underline">
        {{ t('header.headerLink') }}
      </div>
    </div>

    <!-- Іконка справа -->
    <div @click="closeTopHeader()" class="ml-auto  cursor-pointer hover:rotate-180  transition  duration-600 ease-in-out " ref="closeIcon" >
      <font-awesome-icon  :icon="['fas', 'xmark']" size="2x"  />
    </div>
  </div>

  <header>
    <nav>
      <router-link to="/">{{ t('menu.home') }}</router-link>
      |
      <router-link to="/contacts">{{ t('menu.contacts') }}</router-link>

      <div>
        <button @click="changeLanguage('en')" class="cursor-pointer">EN</button>
        <button @click="changeLanguage('ua')" class="cursor-pointer">UA</button>
      </div>
    </nav>
  </header>
</template>

<style scoped >
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
