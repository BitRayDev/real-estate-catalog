<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <div class="flex flex-col flex-grow w-full lg:w-5/6 xl:w-2/3 mx-auto p-4">
      <slot/>
    </div>
    <AppFooter/>
  </div>
</template>

<script setup>

import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
</script>

<style scoped>

</style>