<template>
  <div>
    <p class="text-sm" v-if="label">{{ label }}</p>
    <div class="flex gap-1 flex-wrap">
      <AppButton v-for="option in options" :class="getOptionClass(option)" @click.native="onOptionClick(option)">
        <p class="text-sm">
          {{ option.label }}
        </p>
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../buttons/AppButton";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  options: Array,
  modelValue: [String, Array],
  multiple: Boolean,
})
const selected = ref(props.modelValue ?? (props.multiple ? [] : ''));
watch(() => props.modelValue, (newValue) => selected.value = newValue);

function onOptionClick(option) {
  if (props.multiple) {
    if (selected.value.includes(option.value)) {
      selected.value = selected.value.filter(selectedItem => selectedItem !== option.value);
    } else {
      selected.value = [
        ...selected.value,
        option.value
      ]
    }
  } else {
    if (selected.value === option.value) {
      selected.value = null
    } else {
      selected.value = option.value;
    }
  }
  emit('update:modelValue', selected.value);
}

function getOptionClass(option) {
  return {
    '!border-blue-400': Array.isArray(selected.value) ? selected.value.includes(option.value) : selected.value == option.value,
  }
}
</script>

<style scoped>

</style>