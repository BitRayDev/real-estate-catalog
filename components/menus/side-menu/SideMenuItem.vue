<template>
  <NuxtLink :to="itemData.to">
    <p class="px-4 py-3 text-sm cursor-pointer hover:bg-blue-50">
      {{ itemData.label }}
    </p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  itemData: Object
})
</script>

<style scoped>

</style>