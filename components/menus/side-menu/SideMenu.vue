<template>
  <div class="flex flex-col w-fit h-fit border border-black/5 shadow-md shadow-black/5 rounded-2xl overflow-hidden">
    <SideMenuItem v-for="item in items" :itemData="item" />
  </div>
</template>

<script setup>
import SideMenuItem from "./SideMenuItem";

const props = defineProps({
  items: Array,
})
</script>

<style scoped>

</style>