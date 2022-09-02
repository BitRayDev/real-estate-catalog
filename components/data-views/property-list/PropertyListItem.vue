<template>
  <div class="flex justify-between items-end h-10 py-1 border-b border-blue-400">
    <slot name="name">
      <p class="text-sm">{{ label }}</p>
    </slot>
    <slot name="value">
      <p class="text-sm">{{ value }}</p>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  label: [String, Number],
  value: [String, Number],
})
</script>

<style scoped>

</style>