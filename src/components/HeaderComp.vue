<script setup>


import { useI18n } from 'vue-i18n'
const { t ,locale} = useI18n()
function changeLanguage(lang) {
  locale.value = lang
}
</script>

<template>
  <header>
    <nav>
      <router-link to="/">{{ t('menu.home') }}</router-link> |
      <router-link to="/contacts">{{ t('menu.contacts') }}</router-link>

      <div>
<!--           <span>Current language: {{ $i18n.locale }}</span>-->
        <button @click="changeLanguage('en')">EN</button>
        <button @click="changeLanguage('ua')">UA</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>




<!--<template>-->
<!--  <nav>-->
<!--    <router-link to="/"> {{ $t('menu.home') }} </router-link> |-->
<!--    <router-link to="/contacts"> {{ $t('menu.contacts') }} </router-link>-->
<!--    <div>-->
<!--      <span>Current language: {{ $i18n.locale }}</span>-->
<!--      <button @click="changeLanguage('en')">EN</button>-->
<!--      <button @click="changeLanguage('ua')">UA</button>-->
<!--    </div>-->
<!--  </nav>-->
<!--  <router-view />-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    changeLanguage(lang) {-->
<!--      this.$i18n.locale = lang-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->
