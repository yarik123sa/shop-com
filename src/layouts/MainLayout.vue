<script setup>
import HeaderComp from "@/components/HeaderComp.vue";

import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <HeaderComp/>

  <slot>

  </slot>
  <FooterComp/>
</template>

<style scoped>

</style>