<template>
  <img class="flex-shrink-0 rounded-full w-48 h-48 border border-black/5 shadow-md shadow-black/5 object-cover" :src="src"/>
</template>

<script setup>
const props = defineProps({
  src: String,
})
</script>

<style scoped>

</style>