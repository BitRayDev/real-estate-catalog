<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <div class="flex flex-col flex-grow w-2/3 mx-auto py-4">
      <slot/>
    </div>
  </div>
</template>

<script setup>

import AppHeader from "../components/AppHeader";
</script>

<style scoped>

</style>