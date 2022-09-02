<template>
  <NuxtLink :to="itemData.to">
    <div class="flex gap-2 items-center lg:w-72 px-4 py-3 cursor-pointer hover:bg-blue-50">
      <MaterialIcon class="text-xl">{{ itemData.icon }}</MaterialIcon>
      <p class="hidden md:block text-sm">{{ itemData.label }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
import MaterialIcon from "../../icons/MaterialIcon";

const props = defineProps({
  itemData: Object
})
</script>

<style scoped>

</style>