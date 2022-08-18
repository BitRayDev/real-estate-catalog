<template>
  <div>
    <p>{{ label }}</p>
    <div class="flex gap-2">
      <TextField type="number" class="basis-0 grow" placeholder="От" :min="min" :max="max"/>
      <TextField type="number" class="basis-0 grow" placeholder="До" :min="min" :max="max"/>
    </div>
  </div>
</template>

<script setup>
import TextField from "./TextField";

const props = defineProps({
  label: String,
  min: Number,
  max: Number,
  fromFieldProps: Object,
  toFieldProps: Object,
})
</script>

<style scoped>

</style>