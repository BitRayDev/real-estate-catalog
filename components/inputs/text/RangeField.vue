<template>
  <div>
    <p>{{ label }}</p>
    <div class="flex gap-2">
      <TextField type="number" class="basis-0 grow" placeholder="От" :min="min" :max="max" v-model="value.min" @update:modelValue="emitUpdate"/>
      <TextField type="number" class="basis-0 grow" placeholder="До" :min="min" :max="max" v-model="value.max" @update:modelValue="emitUpdate"/>
    </div>
  </div>
</template>

<script setup>
import TextField from "./TextField";

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: Object,
  label: String,
  min: Number,
  max: Number,
  fromFieldProps: Object,
  toFieldProps: Object,
})

const value = ref(props.modelValue ?? {})
watch(() => props.modelValue, (newValue) => value.value = newValue);

function emitUpdate() {
  emit('update:modelValue', value.value);
}
</script>

<style scoped>

</style>