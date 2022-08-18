<template>
  <div class="flex items-center gap-2 cursor-pointer">
    <AppCheckbox v-if="checkboxVisible" :model-value="modelValue"/>
    <img :src="icon" v-if="icon"/>
    <p class="text-sm whitespace-nowrap" v-if="label">{{ label }}</p>
  </div>
</template>

<script setup>
import AppCheckbox from "../../checkboxes/AppCheckbox";

const props = defineProps({
  modelValue: Boolean,
  checkboxVisible: Boolean,
  label: String,
  icon: String,
})
</script>

<style scoped>

</style>